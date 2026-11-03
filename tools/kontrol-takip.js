"use strict";
/* İTF Geriatri — single-page control/follow-up note. All draft content stays
   in sessionStorage for this tab; no network calls or patient-data uploads. */
const DRAFT_KEY="itf_geriatri_kontrol_takip_session_v1";
const $=id=>document.getElementById(id);
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const val=id=>String($(id)?.value??"").trim();
const populated=s=>String(s??"").trim()!=="";
const SCREENINGS=[
 ["gastroscopy","Gastroskopi / Endoskopi"],
 ["colonoscopy","Kolonoskopi"],
 ["thorax","Toraks BT"],
 ["aaa","Abdominal Aort Anevrizması"],
 ["mammography","Mamografi","Kadın"],
 ["pap","Pap-smear","Kadın"],
 ["prostate","Prostat","Erkek"]
];
const VACCINES=[
 ["pneumococcal","Pnömokok"],
 ["tetanus","Tetanoz"],
 ["influenza","İnfluenza"],
 ["zoster","Herpes Zoster"],
 ["rsv","RSV"]
];
// Clinical order is row-major. Existing field IDs are preserved for draft restoration.
const GERIATRIC=[
 ["fall","Düşme (son 6 ay içinde)","binary"],
 ["fear","Düşme Korkusu","binary"],
 ["cane","Baston Kullanımı","binary"],
 ["dizziness","Baş Dönmesi","binary"],
 ["orthostasis","Ortostatizm","binary"],
 ["homeBP","Evde TA","text"],
 ["appetite","İştah","appetite"],
 ["height","Boy (cm)","measure"],
 ["weight","Kilo (kg)","measure"],
 ["loss","Kilo Kaybı","binary"],
 ["swallow","Çiğneme / Yutma Güçlüğü","binary"],
 ["urinary","Üriner İnkontinans","binary"],
 ["fecal","Fekal İnkontinans","binary"],
 ["constipation","Kabızlık","binary"],
 ["sleep","Uyku","binary"],
 ["rbd","REM Uyku Davranış Bozukluğu","binary"],
 ["memory","Unutkanlık (yeni başlangıç / son 6 ayda artış)","binary"],
 ["anhedonia","Anhedoni","binary"],
 ["adl","GYA (/6)","measure"],
 ["iadl","EGYA (/8)","measure"],
 ["vision","Görme Sorunu","problem"],
 ["hearing","İşitme Sorunu","problem"]
];
const GERIATRIC_GROUPS=[
 ["fall","fear","cane"],["dizziness","orthostasis","homeBP"],
 ["appetite","anthropometry","loss"],["swallow","urinary","fecal"],
 ["constipation","sleep","rbd"],["memory","anhedonia","adl"],
 ["iadl","vision","hearing"]
];
const STATUS_OPTIONS=["","Var","Yok","Yapıldı","Yapılmadı","Önerildi","Reddetti","Bilinmiyor"];
const REPEATS={
 diseases:{container:"diseasesRows",columns:[["name","Hastalık / Tanı","text"],["date","Tanı Tarihi / Yıl","text"]]},
 surgeries:{container:"surgeriesRows",columns:[["name","Ameliyat","text"],["date","Tarih / Yıl","text"]]},
 medications:{container:"medicationsRows",columns:[["name","İlaç Adı","text"],["dose","Doz / Kullanım Sıklığı","text"]]},
 followup:{container:"followupRows",columns:[["recommendation","Önceki Öneri","text"],["status","Durum","select",["","Yapıldı","Yapılmadı","Kısmen","Reddetti","Bekliyor"]],["result","Sonuç / Açıklama","text"]]},
 labs:{container:"labsRows",columns:[["test","Parametre / Tetkik","text"],["value","Sonuç / Değer","text"],["detail","Tarih / Ek Açıklama","text"]]},
 plan:{container:"planRows",columns:[["type","Plan Türü","select",["","Öneri","Tetkik","Yönlendirme","İlaç Düzenlemesi","Kontrol","Diğer"]],["note","Plan Maddesi / Detay","text"]]}
};
const GROUPS=[];
let changing=false,saveTimer=0,toastTimer=0;
function options(values,chosen){
 return values.map((v,i)=>'<option value="'+esc(v)+'"'+(String(chosen??"")===v?' selected':'')+'>'+
  (i===0&&!v?"Seçiniz":esc(v))+'</option>').join("");
}
function addRow(group,values={}){
 const cfg=REPEATS[group],container=$(cfg.container);
 if(!container)return null;
 const row=document.createElement("div");
 row.className="repeat-row";row.dataset.group=group;
 row.innerHTML='<strong class="repeat-num"></strong>'+
  cfg.columns.map(([key,label,type,choices])=>
   '<label class="repeat-cell"><span>'+esc(label)+'</span>'+
   (type==="select"?'<select data-col="'+key+'">'+options(choices,values[key])+'</select>':
    '<input type="text" data-col="'+key+'" value="'+esc(values[key]||"")+'" autocomplete="off"'+
    ' placeholder="'+(key==="date"?"Yıl / tarih":key==="dose"?"Örn. 1x20 mg":key==="value"?"Örn. 11,8 g/dL":"")+'">')+
   '</label>').join("")+
  '<button type="button" class="remove-btn no-print" data-remove aria-label="Bu satırı kaldır">Sil</button>';
 container.appendChild(row);renumber(group);return row;
}
function renumber(group){
 const rows=[...$(REPEATS[group].container).querySelectorAll(".repeat-row")];
 rows.forEach((row,i)=>{
  row.querySelector(".repeat-num").textContent=(i+1)+".";
  const btn=row.querySelector("[data-remove]");
  if(btn)btn.hidden=rows.length===1&&!rowHasContent(row);
 });
}
function rowValues(row){
 const values={};row.querySelectorAll("[data-col]").forEach(input=>values[input.dataset.col]=input.value.trim());
 return values;
}
function rowHasContent(row){return Object.values(rowValues(row)).some(populated)}
function records(group){
 return [...$(REPEATS[group].container).querySelectorAll(".repeat-row")]
  .map(rowValues).filter(r=>Object.values(r).some(populated));
}
function buildStatusItems(container,items,prefix){
 const root=$(container);
 root.innerHTML=items.map(([id,label,sex])=>
  '<div class="status-card" data-sex="'+(sex||"")+'" data-card="'+prefix+'_'+id+'">'+
  '<strong>'+esc(label)+'</strong>'+
  answerButtons(prefix+"_"+id+"_status",label,["Yok","Var","Reddetti"])+
  '<input id="'+prefix+'_'+id+'_note" data-save type="text" autocomplete="off"'+
  ' placeholder="Tarih, sonuç veya ek not" aria-label="'+esc(label)+' ayrıntısı"></div>').join("");
}
function answerButtons(key,label,opts){
 return '<div class="answer-buttons" role="group" aria-label="'+esc(label)+'">'+
  '<input id="'+key+'" type="hidden" data-save value="">'+
  opts.map(choice=>'<button type="button" data-answer-target="'+key+'" data-answer-value="'+esc(choice)+'"'+
   ' aria-pressed="false">'+esc(choice)+'</button>').join("")+
  '</div>';
}
function updateAnswerButtons(){
 document.querySelectorAll("[data-answer-target]").forEach(button=>{
  const selected=val(button.dataset.answerTarget)===button.dataset.answerValue;
  button.setAttribute("aria-pressed",String(selected));
 });
 document.querySelectorAll("[data-sex-option]").forEach(button=>{
  button.setAttribute("aria-pressed",String(val("sex")===button.dataset.sexOption));
 });
}
function buildGeriatric(){
 const root=$("geriatricCards");
 const byKey=Object.fromEntries(GERIATRIC.map(item=>[item[0],item]));
 const card=(id)=>{
  if(id==="anthropometry")return '<div class="geriatric-item anthropometry"><strong>Boy / Kilo / BKİ</strong><div class="anthro-fields">'+
   '<label>Boy (cm)<input id="height" data-save type="number" min="0" step="0.1" placeholder="cm"></label>'+
   '<label>Kilo (kg)<input id="weight" data-save type="number" min="0" step="0.1" placeholder="kg"></label>'+
   '<label>BKİ (kg/m²)<output id="bmiValue" aria-live="polite">—</output></label></div></div>';
  const [key,label,kind]=byKey[id];
  if(key==="adl"||key==="iadl"){
   const max=key==="adl"?6:8;
   return '<label class="geriatric-item geriatric-measure"><strong>'+esc(label)+'</strong><select id="'+key+'" data-save><option value="">Seçilmedi</option>'+
    Array.from({length:max+1},(_,n)=>'<option value="'+n+'">'+n+'</option>').join("")+'</select></label>';
  }
  if(kind==="measure"){
   const bounds={height:'min="0" step="0.1"',weight:'min="0" step="0.1"',
    adl:'min="0" max="6" step="1"',iadl:'min="0" max="8" step="1"'};
   return '<label class="geriatric-item geriatric-measure"><strong>'+esc(label)+'</strong>'+
    '<input type="number" id="'+key+'" data-save '+bounds[key]+' placeholder="'+
    (key==="height"?"cm":key==="weight"?"kg":key==="adl"?"0–6":"0–8")+'"></label>';
  }
  if(kind==="text"){
   return '<div class="geriatric-item geriatric-free home-vitals">'+
    '<label><strong>'+esc(label)+'</strong><input type="text" data-save id="ger_'+key+'_note" inputmode="numeric" autocomplete="off" maxlength="7" placeholder="130/80"></label>'+
    '<label><strong>Nabız (/dk)</strong><input type="number" id="homePulse" data-save min="30" max="300" step="1" inputmode="numeric" placeholder="/dk"></label></div>';
  }
  const choices=kind==="appetite"?["İyi","Orta","Kötü"]:
   kind==="problem"?["Yok","Var"]:["Evet","Hayır"];
  return '<div class="geriatric-item" data-question="'+key+'"><strong>'+esc(label)+'</strong>'+
   '<div class="question-line">'+answerButtons("ger_"+key+"_status",label,choices)+
   '<input id="ger_'+key+'_note" data-save autocomplete="off" type="text" placeholder="Açıklama" aria-label="'+esc(label)+' açıklaması"></div></div>';
 };
 root.innerHTML=GERIATRIC_GROUPS.map(keys=>
  '<div class="geriatric-row">'+keys.map(card).join("")+'</div>').join("");
}

function syncScreeningSex(){
 const sex=val("sex");
 document.querySelectorAll("#screeningCards [data-sex]").forEach(card=>{
  const required=card.dataset.sex;
  const inactive=!!required&&sex!==required;
  card.dataset.inactive=String(inactive);
  card.querySelectorAll("input,select,button").forEach(input=>input.disabled=Boolean(sex&&inactive));
 });
}
function capture(){
 const fields={};
 document.querySelectorAll("[data-save]").forEach(el=>fields[el.id]=el.value);
 const groups={};
 GROUPS.forEach(group=>groups[group]=records(group));
 return {version:1,savedAt:Date.now(),fields,groups};
}
function saveDraft(manual=false){
 if(changing)return false;
 try{
  sessionStorage.setItem(DRAFT_KEY,JSON.stringify(capture()));
  const when=new Date().toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"});
  $("saveStatus").textContent="✓ Geçici taslak kaydedildi · "+when;
  if(manual)notify("Taslak bu tarayıcı sekmesinde kaydedildi.");
  return true;
 }catch(e){
  $("saveStatus").textContent="⚠ Taslak kaydedilemedi — PDF / not kopyalama seçeneğini kullanın.";
  if(manual)notify("Geçici depolama kullanılamıyor.",true);
  return false;
 }
}
function loadDraft(){
 let draft;
 try{draft=JSON.parse(sessionStorage.getItem(DRAFT_KEY)||"null")}catch(e){return false}
 if(!draft||draft.version!==1||!draft.fields||!draft.groups)return false;
 changing=true;
 try{
  Object.entries(legacyDraftFields(draft)).forEach(([id,value])=>{
   const el=$(id);if(el?.hasAttribute("data-save"))el.value=String(value??"");
  });
  GROUPS.forEach(group=>{
   const root=$(REPEATS[group].container);root.replaceChildren();
   const rows=Array.isArray(draft.groups[group])?draft.groups[group].slice(0,120):[];
   if(rows.length)rows.forEach(values=>addRow(group,values));
   else addRow(group);
  });
  $("saveStatus").textContent="✓ Önceki geçici taslak geri yüklendi";
 }finally{changing=false}
 return true;
}
function appendLegacyNotes(base,items){
 return [String(base||"").trim(),...items.filter(populated)].filter(Boolean).join("\n");
}
function legacyDraftFields(draft){
 const fields={...(draft.fields||{})},groups=draft.groups||{};

 for(const group of ["diseases","surgeries","medications"]){
  const target=group+"Narrative";
  if(!(target in fields)){
   const entries=(Array.isArray(groups[group])?groups[group]:[]).map(x=>[x.name,x.date,x.dose].filter(populated).join(" — ")).filter(Boolean);
   fields[target]=group==="medications"?numberedPlan(entries):entries.join("\n");
  }
 }
 if(fields.vax_covid_status||fields.vax_covid_note){
  fields.vaccinesOther=appendLegacyNotes(fields.vaccinesOther,["COVID-19: "+[fields.vax_covid_status,fields.vax_covid_note].filter(populated).join(" — ")]);
 }
 for(const [id] of VACCINES){
  const key="vax_"+id+"_status",note="vax_"+id+"_note";
  if(fields[key]&&!["Yok","Var","Reddetti"].includes(fields[key])){
   fields[note]=appendLegacyNotes(fields[note],["Önceki durum: "+fields[key]]);
   fields[key]="";
  }
 }

 if(!("patientExtra" in fields)){
  fields.patientExtra=appendLegacyNotes("",[
   fields.literacy?"Önceki eğitim: "+fields.literacy:"",
   fields.household?"Önceki yaşam: "+fields.household:""
  ]);
 }
 for(const name of ["vision","hearing"]){
  const target="ger_"+name+"_note";
  if(!fields[target]&&fields[name])fields[target]=fields[name];
 }
 for(const [id,,kind] of GERIATRIC){
  const key="ger_"+id+"_status";
  if(!["binary","problem"].includes(kind))continue;
  if(kind==="binary"){
   if(fields[key]==="Var")fields[key]="Evet";
   else if(fields[key]==="Yok")fields[key]="Hayır";
   else if(fields[key]==="Bilinmiyor")fields[key]="";
  }else if(fields[key]==="Bilinmiyor")fields[key]="";
 }
 if(fields.ger_appetite_status==="Var"||fields.ger_appetite_status==="Yok"){
  fields.ger_appetite_note=appendLegacyNotes(fields.ger_appetite_note,[
   "Önceki kayıt: "+fields.ger_appetite_status
  ]);
  fields.ger_appetite_status="";
 }
 if(!fields.labNarrative){
  const prior=Array.isArray(groups.labs)?groups.labs:[];
  fields.labNarrative=appendLegacyNotes("",[
   ...prior.map(x=>[x.test,x.value,x.detail].filter(populated).join(" — ")),
   fields.labNote||""
  ]);
 }
 if(!fields.followupNarrative){
  const prior=Array.isArray(groups.followup)?groups.followup:[];
  fields.followupNarrative=prior.map(x=>[x.recommendation,x.status,x.result].filter(populated).join(" — ")).filter(Boolean).join("\n");
 }
 if(!fields.planNarrative){
  const prior=Array.isArray(groups.plan)?groups.plan:[];
  const items=prior.map(x=>[x.type,x.note].filter(populated).join(": ")).filter(Boolean);
  if(fields.nextVisit)items.push("Kontrol: "+fields.nextVisit);
  fields.planNarrative=numberedPlan(items);
 }
 return fields;
}
function planItems(str){
 return String(str||"").split(/\r?\n/).map(s=>s.replace(/^\s*(?:(?:\d+[.)]|[-•*])\s*)+/,"").trim()).filter(Boolean);
}
function numberedPlan(lines){
 return lines.map((line,i)=>(i+1)+". "+line).join("\n");
}
function ensureFirstNumber(area){
 if(/^\s*\d+[.)](?:\s|$)/.test(area.value))return;
 const start=area.selectionStart,end=area.selectionEnd;
 area.value="1. "+area.value;
 area.setSelectionRange(start+3,end+3);
}
function addPlanOnEnter(event){
 if(event.key!=="Enter"||event.shiftKey||event.ctrlKey||event.metaKey||event.isComposing)return;
 const area=event.target;
 if(!["planNarrative","medicationsNarrative","scratchText"].includes(area?.id))return;
 event.preventDefault();
 const before=area.value.slice(0,area.selectionStart),after=area.value.slice(area.selectionEnd);
 const previous=planItems(before).length;
 if(!previous&&before.trim()===""){
  area.value="1. "+after;area.setSelectionRange(3,3);
 }else{
  const next=previous+1;
  const insertion="\n"+next+". ";
  const at=area.selectionStart;
  area.setRangeText(insertion,area.selectionStart,area.selectionEnd,"end");
 }
 area.dispatchEvent(new Event("input",{bubbles:true}));
}
let planVisible=false;
function pendingScratchItems(scratch,current){
 const available=new Map();
 for(const line of current){
  const key=line.toLocaleLowerCase("tr-TR");
  available.set(key,(available.get(key)||0)+1);
 }
 return scratch.filter(line=>{
  const key=line.toLocaleLowerCase("tr-TR"),remaining=available.get(key)||0;
  if(remaining){available.set(key,remaining-1);return false}
  return true;
 });
}
function updateScratchStatus(){
 const area=$("scratchText"),status=$("scratchStatus");
 if(!area||!status)return;
 const draft=planItems(area.value);
 if(!draft.length){status.textContent="Geçici not";return}
 const awaiting=pendingScratchItems(draft,planItems(val("planNarrative"))).length;
 status.textContent=awaiting?awaiting+" / "+draft.length+" not PLAN'a aktarılmayı bekliyor":"✓ "+draft.length+" / "+draft.length+" not PLAN'a aktarıldı";
}
function transferScratchToPlan(){
 const scratch=planItems(val("scratchText"));
 if(!scratch.length){updateScratchStatus();return 0}
 const current=planItems(val("planNarrative"));
 const pending=pendingScratchItems(scratch,current);
 if(pending.length){
  $("planNarrative").value=numberedPlan([...current,...pending]);
  renderNote();saveDraft();
 }
 updateScratchStatus();
 return pending.length;
}
function initScratchAndPlan(){
 const panel=$("scratchNote"),toggle=$("scratchToggle"),content=$("scratchContent");
 const setExpanded=expanded=>{
  panel.dataset.collapsed=String(!expanded);
  toggle.setAttribute("aria-expanded",String(expanded));
  $("scratchChevron").textContent=expanded?"−":"+";
  content.hidden=!expanded;
 };
 setExpanded(!window.matchMedia?.("(max-width: 700px)")?.matches);
 toggle.onclick=()=>setExpanded(toggle.getAttribute("aria-expanded")!=="true");
 $("scratchTransfer").onclick=()=>{
  const count=transferScratchToPlan();
  if(count)notify(count+" muayene notu PLAN bölümüne aktarıldı.");
  else if(!val("scratchText"))notify("Post-it üzerinde henüz not bulunmuyor.",true);
  else notify("Bu notlar zaten PLAN bölümünde bulunuyor.");
 };
 const activate=()=>{
  planVisible=true;
  const count=transferScratchToPlan();
  if(count)notify(count+" muayene notu PLAN'a otomatik aktarıldı.");
 };
 if("IntersectionObserver" in window){
  const observer=new IntersectionObserver(entries=>{
   for(const entry of entries){
    if(entry.target.id!=="planSection")continue;
    if(entry.isIntersecting)activate();
    else planVisible=false;
   }
  },{threshold:0.1});
  observer.observe($("planSection"));
 }
 $("planSection").addEventListener("focusin",activate);
 $("scratchText").addEventListener("blur",()=>{if(planVisible)transferScratchToPlan()});
 updateScratchStatus();
}

function textPair(name,detail){
 return [name,detail].filter(populated).join(detail&&name?" — ":"");
}
function statusDetail(prefix,id){
 const status=val(prefix+"_"+id+"_status"),note=val(prefix+"_"+id+"_note");
 return status||note?[status,note].filter(populated).join(status&&note?" — ":""):"";
}
function datedDate(iso){
 return /^\d{4}-\d{2}-\d{2}$/.test(iso)?iso.slice(8)+"."+iso.slice(5,7)+"."+iso.slice(0,4):iso;
}
function calculateBMI(height,weight){
 const h=Number(String(height).replace(",",".")),w=Number(String(weight).replace(",","."));
 if(!Number.isFinite(h)||!Number.isFinite(w)||h<=0||w<=0)return "";
 return (w/((h/100)**2)).toFixed(1);
}
function updateBMI(){
 const output=$("bmiValue");
 if(output)output.textContent=calculateBMI(val("height"),val("weight")).replace(".",",")||"—";
}
const SHORT_LABELS={
 "T.C. Kimlik No":"TC","Hasta":"Ad","Kontrol Tarihi":"T","Yaş/Cinsiyet":"Y/C",
 "Ek Notlar":"Ek","HASTALIKLAR":"Tanı","AMELİYATLAR":"Op","ALIŞKANLIKLAR":"Alışk",
 "İLAÇLAR":"İlaç","OSTEOPOROZ, KIRIK, DİŞLER VE TEDAVİLER":"Kemik/diş",
 "Osteoporoz sorgusu":"OP/DXA","Kırık öyküsü":"Kırık","Tedaviler":"Ted","Diğer notlar":"Ek",
 "TARAMALAR":"Tar","AŞILAMALAR":"Aşı","AKTİF YAKINMA":"Şik","GERİATRİK SORGU":"GS",
 "LABORATUVAR VE TETKİKLER":"Lab/Tet","TAKİP/PLAN":"Takip/Plan",
 "Takip — Önceki Önerilerin Değerlendirilmesi":"Takip","PLAN":"Plan",
 "Düşme (son 6 ay içinde)":"Düşme/6ay","Düşme Korkusu":"Düşme kork.",
 "Baston Kullanımı":"Baston","Baş Dönmesi":"Baş dön.","Ortostatizm":"Ortost","Evde TA":"TA",
 "Boy (cm)":"Boy","Kilo (kg)":"Kilo","Kilo Kaybı":"Kilo kaybı","Çiğneme / Yutma Güçlüğü":"Çiğn/yutma",
 "Üriner İnkontinans":"Üİ","Fekal İnkontinans":"Fİ","Kabızlık":"Kabız",
 "REM Uyku Davranış Bozukluğu":"RDB","Unutkanlık (yeni başlangıç / son 6 ayda artış)":"Unutkanlık/6ay",
 "GYA (/6)":"GYA","EGYA (/8)":"EGYA","Görme Sorunu":"Görme sor.","İşitme Sorunu":"İşitme sor.",
 "Gastroskopi / Endoskopi":"EGD","Kolonoskopi":"Kolonosk","Abdominal Aort Anevrizması":"AAA",
 "Mamografi":"Mammo","Pnömokok":"Pnöm","İnfluenza":"Grip","Herpes Zoster":"Zona",
 "Diğer taramalar":"Ek tar","Diğer aşılar":"Ek aşı","Ek Not":"Ek","Sigara Ek Bilgi":"Sigara ek"
};
function generateSummaryNote(){
 return generateNote(false).split("\n").map(line=>{
  let text=line.trim();
  for(const [full,short] of Object.entries(SHORT_LABELS)){
   if(text.startsWith(full+":")){text=short+text.slice(full.length);break}
  }
  // Abbreviate only structured answers; preserve free-text findings, doses and negations.
  text=text.replace(/: (Evet|Hayır|Var|Yok|Reddetti)(?= —|$)/,(_,answer)=>": "+({Evet:"+",Hayır:"−",Var:"+",Yok:"−",Reddetti:"Ret"}[answer]));
  return text;
 }).filter(Boolean).join(" | ");
}
function selectedNote(){
 return val("noteMode")==="summary"?generateSummaryNote():generateNote();
}
function generateNote(horizontal=true){
 const lines=[],push=txt=>{
  if(!populated(txt))return;
  if(lines.length&&/^(?:HASTALIKLAR|AMELİYATLAR|ALIŞKANLIKLAR|İLAÇLAR|OSTEOPOROZ, KIRIK, DİŞLER VE TEDAVİLER|TARAMALAR|AŞILAMALAR|AKTİF YAKINMA|GERİATRİK SORGU|TAKİP\/PLAN|LABORATUVAR VE TETKİKLER|PLAN)(?::| —)/.test(txt))
   lines.push("");
  lines.push(txt);
 };
 const list=(title,entries)=>{
  if(!entries.length)return;
  push(title+":");
  const numbered=entries.map((entry,i)=>(i+1)+". "+entry);
  if(horizontal)push(numbered.join(" · "));else numbered.forEach(push);
 };
 const intro=[];
 if(val("tc"))intro.push("T.C. Kimlik No: "+val("tc"));
 if(val("patientName"))intro.push("Hasta: "+val("patientName"));
 if(val("visitDate"))intro.push("Kontrol Tarihi: "+datedDate(val("visitDate")));
 const demographic=[
  val("age")?val("age")+" yaş":null,
  val("sex")||null
 ].filter(Boolean);
 if(intro.length)push(intro.join(" | "));
 if(demographic.length)push("Yaş/Cinsiyet: "+demographic.join(" · "));
 if(val("patientExtra"))push("Ek Notlar: "+val("patientExtra"));
 if(val("diseasesNarrative")){push("HASTALIKLAR:");push(val("diseasesNarrative"))}
 if(val("surgeriesNarrative")){push("AMELİYATLAR:");push(val("surgeriesNarrative"))}
 const habits=[];
 if(val("smoking")||val("smokingNote"))habits.push("Sigara: "+statusDetailFromFields("smoking","smokingNote"));
 if(val("alcohol")||val("alcoholNote"))habits.push("Alkol: "+statusDetailFromFields("alcohol","alcoholNote"));
 if(habits.length)push("ALIŞKANLIKLAR: "+habits.join("; "));
 list("İLAÇLAR",planItems(val("medicationsNarrative")));
 const background=[
  ["Osteoporoz sorgusu",val("osteoporosis")],
  ["Dişler",textPair(val("teeth"),val("teethNote"))],
  ["Kırık öyküsü",val("fractureHistory")],
  ["Tedaviler",val("treatments")],
  ["Diğer notlar",val("osteoporosisOther")]
 ].filter(([,v])=>populated(v));
 if(background.length){push("OSTEOPOROZ, KIRIK, DİŞLER VE TEDAVİLER:");background.forEach(([k,v])=>push(k+": "+v))}
 const screenings=SCREENINGS.map(([id,name,sex])=>[name,sex&&val("sex")&&sex!==val("sex")?"":statusDetail("screen",id)]).filter(([,v])=>v);
 if(val("screeningOther"))screenings.push(["Diğer taramalar",val("screeningOther")]);
 if(screenings.length){push("TARAMALAR:");screenings.forEach(([n,v])=>push(n+": "+v))}
 const vaccines=VACCINES.map(([id,name])=>[name,statusDetail("vax",id)]).filter(([,v])=>v);
 if(val("vaccinesOther"))vaccines.push(["Diğer aşılar",val("vaccinesOther")]);
 if(vaccines.length){push("AŞILAMALAR:");horizontal?push(vaccines.map(([n,v])=>n+": "+v).join("; ")):vaccines.forEach(([n,v])=>push(n+": "+v))}
 if(val("chiefComplaint"))push("AKTİF YAKINMA: "+val("chiefComplaint"));
 const geriatric=GERIATRIC.map(([id,name,kind])=>{
   if(kind==="measure"){
    const value=val(id);
    return [id==="adl"?"GYA":id==="iadl"?"EGYA":name,value?(value+(id==="height"?" cm":id==="weight"?" kg":"")):""];
   }
   if(kind==="text")return [name,val("ger_"+id+"_note")];
   return [name,statusDetail("ger",id)];
 }).filter(([,v])=>populated(v));
 if(val("homePulse"))geriatric.push(["Nabız",val("homePulse")+"/dk"]);
 const bmi=calculateBMI(val("height"),val("weight"));
 if(bmi)geriatric.push(["BKİ",bmi.replace(".",",")+" kg/m²"]);
 if(val("geriatricOther"))geriatric.push(["Ek Not",val("geriatricOther")]);
 if(geriatric.length){
  push("GERİATRİK SORGU:");
  if(!horizontal)geriatric.forEach(([n,v])=>push(n+": "+v));
  else{
   const values=new Map(geriatric);
   const row=names=>{
    const entries=names.filter(name=>values.has(name)).map(name=>{
     const text=name+": "+values.get(name);values.delete(name);return text;
    });
    if(entries.length)push(entries.join("; "));
   };
   row(["Düşme (son 6 ay içinde)"]);
   row(["Düşme Korkusu","Baston Kullanımı","Evde TA","Nabız"]);
   row(["Baş Dönmesi","Ortostatizm"]);
   row(["İştah","Kilo Kaybı","Çiğneme / Yutma Güçlüğü","Boy (cm)","Kilo (kg)","BKİ"]);
   row(["Üriner İnkontinans","Fekal İnkontinans","Kabızlık"]);
   row(["Uyku","REM Uyku Davranış Bozukluğu"]);
   row(["Unutkanlık (yeni başlangıç / son 6 ayda artış)","Anhedoni"]);
   row(["GYA","EGYA","Görme Sorunu","İşitme Sorunu"]);
   row([...values.keys()]);
  }
 }
 if(val("labNarrative")){push("LABORATUVAR VE TETKİKLER:");push(val("labNarrative"))}
 if(val("followupNarrative")||val("planNarrative"))push("TAKİP/PLAN:");
 if(val("followupNarrative"))push(val("followupNarrative"));
 const plan=planItems(val("planNarrative"));
 if(plan.length){push("PLAN:");push(plan.map((line,i)=>(i+1)+". "+line).join("\n"))}
 return lines.length?lines.join("\n"):"Henüz veri girilmedi. Formu doldurdukça klinik not burada oluşacaktır.";
}
function statusDetailFromFields(a,b){
 const status=val(a),note=val(b);
 return [status,note].filter(populated).join(status&&note?" — ":"");
}
function renderNote(){
 updateBMI();
 const text=selectedNote();
 $("noteContent").textContent=text;
 if($("noteCount"))$("noteCount").textContent=text.length+" karakter";
}
function notify(message,error=false){
 const root=$("toast");
 root.textContent=message;root.dataset.error=String(error);root.hidden=false;
 clearTimeout(toastTimer);
 toastTimer=setTimeout(()=>{root.hidden=true},3500);
}
async function copyNote(){
 transferScratchToPlan();
 const text=selectedNote();
 if(text.startsWith("Henüz veri girilmedi")){notify("Önce formu doldurun.",true);return}
 try{
  if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(text);
  else{
   const input=document.createElement("textarea");input.value=text;input.style.position="fixed";
   input.style.left="-9999px";document.body.appendChild(input);input.select();
   const ok=document.execCommand("copy");input.remove();if(!ok)throw Error("copy failed");
  }
  notify("Kontrol notu panoya kopyalandı.");
 }catch(e){notify("Kopyalama başarısız. Not metnini seçip kopyalayabilirsiniz.",true)}
}
function printNote(){
 transferScratchToPlan();
 renderNote();window.print();
}
function requestReset(){
 if(!window.confirm("Bütün Kontrol / Takip Formu ve bu sekmedeki geçici taslak sıfırlanacak. Emin misiniz?"))return;
 try{sessionStorage.removeItem(DRAFT_KEY)}catch(e){}
 window.location.reload();
}
function resetSection(section){
 if(!section)return;
 const title=section.querySelector("h2")?.textContent||"Bu bölüm";
 if(!window.confirm(title+" bölümündeki bilgiler sıfırlanacak. Emin misiniz?"))return;
 clearTimeout(saveTimer);
 section.querySelectorAll("[data-save]").forEach(field=>{
  if(field.type==="checkbox"||field.type==="radio")field.checked=false;
  else field.value="";
  field.setCustomValidity?.("");
 });
 syncScreeningSex();updateAnswerButtons();updateScratchStatus();
 renderNote();saveDraft();
 notify(title+" bölümü sıfırlandı.");
}
function setDefaultVisitDate(now=new Date()){
 if(val("visitDate"))return;
 $("visitDate").value=[now.getFullYear(),String(now.getMonth()+1).padStart(2,"0"),String(now.getDate()).padStart(2,"0")].join("-");
}
function formatHomeBP(value,inputType=""){
 if(inputType.startsWith("delete")||value.includes("/"))return value;
 if(!/^\d{2,3}$/.test(value))return value;
 const systolic=Number(value);
 return systolic>=40&&systolic<=240?value+"/":value;
}
function homeBPError(value){
 if(!value.trim())return "";
 const parts=value.trim().split("/");
 if(!/^\d{2,3}$/.test(parts[0])||Number(parts[0])<40||Number(parts[0])>240)
  return "Sistolik değer 40–240 mmHg arasında olmalıdır.";
 if(parts.length!==2||!/^\d{2,3}$/.test(parts[1])||Number(parts[1])<10||Number(parts[1])>140)
  return "Diyastolik değer 10–140 mmHg arasında olmalıdır.";
 return "";
}
function initHomeBP(){
 const pulse=$("homePulse");
 pulse.addEventListener("change",()=>{if(!pulse.checkValidity())pulse.reportValidity()});
 const field=$("ger_homeBP_note");
 field.addEventListener("input",event=>{
  if(event.isComposing)return;
  const atEnd=field.selectionStart===field.value.length&&field.selectionEnd===field.value.length;
  if(atEnd){
   const formatted=formatHomeBP(field.value,event.inputType||"");
   if(formatted!==field.value){field.value=formatted;field.setSelectionRange(formatted.length,formatted.length)}
  }
  field.setCustomValidity(homeBPError(field.value));
 });
 field.addEventListener("change",()=>{
  field.setCustomValidity(homeBPError(field.value));
  if(field.validationMessage)field.reportValidity();
 });
}
function init(){
 buildStatusItems("screeningCards",SCREENINGS,"screen");
 buildStatusItems("vaccineCards",VACCINES,"vax");
 buildGeriatric();
 initHomeBP();
 GROUPS.forEach(group=>addRow(group));
 loadDraft();
 setDefaultVisitDate();
 syncScreeningSex();updateAnswerButtons();
 renderNote();initScratchAndPlan();
 ["planNarrative","medicationsNarrative","scratchText"].forEach(id=>{
  const area=$(id);
  area.addEventListener("focus",()=>ensureFirstNumber(area));
  area.addEventListener("input",event=>{if(!event.isComposing)ensureFirstNumber(area)});
  area.addEventListener("keydown",addPlanOnEnter);
 });
 document.addEventListener("input",event=>{
  if(!event.target.closest(".form-paper")&&event.target.id!=="scratchText")return;
  clearTimeout(saveTimer);
  renderNote();updateScratchStatus();
  saveTimer=setTimeout(()=>saveDraft(),320);
 });
 document.addEventListener("change",event=>{
  if(!event.target.closest(".form-paper"))return;
  if(event.target.id==="sex")syncScreeningSex();
  updateAnswerButtons();updateScratchStatus();
  renderNote();saveDraft();
 });
 document.getElementById("screeningCards").addEventListener("focusin",event=>{
  const card=event.target.closest("[data-sex]");
  if(card?.dataset.sex&&!val("sex")){
   $("sex").value=card.dataset.sex;
   syncScreeningSex();updateAnswerButtons();saveDraft();renderNote();
  }
 });
 document.addEventListener("click",event=>{
  const reset=event.target.closest("[data-reset-section]");
  if(reset){resetSection(reset.closest(".form-section"));return}
  const sexChoice=event.target.closest("[data-sex-option]");
  if(sexChoice){
   const value=sexChoice.dataset.sexOption;
   $("sex").value=val("sex")===value?"":value;
   syncScreeningSex();updateAnswerButtons();renderNote();saveDraft();return;
  }
  const answer=event.target.closest("[data-answer-target]");
  if(answer&&!answer.disabled){
   const key=answer.dataset.answerTarget,input=$(key);
   if(!input)return;
   input.value=input.value===answer.dataset.answerValue?"":answer.dataset.answerValue;
   updateAnswerButtons();renderNote();saveDraft();return;
  }
  const add=event.target.closest("[data-add]");
  if(add){const row=addRow(add.dataset.add);row?.querySelector("input,select")?.focus();saveDraft();return}
  const del=event.target.closest("[data-remove]");
  if(del){
   const row=del.closest(".repeat-row"),group=row?.dataset.group;
   if(!row||!group)return;
   row.remove();
   if(!$(REPEATS[group].container).querySelector(".repeat-row"))addRow(group);
   renumber(group);renderNote();saveDraft();
  }
 });
 $("noteMode").addEventListener("change",renderNote);
 $("saveDraft").onclick=()=>saveDraft(true);
 $("showNote").onclick=()=>{transferScratchToPlan();renderNote();$("noteSection").scrollIntoView({behavior:"smooth",block:"start"})};
 $("copyNote").onclick=copyNote;$("copyNoteBottom").onclick=copyNote;
 $("printNote").onclick=printNote;$("printNoteBottom").onclick=printNote;
 $("resetForm").onclick=requestReset;
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);
else init();
