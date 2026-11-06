"""Rebuild the standalone physical form from KGD, preserving its clinical logic."""
from pathlib import Path

root = Path(__file__).resolve().parents[1]
source = (root / 'tools/kgd.html').read_text()

def replace(old, new):
    global source
    assert source.count(old) == 1, f'Expected one source anchor: {old[:80]}'
    source = source.replace(old, new)

replace('<title>KGD | İTF Geriatri</title>', '<title>Online KGD/Ölçümler | İTF Geriatri</title>')
replace('const KGD_DRAFT_KEY="itf_kgd_session_draft_v1";', 'const KGD_DRAFT_KEY="itf_physical_performance_session_draft_v1";')
replace('function renderWizardTabs(){', '''function renderWizardTabs(){
 $("wizardStepTitle").textContent="Online KGD/Ölçümler";
 $("wizardStepHint").textContent="KGD 10. sekmesinin bağımsız kopyası · Ayrı geçici taslak";
 $("wizardSave").textContent=kgdStepConfirmed(9)?"✓ Taslak Kaydedildi":"Taslağı Kaydet";
 $("wizardClear").textContent="Formu Sıfırla";
 $("wizardClear").disabled=false;
 $("wizardPrintSection").textContent="Özet Yazdır / PDF";
 $("wizardPrintSectionDetailed").textContent="Detaylı Yazdır / PDF";
 return;
''')
replace('wizardStep=Math.min(wizardGroups.length-1,Math.max(0,i));const visible=', 'wizardStep=9;const visible=')
replace('initKGDWizard();showFirstVisitImportNotice();offerFirstVisitImport();', '''wizardStep=9;initKGDWizard();
$("title").textContent="Online KGD/Ölçümler";
$("sub").textContent="Online KGD · Bağımsız Fiziksel Performans Formu";
$("intro").textContent="KGD formunun 10. sekmesiyle aynı ölçümler ve hesaplamalar. Bu sayfanın geçici taslağı KGD formundan ayrı tutulur.";
$("warning").textContent="Yalnızca eğitim / demo amaçlıdır. Gerçek hasta kimlik veya sağlık verilerini girmeyiniz. Geçici taslak yalnızca bu tarayıcı sekmesinde saklanır; sunucuya gönderilmez.";
$("physicalSection").querySelector(".physical-age-hint").textContent="Yaşı buradan yazınız.";
''')
replace('delete moreText.sppbLegacyTotal;delete moreText.sppbAutoCalculated;', 'delete moreText.clinical_0_4;delete moreText.physicalAge;delete moreText.sppbLegacyTotal;delete moreText.sppbAutoCalculated;')
replace('"Doğum tarihi girilmediyse yaşı buradan yazınız."', '"Yaşı buradan yazınız."')
replace('</style></head>', '''/* Standalone presentation; the original clinical rendering and calculations are retained. */
#kgdWorkspace{display:block;}
#kgdWorkspace .wizard-shell{position:static;width:100%;max-height:none;margin-bottom:12px;}
#wizardTabs,.wizard-mobile-jump,#wizardClearAll,#wizardBack,#wizardNext,
#finalActions + .optional-note{display:none!important;}
#kgdWorkspaceContent{min-width:0;}
</style></head>''')
(root / 'tools/fiziksel-performans.html').write_text(source)
print('Built tools/fiziksel-performans.html')
