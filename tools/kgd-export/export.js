/* KGD integration. Schema stays stable across patients; unsupported legacy fields
 * are explicit missing values, never inferred diagnoses from free text. */
(function(){
'use strict';
const present=v=>v!==undefined&&v!==null&&String(v).trim()!=='';
const number=v=>{if(!present(v))return null;const s=String(v).trim().replace(',','.');return /^[-+]?\d+(\.\d+)?$/.test(s)&&Number.isFinite(Number(s))?Number(s):null;};
const binary=v=>['Evet','Var',true,1,'1'].includes(v)?1:['Hayır','Yok',false,0,'0'].includes(v)?0:null;
const total=v=>typeof v==='string'&&/^\d+(?:\.\d+)?\//.test(v)?Number(v.split('/')[0]):null;
const totals={'GYA.1':'adl','EGYA.1':'iadl','FRAIL.1':'frail','SARCF.1':'sarcf','SOF.1':'sof','MNASF.1':'mna'};
const specials={'MNALF.1':()=>total(kgdMNATotalScore()),'EQ5D.1':()=>total(kgdEQScore()),'MMSE.1':()=>total(kgdMMSEPrintScore()),'GDS.1':()=>total(kgdGDSPrintScore()),'SÇT.1':()=>moreAnswers.clock,'EQ5D.y.1':()=>moreAnswers.eq5dHealthVAS,'miniCOG.1':()=>moreAnswers.miniCogImpairment,'yaş.1':()=>kgdRecordedAge(),'v.1':()=>moreText.exportVisit||1,'ambu.1':()=>moreText.exportAmbulation,'kirik_sayisi.1':()=>moreText.historyFracture==='Evet'?moreText.exportFractureCount:moreText.historyFracture==='Hayır'?0:null,'kirik_tedavisi.1':()=>moreText.historyFracture==='Evet'?moreText.exportFractureTreatment:null};
const extraKeys={'hast.1yıl.sayı.1':'activityHospitalCount1','hast.3yıl.sayı.1':'activityHospitalCount3','kırık.1':'historyFracture'};
const numericLegacy=new Set(['v.1','yaş.1','ev.halkı.1','yaşlılık.1','boy.1','kilo.1','biayağ.1','biakas.1','biabasal.1','FAS.1','TUG.1','OYH.1','HGS.1','üst.kol.1','bel.1','kalça.1','baldır.1','CST.1','SPPB.1','fizikakt.süre.1','d.sayı.1','hast.1yıl.sayı.1','hast.3yıl.sayı.1','s.paketyıl.1','kaç.kilo.3.ay.1','kaç.kilo.6.ay.1','kaç.kilo.1yıl.1','VAS.1','IPSS.1','İ.sayı.1','H.sayı.1','kirik_sayisi.1','PHQ2.1','GDSSF.1']);
const numericClinical=new Set(['clinical_1_5',...[19,20,21,22,23].map(i=>'clinical_1_'+i),'clinical_5_17']);
const binaryLegacy=new Set(['af.1','demans.1','depr.1','dl.1','dm.1','ht.1','hipotiroid.1','ikh.1','kalp.y.1','kanser.1','kbh.1','oa.1','op.1','geç.svo.1','TEP.1','GYAetkileyenOA.1','miniCOG.1','kırık.1','y.cihaz.1','düşme.1','d.korku.1','d.korku.gya.etki.1','hast.1yıl.1','hast.3yıl.1','görme.sorunu.1','işitme.sorunu.1']);
function resolve(row){
 const n=row.name,s=row.source;let read,kind='text',labels=null;
 if(Object.hasOwn(totals,n)){read=()=>total(kgdScalePrintScore(totals[n]));kind='number';}
 else if(Object.hasOwn(specials,n)){read=specials[n];if(n!=='ambu.1'&&n!=='kirik_tedavisi.1')kind='number';}
 else if(Object.hasOwn(extraKeys,n))read=()=>moreText[extraKeys[n]];
 else if(/^clinical_\d+_\d+$/.test(s))read=()=>s==='clinical_6_19'?currentMedications().filter(Boolean).join('\n'):s==='clinical_6_21'?moreText['clock-notes']:moreText[s];
 else if(/^(adl|iadl|frail|sarcf|sof|mna)_\d+$/.test(s)){read=()=>$(s)?.value;kind='number';}
 else if(/^scoreOptions\[/.test(s)){const f=forms.find(f=>n.startsWith(f.id+'_puan_'));const i=Number(n.match(/_puan_(\d+)/)[1])-1;read=()=>{const v=$(f.id+'_'+i)?.value;return present(v)?scaleItemScore(f,i,v):null;};kind='number';}
 else if(/^additional_[34]_/.test(s)){const parts=s.split('_'),variant=parts[1]==='3'?'standard':'uneducated',i=+parts[2];read=()=>mmseVariant===variant?moreAnswers[mmseAnswerKey(i,variant)]:null;kind='number';}
 else if(/^additional_[012]_\d+$/.test(s)||/^gds30_\d+$/.test(s)){read=()=>moreAnswers[s];kind='number';}
 else if(s==='mmseVariant')read=()=>mmseVariant;
 else if(s==='mmseAttentionMode')read=()=>mmseVariant==='standard'?mmseAttentionMode:'weekdays';
 else if(['smmPhysical','SMM/h2','SMM/W','SMM/BMI'].includes(s)){const k={smmPhysical:'smm','SMM/h2':'smmi','SMM/W':'smmw','SMM/BMI':'smmbmi'}[s];read=()=>sarcoStatus()[k];kind='number';}
 else if(n.endsWith('_durum.1')){const test=n.split('_')[0],key={HGS:10,TUG:7,OYH:8,CST:16,SPPB:24}[test];read=()=>((test==='TUG'&&moreText.physicalTugUnable==='Evet')||(test==='CST'&&moreText.physicalCstUnable==='Evet'))?2:present(moreText['clinical_1_'+key])?1:null;kind='number';labels={1:'Ölçüldü',2:'Yapamadı'};}
 else if(/^[a-zA-Z][\w-]*$/.test(s)&&!['adl','iadl','frail','sarcf','sof','mna','gds30'].includes(s))read=()=>moreText[s];
 if(numericLegacy.has(n)||numericClinical.has(s)||/^ipssItem_/.test(s))kind='number';
 if(binaryLegacy.has(n)||/^(bphSymptom_|rlsSymptom_)/.test(s)){kind='number';labels={0:'Yok / Hayır',1:'Var / Evet'};const raw=read;read=raw?()=>binary(raw()):undefined;}
 if(/^gds30_\d+$/.test(s)){labels={0:'Hayır',1:'Evet'};}
 if(/^additional_1_/.test(s)){const i=Number(s.split('_')[2]);labels=Object.fromEntries(eqOptions[i].map((l,j)=>[j+1,l]));}
 const match=/^(adl|iadl|frail|sarcf|sof|mna)_(\d+)$/.exec(s);
 if(match){const f=forms.find(x=>x.id===match[1]),opts=f.options?.[+match[2]]||f.choices;labels=Object.fromEntries(opts);}
 if(/^scoreOptions\[/.test(s))labels={0:'Bağımlı / yardım gerekli',1:'Bağımsız'};
 if(/^additional_0_/.test(s))labels=Object.fromEntries(mnaLFOptions[Number(s.split('_')[2])].map(([l,v])=>[v,l]));
 const c={...row,type:kind,available:!!read,valueLabels:labels,read};
 if(read&&!labels)c.code=kind==='number'?'Sayısal değer; birim/aralık: '+row.label+'; yanıtsız=eksik':'Kaynak yanıt metni aynen korunur; yanıtsız=boş';
 if(labels)c.code=Object.entries(labels).map(([v,l])=>v+'='+l).join('; ');
 if(n==='v.1')c.code='KGD ziyaret numarası: 1=ilk KGD, 2=ikinci KGD…';
 if(n==='ambu.1')c.code='Genel ambulasyon açıklaması; FRAIL/FAS yerine geçirilmez';
 if(read)c.source=['kirik_sayisi.1','kirik_tedavisi.1','ambu.1','v.1'].includes(n)?'Yeni yapılandırılmış form alanı':s;
 return c;
}
const columns=KGD_EXPORT_SCHEMA.map(resolve);
function collect(){
 summarize();
 const values=columns.map(c=>{const raw=c.read?.();return c.type==='number'?number(raw):present(raw)?String(raw):null;});
 return {columns,values};
}
function download(data,name,type){const blob=new Blob([data],{type}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);}
function run(format){const status=$('kgdExportStatus');try{const {columns:c,values:v}=collect();const date=String(moreText.clinical_0_2||new Date().toISOString().slice(0,10)).replace(/[^\d-]/g,'');const name='KGD_'+date+'_'+new Date().toISOString().slice(11,19).replace(/:/g,'');
 if(format==='xlsx')download(KGDFormats.xlsx(c,v),name+'.xlsx','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
 if(format==='sav')download(KGDFormats.sav(c,v),name+'.sav','application/octet-stream');
 if(format==='csv')download(KGDFormats.csv(c,v),name+'.csv','text/csv;charset=utf-8');
 status.textContent='İndirme başlatıldı: '+c.length+' sütun, '+v.filter(present).length+' dolu alan. Eksik alanlar boş bırakıldı.';
 }catch(e){status.textContent='Dosya oluşturulamadı: '+e.message;}}
function addInput(host,key,label,type='text'){if(!host||$(key))return;const wrap=document.createElement('div');wrap.className='extra-field';const lab=document.createElement('label');lab.htmlFor=key;lab.textContent=label;const input=document.createElement('input');input.id=key;input.type=type;if(type==='number'){input.min='0';input.step='1';}input.value=moreText[key]??'';input.oninput=()=>{if(input.value==='')delete moreText[key];else moreText[key]=input.value;writeKGDDraft();};wrap.append(lab,input);host.append(wrap);}
function mount(){
 const panel=document.createElement('section');panel.id='kgdExportPanel';panel.style.cssText='flex-basis:100%;width:100%;border:1px solid #b6d3bf;border-radius:12px;padding:18px;background:#f3f8f4';panel.innerHTML='<h2 style="margin-top:0">Verileri dosyaya kaydet</h2><p>Bu KGD’yi tek satır olarak bilgisayarınıza indirin. Excel dosyası alan açıklamalarını ve kodlamaları da içerir. Veriler sunucuya gönderilmez.</p><div style="display:flex;flex-wrap:wrap;gap:10px"><button type="button" class="btn" data-export="xlsx">Excel (.xlsx) kaydet</button><button type="button" class="btn alt" data-export="sav">SPSS (.sav) kaydet</button><button type="button" class="btn alt" data-export="csv">CSV kaydet</button></div><p id="kgdExportStatus" role="status" aria-live="polite"></p><details><summary>Dışa aktarım bilgileri</summary><p>Her dosya bir değerlendirme içerir. Mevcut dosyanın üzerine hasta eklemez. Yanıtlanmamış alanlar boş kalır; eski Excel’de olup formda bulunmayan alanlar da boş bırakılır. SAV dosyasında çok uzun metinler kayıp olmadan _part2, _part3 gibi devam sütunlarına ayrılır. CSV’de formül gibi başlayan metinler güvenli açılış için tek tırnakla korunur.</p><p>Şema: KGD-1 · '+columns.length+' sütun. İlk sürümün dosya yapısı ve etiketleri sonraki geri bildirimlerle geliştirilebilir.</p></details>';
 $('finalActions').append(panel);panel.querySelectorAll('[data-export]').forEach(b=>b.onclick=()=>run(b.dataset.export));
 addInput($('fractureDetailFields'),'exportFractureCount','Kırık sayısı','number');addInput($('fractureDetailFields'),'exportFractureTreatment','Kırık tedavisi');
 addInput(document.querySelector('[data-clinical-index="2"]'),'exportAmbulation','Genel ambulasyon durumu');
 addInput(document.querySelector('[data-clinical-index="0"]'),'exportVisit','KGD ziyaret numarası (ilk KGD = 1)','number');if(!$('exportVisit').value)$('exportVisit').value='1';$('exportVisit').min='1';
}
window.KGDExport={collect,columns,resolve,number,binary};mount();
})();
