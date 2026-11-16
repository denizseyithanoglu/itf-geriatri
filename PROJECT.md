# İTF Geriatri — Project Map (Elephant memory)

> **Audit baseline:** 2026-11-16, `main` at `ca090ea30580c304c9931e5656d2f83ee9d16939`.  
> **Scope:** repository/source review, not a completed live-browser, clinical accuracy, privacy, or SPSS desktop audit.  
> **Site:** https://denizseyithanoglu.github.io/itf-geriatri/  
> **Repository:** https://github.com/denizseyithanoglu/itf-geriatri

## 1. Purpose and audiences

A public İstanbul Tıp Fakültesi Geriatri site for patients, caregivers, physicians, trainees, and researchers. It includes educational pages, patient self-assessment tools, clinician assessment forms, nutrition tools, and printable summaries.

**Safety boundary:** This public static website is **not** an approved hospital information system. Forms display warnings about real identifying/health information. Do not use identifiable real patient data for development, screenshots, tests, or GitHub issues. Any future persistent storage or shared-access workflow needs an explicitly reviewed institutional, security, and KVKK design first.

## 2. Technical architecture (verified from source)

- **Hosting model:** public, static GitHub Pages-style site; no application server, database, or server-side API implementation is present in this repository snapshot.
- **Stack:** standalone HTML, CSS, and JavaScript. Many pages use inline CSS/JS; first-visit and follow-up forms have separate `.css`/`.js` files. No `package.json`/frontend build framework exists in the inspected tree.
- **Localization:** public navigation/content pages have Turkish/English switching; do not assume every clinician form has full English translations.
- **Brand/assets:** `assets/itf-geriatri-logo.svg` and `.webp`; predominantly forest-green patient/public styling. Retain legibility, keyboard access, and large touch targets.
- **Local drafts:** Online KGD, Online İlk Muayene, Online Kontrol/Takip, and the standalone measurement form use browser `sessionStorage` (different keys) for temporary drafts. Session-scoped storage does **not** constitute a durable clinical record and can persist while a tab/session remains open.
- **Printing:** form pages use browser printing/PDF and separate short/detail note generation; verify actual output in a browser before declaring print changes complete.

## 3. Page and module map

| Path | Role |
|---|---|
| `index.html` | Landing page and links to major modules |
| `hastalar.html`, `geriatri-hakkinda.html`, `beslenme-onerileri.html` | Patient education and nutrition guidance |
| `tools/self-assessment.html` | Patient-facing FRAIL, SARC-F, GYA/ADL, EGYA/IADL, GDS-15, and interactive Self-MNA-SF |
| `hekimler.html`, `klinik-rehberler.html`, `hesaplayicilar.html` | Clinician/researcher navigation, guides, calculators |
| `tools/kgd.html` | Full Online KGD assessment wizard |
| `tools/fiziksel-performans.html` | Standalone Online KGD/Ölçümler, based on KGD step 10 |
| `tools/ilk-muayene.html`, `.css`, `.js` | Four-section first-visit assessment; summary/print and session-based transfer to KGD |
| `tools/kontrol-takip.html`, `.css`, `.js` | Follow-up clinical form, draft, notes, and print |
| `tools/nutrition.html` | Clinician nutrition/energy calculator |
| `randevu.html`, `iletisim.html`, `bolumumuz.html`, `egitim-toplantilar.html`, `dergi-kulubu.html`, `mgt.html` | Public service and departmental content |
| `tools/kgd-export/schema.js` | Versioned KGD export data dictionary (`KGD-1`), 429 columns |
| `tools/kgd-export/export.js` | Maps form answers and derived values to export schema |
| `tools/kgd-export/formats.js` | Browser-local CSV, XLSX, and SPSS SAV format encoders |
| `scripts/build-physical-performance.py` | Builds standalone measurement HTML from main KGD source |
| `tests/kgd-export.cjs`, `tests/physical-report-groups.cjs` | Dedicated export and physical-report automated tests |
| `.github/workflows/kgd-validation.yml` | Existing source-level KGD JavaScript/scoring/print GitHub Actions checks |

### Full Online KGD wizard (11 stages, verified)

1. Sosyal Öykü
2. Özgeçmiş, Soygeçmiş, Alışkanlıklar ve İlaçlar
3. Fiziksel Aktivite ve Düşmeler
4. Ağrı, Uyku Kalitesi ve Boşaltım
5. Beslenme Değerlendirmesi (MNA)
6. Yaşam Aktiviteleri ve Kalitesi (GYA, EGYA, EQ5D)
7. Kırılganlık ve Sarkopeni (FRAIL, SARC-F, SOF)
8. Bilişsel Değerlendirme (Mini-COG, MMSE)
9. Duygudurum (GDS)
10. Fiziksel Performans
11. KGD Özeti

The KGD source is large and relatively monolithic; clinical calculations, form schemas, print formatting, and dynamic UI are closely connected. Changes to one area can affect another.

## 4. Critical source-of-truth and dependency rules

1. **Edit `tools/kgd.html` as the clinical source** for shared KGD/physical measurement logic. The standalone page `tools/fiziksel-performans.html` is generated with `python scripts/build-physical-performance.py`; regenerate and compare it after shared changes. Avoid independently hand-editing the generated page except through a deliberate architecture change.
2. **Separate drafts:** `itf_kgd_session_draft_v1` versus `itf_physical_performance_session_draft_v1` prevent cross-contamination.
3. **Standalone scope:** its script isolates step 10 (physical performance), changes headings, and removes the full KGD export scripts. It is **not** the full KGD form.
4. **Export scope:** the full KGD loads `schema.js`, `formats.js`, `export.js`; the standalone measurement page does not. See `tools/kgd-export/README.md` for encoding, missing-value, and variable dictionary rules.
5. **Export status:** 429 thematic columns, preserving 160 legacy headers; browser-local XLSX, CSV, and uncompressed SPSS SAV. Code and dedicated test fixtures exist. The repository's export README says independent readback with `pyreadstat`/`openpyxl` was checked, but **IBM SPSS desktop validation is not documented as completed**.
6. **Data semantics:** blank/unassessed answers are missing, not normal/negative/zero. Derived totals should require their source responses. Do not infer diagnoses from unstructured free text.
7. **First-visit bridge:** the Online İlk Muayene form can transfer selected data to Online KGD via session storage; preserve field mappings and the consent/user-flow expectations when editing either side.

## 5. Testing and development reality

- `.github/workflows/kgd-validation.yml` currently triggers on `tools/kgd.html` and its workflow file. It performs many inline source-level/scoring checks.
- Dedicated `tests/kgd-export.cjs` uses `jsdom` and synthetic inputs; `tests/physical-report-groups.cjs` checks summary/detailed physical output in both forms.
- **Audit finding:** the existing GitHub workflow does **not** invoke these two standalone test scripts or trigger for all their dependent files. A green CI result therefore does not yet cover every critical feature.
- **This audit:** repository inspected remotely; tests, browser printing, PDF rendering, screen-reader checks, SPSS desktop import, and generated-file synchronization were **not run**. Do not interpret source presence as runtime verification.

## 6. Elephant–Goldfish operating protocol

- **User → Elephant:** describe a need, clinical workflow, visual preference, or major change.
- **Elephant:** check `PROJECT.md`, `DECISIONS.md`, `TASKS.md` and relevant code; clarify boundaries, design interfaces/data semantics, and split large work into independent tasks.
- **Goldfish:** receive a tightly scoped brief with exact files, prohibited changes, synthetic test data, acceptance criteria, and required regeneration steps.
- **Verification:** report test commands/results and changed paths; review diff/PR. Prefer a branch/PR, not an unreviewed direct write to `main`.
- **Memory update:** after review, update these three documents to reflect **what actually shipped**. Keep proposed features distinct from verified implementations.

See [DECISIONS.md](DECISIONS.md) for constraints and [TASKS.md](TASKS.md) for the prioritized backlog.
