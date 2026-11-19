const fs=require('fs'),vm=require('vm'),assert=require('assert');
for(const path of ['tools/kgd.html','tools/fiziksel-performans.html']){
 const html=fs.readFileSync(path,'utf8');for(const m of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g))new vm.Script(m[1]);
 const ctx={moreText:{clinical_0_4:'Kadın'},kgdRecordedAge:()=>76,$:()=>({textContent:'30.4 kg/m²'}),safe:s=>String(s).replace(/</g,'&lt;'),kgdPrintPresent:v=>v!==undefined&&v!==null&&v!==''};
 for(let i=0;i<28;i++)ctx.moreText['clinical_1_'+i]=String(i);
 ctx.status={smm:24.96,smmi:10,smmw:32.93,smmbmi:.822,mass:false,massW:true,massBMI:true,low:true,confirmed:false,confirmedW:true,confirmedBMI:true,perf:false,obesity:false,impaired:{tug:false,gs:false,cst:false,sppb:false},fatHigh:false,cut:{}};ctx.sarcoStatus=()=>ctx.status;
 vm.createContext(ctx);vm.runInContext(html.slice(html.indexOf('function kgdPhysicalAnnotatedValue('),html.indexOf('/* SPPB subscore validation')),ctx);
 vm.runInContext(html.slice(html.indexOf('function kgdPhysicalReportGroups('),html.indexOf('function kgdDetailedBlock(')),ctx);
 const groups=ctx.kgdPhysicalReportGroups(false);assert.deepEqual(Array.from(groups[0],x=>x[0]),['Yaş','Cinsiyet','Boy','Kilo','BKİ','Bel','Kalça','Baldır']);
 const out=ctx.kgdPhysicalGroupedReport(false);assert.equal((out.match(/data-physical-group=/g)||[]).length,4);assert(!/algısı|SPPB 1a|SPPB 1b|SPPB 1c|SPPB 2:|SPPB 3:/.test(out));assert(!out.includes('<dl>'));
 if(path==='tools/kgd.html'){
  assert(out.includes('Boy:</b> 0 cm')&&out.includes('Kilo:</b> 1 kg')&&out.includes('Kalça:</b> 14 cm'));
  assert(out.includes('BIA yağ:</b> %2')&&out.includes('SMM/W:</b> %32.93'));
  assert(out.indexOf('SPPB:</b>')<out.indexOf('Olası Sarkopeni:</b>'));
  assert(out.includes('Kesin Sarkopeni:</b> SMM/h²: Hayır, SMM/W: Evet, SMM/BKİ: Evet'));
  assert(out.includes('Ciddi Sarkopeni:</b> SMM/h²: Hayır, SMM/W: Hayır, SMM/BKİ: Hayır'));
  assert(out.includes('Sarkopenik Obezite (SMM/W):</b> Hayır'));
 }else{
  assert(out.includes('SPPB Toplam')&&out.includes('Ciddi sarkopeni (SMM/W)'));
 }
 const detail=ctx.kgdPhysicalGroupedReport(true);assert(detail.includes('HGS algısı')&&detail.includes('OYH algısı')&&detail.includes('SPPB 1a')&&detail.includes('Üst kol'));
 ctx.status.perf=true;assert.equal(ctx.kgdPhysicalReportGroups()[3][5][1],'Evet');assert.equal(ctx.kgdPhysicalReportGroups()[3][4][1],'Hayır');ctx.status.confirmedW=null;assert.equal(ctx.kgdPhysicalReportGroups()[3][5][1],null);
 if(path==='tools/kgd.html'){
  const incomplete=ctx.kgdPhysicalGroupedReport(false);
  assert(!incomplete.includes('SMM/W: null'));
  assert(incomplete.includes('Ciddi Sarkopeni:</b> SMM/h²: Hayır, SMM/BKİ: Evet'));
 }
 assert(html.includes('if(i===9)return kgdPhysicalGroupedReport(false)'));assert(html.includes('if(step===9)return kgdPhysicalGroupedReport(true)'));
 console.log(path+': grouped short/detail output, field order, omission, missing status and per-index severe status PASS');
}
