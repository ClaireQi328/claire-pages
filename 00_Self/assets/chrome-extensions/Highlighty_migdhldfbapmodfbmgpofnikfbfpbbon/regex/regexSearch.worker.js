// QRX-01 — Web Worker that runs a user regex against page text off the main
// thread, so a catastrophically-backtracking pattern can be ABORTED by the main
// thread (worker.terminate) instead of freezing the renderer.
//
// This loop MUST stay in sync with src/search/regexExec.ts (execAllRegexMatches),
// which is the unit-tested canonical version. Keep it plain ES5-ish JS with no
// imports — it is copied verbatim into the build and loaded as a packaged,
// web-accessible worker (CSP: no blob URLs).
self.onmessage = function (event) {
  var data = event && event.data ? event.data : {};
  try {
    var regex = new RegExp(data.source, data.flags);
    var hits = [];
    var match = regex.exec(data.text);
    while (match) {
      hits.push({
        start: match.index,
        end: match.index + match[0].length,
        text: match[0],
      });
      if (match[0].length === 0) {
        // QRX-07: advance past the whole code point (the `u` flag steps by
        // code points; a flat += 1 splits a surrogate pair and loops forever).
        var cp = data.text.codePointAt(regex.lastIndex);
        regex.lastIndex += cp !== undefined && cp > 0xffff ? 2 : 1;
      }
      match = regex.exec(data.text);
    }
    self.postMessage({ ok: true, matches: hits });
  } catch (err) {
    self.postMessage({
      ok: false,
      error: String((err && err.message) || err),
    });
  }
};
