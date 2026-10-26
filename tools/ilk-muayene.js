"use strict";
const DATA={"history":[["Göz",["Katarakt","Glokom","Makular Dejenerasyon"]],["Kardiyovasküler",["KAH","MI","Bypass Öyküsü","Hipertansiyon","Aritmi","Kalp Yetmezliği"]],["Üriner",["Böbrek Hastalığı","Prostat Hastalığı","Sık İYE"]],["Pulmoner",["Bronşiyal Astım","KOAH"]],["Gastrointestinal",["Peptik Ülser","Karaciğer Hastalığı","Kolelitiyazis"]],["Lokomotor",["Osteoartrit","Osteoporoz","Fraktür"]],["Nöro-Psikiyatrik",["SVO","Parkinson","Epilepsi","Demans","Depresyon"]],["Endokrin",["Hipertiroidi","Hipotiroidi","Guatr","DM"]],["Diğer",["Kanser"]]],"family":["Demans","Hipertansiyon","DM","SVO","Depresyon","Hiperlipidemi","KAH","Annede Osteoporoz","Anne / Babada Kalça Kırığı (osteoporotik / hafif travma)"],"vaccines":["İnfluenza","Pnömokok (Prevenar-20, KPA-13, PPSV23)","Tetanoz-Difteri-Aselüler Boğmaca (Tdap)","Herpes Zoster","RSV"],"screens":["Mamografi","GGK","Rektosigmoidoskopi","Kolonoskopi","sPSA / PSA","Kemik Mineral Yoğunluk Ölçümü (T skorları)","Pap Smear","Abdominal US (AAA Taraması)"],"symptoms":[["Halsizlik","Kilo Kaybı","Ateş","İştahsızlık","Ağrı","Baş Ağrısı","Bel Ağrısı","Eklem Ağrısı","Ağrının Şiddeti (0–10)","Baş Dönmesi","Göğüs Ağrısı","Çarpıntı","Ortopne","Öksürük","Nefes Darlığı","PND","Balgam","Hemoptizi","Protez Öyküsü","Kalça Dışı Kırık"],["Cinsel İlişki","Empotans","Erektil Disfonksiyon","Ejekülasyon Sorunu","Üriner İnkontinans","Kaç Kez","Sıkışma","Stres (Öksürme, Ikınma)","Gece","BPH Semptomları","Kesik Kesik İdrar","Sık İdrar","Çatallanma","Tam Boşaltamama Hissi","İdrar Debisinde Azalma","Yürüme Sorunu","Baston Kullanımı","Düşme Öyküsü","Kalça-Femur Kırığı","Dekübit Riski"],["Kasık Ağrısı","Dizüri","Tremor","Noktüri","Polidipsi","Poliüri","Dispepsi","Boyda Kısalma","Fekal İnkontinans","İnatçı Kabızlık","Sık İshal","Kusma","Bulantı","Gaz","Şişkinlik","Karın Ağrısı","Memede Kitle","Memede Akıntı","Memede Ağrı","Diğer"]],"cognition":[["İlaç Takibinde Zorlanma","Hobilere İlgide Azalma","Kelime Bulma Güçlüğü","İsimleri Unutma","İnsanları Karıştırma","Torun Adları","Gazete, Kitap, TV Takibinde Sorun","Eşya Kaybetme"],["Hesap, Alışveriş","Aynı Konuları Tekrar Tekrar Sorma","Yeni Olayları Hatırlayamama","Kişilik Değişikliği","Yolları Karıştırma","Kaybolma","Adresleri Unutma","Evde Odaları Karıştırma","Afazi","Apraksi","Agnozi"]],"behavior":["Halüsinasyon","Sanrı","Anksiyete","Ajitasyon","Uyku Sorunu","Amaçsız Gezinme"],"mood":["Uyku Süresi","Uykuyu Başlatmada Güçlük","Uykuyu Sürdürmede Güçlük","Uyanma Sebebi","Sık Ağlama","İsteksizlik","Can Sıkıntısı","Somatik Yakınmalarda Artış","Ölüm İsteği","İntihar Düşüncesi"],"exam":[["Genel Durum",["Şuur","Kooperasyon","Oryantasyon","Ödem","İkter","Siyanoz","LA","Solukluk"]],["Baş ve Boyun",["Pupiller","Ağız İçi","LAP","Karotis Üfürümü","Tiroid"]],["Kardiyovasküler Sistem",["Sağ Kol Tansiyon","Sol Kol Tansiyon","Ortostatik Hipotansiyon","Nabız","S1","S2","Ek Ses","Üfürüm","Boyun Venöz Dolgunluk","Pretibial Ödem","Nabızlar"]],["Solunum Sistemi",["Ral","Ronküs","Siyanoz","Solunum Sayısı"]],["Batın",["Hepatomegali","Splenomegali","Traube Alanı","Asit","Hassasiyet","Defans","Rebound","Kitle"]],["Meme Muayenesi",["Aksiller LAP","Meme Muayenesi"]],["Lokomotor Sistem",["Ekstremite Uzunluğu Simetrisi","Deformite","Hareket Kısıtlılığı","Artrit","Artralji"]]],"neuro":[["Motor",["Üst Ekstremite","Alt Ekstremite"]],["Duyu",["Yüzeyel","Derin"]],["Patolojik Refleksler",["Mayerson","Palmomental Refleks","Yakalama Refleksi","Babinski (Taban Deri Refleksi)","Romberg"]],["Ekstrapiramidal Bulgular",["Bradikinezi","Rijidite","Alt Beden Yarısı Parkinsonizmi","İstirahat Tremoru","Postural Tremor","İntentional Tremor","Postural İnstabilite"]],["Göz Hareketleri",["Horizontal Bakış Kısıtlılığı","Vertikal Bakış Kısıtlılığı","Nistagmus"]],["Serebellar Testler",["Disdiadokinezi","Ataksi","Dizartri","Ardışık Hareketler"]]]};
const STORE="itf_ilk_muayene_v1_session";
const LABELS=["Başvuru ve Anamnez","Soygeçmiş ve Koruyucu Hekimlik","Sistem, Biliş ve Duygudurum","Fizik Muayene ve Ön Tanılar"];
let step=0,confirmed={},toastTimer,entrySequence=0,riskOverrides={};
const byId=id=>document.getElementById(id);
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function f(id,label,type="text",cls="",placeholder=""){
 return '<div class="field '+cls+'"><label for="'+id+'">'+esc(label)+'</label><input data-field id="'+id+'" type="'+type+'"'+(type==="number"?' step="any" inputmode="decimal"':"")+' placeholder="'+esc(placeholder)+'" autocomplete="off"></div>';
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
 return '<details class="medical-history-disclosure" id="historyCatalog">'+
 '<summary>Özgeçmişteki hastalıkları seçin <span id="historyCount"></span></summary>'+
 '<div class="history-catalog-content">'+
 DATA.history.map((group,i)=>'<div class="group"><h4>'+esc(group[0])+'</h4><div class="bullets">'+
  group[1].map((name,j)=>i===1&&j===2?"":check(name,"oz_"+i+"_"+j)).join("")+'</div></div>').join("")+
 '</div></details>';
}
function riskQuestion(id,label){
 return '<div class="risk-row"><label class="risk-choice" for="'+id+'"><input type="checkbox" id="'+id+'" data-field> '+esc(label)+'</label>'+
 f(id+"_note","Açıklama / tarih")+'</div>';
}
function twoColumns(arr,prefix){return '<div class="symptom-columns" style="grid-template-columns:repeat('+arr.length+',minmax(0,1fr))">'+arr.map((group,i)=>
 '<div class="checklist">'+group.map((label,j)=>check(label,prefix+'_'+i+'_'+j)).join('')+'</div>').join('')+'</div>';}

const ENTRY_META={
 diagnosis:{container:"diagnosisList",prefix:"diag",fields:[["name","Hastalık / Tanı","text"],["date","Tanı yılı / tarih","text"]]},
 medication:{container:"medicationList",prefix:"med",fields:[["name","İlaç adı","text"],["dose","Doz ve Kullanım Sıklığı","text"],["note","Ek Not","text"]]}
};
function makeEntry(type,explicitId=null){
 const conf=ENTRY_META[type];if(!conf)return;
 const id=explicitId===null?++entrySequence:Number(explicitId);
 if(!Number.isSafeInteger(id)||id<1)return;
 entrySequence=Math.max(entrySequence,id);
 const list=byId(conf.container);if(list.querySelector('[data-entry-id="'+id+'"]'))return;
 const row=document.createElement("div");row.className="dynamic-entry";
 row.dataset.entryType=type;row.dataset.entryId=String(id);
 row.innerHTML='<div class="entry-body"><strong class="entry-title" aria-label="Kayıt numarası"></strong>'+
 '<div class="entry-fields '+(type==="medication"?"entry-med":"")+'">'+
 conf.fields.map(([field,label,inputType])=>
 '<div class="field entry-field-'+field+'"><label for="'+conf.prefix+'_'+id+'_'+field+'">'+esc(label)+'</label>'+
 '<input id="'+conf.prefix+'_'+id+'_'+field+'" data-field type="'+inputType+'" autocomplete="off"'+
 ' placeholder="'+(field==="name"?(type==="diagnosis"?"Tanı / hastalık":"İlaç adı"):field==="date"?"Yıl / tarih":field==="dose"?"örn. 2x1000 mg veya 1x10/40 mg":"Ek açıklama")+'"></div>').join("")+'</div>'+
 '<button type="button" class="entry-remove" data-remove-entry aria-label="Bu kaydı sil">Sil</button></div>';
 list.appendChild(row);updateEntryNumbers(type);
}
function updateEntryNumbers(type){
 const list=byId(ENTRY_META[type].container);
 const rows=Array.from(list.querySelectorAll(".dynamic-entry"));
 rows.forEach((row,i)=>{row.querySelector(".entry-title").textContent=(i+1)+".";});
 const empty=list.parentElement.querySelector(".entry-empty");if(empty)empty.hidden=rows.length!==0;
 const filled=rows.filter(row=>row.querySelector('input[id$="_name"]')?.value.trim()).length;
 const checked=type==="diagnosis"?selectedHistory().length:0;
 const count=byId(type==="diagnosis"?"diagnosisCount":"medicationCount");
 if(count)count.textContent=String(filled+checked);
 rows.forEach((row,i)=>{
  const remove=row.querySelector("[data-remove-entry]");
  if(remove){remove.hidden=i===0;remove.disabled=i===0;}
 });
}
function removeEntries(type){
 byId(ENTRY_META[type].container).replaceChildren();updateEntryNumbers(type);
}
function entryIds(type){return Array.from(byId(ENTRY_META[type].container).querySelectorAll(".dynamic-entry")).map(row=>Number(row.dataset.entryId));}
function entrySection(type){
 const noun=type==="diagnosis"?"Hastalık":"İlaç",id=ENTRY_META[type].container;
 return '<div class="entry-section"><div id="'+id+'" class="entry-list"></div>'+
 '<p class="entry-empty">Henüz '+noun.toLocaleLowerCase("tr-TR")+' eklenmedi.</p>'+
 '<div class="entry-footer">'+
 '<div class="entry-stat"><span>'+noun+' Sayısı</span><output id="'+(type==="diagnosis"?"diagnosisCount":"medicationCount")+'">0</output></div>'+
 '<div class="entry-buttons"><button class="action entry-add" type="button" data-add-entry="'+type+'">+ '+noun+' Ekle</button></div>'+
 '</div></div>';
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
   '<div id="diagnosisPrintList" class="compact-print-list" aria-hidden="true"></div>')+
  block("Alerjiler, Dişler ve Yardımcı Araçlar",
   '<div class="supplementary-rows">'+
    '<div class="supplementary-row">'+selectField("alerji","Alerji",["Yok","Var"],"alerjiNot")+'</div>'+
    '<div class="supplementary-row">'+selectField("disDurumu","Dişler",["Doğal dişler","Eksik diş","Parsiyel protez","Total protez","Diğer"],"disNot")+'</div>'+
    '<div class="supplementary-row">'+selectField("gozluk","Gözlük",["Yok","Var"],"gozlukNot")+'</div>'+
    '<div class="supplementary-row">'+radio("isitmeCihazi","İşitme Cihazı",["Var","Yok","Var ama kullanmıyor"])+f("isitmeNot","Açıklama")+'</div>'+
   '</div>')+
  block("Ameliyat Öyküsü",
   '<div class="surgery-check">'+check("Koroner bypass öyküsü","oz_1_2")+'</div>'+
   area("ameliyat","Geçirdiği ameliyatlar (varsa işlem ve yılı)", "",2)+
   '<p class="field-help">Ameliyatlar hastalık sayısına dahil edilmez; aktif hastalık varsa tanılar arasında ayrıca belirtiniz.</p>')+
  block("Kullandığı İlaçlar",
   entrySection("medication")+
   '<div id="medicationPrintList" class="compact-print-list" aria-hidden="true"></div>')+
  block("Anamnez",'<div class="fields two">'+
   area("sikayetler","Şikayetleri","span2",2)+
   area("hikaye","Hikayesi","span2",7)+
   f("hekim","Değerlendiren Hekim")+'</div>');
 byId("page1").innerHTML=printInstitutionHeader(2)+
  '<div class="page-title"><h2>2. Soygeçmiş, Alışkanlıklar ve Koruyucu Hekimlik</h2><small>İTF.HB.FR.168 • Sayfa 2/4</small></div>'+
  block("Soygeçmiş",checks(DATA.family,"aile","two"))+
  block("Alışkanlıklar (Sigara ve Alkol)",
   '<div class="habit-columns">'+
    '<div>'+radio("sigaraDurum","Sigara Kullanımı",["Hiç kullanmadı","Bıraktı","Aktif kullanıyor"])+
     f("sigaraMiktar","Miktar / süre / bırakma yılı")+'</div>'+
    '<div>'+radio("alkolDurum","Alkol Kullanımı",["Yok","Bıraktı","Var"])+
     f("alkolMiktar","Miktar / sıklık (örn. ünite/gün)")+'</div>'+
   '</div>')+
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
function selectedHistory(){
 const catalog=byId("historyCatalog");if(!catalog)return [];
 return Array.from(catalog.querySelectorAll(".checknote")).filter(item=>item.querySelector('input[type="checkbox"]')?.checked)
  .map(item=>{
   const name=item.querySelector(".check-head span")?.textContent.trim()||"Tanı";
   const date=item.querySelector(".note-input")?.value.trim()||"";
   return name+(date?" ("+date+")":"");
  });
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
  const dose=byId(meta.prefix+"_"+id+"_dose")?.value.trim()||"";
  const note=byId(meta.prefix+"_"+id+"_note")?.value.trim()||"";
  return name+(dose?" "+dose:"")+(note?" — "+note:"");
 }).filter(Boolean);
}
function diagnosisNames(){return [...selectedHistory(),...dynamicList("diagnosis")];}
function updateCompactPrintLists(){
 for(const [id,label,values,countLabel] of [
  ["diagnosisPrintList","Hastalıklar",diagnosisNames(),"Hastalık sayısı"],
  ["medicationPrintList","İlaçlar",dynamicList("medication"),"İlaç sayısı"]]){
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

function refreshEntryCounts(){
 updateEntryNumbers("diagnosis");updateEntryNumbers("medication");updateCompactPrintLists();
}
function initializeFirstPageDefaults(){
 if(!byId("basvuru").value)byId("basvuru").value=localToday();
 for(const type of ["diagnosis","medication"])if(!entryIds(type).length)makeEntry(type);
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
function hydrate(values){
 for(const [key,value] of Object.entries(values||{})){
  const el=key.includes("::")?document.querySelector('input[name="'+CSS.escape(key.split("::")[0])+'"][value="'+CSS.escape(key.split("::")[1])+'"]'):byId(key);
  if(!el||!el.hasAttribute("data-field"))continue;
  if(el.type==="checkbox"||el.type==="radio")el.checked=value===true;
  else el.value=String(value??"");
 }
}
function signature(i){return JSON.stringify(fieldsOnPage(i).map(el=>[el.id||el.name+"::"+el.value,el.type==="checkbox"||el.type==="radio"?el.checked:el.value]));}
function pageHasData(i){return fieldsOnPage(i).some(el=>{
 if(el.id==="basvuru"||el.readOnly)return false;
 return el.type==="checkbox"||el.type==="radio"?el.checked:String(el.value||"").trim()!=="";
});}
function refreshTabs(){
 for(let i=0;i<4;i++){
  const t=byId("tab"+i),done=confirmed[i]===signature(i),has=pageHasData(i);
  t.setAttribute("aria-selected",String(i===step));
  t.dataset.progress=done?"full":has?"partial":"empty";
  t.querySelector(".tab-state").textContent=done?"✓ Sekme tamamlandı":has?"◐ Devam ediyor":"— Boş";
 }
 byId("prev").disabled=step===0;byId("next").disabled=step===3;
 const historyCount=byId("historyCount");
 if(historyCount){
  const selected=Array.from(byId("historyCatalog").querySelectorAll(".checknote")).filter(box=>
   box.querySelector('input[type="checkbox"]')?.checked||box.querySelector(".note-input")?.value.trim()).length;
  historyCount.textContent=selected?"("+selected+" kayıtlı bulgu)":"";
 }
 byId("printSummary").textContent=(step+1)+". Sekme Özetini Yazdır / PDF";
 byId("resetPage").textContent=(step+1)+". Sekmeyi Sıfırla";
 byId("printSummaryBottom").textContent="🖨 "+(step+1)+". Sekme Özeti";
 byId("resetPageBottom").textContent="↺ "+(step+1)+". Sekmeyi Sıfırla";
 byId("markComplete").textContent=confirmed[step]===signature(step)?"✓ Tamamlandı":"✓ Sekmeyi Tamamla";
}
function go(i){
 step=Math.max(0,Math.min(3,i));
 for(let j=0;j<4;j++){byId("page"+j).hidden=j!==step;byId("page"+j).setAttribute("aria-hidden",String(j!==step));}
 refreshTabs();byId("content").scrollIntoView({behavior:"auto",block:"start"});
}
function toast(message,bad=false){
 const el=byId("toast");clearTimeout(toastTimer);
 el.textContent=message;el.style.background=bad?"#fff0ed":"#e8f8ee";
 el.style.color=bad?"#8e3027":"#16663d";el.hidden=false;
 toastTimer=setTimeout(()=>el.hidden=true,2300);
}
function save(manual=false){
 try{
  sessionStorage.setItem(STORE,JSON.stringify({version:3,values:readData(),entries:{diagnosis:entryIds("diagnosis"),medication:entryIds("medication")},riskOverrides,confirmed,active:step,savedAt:new Date().toISOString()}));
  if(manual)toast("✓ Geçici taslak kaydedildi");
 }catch(e){if(manual)toast("Kaydedilemedi: tarayıcı depolaması kullanılamıyor",true);}
 refreshTabs();
}
function resetPage(){
 if(!confirm((step+1)+". sekmedeki bütün yanıtlar silinecek. Emin misiniz?"))return;
 fieldsOnPage(step).forEach(el=>{if(el.type==="checkbox"||el.type==="radio")el.checked=false;else el.value="";});
 if(step===0){removeEntries("diagnosis");removeEntries("medication");initializeFirstPageDefaults();}
 if(step===1)riskOverrides={};
 updateSexSpecific();syncOsteoporosisRisk();refreshEntryCounts();
 delete confirmed[step];save();toast("Sekme sıfırlandı");
}
function resetAll(){
 if(!confirm("Bütün İlk Muayene Formu sıfırlanacak. Tüm sekmelerdeki yanıtlar silinecek. Emin misiniz?"))return;
 document.querySelectorAll("[data-field]").forEach(el=>{if(el.type==="checkbox"||el.type==="radio")el.checked=false;else el.value="";});
 removeEntries("diagnosis");removeEntries("medication");
 initializeFirstPageDefaults();riskOverrides={};updateSexSpecific();syncOsteoporosisRisk();
 confirmed={};try{sessionStorage.removeItem(STORE);}catch(e){}
 go(0);refreshTabs();toast("Tüm form sıfırlandı");
}

function formatSummaryValue(raw,type){
 const s=String(raw??"").trim();
 if(/^\d{4}-\d{2}-\d{2}$/.test(s)){const [y,m,d]=s.split("-");return d+"."+m+"."+y;}
 return s;
}
function summarizedBlockItems(block){
 if(block.querySelector("#diagnosisList")){
  const values=diagnosisNames();
  return ["Tanılar ve Hastalıklar: "+(values.join(", ")||"Kayıt yok"),"Hastalık sayısı: "+values.length];
 }
 if(block.querySelector("#medicationList")){
  const values=dynamicList("medication");
  return ["Kullandığı İlaçlar: "+(values.join(", ")||"Kayıt yok"),"İlaç sayısı: "+values.length];
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
function buildPrintSummary(i){
 const sheet=byId("summaryPrintSheet");sheet.replaceChildren();
 sheet.appendChild(makeSummaryNode("h1",(i+1)+". Sekme Özeti — "+LABELS[i]));
 sheet.appendChild(makeSummaryNode("p","İTF Geriatri · Online İlk Muayene Formu · "+new Date().toLocaleString("tr-TR"),"summary-subtitle"));
 const meta=document.createElement("div");meta.className="summary-meta";
 const name=byId("ad")?.value.trim(),protocol=byId("proto")?.value.trim(),date=byId("basvuru")?.value;
 if(name)meta.appendChild(makeSummaryNode("span","Hasta: "+name));
 if(protocol)meta.appendChild(makeSummaryNode("span","Protokol: "+protocol));
 if(date)meta.appendChild(makeSummaryNode("span","Başvuru: "+formatSummaryValue(date,"date")));
 if(meta.children.length)sheet.appendChild(meta);
 let total=0;
 byId("page"+i).querySelectorAll(".block").forEach(block=>{
  const items=summarizedBlockItems(block);
  if(!items.length)return;
  total+=items.length;
  const section=document.createElement("section");
  section.appendChild(makeSummaryNode("h2",block.querySelector("h3")?.textContent||"Değerlendirme"));
  const ul=document.createElement("ul");
  for(const value of items)ul.appendChild(makeSummaryNode("li",value));
  section.appendChild(ul);sheet.appendChild(section);
 });
 if(!total)sheet.appendChild(makeSummaryNode("p","Bu sekmede henüz girilmiş değerlendirme bulunmuyor.","summary-empty"));
 sheet.appendChild(makeSummaryNode("p","Yalnızca işaretlenen veya bilgi girilen alanlar listelenmiştir. Listelenmeyen bulgular normal veya negatif kabul edilmemelidir.","summary-note"));
}
function printOneSummary(){
 save();
 buildPrintSummary(step);
 document.body.classList.add("printing-summary");
 window.print();
}
function printWholeForm(){
 save();document.body.classList.remove("printing-summary");window.print();
}

function initialize(){
 build();
 let restored;
 try{restored=JSON.parse(sessionStorage.getItem(STORE)||"null");}catch(e){restored=null;}
 if(restored?.version===2||restored?.version===3){
  for(const type of ["diagnosis","medication"])(restored.entries?.[type]||[]).slice(0,200).forEach(id=>makeEntry(type,id));
  hydrate(restored.version===2?migrateOldValues(restored.values||{}):restored.values||{});
  riskOverrides=restored.version===3?restored.riskOverrides||{}:{};
  confirmed=restored.version===3?restored.confirmed||{}:{};
  step=Number.isInteger(restored.active)?Math.max(0,Math.min(3,restored.active)):0;
 }else if(restored?.version===1){
  const old=restored.values||{};
  for(let i=0;i<10;i++)if((old["tani_"+i]||"").trim()||old["tanitarih_"+i]){
   makeEntry("diagnosis");
   const id=entrySequence;byId("diag_"+id+"_name").value=old["tani_"+i]||"";
   byId("diag_"+id+"_date").value=old["tanitarih_"+i]||"";
  }
  if((old.ilaclar||"").trim()){makeEntry("medication");byId("med_"+entrySequence+"_name").value=old.ilaclar;}
  hydrate(migrateOldValues(old));confirmed={};
  step=Number.isInteger(restored.active)?Math.max(0,Math.min(3,restored.active)):0;
 }
 initializeFirstPageDefaults();
 updateSexSpecific();syncOsteoporosisRisk();refreshEntryCounts();
 for(let i=0;i<4;i++)byId("tab"+i).addEventListener("click",()=>{save();go(i);save();});
 byId("prev").addEventListener("click",()=>{save();go(step-1);save();});
 byId("next").addEventListener("click",()=>{save();go(step+1);save();});
 byId("save").addEventListener("click",()=>save(true));
 byId("print").addEventListener("click",printWholeForm);
 byId("printSummary").addEventListener("click",printOneSummary);
 byId("printSummaryBottom").addEventListener("click",printOneSummary);
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
 byId("resetPage").addEventListener("click",resetPage);
 byId("resetPageBottom").addEventListener("click",resetPage);
 byId("resetAll").addEventListener("click",resetAll);
 byId("resetAllBottom").addEventListener("click",resetAll);
 byId("markComplete").addEventListener("click",()=>{if(!pageHasData(step)){toast("Önce bu sekmede değerlendirme bilgisi giriniz",true);return;}confirmed[step]=signature(step);save();toast("✓ Sekme tamamlandı");});
 byId("pages").addEventListener("click",event=>{
  const add=event.target.closest("[data-add-entry]");
  if(add){makeEntry(add.dataset.addEntry);save();return;}
  const remove=event.target.closest("[data-remove-entry]");
  if(remove){
   const card=remove.closest(".dynamic-entry"),type=card.dataset.entryType;
   card.remove();updateEntryNumbers(type);save();toast("Kayıt silindi");
  }
 });
 byId("pages").addEventListener("input",event=>{
  if(event.target.id==="tc")event.target.value=event.target.value.replace(/\D/g,"").slice(0,11);
  if(["osteoParent","osteoSmoke","osteoAlcohol"].includes(event.target.id))riskOverrides[event.target.id]=true;
  updateDerivedFields();updateSexSpecific();syncOsteoporosisRisk();refreshEntryCounts();save();
 });
 byId("pages").addEventListener("change",event=>{
  if(["osteoParent","osteoSmoke","osteoAlcohol"].includes(event.target.id))riskOverrides[event.target.id]=true;
  updateDerivedFields();updateSexSpecific();syncOsteoporosisRisk();refreshEntryCounts();save();
 });
 window.addEventListener("pagehide",()=>save());
 go(step);
}
document.addEventListener("DOMContentLoaded",initialize);
