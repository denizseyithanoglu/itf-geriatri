"use strict";
const DATA={"history":[["Göz",["Katarakt","Glokom","Makular Dejenerasyon"]],["Kardiyovasküler",["KAH","MI","Bypass Öyküsü","Hipertansiyon","Aritmi","Kalp Yetmezliği"]],["Üriner",["Böbrek Hastalığı","Prostat Hastalığı","Sık İYE"]],["Pulmoner",["Bronşiyal Astım","KOAH"]],["Gastrointestinal",["Peptik Ülser","Karaciğer Hastalığı","Kolelitiyazis"]],["Lokomotor",["Osteoartrit","Osteoporoz","Fraktür"]],["Nöro-Psikiyatrik",["SVO","Parkinson","Epilepsi","Demans","Depresyon"]],["Endokrin",["Hipertiroidi","Hipotiroidi","Guatr","DM"]],["Diğer",["Kanser","Alerji","Dişler"]]],"family":["Demans","Hipertansiyon","DM","SVO","Depresyon","Hiperlipidemi","KAH","Annede Osteoporoz","Annede Kalça Kırığı (patolojik/osteoporotik/hafif travma ile)"],"vaccines":["İnfluenza","Pnömokok (PPSV / PCV)","Tetanoz - difteri - asüler boğmaca (Tdap)","Herpes Zoster"],"screens":["Mamografi","GGK","Rektosigmoidoskopi","Kolonoskopi","sPSA / PSA","Kemik Mineral Yoğunluk Ölçümü (T skorları)","Pap Smear","Abdominal US (AAA Taraması)"],"symptoms":[["Halsizlik","Kilo Kaybı","Ateş","İştahsızlık","Ağrı","Baş Ağrısı","Bel Ağrısı","Eklem Ağrısı","Ağrının Şiddeti (0–10)","Baş Dönmesi","Göğüs Ağrısı","Çarpıntı","Ortopne","Öksürük","Nefes Darlığı","PND","Balgam","Hemoptizi","Protez Öyküsü","Kalça Dışı Kırık"],["Cinsel İlişki","Empotans","Erektil Disfonksiyon","Ejekülasyon Sorunu","Üriner İnkontinans","Kaç Kez","Sıkışma","Stres (Öksürme, Ikınma)","Gece","BPH Semptomları","Kesik Kesik İdrar","Sık İdrar","Çatallanma","Tam Boşaltamama Hissi","İdrar Debisinde Azalma","Yürüme Sorunu","Baston Kullanımı","Düşme Öyküsü","Kalça-Femur Kırığı","Dekübit Riski"],["Kasık Ağrısı","Dizüri","Tremor","Noktüri","Polidipsi","Poliüri","Dispepsi","Boyda Kısalma","Fekal İnkontinans","İnatçı Kabızlık","Sık İshal","Kusma","Bulantı","Gaz","Şişkinlik","Karın Ağrısı","Memede Kitle","Memede Akıntı","Memede Ağrı","Diğer"]],"cognition":[["İlaç Takibinde Zorlanma","Hobilere İlgide Azalma","Kelime Bulma Güçlüğü","İsimleri Unutma","İnsanları Karıştırma","Torun Adları","Gazete, Kitap, TV Takibinde Sorun","Eşya Kaybetme"],["Hesap, Alışveriş","Aynı Konuları Tekrar Tekrar Sorma","Yeni Olayları Hatırlayamama","Kişilik Değişikliği","Yolları Karıştırma","Kaybolma","Adresleri Unutma","Evde Odaları Karıştırma","Afazi","Apraksi","Agnozi"]],"behavior":["Halüsinasyon","Sanrı","Anksiyete","Ajitasyon","Uyku Sorunu","Amaçsız Gezinme"],"mood":["Uyku Süresi","Uykuyu Başlatmada Güçlük","Uykuyu Sürdürmede Güçlük","Uyanma Sebebi","Sık Ağlama","İsteksizlik","Can Sıkıntısı","Somatik Yakınmalarda Artış","Ölüm İsteği","İntihar Düşüncesi"],"exam":[["Genel Durum",["Şuur","Kooperasyon","Oryantasyon","Ödem","İkter","Siyanoz","LA","Solukluk"]],["Baş ve Boyun",["Pupiller","Ağız İçi","LAP","Karotis Üfürümü","Tiroid"]],["Kardiyovasküler Sistem",["Sağ Kol Tansiyon","Sol Kol Tansiyon","Ortostatik Hipotansiyon","Nabız","S1","S2","Ek Ses","Üfürüm","Boyun Venöz Dolgunluk","Pretibial Ödem","Nabızlar"]],["Solunum Sistemi",["Ral","Ronküs","Siyanoz","Solunum Sayısı"]],["Batın",["Hepatomegali","Splenomegali","Traube Alanı","Asit","Hassasiyet","Defans","Rebound","Kitle"]],["Meme Muayenesi",["Aksiller LAP","Meme Muayenesi"]],["Lokomotor Sistem",["Ekstremite Uzunluğu Simetrisi","Deformite","Hareket Kısıtlılığı","Artrit","Artralji"]]],"neuro":[["Motor",["Üst Ekstremite","Alt Ekstremite"]],["Duyu",["Yüzeyel","Derin"]],["Patolojik Refleksler",["Mayerson","Palmomental Refleks","Yakalama Refleksi","Babinski (Taban Deri Refleksi)","Romberg"]],["Ekstrapiramidal Bulgular",["Bradikinezi","Rijidite","Alt Beden Yarısı Parkinsonizmi","İstirahat Tremoru","Postural Tremor","İntentional Tremor","Postural İnstabilite"]],["Göz Hareketleri",["Horizontal Bakış Kısıtlılığı","Vertikal Bakış Kısıtlılığı","Nistagmus"]],["Serebellar Testler",["Disdiadokinezi","Ataksi","Dizartri","Ardışık Hareketler"]]]};
const STORE="itf_ilk_muayene_v1_session";
const LABELS=["Başvuru ve Anamnez","Özgeçmiş ve Koruyucu Hekimlik","Sistem, Biliş ve Duygudurum","Fizik Muayene ve Ön Tanılar"];
let step=0,confirmed={},toastTimer;
const byId=id=>document.getElementById(id);
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function f(id,label,type="text",cls="",placeholder=""){
 return '<div class="field '+cls+'"><label for="'+id+'">'+esc(label)+'</label><input data-field id="'+id+'" type="'+type+'" placeholder="'+esc(placeholder)+'" autocomplete="off"></div>';
}
function area(id,label,cls="",rows=3){return '<div class="field '+cls+'"><label for="'+id+'">'+esc(label)+'</label><textarea data-field id="'+id+'" rows="'+rows+'" autocomplete="off"></textarea></div>';}
function block(title,html){return '<section class="block"><h3>'+esc(title)+'</h3><div class="block-inner">'+html+'</div></section>';}
function checks(list,prefix,layout=""){return '<div class="bullets '+layout+'">'+list.map((name,i)=>check(name,prefix+'_'+i)).join("")+'</div>';}
function check(label,key){
 return '<div class="checknote"><label class="check-head" for="'+key+'"><input type="checkbox" id="'+key+'" data-field> <span>'+esc(label)+'</span></label><input class="note-input" type="text" id="'+key+'_note" data-field aria-label="'+esc(label)+' — açıklama" placeholder="Not / bulgu..." autocomplete="off"></div>';
}
function grouped(items,prefix){
 return items.map((group,i)=>'<div class="group"><h4>'+esc(group[0])+'</h4>'+checks(group[1],prefix+'_'+i)+'</div>').join("");
}
function radio(name,label,choices){
 return '<div class="field"><span class="field-label">'+esc(label)+'</span><div class="radio-line">'+choices.map((text,i)=>
  '<label><input type="radio" data-field name="'+name+'" value="'+esc(text)+'" aria-label="'+esc(text)+'">'+esc(text)+'</label>').join('')+'</div></div>';
}
function datedRows(items,prefix){return '<div class="fields two">'+items.map((text,i)=>'<div class="field"><label>'+esc(text)+'</label><div class="inline-pair"><input data-field type="date" id="'+prefix+'_'+i+'_date" aria-label="'+esc(text)+' uygulama veya tarama tarihi"><input data-field type="text" id="'+prefix+'_'+i+'_result" placeholder="Sonuç / not" aria-label="'+esc(text)+' sonuç veya not"></div></div>').join('')+'</div>';}
function twoColumns(arr,prefix){return '<div class="symptom-columns" style="grid-template-columns:repeat('+arr.length+',minmax(0,1fr))">'+arr.map((group,i)=>
 '<div class="checklist">'+group.map((label,j)=>check(label,prefix+'_'+i+'_'+j)).join('')+'</div>').join('')+'</div>';}
function build(){
 byId("page0").innerHTML=
  '<div class="page-title"><h2>1. Hasta İlk Değerlendirme Formu</h2><small>İTF.HB.FR.168 • Sayfa 1/4</small></div>'+
  block("Başvuru ve Hasta Bilgileri",
   '<div class="fields">'+
   f("ad","Adı Soyadı")+
   f("basvuru","Başvuru Tarihi","date")+
   f("proto","Protokol No")+
   f("dogumyeri","Doğum Yeri")+
   f("dogumyili","Doğum Yılı","number","","örn. 1947")+
   f("meslegi","Mesleği")+
   f("boy","Boy (cm)","number","","cm")+
   f("kilo","Kilo (kg)","number","","kg")+
   radio("cinsiyet","Cinsiyet",["Erkek","Kadın"])+
   area("adres","Adres","span2",2)+
   f("telefon","Telefon","tel")+'</div>')+
  block("Tanılar (her yeni tanı ile tarihini yazınız)",
   '<div class="diagnoses"><div class="head">Tanı</div><div class="head">Tanı tarihi</div>'+
    Array.from({length:10},(_,i)=>'<input data-field id="tani_'+i+'" aria-label="'+(i+1)+'. tanı" placeholder="'+(i+1)+'. tanı"><input data-field id="tanitarih_'+i+'" aria-label="'+(i+1)+'. tanı tarihi" type="date">').join('')+'</div>')+
  block("Anamnez",'<div class="fields two">'+
   area("sikayetler","Şikayetleri","span2",4)+area("hikaye","Hikayesi","span2",5)+
   area("ilaclar","Aldığı İlaçlar (isim, doz, kullanım sıklığı)","span2",5)+
   f("hekim","Değerlendiren Hekim (Kaşe / İmza)")+'</div>');
 byId("page1").innerHTML=
  '<div class="page-title"><h2>2. Özgeçmiş ve Koruyucu Hekimlik</h2><small>İTF.HB.FR.168 • Sayfa 2/4</small></div>'+
  block("Özgeçmiş",grouped(DATA.history,"oz")+
   '<div class="group"><h4>İşitme Cihazı</h4>'+radio("isitmeCihazi","Kullanım durumu",["Var","Yok","Var ama kullanmıyor"])+'</div>'+
   area("ameliyat","Ameliyat Öyküsü","",3))+
  block("Soygeçmiş",checks(DATA.family,"aile","two"))+
  block("Koruyucu Hekimlik — En Son Uygulama Tarihi ve Sonucu",
   '<div class="fields two"><div><h4>İmmünizasyon</h4>'+datedRows(DATA.vaccines,"asi")+'</div>'+
   '<div><h4>Tarama</h4>'+datedRows(DATA.screens,"tarama")+'</div></div>');
 byId("page2").innerHTML=
  '<div class="page-title"><h2>3. Sistem Sorgulaması, Kognitif ve Duygudurum</h2><small>İTF.HB.FR.168 • Sayfa 3/4</small></div>'+
  block("Sistem Sorgulaması",twoColumns(DATA.symptoms,"ss"))+
  block("Kognitif Değerlendirme",
   '<div class="fields">'+
    radio("unutkanlik","Unutkanlık",["Var","Yok"])+
    radio("etki","Günlük hayatını etkiliyor mu?",["Evet","Hayır"])+
    radio("ilerleme","Son 6 ayda ilerleme var mı?",["Evet","Hayır"])+
    area("neunutuyor","Unutkanlık varsa neleri unutuyor, ne zamandır?","span3",2)+
   '</div>'+twoColumns(DATA.cognition,"kog")+
   '<div class="group" style="margin-top:12px"><h4>Ek Bilişsel / Davranışsal Bulgular</h4>'+checks(DATA.behavior,"dav","two")+'</div>')+
  block("Duygu-Durum Değerlendirmesi",checks(DATA.mood,"duygu","two"));
 byId("page3").innerHTML=
  '<div class="page-title"><h2>4. Fizik Muayene ve Ön Tanılar</h2><small>İTF.HB.FR.168 • Sayfa 4/4</small></div>'+
  block("Fizik Muayene",grouped(DATA.exam,"fm"))+
  block("Nörolojik Muayene",
   grouped(DATA.neuro.slice(0,2),"nr")+
   '<div class="fields two">'+area("kraniyal","Kraniyal Sinirler","",2)+area("dtr","Derin Tendon Refleksleri","",2)+'</div>'+
   grouped(DATA.neuro.slice(2),"nrd"))+
  block("Ön Tanılar",
   '<div class="fields two">'+Array.from({length:10},(_,i)=>f('ontani_'+i,(i+1)+'. Ön Tanı')).join('')+'</div>');
}
function fieldsOnPage(i){return Array.from(byId("page"+i).querySelectorAll("[data-field]"));}
function readData(){
 const result={};
 document.querySelectorAll("[data-field]").forEach(el=>{
  const key=el.id||((el.type==="radio")?el.name+"::"+el.value:"");
  if(key)result[key]=el.type==="checkbox"||el.type==="radio"?el.checked:el.value;
 });
 return result;
}
function hydrate(values){
 for(const [key,value] of Object.entries(values||{})){
  const el=key.includes("::")?document.querySelector('input[name="'+CSS.escape(key.split("::")[0])+'"][value="'+CSS.escape(key.split("::")[1])+'"]'):byId(key);
  if(!el||!el.hasAttribute("data-field"))continue;
  if(el.type==="checkbox"||el.type==="radio")el.checked=value===true;
  else el.value=String(value??"");
 }
}
function signature(i){return JSON.stringify(fieldsOnPage(i).map(el=>[el.id||el.name+"::"+el.value,el.type==="checkbox"||el.type==="radio"?el.checked:el.value]));}
function pageHasData(i){return fieldsOnPage(i).some(el=>el.type==="checkbox"||el.type==="radio"?el.checked:el.value.trim()!=="");}
function refreshTabs(){
 for(let i=0;i<4;i++){
  const t=byId("tab"+i),done=confirmed[i]===signature(i),has=pageHasData(i);
  t.setAttribute("aria-selected",String(i===step));
  t.dataset.progress=done?"full":has?"partial":"empty";
  t.querySelector(".tab-state").textContent=done?"✓ Sekme tamamlandı":has?"◐ Devam ediyor":"— Boş";
 }
 byId("prev").disabled=step===0;byId("next").disabled=step===3;
 byId("markComplete").textContent=confirmed[step]===signature(step)?"✓ Tamamlandı":"✓ Sekmeyi Tamamla";
}
function go(i){
 step=Math.max(0,Math.min(3,i));
 for(let j=0;j<4;j++){byId("page"+j).hidden=j!==step;byId("page"+j).setAttribute("aria-hidden",String(j!==step));}
 refreshTabs();byId("content").scrollIntoView({behavior:"instant",block:"start"});
}
function toast(message,bad=false){
 const el=byId("toast");clearTimeout(toastTimer);
 el.textContent=message;el.style.background=bad?"#fff0ed":"#e8f8ee";
 el.style.color=bad?"#8e3027":"#16663d";el.hidden=false;
 toastTimer=setTimeout(()=>el.hidden=true,2300);
}
function save(manual=false){
 try{
  sessionStorage.setItem(STORE,JSON.stringify({version:1,values:readData(),confirmed,active:step,savedAt:new Date().toISOString()}));
  if(manual)toast("✓ Geçici taslak kaydedildi");
 }catch(e){if(manual)toast("Kaydedilemedi: tarayıcı depolaması kullanılamıyor",true);}
 refreshTabs();
}
function resetPage(){
 if(!confirm((step+1)+". sekmedeki bütün yanıtlar silinecek. Emin misiniz?"))return;
 fieldsOnPage(step).forEach(el=>{if(el.type==="checkbox"||el.type==="radio")el.checked=false;else el.value="";});
 delete confirmed[step];save();toast("Sekme sıfırlandı");
}
function resetAll(){
 if(!confirm("Bütün İlk Muayene Formu sıfırlanacak. Tüm sekmelerdeki yanıtlar silinecek. Emin misiniz?"))return;
 document.querySelectorAll("[data-field]").forEach(el=>{if(el.type==="checkbox"||el.type==="radio")el.checked=false;else el.value="";});
 confirmed={};try{sessionStorage.removeItem(STORE);}catch(e){}
 go(0);refreshTabs();toast("Tüm form sıfırlandı");
}
function initialize(){
 build();
 let restored;
 try{restored=JSON.parse(sessionStorage.getItem(STORE)||"null");}catch(e){restored=null;}
 if(restored?.version===1){hydrate(restored.values);confirmed=restored.confirmed||{};step=Number.isInteger(restored.active)?Math.max(0,Math.min(3,restored.active)):0;}
 for(let i=0;i<4;i++)byId("tab"+i).addEventListener("click",()=>{save();go(i);save();});
 byId("prev").addEventListener("click",()=>{save();go(step-1);save();});
 byId("next").addEventListener("click",()=>{save();go(step+1);save();});
 byId("save").addEventListener("click",()=>save(true));
 byId("print").addEventListener("click",()=>{save();window.print();});
 byId("resetPage").addEventListener("click",resetPage);
 byId("resetAll").addEventListener("click",resetAll);
 byId("markComplete").addEventListener("click",()=>{confirmed[step]=signature(step);save();toast("✓ Sekme tamamlandı");});
 byId("pages").addEventListener("input",()=>save());
 byId("pages").addEventListener("change",()=>save());
 window.addEventListener("pagehide",()=>save());
 go(step);
}
document.addEventListener("DOMContentLoaded",initialize);
