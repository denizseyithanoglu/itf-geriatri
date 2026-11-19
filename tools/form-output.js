/* Shared local-only clipboard and PDF filename support for clinical forms. */
(function () {
 'use strict';
 const cleanSummary = text => String(text ?? '').replace(/[ \t]*\|[ \t]*/g, ' ').replace(/[ \t]+\n/g, '\n');
 function filename(date, name) {
  let day = String(date || '').trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(day)) day = day.split('-').reverse().join('.');
  if (!day) day = new Date().toLocaleDateString('tr-TR');
  const safe = value => value.normalize('NFC').replace(/[<>:"/\\|?*\u0000-\u001f]/g, '').replace(/\s+/g, '').replace(/[. ]+$/g, '');
  return safe(day) + '_' + (safe(String(name || '').trim()) || 'Isimsiz');
 }
 let preparePrint = () => {};
 let restorePrint = () => {};
 function configurePrint(identity) {
  let originalTitle = null;
  preparePrint = () => {
   if (originalTitle === null) originalTitle = document.title;
   const values = identity();
   document.title = filename(values.date, values.name);
  };
  restorePrint = () => {
   if (originalTitle !== null) document.title = originalTitle;
   originalTitle = null;
  };
  window.addEventListener('beforeprint', preparePrint);
  window.addEventListener('afterprint', restorePrint);
 }
 async function copySummary(content) {
  const text = cleanSummary(content);
  try {
   if (window.isSecureContext && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
   }
  } catch (_) { /* Try selection-based copying when clipboard permission is denied. */ }
  const previous = document.activeElement;
  const area = document.createElement('textarea');
  area.value = text;
  area.setAttribute('aria-label', 'Kopyalanacak özet');
  area.style.cssText = 'position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;';
  // Elements outside an open modal dialog are inert and cannot receive selection.
  const parent = document.querySelector('dialog[open]') || document.body;
  parent.appendChild(area);
  try {
   area.focus(); area.select(); area.setSelectionRange(0, text.length);
   return !!document.execCommand('copy');
  } catch (_) { return false; }
  finally { area.remove(); previous?.focus?.({preventScroll:true}); }
 }
 function print() {
  preparePrint();
  try { window.print(); } catch (error) { restorePrint(); throw error; }
 }
 window.FormOutput = {cleanSummary, filename, configurePrint, copySummary, print};
})();
