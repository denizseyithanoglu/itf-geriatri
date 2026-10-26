"use strict";
const DATA={"history":[["Göz",["Katarakt","Glokom","Makular Dejenerasyon"]],["Kardiyovasküler",["KAH (Koroner Arter Hastalığı)","MI (Miyokard İnfarktüsü)","HT (Hipertansiyon)","AF (Atriyal Fibrillasyon)","Aritmi – Diğer","KKY (Konjestif Kalp Yetmezliği)"]],["Pulmoner",["Astım","KOAH (Kronik Obstrüktif Akciğer Hastalığı)","Pulmoner Emboli","Tekrarlayan Pnömoni"]],["Üriner",["KBH (Kronik Böbrek Hastalığı)","BPH (Benign Prostat Hiperplazisi)","Nefrolitiazis","Tekrarlayan İYE (İdrar Yolu Enfeksiyonu)"]],["Nöro/Psikiyatrik",["İskemik SVH (İskemik Serebrovasküler Hastalık)","Hemorajik SVH (Hemorajik Serebrovasküler Hastalık)","Epilepsi","Parkinson","Alzheimer Demans","Vasküler Demans","Frontotemporal Demans","Lewy Cisimcikli Demans","Demans – Diğer","Depresyon","Anksiyete"]],["Gastrointestinal",["Peptik Ülser","Reflü","Kronik Karaciğer Hastalığı","Kolelitiazis"]],["Endokrin",["T2DM (Tip 2 Diyabetes Mellitus)","T1DM (Tip 1 Diyabetes Mellitus)","Hipertiroidi","Hipotiroidi","Guatr"]],["Lokomotor",["Osteoartrit","Osteoporoz","RA (Romatoid Artrit)","PMR (Polimyalji Romatika)","Dev Hücreli Arterit"]],["Onkoloji / Hematoloji",["MGUS (Önemi Belirsiz Monoklonal Gammopati)","Akciğer Ca","Kolon Ca","Meme Ca","Prostat Ca","Endometrium Ca","Over Ca"]]],"family":["Demans","Hipertansiyon","DM","SVO","Depresyon","Hiperlipidemi","KAH","Annede Osteoporoz","Anne / Babada Kalça Kırığı (osteoporotik / hafif travma)"],"vaccines":["İnfluenza","Pnömokok (Prevenar-20, KPA-13, PPSV23)","Tetanoz-Difteri-Aselüler Boğmaca (Tdap)","Herpes Zoster","RSV"],"screens":["Mamografi","GGK","Rektosigmoidoskopi","Kolonoskopi","sPSA / PSA","Kemik Mineral Yoğunluk Ölçümü (T skorları)","Pap Smear","Abdominal US (AAA Taraması)"],"symptoms":[["Halsizlik","Kilo Kaybı","Ateş","İştahsızlık","Ağrı","Baş Ağrısı","Bel Ağrısı","Eklem Ağrısı","Ağrının Şiddeti (0–10)","Baş Dönmesi","Göğüs Ağrısı","Çarpıntı","Ortopne","Öksürük","Nefes Darlığı","PND","Balgam","Hemoptizi","Protez Öyküsü","Kalça Dışı Kırık"],["Cinsel İlişki","Empotans","Erektil Disfonksiyon","Ejekülasyon Sorunu","Üriner İnkontinans","Kaç Kez","Sıkışma","Stres (Öksürme, Ikınma)","Gece","BPH Semptomları","Kesik Kesik İdrar","Sık İdrar","Çatallanma","Tam Boşaltamama Hissi","İdrar Debisinde Azalma","Yürüme Sorunu","Baston Kullanımı","Düşme Öyküsü","Kalça-Femur Kırığı","Dekübit Riski"],["Kasık Ağrısı","Dizüri","Tremor","Noktüri","Polidipsi","Poliüri","Dispepsi","Boyda Kısalma","Fekal İnkontinans","İnatçı Kabızlık","Sık İshal","Kusma","Bulantı","Gaz","Şişkinlik","Karın Ağrısı","Memede Kitle","Memede Akıntı","Memede Ağrı","Diğer"]],"cognition":[["İlaç Takibinde Zorlanma","Hobilere İlgide Azalma","Kelime Bulma Güçlüğü","İsimleri Unutma","İnsanları Karıştırma","Torun Adları","Gazete, Kitap, TV Takibinde Sorun","Eşya Kaybetme"],["Hesap, Alışveriş","Aynı Konuları Tekrar Tekrar Sorma","Yeni Olayları Hatırlayamama","Kişilik Değişikliği","Yolları Karıştırma","Kaybolma","Adresleri Unutma","Evde Odaları Karıştırma","Afazi","Apraksi","Agnozi"]],"behavior":["Halüsinasyon","Sanrı","Anksiyete","Ajitasyon","Uyku Sorunu","Amaçsız Gezinme"],"mood":["Uyku Süresi","Uykuyu Başlatmada Güçlük","Uykuyu Sürdürmede Güçlük","Uyanma Sebebi","Sık Ağlama","İsteksizlik","Can Sıkıntısı","Somatik Yakınmalarda Artış","Ölüm İsteği","İntihar Düşüncesi"],"exam":[["Genel Durum",["Şuur","Kooperasyon","Oryantasyon","Ödem","İkter","Siyanoz","LA","Solukluk"]],["Baş ve Boyun",["Pupiller","Ağız İçi","LAP","Karotis Üfürümü","Tiroid"]],["Kardiyovasküler Sistem",["Sağ Kol Tansiyon","Sol Kol Tansiyon","Ortostatik Hipotansiyon","Nabız","S1","S2","Ek Ses","Üfürüm","Boyun Venöz Dolgunluk","Pretibial Ödem","Nabızlar"]],["Solunum Sistemi",["Ral","Ronküs","Siyanoz","Solunum Sayısı"]],["Batın",["Hepatomegali","Splenomegali","Traube Alanı","Asit","Hassasiyet","Defans","Rebound","Kitle"]],["Meme Muayenesi",["Aksiller LAP","Meme Muayenesi"]],["Lokomotor Sistem",["Ekstremite Uzunluğu Simetrisi","Deformite","Hareket Kısıtlılığı","Artrit","Artralji"]]],"neuro":[["Motor",["Üst Ekstremite","Alt Ekstremite"]],["Duyu",["Yüzeyel","Derin"]],["Patolojik Refleksler",["Mayerson","Palmomental Refleks","Yakalama Refleksi","Babinski (Taban Deri Refleksi)","Romberg"]],["Ekstrapiramidal Bulgular",["Bradikinezi","Rijidite","Alt Beden Yarısı Parkinsonizmi","İstirahat Tremoru","Postural Tremor","İntentional Tremor","Postural İnstabilite"]],["Göz Hareketleri",["Horizontal Bakış Kısıtlılığı","Vertikal Bakış Kısıtlılığı","Nistagmus"]],["Serebellar Testler",["Disdiadokinezi","Ataksi","Dizartri","Ardışık Hareketler"]]]};
const LEGACY_HISTORY=[["Göz",["Katarakt","Glokom","Makular Dejenerasyon"]],["Kardiyovasküler",["KAH","MI","Bypass Öyküsü","Hipertansiyon","Aritmi","Kalp Yetmezliği"]],["Üriner",["Böbrek Hastalığı","Prostat Hastalığı","Sık İYE"]],["Pulmoner",["Bronşiyal Astım","KOAH"]],["Gastrointestinal",["Peptik Ülser","Karaciğer Hastalığı","Kolelitiyazis"]],["Lokomotor",["Osteoartrit","Osteoporoz","Fraktür"]],["Nöro-Psikiyatrik",["SVO","Parkinson","Epilepsi","Demans","Depresyon"]],["Endokrin",["Hipertiroidi","Hipotiroidi","Guatr","DM"]],["Diğer",["Kanser"]]];
const LEGACY_TO_NEW={
 "oz_0_0":"dx_0_0","oz_0_1":"dx_0_1","oz_0_2":"dx_0_2",
 "oz_1_0":"dx_1_0","oz_1_1":"dx_1_1","oz_1_3":"dx_1_2","oz_1_4":"dx_1_4","oz_1_5":"dx_1_5",
 "oz_2_0":"dx_3_0","oz_2_1":"dx_3_1","oz_2_2":"dx_3_3",
 "oz_3_0":"dx_2_0","oz_3_1":"dx_2_1",
 "oz_4_0":"dx_5_0","oz_4_1":"dx_5_2","oz_4_2":"dx_5_3",
 "oz_5_0":"dx_7_0","oz_5_1":"dx_7_1",
 "oz_6_1":"dx_4_3","oz_6_2":"dx_4_2","oz_6_3":"dx_4_8","oz_6_4":"dx_4_9",
 "oz_7_0":"dx_6_2","oz_7_1":"dx_6_3","oz_7_2":"dx_6_4"
};
const SURGERY_OPTIONS=[
"Katarakt ameliyatı","Koroner bypass (CABG)","Kalp kapak ameliyatı","Kalp pili / ICD implantasyonu",
"Kalça protezi","Diz protezi","Kalça kırığı cerrahisi","Omurga ameliyatı",
"Kolesistektomi","Apendektomi","Kasık / karın fıtığı ameliyatı","Prostatektomi / TUR-P",
"Histerektomi","Ooferektomi","Tiroidektomi","Bağırsak / kolon cerrahisi",
"Meme cerrahisi (mastektomi / lumpektomi)","Böbrek cerrahisi","Diğer ameliyat"
];
const STORE="itf_ilk_muayene_v1_session";
const LABELS=["Başvuru ve Anamnez","Soygeçmiş ve Koruyucu Hekimlik","Sistem, Biliş ve Duygudurum","Fizik Muayene ve Ön Tanılar"];
let step=0,confirmed={},toastTimer,entrySequence=0,riskOverrides={};
const byId=id=>document.getElementById(id);
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function f(id,label,type="text",cls="",placeholder=""){
 return '<div class="field '+cls+'"><label for="'+id+'">'+esc(label)+'</label><input data-field id="'+id+'" type="'+type+'"'+(type==="number"?' step="any" inputmode="decimal"':"")+' placeholder="'+esc(placeholder)+'" autocomplete="off"></div>';
}
function area(id,label,cls="",rows=3){return '<div class="field '+cls+'"><label for="'+id+'">'+esc(label)+'</label><textarea data-field id="'+id+'" rows="'+rows+'" autocomplete="off"></textarea></div>';}
function block(title,html){
 return '<section class="block"><div class="block-heading"><h3>'+esc(title)+'</h3>'+
 '<button type="button" class="reset-section" data-reset-section aria-label="'+esc(title)+' bölümünü sıfırla" title="Yalnızca bu bölümdeki yanıtları sil">Bölümü Sıfırla</button></div>'+
 '<div class="block-inner">'+html+'</div></section>';
}
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
function datedRows(items,prefix,order=null){
 return '<div class="preventive-grid">'+(order||items.map((_,i)=>i)).map(i=>
  screeningField(items[i],prefix+'_'+i+'_date',prefix+'_'+i+'_result')).join("")+'</div>';
}
function screeningField(label,dateId,resultId){
 return '<div class="preventive-item"><div class="preventive-title">'+esc(label)+'</div>'+
 '<div class="preventive-fields">'+
 '<div class="field"><label for="'+dateId+'">Yıl / Tarih</label><input id="'+dateId+'" type="text" data-field placeholder="örn. 2023" autocomplete="off"></div>'+
 '<div class="field"><label for="'+resultId+'">Sonuç / Ek Not</label><input id="'+resultId+'" type="text" data-field placeholder="Sonuç / not" autocomplete="off"></div></div></div>';
}
function selectField(id,label,options,noteId=null){
 return '<div class="field"><label for="'+id+'">'+esc(label)+'</label>'+
 '<select id="'+id+'" data-field><option value="">Seçiniz</option>'+
 options.map(x=>'<option>'+esc(x)+'</option>').join("")+'</select></div>'+
 (noteId?f(noteId,label+" — açıklama","text","", "Açıklama / detay"):"");
}
function historyOptionList(){
 return '<details class="medical-history-disclosure disease-catalog" id="historyCatalog" open>'+
 '<summary>Hastalık listesi · Kategorilere göre seçim <span id="historyCount"></span></summary>'+
 '<div class="history-catalog-content">'+
 DATA.history.map((group,i)=>'<fieldset class="disease-group"><legend>'+esc(group[0])+'</legend><div class="disease-options">'+
  group[1].map((name,j)=>{
   const id="dx_"+i+"_"+j;
   return '<label class="disease-option" for="'+id+'"><input type="checkbox" data-field id="'+id+'">'+
    '<span class="disease-name">'+esc(name)+'</span></label>';
  }).join("")+'</div></fieldset>').join("")+'</div></details>';
}
function riskQuestion(id,label){
 return '<div class="risk-row"><label class="risk-choice" for="'+id+'"><input type="checkbox" id="'+id+'" data-field> '+esc(label)+'</label>'+
 f(id+"_note","Açıklama / tarih")+'</div>';
}
function twoColumns(arr,prefix){return '<div class="symptom-columns" style="grid-template-columns:repeat('+arr.length+',minmax(0,1fr))">'+arr.map((group,i)=>
 '<div class="checklist">'+group.map((label,j)=>check(label,prefix+'_'+i+'_'+j)).join('')+'</div>').join('')+'</div>';}

const ENTRY_META={
 diagnosis:{container:"diagnosisList",prefix:"diag",fields:[["name","Hastalık / Tanı","text"],["date","Tanı yılı / tarih","text"]]},
 medication:{container:"medicationList",prefix:"med",fields:[["name","İlaç adı","text"],["dose","Doz ve Kullanım Sıklığı","text"]]},
 surgery:{container:"surgeryList",prefix:"surg",fields:[["name","Geçirdiği ameliyat","text"],["date","Tarih / Yıl","text"]]}
};
function makeEntry(type,explicitId=null,sourceOption=""){
 const conf=ENTRY_META[type];if(!conf)return;
 const id=explicitId===null?++entrySequence:Number(explicitId);
 if(!Number.isSafeInteger(id)||id<1)return;
 entrySequence=Math.max(entrySequence,id);
 const list=byId(conf.container);if(list.querySelector('[data-entry-id="'+id+'"]'))return;
 const row=document.createElement("div");row.className="dynamic-entry";
 row.dataset.entryType=type;row.dataset.entryId=String(id);
 if(type==="surgery"&&sourceOption)row.dataset.surgerySource=sourceOption;
 const fields=conf.fields.map(([field,label,inputType])=>{
  return '<div class="field entry-field-'+field+'"><label for="'+conf.prefix+'_'+id+'_'+field+'">'+esc(label)+'</label>'+
  '<input id="'+conf.prefix+'_'+id+'_'+field+'" data-field type="'+inputType+'" autocomplete="off"'+
  ' placeholder="'+(field==="name"?(type==="diagnosis"?"Tanı / hastalık":type==="medication"?"İlaç adı":"Ameliyat adı"):field==="date"?"Yıl / tarih / Hatırlamıyor":field==="dose"?"örn. 2x1000 mg veya 1x10/40 mg":"")+'"></div>';
 }).join("");
 row.innerHTML='<div class="entry-body"><strong class="entry-title" aria-label="Kayıt numarası"></strong>'+
 '<div class="entry-fields '+(type==="medication"?"entry-med":type==="surgery"?"entry-surgery":"")+'">'+
 fields+'</div><button type="button" class="entry-remove" data-remove-entry aria-label="Bu kaydı sil">Sil</button></div>';
 list.appendChild(row);updateEntryNumbers(type);
}
function updateEntryNumbers(type){
 const list=byId(ENTRY_META[type].container);
 const rows=Array.from(list.querySelectorAll(".dynamic-entry"));
 const start=type==="diagnosis"?checkedDiseases().length:0;
 rows.forEach((row,i)=>{row.querySelector(".entry-title").textContent=(i+1+start)+".";});
 const empty=list.parentElement.querySelector(".entry-empty");if(empty)empty.hidden=rows.length!==0;
 const filled=rows.filter(row=>row.querySelector('input[id$="_name"]')?.value.trim()).length;
 const selected=type==="diagnosis"?selectedHistory().length:0;
 const count=byId(type==="diagnosis"?"diagnosisCount":type==="medication"?"medicationCount":"surgeryCount");
 if(count)count.textContent=String(filled+selected);
 rows.forEach((row,i)=>{
  const remove=row.querySelector("[data-remove-entry]");
  if(remove){remove.hidden=type!=="surgery"&&i===0;remove.disabled=type!=="surgery"&&i===0;}
 });
}
function removeEntries(type){byId(ENTRY_META[type].container).replaceChildren();updateEntryNumbers(type);}
function entryIds(type){
 return Array.from(byId(ENTRY_META[type].container).querySelectorAll(".dynamic-entry")).map(row=>Number(row.dataset.entryId));
}
function surgeryLinks(){
 return Array.from(byId("surgeryList").querySelectorAll(".dynamic-entry"))
  .filter(row=>row.dataset.surgerySource)
  .map(row=>({id:Number(row.dataset.entryId),source:row.dataset.surgerySource}));
}
function surgeryOptionList(){
 return '<details class="medical-history-disclosure disease-catalog surgery-catalog" id="surgeryCatalog" open>'+
 '<summary>Ameliyat listesinden seçin</summary><div class="history-catalog-content">'+
 '<fieldset class="disease-group"><legend>Geçirdiği Ameliyatlar</legend><div class="disease-options">'+
 SURGERY_OPTIONS.map((name,i)=>'<label class="disease-option" for="surgeryPick_'+i+'">'+
 '<input type="checkbox" id="surgeryPick_'+i+'" data-field data-surgery-choice>'+
 '<span class="disease-name">'+esc(name)+'</span></label>').join("")+
 '</div></fieldset></div></details>';
}
function entrySection(type){
 const noun=type==="diagnosis"?"Hastalık":type==="medication"?"İlaç":"Ameliyat";
 const id=ENTRY_META[type].container,output=type==="diagnosis"?"diagnosisCount":type==="medication"?"medicationCount":"surgeryCount";
 const toggle=type==="diagnosis"?'<button type="button" class="action entry-catalog-toggle" data-toggle-disease-list aria-controls="historyCatalog" aria-expanded="true">Hastalık Listesinden Seçip Ekle</button>':
  type==="surgery"?'<button type="button" class="action entry-catalog-toggle" data-toggle-surgery-list aria-controls="surgeryCatalog" aria-expanded="true">Ameliyat Listesinden Seç</button>':"";
 const colHeader=type==="diagnosis"||type==="surgery"?
 '<div class="entry-column-head" aria-hidden="true"><span></span>'+
 '<span>'+esc(type==="diagnosis"?"Hastalık / Tanı":"Geçirdiği Ameliyat")+'</span>'+
 '<span>'+esc(type==="diagnosis"?"Tanı Tarihi":"Tarih / Yıl")+'</span><span></span></div>':"";
 return '<div class="entry-section entry-section-'+type+'">'+colHeader+
 (type==="diagnosis"?'<div id="selectedDiagnosisList" class="selected-diagnoses" aria-live="polite"></div>':"")+
 '<div id="'+id+'" class="entry-list"></div>'+
 '<p class="entry-empty">Henüz '+noun.toLocaleLowerCase("tr-TR")+' eklenmedi.</p>'+
 '<div class="entry-footer"><div class="entry-stat"><span>'+noun+' Sayısı</span><output id="'+output+'">0</output></div>'+
 '<div class="entry-buttons">'+toggle+
 '<button class="action entry-add" type="button" data-add-entry="'+type+'">+ '+noun+' Ekle</button></div></div></div>';
}
function printInstitutionHeader(page){
 return '<div class="print-institution-header" aria-hidden="true">'+
 '<img src="../assets/itf-geriatri-logo.webp" alt="" width="60" height="60">'+
 '<div class="print-institution-text">'+
 '<div class="institution-line">T.C. İSTANBUL ÜNİVERSİTESİ</div>'+
 '<div class="institution-main">İSTANBUL TIP FAKÜLTESİ</div>'+
 '<div class="institution-sub">İÇ HASTALIKLARI ANABİLİM DALI</div>'+
 '<div class="institution-sub">GERİATRİ BİLİM DALI</div>'+
 '<div class="form-heading">HASTA İLK DEĞERLENDİRME FORMU (KARTI)</div>'+
 '</div><div class="print-institution-number">İTF.HB.FR.168<br>Sayfa '+page+'/4</div></div>';
}

function build(){
 byId("page0").innerHTML=printInstitutionHeader(1)+
  '<div class="page-title"><h2>1. Hasta İlk Değerlendirme Formu</h2><small>İTF.HB.FR.168 • Sayfa 1/4</small></div>'+
  block("Başvuru ve Hasta Bilgileri",
   '<div class="patient-info">'+
    '<div class="patient-row patient-row-primary">'+
     '<div class="field"><label for="tc">T.C. Kimlik No</label><input id="tc" data-field type="text" inputmode="numeric" pattern="[0-9]{11}" maxlength="11" autocomplete="off" placeholder="11 haneli"></div>'+
     f("proto","Protokol No")+
     f("basvuru","Başvuru Tarihi","date")+
     '<div class="field">'+
      '<label for="dogumtarihi">Doğum Tarihi (Gün / Ay / Yıl)</label>'+
      '<input data-field id="dogumtarihi" type="date" lang="tr-TR" autocomplete="bday">'+
      '<input id="dogumyili" data-field type="hidden" value="">'+
      '<span class="legacy-birth-hint" id="legacyBirthHint" hidden></span>'+
     '</div>'+
    '</div>'+
    '<div class="patient-row patient-row-identity">'+
     f("ad","Hastanın Adı Soyadı")+
     '<div class="field field-calculated field-age"><label for="yas">Yaş</label><input data-field id="yas" type="text" inputmode="numeric" maxlength="3" size="3" readonly aria-label="Otomatik hesaplanan yaş" placeholder="—"></div>'+
     '<div class="field gender-field"><span class="field-label" id="genderTitle">Cinsiyet</span>'+
      '<div class="gender-options" role="group" aria-labelledby="genderTitle">'+
       '<label class="gender-choice female"><input data-field type="radio" name="cinsiyet" value="Kadın"><span class="gender-symbol" aria-hidden="true">♀</span> Kadın</label>'+
       '<label class="gender-choice male"><input data-field type="radio" name="cinsiyet" value="Erkek"><span class="gender-symbol" aria-hidden="true">♂</span> Erkek</label>'+
      '</div>'+
     '</div>'+
    '</div>'+
    '<div class="patient-row patient-row-contact">'+
     f("dogumyeri","Doğum Yeri")+
     area("adres","Adres","",2)+
     f("telefon","Telefon No","tel")+
    '</div>'+
    '<div class="patient-row patient-row-metrics">'+
     '<div class="field"><label for="egitim">Eğitim Durumu</label><select id="egitim" data-field>'+
       '<option value="">Seçiniz</option><option>Okuryazar Değil</option><option>Okuryazar</option>'+
       '<option>İlkokul</option><option>Ortaokul</option><option>Lise</option>'+
       '<option>Ön Lisans</option><option>Lisans</option><option>Yüksek Lisans</option><option>Doktora</option>'+
      '</select></div>'+
     f("meslegi","Mesleği")+
     f("boy","Boy (cm)","number","","cm")+
     f("kilo","Kilo (kg)","number","","kg")+
     '<div class="field field-calculated"><label for="bki">BKİ (kg/m²)</label><input id="bki" data-field type="text" readonly aria-label="Otomatik hesaplanan beden kitle indeksi" placeholder="—"></div>'+
    '</div>'+
   '</div>')+
  block("Tanılar ve Hastalıklar",
   entrySection("diagnosis")+
   historyOptionList()+
   area("diagnosisGeneralNote","Hastalıklar – Genel Ek Açıklama","",2)+
   '<div id="diagnosisPrintList" class="compact-print-list" aria-hidden="true"></div>')+
  block("Ameliyat Öyküsü",
   entrySection("surgery")+
   surgeryOptionList()+
   area("surgeryGeneralNote","Ameliyatlar – Ek Açıklama","",2)+
   '<p class="field-help">Ameliyatlar hastalık sayısına dahil edilmez. Aktif bir hastalık varsa Tanılar ve Hastalıklar bölümünde ayrıca belirtiniz.</p>'+
   '<div id="surgeryPrintList" class="compact-print-list" aria-hidden="true"></div>')+
  block("Alerjiler, Alışkanlıklar, Dişler ve Yardımcı Araçlar",
   '<div class="supplementary-rows">'+
    '<div class="supplementary-row">'+selectField("alerji","Alerji",["Yok","Var"],"alerjiNot")+'</div>'+
    '<div class="supplementary-habits"><h4>Sigara ve Alkol Kullanımı</h4><div class="habit-columns">'+
     '<div>'+radio("sigaraDurum","Sigara Kullanımı",["Hiç kullanmadı","Bıraktı","Aktif kullanıyor"])+
      f("sigaraMiktar","Miktar / süre / bırakma yılı")+'</div>'+
     '<div>'+radio("alkolDurum","Alkol Kullanımı",["Yok","Bıraktı","Var"])+
      f("alkolMiktar","Miktar / sıklık (örn. ünite/gün)")+'</div>'+
    '</div></div>'+
    '<div class="supplementary-row">'+selectField("disDurumu","Dişler",["Doğal dişler","Eksik diş","Parsiyel protez","Total protez","Diğer"],"disNot")+'</div>'+
    '<div class="supplementary-row">'+selectField("gozluk","Gözlük",["Yok","Var"],"gozlukNot")+'</div>'+
    '<div class="supplementary-row">'+selectField("isitmeCihazi","İşitme Cihazı",["Yok","Var","Var ama kullanmıyor"],"isitmeNot")+'</div>'+
   '</div>')+
  block("Kullandığı İlaçlar",
   entrySection("medication")+
   area("medicationGeneralNote","İlaçlar – Genel Ek Not","",2)+
   '<div id="medicationPrintList" class="compact-print-list" aria-hidden="true"></div>')+
  block("Anamnez",'<div class="fields two">'+
   area("sikayetler","Şikayetleri","span2",2)+
   area("hikaye","Hikayesi","span2",7)+
   f("hekim","Değerlendiren Hekim")+'</div>');
 byId("page1").innerHTML=printInstitutionHeader(2)+
  '<div class="page-title"><h2>2. Soygeçmiş, Alışkanlıklar ve Koruyucu Hekimlik</h2><small>İTF.HB.FR.168 • Sayfa 2/4</small></div>'+
  block("Soygeçmiş",checks(DATA.family,"aile","two"))+
  block("Koruyucu Hekimlik",
   '<div class="preventive-subsection"><h4>İmmünizasyon (Aşılamalar)</h4>'+
    datedRows(DATA.vaccines,"asi",[1,0,2,3,4])+
   '</div><div class="preventive-subsection"><h4>Taramalar</h4>'+
    '<div class="preventive-grid">'+
    screeningField("Endoskopi","endo_date","endo_result")+
    screeningField("Kolonoskopi","tarama_3_date","tarama_3_result")+
    '<div class="preventive-item"><div class="preventive-title">Diğer (Gaitada Gizli Kan, Rektosigmoidoskopi)</div>'+
     '<div class="preventive-two">'+
      screeningField("Gaitada Gizli Kan","tarama_1_date","tarama_1_result")+
      screeningField("Rektosigmoidoskopi","tarama_2_date","tarama_2_result")+
     '</div></div>'+
    screeningField("Toraks BT","toraksbt_date","toraksbt_result")+
    screeningField("Abdominal US (AAA Taraması)","tarama_7_date","tarama_7_result")+
    '<div class="sex-only" data-sex-only="Kadın" hidden>'+
     screeningField("Pelvik Tarama (Pap-smear)","tarama_6_date","tarama_6_result")+
     screeningField("Mamografi","tarama_0_date","tarama_0_result")+
    '</div>'+
    '<div class="sex-only" data-sex-only="Erkek" hidden>'+
     screeningField("Prostat Taraması","tarama_4_date","tarama_4_result")+
    '</div>'+
    '</div></div>')+
  block("Osteoporoz Sorgusu",
   '<p class="field-help">Soygeçmiş, sigara ve alkol yanıtları buraya otomatik aktarılır; gerekirse osteoporoz sorgusunda ayrıca değiştirilebilir.</p>'+
   '<div class="risk-list">'+
    riskQuestion("osteoParent","Anne / babada kalça kırığı")+
    riskQuestion("osteoSmoke","Sigara kullanımı")+
    riskQuestion("osteoAlcohol","Alkol kullanımı")+
    riskQuestion("osteoFall","Düşme öyküsü")+
    riskQuestion("osteoFracture","Kırık öyküsü")+
    riskQuestion("osteoDental","Diş muayenesi yapıldı")+
    '</div>'+
    '<div class="sex-only female-menopause" data-sex-only="Kadın" hidden>'+
     '<label class="risk-choice"><input id="menopozSwitch" type="checkbox" data-field> Menopoz bilgisini ekle</label>'+
     '<div id="menopozDetail" hidden>'+f("menopozAge","Menopoz Yaşı","number","","Yaş")+'</div>'+
    '</div>'+
    '<div class="preventive-subsection"><h4>DXA Ölçümü</h4>'+
    screeningField("DXA (tarih, bölge, T-skorları)","tarama_5_date","tarama_5_result")+
    '</div>');
 byId("page2").innerHTML=printInstitutionHeader(3)+
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
 byId("page3").innerHTML=printInstitutionHeader(4)+
  '<div class="page-title"><h2>4. Fizik Muayene ve Ön Tanılar</h2><small>İTF.HB.FR.168 • Sayfa 4/4</small></div>'+
  block("Fizik Muayene",grouped(DATA.exam,"fm"))+
  block("Nörolojik Muayene",
   grouped(DATA.neuro.slice(0,2),"nr")+
   '<div class="fields two">'+area("kraniyal","Kraniyal Sinirler","",2)+area("dtr","Derin Tendon Refleksleri","",2)+'</div>'+
   grouped(DATA.neuro.slice(2),"nrd"))+
  block("Ön Tanılar",
   '<div class="fields two">'+Array.from({length:10},(_,i)=>f('ontani_'+i,(i+1)+'. Ön Tanı')).join('')+'</div>');
}

function localToday(){
 const d=new Date();return [String(d.getFullYear()).padStart(4,"0"),String(d.getMonth()+1).padStart(2,"0"),String(d.getDate()).padStart(2,"0")].join("-");
}
function updateDerivedFields(){
 const birth=byId("dogumtarihi")?.value||"";
 const visit=byId("basvuru")?.value||localToday();
 let age="";
 if(/^\d{4}-\d{2}-\d{2}$/.test(birth)&&/^\d{4}-\d{2}-\d{2}$/.test(visit)){
  const [by,bm,bd]=birth.split("-").map(Number);
  const [vy,vm,vd]=visit.split("-").map(Number);
  const bdObj=new Date(by,bm-1,bd);
  const vdObj=new Date(vy,vm-1,vd);
  if(bdObj.getFullYear()===by&&bdObj.getMonth()===bm-1&&bdObj.getDate()===bd&&vdObj>=bdObj){
   age=String(vy-by-((vm<bm||(vm===bm&&vd<bd))?1:0));
  }
 }
 byId("yas").value=age;
 const height=Number(String(byId("boy")?.value||"").replace(",","."));
 const weight=Number(String(byId("kilo")?.value||"").replace(",","."));
 byId("bki").value=Number.isFinite(height)&&Number.isFinite(weight)&&height>0&&weight>0?
  (weight/Math.pow(height/100,2)).toFixed(2).replace(".",","):"";
 const legacy=byId("dogumyili"),hint=byId("legacyBirthHint");
 if(birth&&legacy.value)legacy.value="";
 hint.hidden=!!birth||!legacy.value.trim();
 if(!hint.hidden)hint.textContent="Önceki taslaktan doğum yılı: "+legacy.value+" (gün ve ay eksik)";
}

function sexValue(){return document.querySelector('input[name="cinsiyet"]:checked')?.value||"";}
function updateSexSpecific(){
 const gender=sexValue();
 document.querySelectorAll("[data-sex-only]").forEach(el=>el.hidden=el.dataset.sexOnly!==gender);
 const panel=byId("menopozDetail");
 if(panel)panel.hidden=gender!=="Kadın"||!byId("menopozSwitch")?.checked;
}
function selectedRadio(name){return document.querySelector('input[name="'+name+'"]:checked')?.value||"";}
function syncOsteoporosisRisk(){
 const sources={
  osteoParent:!!byId("aile_8")?.checked,
  osteoSmoke:selectedRadio("sigaraDurum")==="Aktif kullanıyor",
  osteoAlcohol:selectedRadio("alkolDurum")==="Var"
 };
 for(const [id,value] of Object.entries(sources)){
  if(!riskOverrides[id]&&byId(id))byId(id).checked=value;
 }
}
function checkedDiseases(){
 const catalog=byId("historyCatalog");if(!catalog)return [];
 return Array.from(catalog.querySelectorAll(".disease-option input:checked")).map(el=>({
  id:el.id,
  name:el.closest(".disease-option")?.querySelector(".disease-name")?.textContent.trim()||"Hastalık"
 }));
}
function selectedHistory(){
 return checkedDiseases().map(item=>{
  const date=byId("dxdate_"+item.id)?.value.trim()||"";
  return item.name+(date?" ("+date+")":"");
 });
}
function renderSelectedDiagnoses(){
 const list=byId("selectedDiagnosisList");if(!list)return;
 // Reuse entered dates whenever the list is rebuilt after an unrelated field changes.
 const dates=Object.fromEntries(Array.from(list.querySelectorAll("[data-disease-date]"))
  .map(input=>[input.id,input.value]));
 const selections=checkedDiseases();
 list.innerHTML=selections.map((item,i)=>{
  const id="dxdate_"+item.id;
  return '<div class="selected-diagnosis">'+
   '<strong class="selected-number">'+(i+1)+'.</strong>'+
   '<span class="selected-diagnosis-name">'+esc(item.name)+'</span>'+
   '<label class="selected-diagnosis-date"><span>Tanı tarihi</span>'+
   '<input type="text" data-field data-disease-date id="'+id+'" value="'+esc(dates[id]||"")+'"'+
   ' placeholder="Yıl / tarih / Hatırlamıyor" autocomplete="off"'+
   ' aria-label="'+esc(item.name)+' tanı tarihi veya açıklaması"></label>'+
   '<button type="button" data-unselect-disease="'+esc(item.id)+'" aria-label="'+esc(item.name)+' seçimini sil" title="Seçimi sil">Sil</button></div>';
 }).join("");
 list.hidden=!selections.length;
}
function syncHistoryPicker(){
 const catalog=byId("historyCatalog");
 const toggle=document.querySelector("[data-toggle-disease-list]");
 if(!catalog||!toggle)return;
 toggle.setAttribute("aria-expanded",String(catalog.open));
 toggle.classList.toggle("is-open",catalog.open);
}

function syncSurgeryPicker(){
 const catalog=byId("surgeryCatalog");
 const toggle=document.querySelector("[data-toggle-surgery-list]");
 if(!catalog||!toggle)return;
 toggle.setAttribute("aria-expanded",String(catalog.open));
 toggle.classList.toggle("is-open",catalog.open);
}
function syncSurgeryDateInputs(){
 // A free-text date replaces the former "Hatırlamıyor" checkbox.
 // Preserve the call for saved drafts using the existing initialization flow.
}
function addSurgeryFromPicker(input){
 if(!input)return;
 const source=input.id;
 const list=byId("surgeryList");
 const rows=Array.from(list.querySelectorAll(".dynamic-entry"));
 const existing=rows.find(row=>row.dataset.surgerySource===source);
 if(input.checked){
  if(existing)return;
  const name=input.closest(".disease-option")?.querySelector(".disease-name")?.textContent.trim()||"Ameliyat";
  // Fill the initial blank line instead of leaving an empty numbered row above selected surgery.
  let row=rows.find(item=>{
   if(item.dataset.surgerySource)return false;
   const id=item.dataset.entryId;
   return !byId("surg_"+id+"_name")?.value.trim()&&
    !byId("surg_"+id+"_date")?.value.trim();
  });
  if(!row){makeEntry("surgery",null,source);row=list.querySelector('[data-entry-id="'+entrySequence+'"]');}
  else row.dataset.surgerySource=source;
  if(row)byId("surg_"+row.dataset.entryId+"_name").value=name;
 }else if(existing){
  existing.remove();
  if(!entryIds("surgery").length)makeEntry("surgery");
 }
 syncSurgeryDateInputs();refreshEntryCounts();
}

function dynamicList(type){
 const meta=ENTRY_META[type],list=byId(meta.container);if(!list)return [];
 return Array.from(list.querySelectorAll(".dynamic-entry")).map(row=>{
  const id=row.dataset.entryId;
  const name=byId(meta.prefix+"_"+id+"_name")?.value.trim()||"";
  if(!name)return "";
  if(type==="diagnosis"){
   const date=byId(meta.prefix+"_"+id+"_date")?.value.trim()||"";
   return name+(date?" ("+date+")":"");
  }
  if(type==="surgery"){
   const date=byId("surg_"+id+"_date")?.value.trim()||"";
   return name+" ("+(date||"Tarih belirtilmedi")+")";
  }
  const dose=byId(meta.prefix+"_"+id+"_dose")?.value.trim()||"";
  return name+(dose?" "+dose:"");
 }).filter(Boolean);
}
function diagnosisNames(){return [...selectedHistory(),...dynamicList("diagnosis")];}
function updateCompactPrintLists(){
 for(const [id,label,values,countLabel] of [
  ["diagnosisPrintList","Hastalıklar",diagnosisNames(),"Hastalık sayısı"],
  ["medicationPrintList","İlaçlar",dynamicList("medication"),"İlaç sayısı"],
  ["surgeryPrintList","Ameliyatlar",dynamicList("surgery"),"Ameliyat sayısı"]]){
  const el=byId(id);if(el)el.textContent=label+": "+(values.length?values.join(", "):"Kayıt yok")+". "+countLabel+": "+values.length;
 }
}
function migrateOldValues(values){
 const out={...values};
 if(out.oz_8_1===true&&!out.alerji)out.alerji="Var";
 if(out.oz_8_1_note&&!out.alerjiNot)out.alerjiNot=out.oz_8_1_note;
 if(out.oz_8_2===true&&!out.disDurumu)out.disDurumu="Diğer";
 if(out.oz_8_2_note&&!out.disNot)out.disNot=out.oz_8_2_note;
 for(const key of Object.keys(out)){
  const match=key.match(/^med_(\d+)_frequency$/);if(!match||!String(out[key]||"").trim())continue;
  const doseKey="med_"+match[1]+"_dose";
  out[doseKey]=[out[doseKey],out[key]].filter(x=>String(x||"").trim()).join(" · ");
 }
 return out;
}
function migrateLegacyDraft(values){
 const out=migrateOldValues(values||{});
 const extraNotes=[],oldToManual=[];
 for(let i=0;i<LEGACY_HISTORY.length;i++){
  for(let j=0;j<LEGACY_HISTORY[i][1].length;j++){
   const key="oz_"+i+"_"+j;
   if(["oz_1_2","oz_8_1","oz_8_2"].includes(key))continue;
   const selected=values?.[key]===true,note=String(values?.[key+"_note"]||"").trim();
   if(!selected&&!note)continue;
   if(key==="oz_5_2"&&selected){out.osteoFracture=true;if(note)out.osteoFracture_note=note;continue;}
   const mapped=LEGACY_TO_NEW[key];
   if(selected&&mapped&&!note){out[mapped]=true;continue;}
   const name=mapped?(()=>{
    const [,category,index]=mapped.split("_").map((part,i)=>i?Number(part):part);
    return DATA.history[category]?.[1]?.[index]||LEGACY_HISTORY[i][1][j];
   })():LEGACY_HISTORY[i][1][j];
   if(selected)oldToManual.push({name,date:note});
   else extraNotes.push(name+": "+note);
  }
 }
 for(const item of oldToManual){
  makeEntry("diagnosis");
  const id=entrySequence;out["diag_"+id+"_name"]=item.name;
  if(item.date)out["diag_"+id+"_date"]=item.date;
 }
 for(const type of ["medication"]){
  for(const id of Array.from(byId("medicationList").querySelectorAll(".dynamic-entry")).map(row=>row.dataset.entryId)){
   const note=String(out["med_"+id+"_note"]||"").trim();
   if(note)extraNotes.push("İlaç "+(out["med_"+id+"_name"]||id)+": "+note);
  }
 }
 const diagNotes=extraNotes.filter(t=>!t.startsWith("İlaç "));
 const medNotes=extraNotes.filter(t=>t.startsWith("İlaç "));
 if(diagNotes.length)out.diagnosisGeneralNote=[out.diagnosisGeneralNote,...diagNotes].filter(Boolean).join("\n");
 if(medNotes.length)out.medicationGeneralNote=[out.medicationGeneralNote,...medNotes].filter(Boolean).join("\n");
 return out;
}

function migrateBeforeV5(values){
 const out={...values};
 if(out.dx_8_0===true){out.dx_8_1=true;out.dx_8_0=false;}
 const text=String(out.ameliyat||"").trim();
 if(text)out.surgeryGeneralNote=[out.surgeryGeneralNote,text].filter(Boolean).join("\n");
 if(out.oz_1_2===true){
  const src="surgeryPick_1";
  makeEntry("surgery",null,src);
  out[src]=true;out["surg_"+entrySequence+"_name"]=SURGERY_OPTIONS[1];
  if(out.oz_1_2_note)out["surg_"+entrySequence+"_date"]=String(out.oz_1_2_note);
 }
 return out;
}
function refreshEntryCounts(){
 renderSelectedDiagnoses();
 for(const type of ["diagnosis","medication","surgery"])updateEntryNumbers(type);
 updateCompactPrintLists();syncHistoryPicker();syncSurgeryPicker();
}
function initializeFirstPageDefaults(){
 if(!byId("basvuru").value)byId("basvuru").value=localToday();
 for(const type of ["diagnosis","medication","surgery"])if(!entryIds(type).length)makeEntry(type);
 updateDerivedFields();refreshEntryCounts();
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
function convertLegacySurgeryDates(values){
 const output={...(values||{})};
 for(const [key,checked] of Object.entries(output)){
  if(!/^surg_\d+_unknown$/.test(key))continue;
  if(checked===true){
   const dateKey=key.replace(/_unknown$/,"_date");
   output[dateKey]="Hatırlamıyor";
  }
  delete output[key];
 }
 return output;
}
function hydrate(values){
 // Convert legacy surgery "Hatırlamıyor" checkboxes into free-text date entries.
 values=convertLegacySurgeryDates(values);
 // Preserve hearing-aid selections saved by the earlier radio-button layout.
 const earlierHearing=["Yok","Var","Var ama kullanmıyor"].find(option=>values?.["isitmeCihazi::"+option]===true);
 if(earlierHearing&&!values?.isitmeCihazi&&byId("isitmeCihazi"))byId("isitmeCihazi").value=earlierHearing;
 for(const [key,value] of Object.entries(values||{})){
  const el=key.includes("::")?document.querySelector('input[name="'+CSS.escape(key.split("::")[0])+'"][value="'+CSS.escape(key.split("::")[1])+'"]'):byId(key);
  if(!el||!el.hasAttribute("data-field"))continue;
  if(el.type==="checkbox"||el.type==="radio")el.checked=value===true;
  else el.value=String(value??"");
 }
 // Dynamic diagnosis-date inputs are created after their checkboxes are hydrated.
 renderSelectedDiagnoses();
 for(const [key,value] of Object.entries(values||{})){
  if(!/^dxdate_dx_\d+_\d+$/.test(key))continue;
  const date=byId(key);if(date)date.value=String(value??"");
 }
}
function signature(i){return JSON.stringify(fieldsOnPage(i).map(el=>[el.id||el.name+"::"+el.value,el.type==="checkbox"||el.type==="radio"?el.checked:el.value]));}
function pageHasData(i){return fieldsOnPage(i).some(el=>{
 if(el.id==="basvuru"||el.readOnly)return false;
 return el.type==="checkbox"||el.type==="radio"?el.checked:String(el.value||"").trim()!=="";
});}
function refreshTabs(){
 for(let i=0;i<4;i++){
  const t=byId("tab"+i),has=pageHasData(i),done=has&&confirmed[i]===signature(i);
  t.setAttribute("aria-selected",String(i===step));
  t.dataset.progress=done?"full":has?"partial":"empty";
  t.querySelector(".tab-state").textContent=done?"✓ Kaydedildi":has?"◐ Devam ediyor":"— Boş";
 }
 byId("prev").disabled=step===0;byId("next").disabled=step===3;
 const historyCount=byId("historyCount");
 if(historyCount){
  const selected=checkedDiseases().length;
  historyCount.textContent=selected?"("+selected+" kayıtlı bulgu)":"";
 }
 byId("printSummaryBottom").textContent="Sekme Özeti Yazdır";
 byId("resetPageBottom").textContent="Sekmeyi Sıfırla";
 byId("markComplete").textContent="Sekmeyi Kaydet ve Geç";
}
function go(i){
 step=Math.max(0,Math.min(3,i));
 for(let j=0;j<4;j++){byId("page"+j).hidden=j!==step;byId("page"+j).setAttribute("aria-hidden",String(j!==step));}
 refreshTabs();byId("content").scrollIntoView({behavior:"auto",block:"start"});
}
let pendingResetAction=null;
function toast(message,bad=false){
 const el=byId("toast");if(!el)return;
 clearTimeout(toastTimer);
 el.textContent=message;
 el.dataset.kind=bad?"error":"success";
 el.hidden=false;
 toastTimer=setTimeout(()=>{el.hidden=true;},4200);
}
function saveFeedback(message,kind="success"){
 const el=byId("saveStatus");if(!el)return;
 el.textContent=message;el.dataset.kind=kind;
}
function save(manual=false){
 let saved=false;
 try{
  sessionStorage.setItem(STORE,JSON.stringify({version:5,values:readData(),entries:{
   diagnosis:entryIds("diagnosis"),medication:entryIds("medication"),surgery:entryIds("surgery")
  },surgerySources:surgeryLinks(),riskOverrides,confirmed,active:step,savedAt:new Date().toISOString()}));
  saved=true;
 }catch(error){
  saveFeedback("⚠ Kaydedilemedi — tarayıcı depolaması kullanılamıyor.","error");
  toast("⚠ Taslak kaydedilemedi. Verileri kaybetmemek için yazdırın.",true);
 }
 if(saved&&manual){
  const when=new Date().toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"});
  saveFeedback("✓ Taslak kaydedildi · "+when,"success");
  toast("✓ Taslak başarıyla kaydedildi");
 }
 refreshTabs();
 return saved;
}
function requestReset(title,description,action){
 const dialog=byId("resetConfirmDialog");
 if(!dialog||typeof dialog.showModal!=="function"){
  if(window.confirm(title+": "+description+"\nDevam etmek istiyor musunuz?")&&
     window.confirm("SON ONAY: Bu verileri kalıcı olarak sıfırlamayı kabul ediyor musunuz?"))action();
  return;
 }
 if(dialog.open)dialog.close();
 byId("resetDialogTitle").textContent=title;
 byId("resetDialogDescription").textContent=description;
 byId("resetStageOne").hidden=false;
 byId("resetStageTwo").hidden=true;
 pendingResetAction=action;
 dialog.showModal();
}
function setupResetDialog(){
 const dialog=byId("resetConfirmDialog");
 if(!dialog)return;
 const cancel=()=>{pendingResetAction=null;if(dialog.open)dialog.close();};
 byId("resetCancelFirst").addEventListener("click",cancel);
 byId("resetCancelSecond").addEventListener("click",cancel);
 byId("resetContinue").addEventListener("click",()=>{
  byId("resetStageOne").hidden=true;
  byId("resetStageTwo").hidden=false;
  byId("resetConfirmFinal").focus();
 });
 byId("resetConfirmFinal").addEventListener("click",()=>{
  const action=pendingResetAction;
  pendingResetAction=null;
  if(dialog.open)dialog.close();
  if(typeof action==="function")action();
 });
 dialog.addEventListener("cancel",()=>{pendingResetAction=null;});
 dialog.addEventListener("close",()=>{pendingResetAction=null;});
 dialog.addEventListener("click",event=>{if(event.target===dialog)cancel();});
}
function resetSection(section){
 if(!section||!section.classList.contains("block"))return;
 const title=section.querySelector(".block-heading h3")?.textContent.trim()||"Bu bölüm";
 // Section reset is a quick local action: unlike tab/form reset it needs no confirmation.
 section.querySelectorAll("[data-field]").forEach(el=>{
  if(el.type==="checkbox"||el.type==="radio")el.checked=false;
  else if(el.tagName==="SELECT")el.selectedIndex=0;
  else el.value="";
 });
 if(section.querySelector("#diagnosisList")){removeEntries("diagnosis");makeEntry("diagnosis");}
 if(section.querySelector("#medicationList")){removeEntries("medication");makeEntry("medication");}
 if(section.querySelector("#surgeryList")){removeEntries("surgery");makeEntry("surgery");syncSurgeryDateInputs();}
 if(section.querySelector("#osteoParent"))riskOverrides={};
 if(section.querySelector("#basvuru"))initializeFirstPageDefaults();
 updateDerivedFields();updateSexSpecific();syncOsteoporosisRisk();refreshEntryCounts();
 delete confirmed[step];
 save();
 saveFeedback("↺ “"+title+"” bölümü sıfırlandı.","reset");
 toast("↺ "+title+" bölümü sıfırlandı");
}
function resetPage(){
 const current=step;
 requestReset("Sekmeyi Sıfırla",(current+1)+". sekmedeki bütün yanıtlar silinecek. Diğer sekmeler korunacaktır.",()=>{
  fieldsOnPage(current).forEach(el=>{
   if(el.type==="checkbox"||el.type==="radio")el.checked=false;
   else if(el.tagName==="SELECT")el.selectedIndex=0;
   else el.value="";
  });
  if(current===0){
   for(const type of ["diagnosis","medication","surgery"])removeEntries(type);
   initializeFirstPageDefaults();
  }
  if(current===1)riskOverrides={};
  updateDerivedFields();updateSexSpecific();syncOsteoporosisRisk();refreshEntryCounts();
  delete confirmed[current];
  save();
  saveFeedback("↺ "+(current+1)+". sekme sıfırlandı.","reset");
  toast("✓ "+(current+1)+". sekme sıfırlandı");
 });
}
function resetAll(){
 requestReset("Bütün Formu Sıfırla","Dört sekmenin tamamındaki bilgiler ve geçici taslak silinecek.",()=>{
  document.querySelectorAll("[data-field]").forEach(el=>{
   if(el.type==="checkbox"||el.type==="radio")el.checked=false;
   else if(el.tagName==="SELECT")el.selectedIndex=0;
   else el.value="";
  });
  for(const type of ["diagnosis","medication","surgery"])removeEntries(type);
  confirmed={};riskOverrides={};
  initializeFirstPageDefaults();updateSexSpecific();syncOsteoporosisRisk();refreshEntryCounts();
  try{sessionStorage.removeItem(STORE);}catch(error){}
  go(0);
  saveFeedback("↺ Bütün form sıfırlandı.","reset");
  toast("✓ Bütün form sıfırlandı");
 });
}

function formatSummaryValue(raw,type){
 const s=String(raw??"").trim();
 if(/^\d{4}-\d{2}-\d{2}$/.test(s)){const [y,m,d]=s.split("-");return d+"."+m+"."+y;}
 return s;
}
function summarizedBlockItems(block){
 if(block.querySelector("#surgeryList")){
  const values=dynamicList("surgery"),note=byId("surgeryGeneralNote")?.value.trim()||"";
  return ["Geçirdiği Ameliyatlar: "+(values.join(", ")||"Kayıt yok"),"Ameliyat sayısı: "+values.length,
   ...(note?["Ameliyatlarla ilgili ek açıklama: "+note]:[])];
 }
 if(block.querySelector("#diagnosisList")){
  const values=diagnosisNames(),note=byId("diagnosisGeneralNote")?.value.trim()||"";
  return ["Tanılar ve Hastalıklar: "+(values.join(", ")||"Kayıt yok"),"Hastalık sayısı: "+values.length,...(note?["Genel açıklama: "+note]:[])];
 }
 if(block.querySelector("#medicationList")){
  const values=dynamicList("medication"),note=byId("medicationGeneralNote")?.value.trim()||"";
  return ["Kullandığı İlaçlar: "+(values.join(", ")||"Kayıt yok"),"İlaç sayısı: "+values.length,...(note?["Ek not: "+note]:[])];
 }
 const items=[];
 block.querySelectorAll(".checknote,.preventive-item,.risk-row,.risk-choice,.field").forEach(item=>{
  if(item.closest("[data-sex-only][hidden], #menopozDetail[hidden]"))return;
  if(item.classList.contains("field")&&item.closest(".dynamic-entry,.risk-row,.preventive-item"))return;
  if(item.classList.contains("preventive-item")){
   if(item.querySelector(".preventive-two"))return;
   const title=item.querySelector(".preventive-title")?.textContent.trim()||"Tarama";
   const text=Array.from(item.querySelectorAll(".preventive-fields input")).map(input=>{
    const value=formatSummaryValue(input.value,input.type);
    const label=input.closest(".field")?.querySelector("label")?.textContent.trim()||"Bilgi";
    return value?label+": "+value:"";
   }).filter(Boolean);
   if(text.length)items.push(title+" — "+text.join("; "));
  }else if(item.classList.contains("risk-row")){
   const checkbox=item.querySelector('input[type="checkbox"]');
   const title=item.querySelector(".risk-choice")?.textContent.trim()||"Osteoporoz";
   const note=item.querySelector('.field input')?.value.trim()||"";
   if(checkbox?.checked||note)items.push(title+": "+(checkbox?.checked?"Var":"Not girildi")+(note?" ("+note+")":""));
  }else if(item.classList.contains("risk-choice")){
   if(item.closest(".risk-row"))return;
   const checkbox=item.querySelector('input[type="checkbox"]');
   if(checkbox?.checked)items.push(item.textContent.trim());
  }else if(item.classList.contains("checknote")){
   const checkbox=item.querySelector('input[type="checkbox"]');
   const value=item.querySelector(".note-input")?.value.trim()||"";
   if(!checkbox?.checked&&!value)return;
   let label=item.querySelector(".check-head span")?.textContent.trim()||"Bulgu";
   const group=item.closest(".group")?.querySelector("h4")?.textContent.trim();
   if(group)label=group+" — "+label;
   items.push(label+(checkbox?.checked?"": " (yalnızca not)")+(value?": "+value:""));
  }else if(item.classList.contains("field")){
   const label=(item.querySelector(":scope > label, :scope > .field-label")?.textContent||"").trim();
   const radios=Array.from(item.querySelectorAll('input[type="radio"]'));
   if(radios.length){
    const checked=radios.find(input=>input.checked);
    if(checked)items.push(label+": "+checked.value);
   }else{
    const values=Array.from(item.querySelectorAll('[data-field]:not([type="hidden"])'))
     .map(input=>formatSummaryValue(input.value,input.type)).filter(Boolean);
    if(values.length)items.push((label||"Bilgi")+": "+values.join(" · "));
    if(item.querySelector("#dogumyili")?.value.trim()&&!byId("dogumtarihi")?.value)
     items.push("Önceki taslaktan doğum yılı (gün ve ay bilinmiyor): "+byId("dogumyili").value.trim());
   }
  }
 });
 return items;
}
function makeSummaryNode(tag,txt,cls=""){
 const node=document.createElement(tag);node.textContent=txt;
 if(cls)node.className=cls;return node;
}
function summarySections(i){
 return Array.from(byId("page"+i).querySelectorAll(".block")).map(block=>({
  title:block.querySelector("h3")?.textContent?.trim()||"Değerlendirme",
  items:summarizedBlockItems(block)
 })).filter(section=>section.items.length);
}
function summaryAsText(i=null){
 const indices=i===null?[0,1,2,3]:[i];
 const lines=["İTF Geriatri — Online İlk Muayene Formu",
  i===null?"BÜTÜN FORM ÖZETİ":(i+1)+". SEKME ÖZETİ — "+LABELS[i],
  "Hazırlanma: "+new Date().toLocaleString("tr-TR")];
 const name=byId("ad")?.value.trim()||"",protocol=byId("proto")?.value.trim()||"";
 const date=byId("basvuru")?.value||"";
 if(name)lines.push("Hasta: "+name);
 if(protocol)lines.push("Protokol: "+protocol);
 if(date)lines.push("Başvuru: "+formatSummaryValue(date,"date"));
 for(const num of indices){
  const sections=summarySections(num);
  if(i===null)lines.push("","\u2501 ".repeat(4)+(num+1)+". "+LABELS[num]+" \u2501".repeat(4));
  if(!sections.length){lines.push("Değerlendirme girilmemiş.");continue;}
  for(const section of sections)lines.push("","— "+section.title+" —",...section.items.map(item=>"• "+item));
 }
 lines.push("","Not: Listelenmeyen bulgular normal veya negatif kabul edilmemelidir.");
 return lines.join("\n");
}
async function copySummaryText(content){
 let success=false;
 try{
  if(navigator.clipboard&&window.isSecureContext){
   await navigator.clipboard.writeText(content);success=true;
  }
 }catch(error){}
 if(!success){
  try{
   const area=document.createElement("textarea");
   area.value=content;area.setAttribute("aria-hidden","true");
   area.style.position="fixed";area.style.left="-9999px";
   document.body.appendChild(area);area.select();
   success=!!document.execCommand("copy");area.remove();
  }catch(error){}
 }
 toast(success?"✓ Özet panoya kopyalandı":"Özet kopyalanamadı; tarayıcının pano iznini kontrol edin.",!success);
}
function copyOneSummary(){return copySummaryText(summaryAsText(step));}
function buildPrintSummary(i=null){
 const sheet=byId("summaryPrintSheet");sheet.replaceChildren();
 sheet.appendChild(makeSummaryNode("h1",i===null?"Bütün Form Özeti":(i+1)+". Sekme Özeti — "+LABELS[i]));
 sheet.appendChild(makeSummaryNode("p","İTF Geriatri · Online İlk Muayene Formu · "+new Date().toLocaleString("tr-TR"),"summary-subtitle"));
 const meta=document.createElement("div");meta.className="summary-meta";
 const name=byId("ad")?.value.trim(),protocol=byId("proto")?.value.trim(),date=byId("basvuru")?.value;
 if(name)meta.appendChild(makeSummaryNode("span","Hasta: "+name));
 if(protocol)meta.appendChild(makeSummaryNode("span","Protokol: "+protocol));
 if(date)meta.appendChild(makeSummaryNode("span","Başvuru: "+formatSummaryValue(date,"date")));
 if(meta.children.length)sheet.appendChild(meta);
 let total=0;
 const numbers=i===null?[0,1,2,3]:[i];
 for(const num of numbers){
  if(i===null)sheet.appendChild(makeSummaryNode("h2",(num+1)+". "+LABELS[num],"summary-tab-heading"));
  for(const entry of summarySections(num)){
   total+=entry.items.length;
   const section=document.createElement("section");
   section.appendChild(makeSummaryNode(i===null?"h3":"h2",entry.title));
   const ul=document.createElement("ul");
   for(const value of entry.items)ul.appendChild(makeSummaryNode("li",value));
   section.appendChild(ul);sheet.appendChild(section);
  }
 }
 if(!total)sheet.appendChild(makeSummaryNode("p","Formda henüz girilmiş değerlendirme bulunmuyor.","summary-empty"));
 sheet.appendChild(makeSummaryNode("p","Yalnızca işaretlenen veya bilgi girilen alanlar listelenmiştir. Listelenmeyen bulgular normal veya negatif kabul edilmemelidir.","summary-note"));
}
function printSummary(i){
 if(!save())return;
 buildPrintSummary(i);
 document.body.classList.add("printing-summary");
 try{window.print();}
 catch(error){
  document.body.classList.remove("printing-summary");
  toast("Yazdırma başlatılamadı. Tarayıcı ayarlarını kontrol edin.",true);
 }
}
function printOneSummary(){printSummary(step);}
function printWholeForm(){
 if(!save())return;
 document.body.classList.remove("printing-summary");
 try{window.print();}
 catch(error){toast("Yazdırma başlatılamadı.",true);}
}
function renderWholeSummary(){
 const body=byId("wholeSummaryBody");
 body.replaceChildren();
 const heading=makeSummaryNode("p","İTF Geriatri — Online İlk Muayene Formu","summary-overview-heading");
 body.appendChild(heading);
 const name=byId("ad")?.value.trim();
 if(name)body.appendChild(makeSummaryNode("p","Hasta: "+name));
 for(let i=0;i<4;i++){
  const section=document.createElement("section");
  section.appendChild(makeSummaryNode("h3",(i+1)+". "+LABELS[i]));
  const entries=summarySections(i);
  if(!entries.length)section.appendChild(makeSummaryNode("p","Henüz doldurulmadı.","summary-empty"));
  for(const entry of entries){
   section.appendChild(makeSummaryNode("h4",entry.title));
   const ul=document.createElement("ul");
   for(const item of entry.items)ul.appendChild(makeSummaryNode("li",item));
   section.appendChild(ul);
  }
  body.appendChild(section);
 }
}
function openWholeSummary(){
 if(!save())return;
 renderWholeSummary();
 const dialog=byId("wholeSummaryDialog");
 if(typeof dialog.showModal==="function")dialog.showModal();
 else{toast("Tarayıcı özet penceresini açamıyor. Yazdırma ile devam edin.",true);}
}
function setupWholeSummary(){
 byId("wholeSummary").addEventListener("click",openWholeSummary);
 const dialog=byId("wholeSummaryDialog");
 byId("wholeSummaryClose").addEventListener("click",()=>dialog.close());
 dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close();});
 byId("wholeSummaryCopy").addEventListener("click",()=>copySummaryText(summaryAsText(null)));
 byId("wholeSummaryPrint").addEventListener("click",()=>{
  dialog.close();
  printSummary(null);
 });
}

function initialize(){
 build();
 let restored;
 try{restored=JSON.parse(sessionStorage.getItem(STORE)||"null");}catch(e){restored=null;}
 if([2,3,4,5].includes(restored?.version)){
  for(const type of ["diagnosis","medication"])(restored.entries?.[type]||[]).slice(0,200).forEach(id=>makeEntry(type,id));
  if(restored.version===5){
   const links=Array.isArray(restored.surgerySources)?restored.surgerySources:[];
   (restored.entries?.surgery||[]).slice(0,200).forEach(id=>{
    const source=links.find(item=>Number(item.id)===Number(id))?.source||"";
    makeEntry("surgery",id,source);
   });
  }
  const old=restored.version<4?migrateLegacyDraft(restored.values||{}):restored.values||{};
  hydrate(restored.version===5?old:migrateBeforeV5(old));
  riskOverrides=restored.version>=3?restored.riskOverrides||{}:{};
  confirmed=restored.version===5?restored.confirmed||{}:{};
  step=Number.isInteger(restored.active)?Math.max(0,Math.min(3,restored.active)):0;
 }else if(restored?.version===1){
  const old=restored.values||{};
  for(let i=0;i<10;i++)if((old["tani_"+i]||"").trim()||old["tanitarih_"+i]){
   makeEntry("diagnosis");
   const id=entrySequence;byId("diag_"+id+"_name").value=old["tani_"+i]||"";
   byId("diag_"+id+"_date").value=old["tanitarih_"+i]||"";
  }
  if((old.ilaclar||"").trim()){makeEntry("medication");byId("med_"+entrySequence+"_name").value=old.ilaclar;}
  hydrate(migrateBeforeV5(migrateLegacyDraft(old)));confirmed={};
  step=Number.isInteger(restored.active)?Math.max(0,Math.min(3,restored.active)):0;
 }
 initializeFirstPageDefaults();
 updateSexSpecific();syncOsteoporosisRisk();syncSurgeryDateInputs();refreshEntryCounts();
 if(restored?.savedAt){
  const when=new Date(restored.savedAt);
  if(!Number.isNaN(when.getTime()))saveFeedback("✓ Geçici taslak yüklendi · "+when.toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"}),"success");
 }
 for(let i=0;i<4;i++)byId("tab"+i).addEventListener("click",()=>{save();go(i);save();});
 byId("prev").addEventListener("click",()=>{save();go(step-1);save();});
 byId("next").addEventListener("click",()=>{save();go(step+1);save();});
 byId("save").addEventListener("click",()=>save(true));
 byId("print").addEventListener("click",printWholeForm);
 byId("printSummaryBottom").addEventListener("click",printOneSummary);
 byId("copySummaryBottom").addEventListener("click",copyOneSummary);
 setupWholeSummary();
 window.addEventListener("beforeprint",()=>{
  updateCompactPrintLists();
  const catalog=byId("historyCatalog");if(catalog){catalog.dataset.wasOpen=String(catalog.open);catalog.open=true;}
  document.querySelectorAll("textarea[data-field]").forEach(el=>{el.dataset.previousHeight=el.style.height||"";el.style.height=el.scrollHeight+"px";});
 });
 window.addEventListener("afterprint",()=>{
  document.querySelectorAll("textarea[data-field]").forEach(el=>{el.style.height=el.dataset.previousHeight||"";delete el.dataset.previousHeight;});
  const catalog=byId("historyCatalog");if(catalog&&catalog.dataset.wasOpen!==undefined){catalog.open=catalog.dataset.wasOpen==="true";delete catalog.dataset.wasOpen;}
  document.body.classList.remove("printing-summary");
  byId("summaryPrintSheet").replaceChildren();
 });
 setupResetDialog();
 byId("resetPageBottom").addEventListener("click",resetPage);
 byId("resetAll").addEventListener("click",resetAll);
 byId("markComplete").addEventListener("click",()=>{
  const current=step,filled=pageHasData(current);
  if(filled)confirmed[current]=signature(current);else delete confirmed[current];
  if(!save(true))return;
  if(current<3){go(current+1);save();toast(filled?"✓ "+(current+1)+". sekme kaydedildi; sonraki sekmeye geçildi":"Boş sekme geçildi; tamamlandı olarak işaretlenmedi");}
  else toast(filled?"✓ Son sekme kaydedildi":"Son sekme boş olarak bırakıldı");
 });
 byId("pages").addEventListener("click",event=>{
  const reset=event.target.closest("[data-reset-section]");
  if(reset){resetSection(reset.closest(".block"));return;}
  const catalogToggle=event.target.closest("[data-toggle-disease-list]");
  if(catalogToggle){const catalog=byId("historyCatalog");catalog.open=!catalog.open;syncHistoryPicker();return;}
  const surgeryToggle=event.target.closest("[data-toggle-surgery-list]");
  if(surgeryToggle){const catalog=byId("surgeryCatalog");catalog.open=!catalog.open;syncSurgeryPicker();return;}
  const deselect=event.target.closest("[data-unselect-disease]");
  if(deselect){
   const checkbox=byId(deselect.dataset.unselectDisease);
   if(checkbox){checkbox.checked=false;refreshEntryCounts();save();}
   return;
  }
  const add=event.target.closest("[data-add-entry]");
  if(add){makeEntry(add.dataset.addEntry);save();return;}
  const remove=event.target.closest("[data-remove-entry]");
  if(remove){
   const card=remove.closest(".dynamic-entry"),type=card.dataset.entryType;
   if(type==="surgery"&&card.dataset.surgerySource){const choice=byId(card.dataset.surgerySource);if(choice)choice.checked=false;}
   card.remove();
   if(type==="surgery"&&!entryIds("surgery").length)makeEntry("surgery");
   refreshEntryCounts();save();toast("Kayıt silindi");
  }
 });
 byId("historyCatalog").addEventListener("toggle",syncHistoryPicker);
 byId("surgeryCatalog").addEventListener("toggle",syncSurgeryPicker);
 byId("pages").addEventListener("input",event=>{
  // Keep the active date input mounted so users can type normally without losing focus.
  if(event.target.matches("[data-disease-date]")){updateCompactPrintLists();save();return;}
  if(event.target.id==="tc")event.target.value=event.target.value.replace(/\D/g,"").slice(0,11);
  if(["osteoParent","osteoSmoke","osteoAlcohol"].includes(event.target.id))riskOverrides[event.target.id]=true;
  updateDerivedFields();updateSexSpecific();syncOsteoporosisRisk();refreshEntryCounts();save();
 });
 byId("pages").addEventListener("change",event=>{
  if(event.target.matches("[data-disease-date]")){updateCompactPrintLists();save();return;}
  if(["osteoParent","osteoSmoke","osteoAlcohol"].includes(event.target.id))riskOverrides[event.target.id]=true;
  if(event.target.matches("[data-surgery-choice]"))addSurgeryFromPicker(event.target);
  updateDerivedFields();updateSexSpecific();syncOsteoporosisRisk();refreshEntryCounts();save();
 });
 window.addEventListener("pagehide",()=>save());
 go(step);
}
document.addEventListener("DOMContentLoaded",initialize);
