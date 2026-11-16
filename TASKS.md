# İTF Geriatri — Prioritized Task Board

> **Baseline:** 2026-11-16, `main` `ca090ea30580c304c9931e5656d2f83ee9d16939`.  
> **Method:** source audit only; no local execution, live-site end-to-end browser testing, print/PDF readback, or IBM SPSS desktop verification in this audit.  
> **Definitions:** `[ ]` pending, `[x]` completed and verified. P0 = safety/release blocker; P1 = important reliability; P2 = functionality/design; P3 = optional refactoring. Priority does **not** imply a proven bug.

## Snapshot and inventory

- [x] **AUD-001** — Inspect repository tree, current default branch, and recent commits.
  - Evidence: static public site, shared KGD/physical pages, follow-up and first-visit tools, export files, test scripts.
  - Observed no open GitHub Issues or Pull Requests at the snapshot moment.
- [x] **AUD-002** — Trace KGD export implementation and standalone form generation.
  - Evidence: `tools/kgd-export/README.md`, `schema.js`, `export.js`, `formats.js`, `scripts/build-physical-performance.py`.
- [x] **AUD-003** — Trace key report tests and existing GitHub CI configuration.
  - Evidence: `tests/kgd-export.cjs`, `tests/physical-report-groups.cjs`, `.github/workflows/kgd-validation.yml`.
  - **Review performed, tests not executed**; this is not an overall green test certification.
- [ ] **AUD-004** — Merge/review the documentation PR after reading `PROJECT.md`, `DECISIONS.md`, and this board. No production code changes are part of that PR.

## P0 — Safety and release boundaries

- [ ] **SAFE-001 — Confirm production use policy / KVKK gate.**
  - Current site warns that forms are not an approved hospital system; temporary `sessionStorage` and exported files can contain identifying data.
  - **Done when:** team agrees on a visible, accurate development/use disclaimer and documents an approved workflow before accepting real patient data. Do not upload synthetic examples containing real identifiers.
- [ ] **SAFE-002 — Separate patient self-screening from research/data collection.**
  - Existing `tools/self-assessment.html` has interactive Self-MNA-SF. A future Google Form that saves identifiable health data requires its own institutional/legal/licensing decision.
  - **Done when:** data collection, consent refusal, retention, permissions, scale attribution/usage rights, and responsible controller are documented **before** any public Google Form launch.

## P1 — Testing and correctness

- [ ] **QA-001 — Extend CI to cover standalone tests.**
  - **Issue:** `.github/workflows/kgd-validation.yml` currently triggers on `tools/kgd.html` and itself, and does not run `tests/kgd-export.cjs` / `tests/physical-report-groups.cjs`.
  - **Goldfish scope:** update workflow to install/pin required `jsdom` test dependency in the runner; invoke the two existing tests and trigger on export scripts, physical HTML, build script, and tests as appropriate.
  - **Done when:** all three groups (existing KGD validation, exports, physical reports) visibly run on a test PR and fail on an intentional regression.
- [ ] **QA-002 — Establish generated-file synchronization check.**
  - **Issue:** `tools/fiziksel-performans.html` is generated from `tools/kgd.html`; a future KGD edit can leave it out of date.
  - **Goldfish scope:** run `python scripts/build-physical-performance.py` in an isolated test checkout and assert no unexpected diff; verify separate storage keys and absent standalone exporter.
  - **Done when:** a CI check detects stale generated output and shared changes are reproduced in both forms. Do **not** manually edit the generated HTML.
- [ ] **QA-003 — Full KGD fictitious-patient regression test.**
  - Fill **all relevant sections** with one reproducible fictional patient, including mandatory/optional fields, MMSE variants, functional scales, MNA, physical measurements, and diagnoses/medications.
  - Check full and section short/detailed print output, unanswered items, missing-vs-zero, tab reset/restore, transfer from first visit, and CSV/XLSX/SAV consistency.
  - **Done when:** a field-by-field test matrix identifies every input, printed value, export alias, and expected result; deviations filed as separate issues. Use no actual patient data.
- [ ] **QA-004 — Verify SPSS SAV in IBM SPSS desktop.**
  - **Current evidence:** encoder and schema exist; repository README reports independent `pyreadstat`/`openpyxl` readback, not verified desktop import.
  - **Done when:** real SPSS desktop opens the SAV with correct Turkish labels, variable types, value labels, missing values, and long-text continuation behavior. Record version and screenshots (synthetic data only).
- [ ] **QA-005 — Browser and PDF regression for both physical-report views.**
  - Check four group order, all summary labels, optional omissions, detailed-only HGS/OYH perceptions and SPPB subscores, long text, page breaks, A4 layout, mobile controls, and numerical sarcopenia logic.
  - **Done when:** reviewed sample short/detailed PDFs and comparison sheet are attached to the related PR. Source-only tests alone are insufficient.
- [ ] **QA-006 — Clinical-scoring verification matrix.**
  - Verify formulas, thresholds, version selection, unperformed tests, and missing-data semantics against the department-approved source documents for FRAIL, SARC-F, MMSE/Mini-Cog, MNA, GYA/EGYA, SPPB, sarcopenia and other scores.
  - **Done when:** each score has a cited source/approved rule and normal, borderline, positive, incomplete, and invalid-input test cases.
- [ ] **QA-007 — Improve first-visit / follow-up regression coverage.**
  - Verify four-tab first visit, repeated medication/disease entries, KGD transfer, local draft lifecycle, per-tab reset and summary, control/follow-up narrative fields, and whole-form print.
  - **Done when:** automated and manual checks cover cross-form fields, keyboard operation, and key print layouts.

## P2 — Product, content, and architecture decisions

- [ ] **UX-001 — Correct outdated clinician-page wording.**
  - **Observed:** `hekimler.html` still says KGD does not replace an older “8 sayfalık” form, while current implementation exposes an 11-stage wizard. Confirm intended medical disclaimer with department first.
  - **Done when:** copy accurately describes the tool without overstating clinical equivalence; both TR/EN strings agree.
- [ ] **UX-002 — Navigation, translation, visual/accessibility audit.**
  - Check every link, TR/EN switching, contrast, keyboard focus, large touch targets, responsive behavior and readability of patient pages. Review inconsistent color overrides without assuming they are bugs.
  - **Done when:** a documented page-by-page checklist and small isolated fixes are reviewed.
- [ ] **PLAN-001 — Design shared Google Drive workflow (not yet an implementation task).**
  - Prior discussion: controlled access for ~5 colleagues in a shared folder.
  - **Elephant deliverable:** threat model, authentication/authorization, patient data minimization, consent, audit logging, document naming, retention, error handling, institutional approval and cost/support comparison. **Do not implement until authorized.**
- [ ] **PLAN-002 — Plan patient-fillable MNA-SF/Google Forms separately.**
  - **Elephant deliverable:** scope and licensing check; KVKK/consent text reviewed by responsible personnel; refusal path; exact health/demographic fields; safe storage and access policy.
- [ ] **PLAN-003 — Design a longitudinal patient/encounter model only if formally requested.**
  - **Elephant deliverable:** patient-versus-encounter separation, identifiers, migration plan, access control, and required infrastructure review.
- [ ] **ARCH-001 — Evaluate modularizing KGD.**
  - Both KGD and generated physical page are approximately 390 KB and share extensive clinical code. That is a maintenance risk, **not** proof of malfunction.
  - **Done when:** a proposal separates schema, calculations, printing, storage, and UI without changing clinical outputs, plus a backwards-compatibility and rollback strategy.
- [ ] **DOC-001 — Expand the project README and contributor guidance after audit review.**
  - Current root `README.md` is only a project title and one short description.
  - **Done when:** README links to these source-of-truth docs, gives safe local test instructions and explains branch/PR conventions.

## Recommended next Goldfish task

**Start with QA-001 + QA-002 as two distinct PRs.** They strengthen the safety net before any major KGD overhaul.

Example Goldfish brief for **QA-001**:

> Goal: Expand the existing GitHub Actions workflow so the checked-in export and physical-report test files run on PRs.  
> In scope: `.github/workflows/kgd-validation.yml` and, only if necessary, minimal test-runner metadata.  
> Out of scope: clinical calculations, page HTML/CSS, export schema, printed layout, GitHub Pages behavior.  
> Acceptance: existing workflow still runs; `tests/kgd-export.cjs` and `tests/physical-report-groups.cjs` run with the required dependencies; workflow triggers on relevant changed files; results are reported with links.  
> Test data: synthetic only. Deliver a PR, not a direct merge.

## How to keep this board current

For each accepted change, add: task ID, rationale, exact affected files, clinical/privacy risk, acceptance test, PR/commit link, result, and last reviewed date. Mark `[x]` only after the corresponding verification, not merely after code has been written.
