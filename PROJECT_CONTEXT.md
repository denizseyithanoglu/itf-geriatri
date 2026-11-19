# İTF Geriatri — project context

Updated: 2026-11-19. Keep this file short and update only when project structure or important decisions change.

## Project
- Repository: https://github.com/denizseyithanoglu/itf-geriatri (default branch: `main`)
- Public site: https://denizseyithanoglu.github.io/itf-geriatri/
- Static GitHub Pages website for İstanbul Tıp Fakültesi Geriatri, with Turkish/English content.

## Key locations
- Homepage and public sections: `index.html`, `hastalar.html`, `hekimler.html`, and related root-level HTML pages.
- Online comprehensive geriatric assessment (KGD): `tools/kgd.html`.
- KGD appointment and follow-up forms: `tools/ilk-muayene.*`, `tools/kontrol-takip.*`.
- Report/output logic: `tools/form-output.js`.
- KGD full-summary print layout: `compactKGDStep()` in `tools/kgd.html`; Sosyal Öykü uses 3 ordered compact rows, and Özgeçmiş lists positive diagnoses, fractures, medications beside family history, and habits under family history.
- Data export: `tools/kgd-export/`.
- Physical performance: `tools/fiziksel-performans.html`, `scripts/build-physical-performance.py`.
- Patient self-assessment: `tools/self-assessment.html`.
- Nutrition tool: `tools/nutrition.html`.
- Branding assets: `assets/`.

## Checks
- Tests: `tests/form-output.cjs`, `tests/kgd-export.cjs`, `tests/physical-report-groups.cjs`.
- GitHub Actions: `.github/workflows/kgd-validation.yml` checks KGD JavaScript and printing behavior.
- When editing relevant features, run their focused tests and the KGD validation checks where applicable.

## Change discipline
- Follow `AGENTS.md`.
- Preserve existing forms, scoring, report formats, data export, and other site features unless explicitly asked to change them.
- Inspect only task-relevant files; avoid broad repository scans and unrelated cleanup.
- Never add identifiable patient data or secrets to tracked files.
