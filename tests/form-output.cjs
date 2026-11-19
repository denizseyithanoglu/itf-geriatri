// Run with jsdom available via NODE_PATH. Synthetic data only; no network requests.
const fs=require('fs'),path=require('path'),assert=require('assert');
const {JSDOM,VirtualConsole}=require('jsdom');
async function run(file){
 const dir=path.dirname(file);
 const html=fs.readFileSync(file,'utf8').replace(/<script\b[^>]*src="([^"]+)"[^>]*><\/script>/g,(tag,src)=>{
  if(/^https?:/.test(src))return '';
  return '<script>'+fs.readFileSync(path.join(dir,src.split('?')[0]),'utf8')+'</script>';
 });
 const errors=[],vc=new VirtualConsole();vc.on('jsdomError',e=>{if(!/navigation/.test(e.message))errors.push(e)});
 let copied='',reject=false,legacy=false,legacyParent='';
 const dom=new JSDOM(html,{url:'https://example.test/'+file,runScripts:'dangerously',virtualConsole:vc,beforeParse(w){
  w.TextEncoder=TextEncoder;w.isSecureContext=true;w.alert=()=>{};w.confirm=()=>true;w.prompt=()=>{};
  w.matchMedia=()=>({matches:false,addEventListener(){}});w.HTMLElement.prototype.scrollIntoView=()=>{};
  w.HTMLDialogElement.prototype.showModal=function(){this.open=true};w.HTMLDialogElement.prototype.close=function(){this.open=false};
  Object.defineProperty(w.navigator,'clipboard',{value:{writeText:async text=>{if(reject)throw Error('Denied');copied=text;}}});
  w.document.execCommand=()=>{legacyParent=w.document.activeElement.parentElement.tagName;return legacy};
  w.print=()=>{w.dispatchEvent(new w.Event('beforeprint'));assert.equal(w.document.title,'18.11.2026_ÇağrıÖztürk');w.dispatchEvent(new w.Event('afterprint'));};
 }});await new Promise(r=>setTimeout(r,20));const w=dom.window;
 assert.deepEqual(errors.map(e=>e.message),[],file);
 assert.equal(w.FormOutput.cleanSummary('A: 1 | B: 2\nC | D'),'A: 1 B: 2\nC D');
 assert.equal(w.FormOutput.filename('2026-11-18',' Çağrı Öztürk '),'18.11.2026_ÇağrıÖztürk');
 assert.equal(w.FormOutput.filename('18.11.2026',''),'18.11.2026_Isimsiz');
 if(file.includes('ilk-muayene')){
  w.document.getElementById('ad').value='Çağrı Öztürk';w.document.getElementById('basvuru').value='2026-11-18';
  for(let i=0;i<4;i++){await w.eval(`copySummaryText(summaryAsText(${i}))`);assert(copied.includes('SEKME ÖZETİ'));assert(!copied.includes('|'));}
  await w.eval('copySummaryText(summaryAsText(null))');assert(copied.includes('BÜTÜN FORM ÖZETİ'));
 }else if(file.includes('kontrol-takip')){
  w.document.getElementById('patientName').value='Çağrı Öztürk';w.document.getElementById('visitDate').value='2026-11-18';
  await w.eval('copyNote()');assert(copied.includes('Çağrı'));assert(!copied.includes('|'));
 }else{
  w.eval("moreText.clinical_0_0='Çağrı Öztürk';moreText.clinical_0_2='18.11.2026';moreText.clinical_1_0='158';moreText.clinical_1_1='68';");
  await w.eval('copyKGDSectionSummary(0)');assert(copied.includes('Çağrı'));assert(!copied.includes('|'));
 }
 const original=w.document.title;w.FormOutput.print();assert.equal(w.document.title,original);
 const nativePrint=w.print;w.print=()=>{assert.equal(w.document.title,'18.11.2026_ÇağrıÖztürk');throw Error('print unavailable');};assert.throws(()=>w.FormOutput.print(),/print unavailable/);assert.equal(w.document.title,original);w.print=nativePrint;
 reject=true;legacy=true;
 const modal=w.document.createElement('dialog');modal.open=true;w.document.body.append(modal);
 assert(await w.FormOutput.copySummary('A | B'));assert.equal(legacyParent,'DIALOG');assert(!modal.querySelector('textarea'));
 legacy=false;assert.equal(await w.FormOutput.copySummary('A'),false);
 assert.deepEqual(errors.map(e=>e.message),[],file);dom.window.close();console.log('PASS '+file+': initialization, copying, separators, denied permission fallback inside modal, failure feedback, print filename/restoration');
}
(async()=>{for(const f of ['ilk-muayene','kontrol-takip','kgd','fiziksel-performans'])await run('tools/'+f+'.html')})().catch(e=>{console.error(e);process.exitCode=1});
