# KGD local export, schema KGD-1

Loaded only by tools/kgd.html. No external dependencies or network transfer of form values.

- 429 thematic columns retain the 160 legacy headers in the dictionary.
- XLSX contains one evaluation row and a full variable dictionary; values are typed and text is never an Excel formula.
- SAV is an uncompressed UTF-8 system file, with long names, variable labels and numeric value labels. UTF-8 strings exceeding 240 bytes are split losslessly into explicitly named continuation fields (_part2, etc.). Labels exceeding 255 UTF-8 bytes are abbreviated in SAV; Excel retains the full dictionary.
- CSV is UTF-8 with BOM, quoted fields and formula-prefix protection for text. Empty numbers are missing, not zero.
- Historical columns lacking a structured source remain empty. Other-disease free text is not interpreted as diagnoses.
- General ambulation, fracture count/treatment and visit number have explicit inputs persisted through the existing draft mechanism. Fracture details are exported only for positive fracture history; negative history gives count 0.
- MMSE exports only the selected version. Scale totals require all source responses. MNA-LF means SF + LF, out of 30.

## Validation

Run `NODE_PATH=/path/to/node_modules node tests/kgd-export.cjs` with jsdom installed outside the repository. The test initializes the actual HTML without external network resources and uses synthetic values only. It writes /tmp/kgd-full.sav, .xlsx and .json for independent readback with pyreadstat and openpyxl. Binary readback has been checked for all 429 columns, missing/zero values, Turkish text, value labels and long text reconstruction. IBM SPSS desktop itself was not available for testing.

SAV format reference: https://www.gnu.org/software/pspp/pspp-dev/html_node/System-File-Format.html
