# İTF Geriatri — Decisions and Constraints

> Updated 2026-11-16. **Status matters:** a feature existing in code, a user-approved requirement, and a proposed idea are not interchangeable. Code observations below are as of `main` commit `ca090ea30580c304c9931e5656d2f83ee9d16939`. This document is not a substitute for clinical/institutional approval.

## A. Existing implementation or established constraint

| ID | Decision / guardrail | Status | Evidence / implication |
|---|---|---|---|
| D-01 | Maintain the public static, browser-first implementation unless a separately approved architectural change requires a backend. | **Verified current architecture** | No backend or patient database in repository. |
| D-02 | Do not enter real identifiable patient information during development. The site is not an approved hospital information system. | **Established safety constraint; visible warnings** | `tools/ilk-muayene.html`, KGD/standalone warnings. For tests use fictional, non-identifiable data only. |
| D-03 | Existing form drafts live only in `sessionStorage`; a printed/downloaded file is different from a secured longitudinal medical record. | **Verified implementation** | `kgd.html`, `ilk-muayene.js`, `kontrol-takip.js`, build script. No server upload should be silently introduced. |
| D-04 | Preserve separate KGD and standalone physical performance draft keys and logic. | **Verified implementation** | `scripts/build-physical-performance.py`. |
| D-05 | The main KGD is the source of truth for shared clinical measurement/printing code; standalone `fiziksel-performans.html` is generated. | **Verified implementation** | Regenerate after shared changes; test both outputs. |
| D-06 | Support short and detailed printed summaries; physical measurements have four ordered summary groups. | **Implemented / previously specified** | `kgdPhysicalReportGroups`; `tests/physical-report-groups.cjs`. |
| D-07 | Physical short summary omits HGS/OYH subjective perception and individual SPPB items; detailed version retains those and other detailed anthropometrics. | **Implemented / previously specified** | `tests/physical-report-groups.cjs`; grouped render logic. |
| D-08 | For the physical report, group order is: (1) age/sex/body measures, (2) BIA and muscle indices, (3) performance tests, (4) sarcopenia classifications. | **Implemented / previously specified** | Current compact report renderer and tests. |
| D-09 | Missing, skipped, or unperformed findings must remain missing; never auto-convert blank clinical findings to normal/negative or numeric 0. | **Established requirement; implemented in export/summary logic** | `tools/kgd-export/README.md`, `hekimler.html` form notes. |
| D-10 | Full KGD export has a stable 429-variable schema (including 160 legacy headers), and produces local CSV, XLSX, and SAV files. | **Implemented in code; desktop verification pending** | `tools/kgd-export/{schema,export,formats}.js`. Keep meaningful labels, codes, and missing values. |
| D-11 | Form totals must require adequate source responses; avoid fabricating diagnoses from an 'other' free-text response. | **Implemented export behavior** | `tools/kgd-export/README.md`, `export.js`. |
| D-12 | First-visit assessment has four sections with separate summaries, reset, print, and an optional data transfer to KGD. | **Verified implementation** | `tools/ilk-muayene.html`, `ilk-muayene.js`. |
| D-13 | Protect existing clinical calculations, Turkish labels, printable formats, drafts, and navigation from unrelated changes. | **Operating rule** | Any affected area requires regression tests, before/after screenshots or textual diffs, and a reviewable PR. |
| D-14 | General public pages support Turkish/English presentation; patient-facing content should remain clear and readable. | **Verified partially; established design direction** | `index.html`, `hekimler.html`, `hastalar.html`. Language coverage must be checked page-by-page. |
| D-15 | Retain İTF Geriatri identity/logo and patient-friendly visual hierarchy; do not silently replace brand colors or clinical wording in feature fixes. | **Established design preference** | `assets/itf-geriatri-logo.*`; styles in public pages. |
| D-16 | The interactive Self-MNA-SF calculator exists on the patient self-assessment page; publishing a separate patient-data-collecting Google Form is a **different** feature. | **Verified/current versus future** | `tools/self-assessment.html`. See pending decisions below. |

## B. Planned or discussed — **NOT implemented or approved for deployment by this audit**

| ID | Topic | Known intention | Required decision before implementation |
|---|---|---|---|
| P-01 | Shared Google Drive storage for clinician forms | A restricted shared folder for approximately five staff members was discussed. | Institutional authorization, user access, data minimization, consent/legal basis, audit trail, ownership, retention/deletion, and threat model. No current integration verified. |
| P-02 | Patient-fillable MNA-SF Google Form | Demographics and clinical-history questions with KVKK notice and conditional consent were discussed. | Verify scale usage rights, institutional review and data processing basis, where responses are stored, permissions, and how refusal exits the form. Do not treat a separate web Self-MNA as authorization. |
| P-03 | Longitudinal follow-up / patient database | Potential future major overhaul. | Data model, encounter identifiers, access rules, migration, and security/institutional approval; not included in the current static project. |
| P-04 | Broad KGD modularization or redesign | Could reduce duplication and make maintenance easier. | Freeze baseline behavior and acceptance tests before architecture changes. Do not attempt as an incidental edit. |

## C. Change management (Elephant–Goldfish)

1. **Major section overhaul or new property:** discuss with Elephant first. Elephant defines clinical semantics, field schema, dependencies, backwards compatibility, risk, and approval criteria.
2. **Small, isolated issue:** Elephant can prepare a one-step Goldfish brief without a large design phase.
3. **Goldfish scope:** single-purpose change; list exact files; no unrelated visual copy or clinical formula changes.
4. **Safe delivery:** use a feature branch and PR; do not merge into `main` without review. Regenerate the standalone physical page if shared KGD source changes.
5. **Clinical quality gate:** use synthetic cases to verify scores, omitted/missing values, detailed and short outputs, exports, mobile controls, and paper/PDF layouts.
6. **Memory:** after a verified merge, update `PROJECT.md`, this file, and `TASKS.md` with actual behavior and resolved decisions.
7. **When uncertain:** write **Needs decision** or **Not verified** rather than inventing a feature or assuming earlier discussion means it shipped.

## D. Current documented gaps requiring follow-up

- The GitHub Actions workflow checks `tools/kgd.html` but does not currently invoke the standalone `tests/kgd-export.cjs` or `tests/physical-report-groups.cjs` files.
- IBM SPSS desktop import and full printed output have not been verified as part of this audit.
- Some public clinician-page copy still refers to an older eight-page KGD form despite the current 11-stage wizard. Treat this as a content-consistency item rather than silently editing during documentation work.

See [PROJECT.md](PROJECT.md) and [TASKS.md](TASKS.md).
