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
 ["rsv","RSV"],
 ["covid","COVID-19"]
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
 ["sleep","Uyku Sorunu","binary"],
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
 ["appetite","height","weight"],["loss","swallow","urinary"],
 ["fecal","constipation","sleep"],["rbd","memory","anhedonia"],
 ["adl","iadl"],["vision","hearing"]
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
const GROUPS=["diseases","surgeries","medications"];
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
  (prefix==="screen"
   ?answerButtons(prefix+"_"+id+"_status",label,["Yok","Var","Reddetti"])
   :'<select id="'+prefix+'_'+id+'_status" data-save aria-label="'+esc(label)+' durumu">'+
     options(STATUS_OPTIONS,"")+'</select>')+
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
  const [key,label,kind]=byKey[id];
  if(kind==="measure"){
   const bounds={height:'min="0" step="0.1"',weight:'min="0" step="0.1"',
    adl:'min="0" max="6" step="1"',iadl:'min="0" max="8" step="1"'};
   return '<label class="geriatric-item geriatric-measure"><strong>'+esc(label)+'</strong>'+
    '<input type="number" id="'+key+'" data-save '+bounds[key]+' placeholder="'+
    (key==="height"?"cm":key==="weight"?"kg":key==="adl"?"0–6":"0–8")+'"></label>';
  }
  if(kind==="text"){
   return '<label class="geriatric-item geriatric-free"><strong>'+esc(label)+'</strong>'+
    '<input type="text" data-save id="ger_'+key+'_note" autocomplete="off" placeholder="Örn. 130/80 mmHg"></label>';
  }
  const choices=kind==="appetite"?["İyi","Orta","Kötü"]:
   kind==="problem"?["Yok","Var"]:["Evet","Hayır"];
  return '<div class="geriatric-item" data-question="'+key+'"><strong>'+esc(label)+'</strong>'+
   '<div class="question-line">'+answerButtons("ger_"+key+"_status",label,choices)+
   '<input id="ger_'+key+'_note" data-save autocomplete="off" type="text" placeholder="Açıklama" aria-label="'+esc(label)+' açıklaması"></div></div>';
 };
 root.innerHTML=GERIATRIC_GROUPS.map(keys=>
  '<div class="geriatric-row" data-columns="'+keys.length+'">'+keys.map(card).join("")+'</div>').join("");
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
 return String(str||"").split(/\r?\n/).map(s=>s.replace(/^\s*\d+[.)]\s*/,"").trim()).filter(Boolean);
}
function numberedPlan(lines){
 return lines.map((line,i)=>(i+1)+". "+line).join("\n");
}
function addPlanOnEnter(event){
 if(event.key!=="Enter"||event.shiftKey||event.ctrlKey||event.metaKey||event.isComposing)return;
 const area=event.target;
 if(area?.id!=="planNarrative")return;
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
function updateScratchStatus(){
 const area=$("scratchText"),status=$("scratchStatus");
 if(!area||!status)return;
 const draft=planItems(area.value);
 if(!draft.length){status.textContent="Geçici not";return}
 const plan=new Set(planItems(val("planNarrative")).map(s=>s.toLocaleLowerCase("tr-TR")));
 const awaiting=draft.filter(s=>!plan.has(s.toLocaleLowerCase("tr-TR"))).length;
 status.textContent=awaiting?awaiting+" not PLAN'a aktarılmayı bekliyor":"✓ PLAN'a aktarıldı";
}
function transferScratchToPlan(){
 const scratch=planItems(val("scratchText"));
 if(!scratch.length){updateScratchStatus();return 0}
 const current=planItems(val("planNarrative"));
 const known=new Set(current.map(s=>s.toLocaleLowerCase("tr-TR")));
 let count=0;
 for(const line of scratch){
  const normalized=line.toLocaleLowerCase("tr-TR");
  if(known.has(normalized))continue;
  current.push(line);known.add(normalized);count++;
 }
 if(count){
  $("planNarrative").value=numberedPlan(current);
  renderNote();saveDraft();
 }
 updateScratchStatus();
 return count;
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
  if(planVisible)return;
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
function generateNote(){
 const lines=[],push=txt=>{
  if(!populated(txt))return;
  if(lines.length&&/^(?:HASTALIKLAR|AMELİYATLAR|ALIŞKANLIKLAR|İLAÇLAR|OSTEOPOROZ|TARAMALAR|AŞILAMALAR|AKTİF YAKINMA|GERİATRİK SORGU|TAKİP|LABORATUVAR|PLAN)(?::| —)/.test(txt))
   lines.push("");
  lines.push(txt);
 };
 const list=(title,entries)=>{
  if(!entries.length)return;
  push(title+":");
  entries.forEach((entry,i)=>push((i+1)+". "+entry));
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
 const diagnoses=records("diseases").map(x=>x.name+(x.date?" ("+x.date+")":"")).filter(Boolean);
 const surgeries=records("surgeries").map(x=>x.name+(x.date?" ("+x.date+")":"")).filter(Boolean);
 list("HASTALIKLAR",diagnoses);
 list("AMELİYATLAR",surgeries);
 const habits=[];
 if(val("smoking")||val("smokingNote"))habits.push("Sigara: "+statusDetailFromFields("smoking","smokingNote"));
 if(val("alcohol")||val("alcoholNote"))habits.push("Alkol: "+statusDetailFromFields("alcohol","alcoholNote"));
 if(habits.length)push("ALIŞKANLIKLAR: "+habits.join("; "));
 list("İLAÇLAR",records("medications").map(x=>textPair(x.name,x.dose)).filter(Boolean));
 const background=[
  ["Osteoporoz sorgusu",val("osteoporosis")],
  ["Dişler",textPair(val("teeth"),val("teethNote"))],
  ["Kırık öyküsü",val("fractureHistory")],
  ["Tedaviler",val("treatments")]
 ].filter(([,v])=>populated(v));
 if(background.length){push("OSTEOPOROZ, KIRIK, DİŞLER VE TEDAVİLER:");background.forEach(([k,v])=>push(k+": "+v))}
 const screenings=SCREENINGS.map(([id,name,sex])=>[name,sex&&val("sex")&&sex!==val("sex")?"":statusDetail("screen",id)]).filter(([,v])=>v);
 if(val("screeningOther"))screenings.push(["Diğer taramalar",val("screeningOther")]);
 if(screenings.length){push("TARAMALAR:");screenings.forEach(([n,v])=>push(n+": "+v))}
 const vaccines=VACCINES.map(([id,name])=>[name,statusDetail("vax",id)]).filter(([,v])=>v);
 if(val("vaccinesOther"))vaccines.push(["Diğer aşılar",val("vaccinesOther")]);
 if(vaccines.length){push("AŞILAMALAR:");vaccines.forEach(([n,v])=>push(n+": "+v))}
 if(val("chiefComplaint"))push("AKTİF YAKINMA: "+val("chiefComplaint"));
 const geriatric=GERIATRIC.map(([id,name,kind])=>{
   if(kind==="measure"){
    const value=val(id);
    return [name,value?(value+(id==="height"?" cm":id==="weight"?" kg":id==="adl"?"/6":"/8")):""];
   }
   if(kind==="text")return [name,val("ger_"+id+"_note")];
   return [name,statusDetail("ger",id)];
 }).filter(([,v])=>populated(v));
 if(val("geriatricOther"))geriatric.push(["Ek Not",val("geriatricOther")]);
 if(geriatric.length){push("GERİATRİK SORGU:");geriatric.forEach(([n,v])=>push(n+": "+v))}
 if(val("labNarrative")){push("LABORATUVAR:");push(val("labNarrative"))}
 if(val("followupNarrative")){push("TAKİP — ÖNCEKİ ÖNERİLER:");push(val("followupNarrative"))}
 const plan=planItems(val("planNarrative"));
 if(plan.length){push("PLAN:");push(plan.map((line,i)=>(i+1)+". "+line).join("\n"))}
 return lines.length?lines.join("\n"):"Henüz veri girilmedi. Formu doldurdukça klinik not burada oluşacaktır.";
}
function statusDetailFromFields(a,b){
 const status=val(a),note=val(b);
 return [status,note].filter(populated).join(status&&note?" — ":"");
}
function renderNote(){
 $("noteContent").textContent=generateNote();
}
function notify(message,error=false){
 const root=$("toast");
 root.textContent=message;root.dataset.error=String(error);root.hidden=false;
 clearTimeout(toastTimer);
 toastTimer=setTimeout(()=>{root.hidden=true},3500);
}
async function copyNote(){
 const text=generateNote();
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
 renderNote();window.print();
}
function requestReset(){
 if(!window.confirm("Bütün Kontrol / Takip Formu ve bu sekmedeki geçici taslak sıfırlanacak. Emin misiniz?"))return;
 try{sessionStorage.removeItem(DRAFT_KEY)}catch(e){}
 window.location.reload();
}
function init(){
 buildStatusItems("screeningCards",SCREENINGS,"screen");
 buildStatusItems("vaccineCards",VACCINES,"vax");
 buildGeriatric();
 GROUPS.forEach(group=>addRow(group));
 loadDraft();
 syncScreeningSex();
 renderNote();
 document.addEventListener("input",event=>{
  if(!event.target.closest(".form-paper"))return;
  clearTimeout(saveTimer);
  renderNote();
  saveTimer=setTimeout(()=>saveDraft(),320);
 });
 document.addEventListener("change",event=>{
  if(!event.target.closest(".form-paper"))return;
  if(event.target.id==="sex")syncScreeningSex();
  renderNote();saveDraft();
 });
 document.getElementById("screeningCards").addEventListener("focusin",event=>{
  const card=event.target.closest("[data-sex]");
  if(card?.dataset.sex&&!val("sex")){
   $("sex").value=card.dataset.sex;
   syncScreeningSex();saveDraft();renderNote();
  }
 });
 document.addEventListener("click",event=>{
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
 $("saveDraft").onclick=()=>saveDraft(true);
 $("showNote").onclick=()=>{renderNote();$("noteSection").scrollIntoView({behavior:"smooth",block:"start"})};
 $("copyNote").onclick=copyNote;$("copyNoteBottom").onclick=copyNote;
 $("printNote").onclick=printNote;$("printNoteBottom").onclick=printNote;
 $("resetForm").onclick=requestReset;
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);
else init();
