var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => JournalPartnerPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian3 = require("obsidian");
var import_state2 = require("@codemirror/state");
var import_view2 = require("@codemirror/view");

// node_modules/obsidian-daily-notes-interface/dist/index.mjs
var import_obsidian = require("obsidian");
function validateString(value) {
  return typeof value === "string" ? value : "";
}
function shouldUsePeriodicNotesSettings(periodicity) {
  var _a, _b, _c;
  return !!((_c = (_b = (_a = window.app.plugins.getPlugin("periodic-notes")) == null ? void 0 : _a.settings) == null ? void 0 : _b[periodicity]) == null ? void 0 : _c.enabled);
}
function getDailyNoteSettings() {
  var _a, _b, _c, _d;
  try {
    const { internalPlugins, plugins } = window.app;
    if (shouldUsePeriodicNotesSettings("daily")) {
      const { format: format2, folder: folder2, template: template2 } = ((_b = (_a = plugins.getPlugin("periodic-notes")) == null ? void 0 : _a.settings) == null ? void 0 : _b.daily) || {};
      return {
        format: format2 || "YYYY-MM-DD",
        folder: validateString(folder2).trim(),
        template: validateString(template2).trim()
      };
    }
    const { folder, format, template } = ((_d = (_c = internalPlugins.getPluginById("daily-notes")) == null ? void 0 : _c.instance) == null ? void 0 : _d.options) || {};
    return {
      format: format || "YYYY-MM-DD",
      folder: validateString(folder).trim(),
      template: validateString(template).trim()
    };
  } catch (err) {
    console.info("No custom daily note settings found!", err);
  }
}
function getWeeklyNoteSettings() {
  var _a, _b, _c;
  try {
    const pluginManager = window.app.plugins;
    const calendarSettings = (_a = pluginManager.getPlugin("calendar")) == null ? void 0 : _a.options;
    const periodicNotesSettings = (_c = (_b = pluginManager.getPlugin("periodic-notes")) == null ? void 0 : _b.settings) == null ? void 0 : _c.weekly;
    if (shouldUsePeriodicNotesSettings("weekly") && periodicNotesSettings) return {
      format: periodicNotesSettings.format || "gggg-[W]ww",
      folder: validateString(periodicNotesSettings.folder).trim(),
      template: validateString(periodicNotesSettings.template).trim()
    };
    const settings = calendarSettings || {};
    return {
      format: settings.weeklyNoteFormat || "gggg-[W]ww",
      folder: validateString(settings.weeklyNoteFolder).trim(),
      template: validateString(settings.weeklyNoteTemplate).trim()
    };
  } catch (err) {
    console.info("No custom weekly note settings found!", err);
  }
}
function getMonthlyNoteSettings() {
  var _a, _b;
  const pluginManager = window.app.plugins;
  try {
    const settings = shouldUsePeriodicNotesSettings("monthly") && ((_b = (_a = pluginManager.getPlugin("periodic-notes")) == null ? void 0 : _a.settings) == null ? void 0 : _b.monthly) || {};
    return {
      format: settings.format || "YYYY-MM",
      folder: validateString(settings.folder).trim(),
      template: validateString(settings.template).trim()
    };
  } catch (err) {
    console.info("No custom monthly note settings found!", err);
  }
}
function getQuarterlyNoteSettings() {
  var _a, _b;
  const pluginManager = window.app.plugins;
  try {
    const settings = shouldUsePeriodicNotesSettings("quarterly") && ((_b = (_a = pluginManager.getPlugin("periodic-notes")) == null ? void 0 : _a.settings) == null ? void 0 : _b.quarterly) || {};
    return {
      format: settings.format || "YYYY-[Q]Q",
      folder: validateString(settings.folder).trim(),
      template: validateString(settings.template).trim()
    };
  } catch (err) {
    console.info("No custom quarterly note settings found!", err);
  }
}
function getYearlyNoteSettings() {
  var _a, _b;
  const pluginManager = window.app.plugins;
  try {
    const settings = shouldUsePeriodicNotesSettings("yearly") && ((_b = (_a = pluginManager.getPlugin("periodic-notes")) == null ? void 0 : _a.settings) == null ? void 0 : _b.yearly) || {};
    return {
      format: settings.format || "YYYY",
      folder: validateString(settings.folder).trim(),
      template: validateString(settings.template).trim()
    };
  } catch (err) {
    console.info("No custom yearly note settings found!", err);
  }
}
function join(...partSegments) {
  let parts = [];
  for (let i = 0, l = partSegments.length; i < l; i++) parts = parts.concat(partSegments[i].split("/"));
  const newParts = [];
  for (let i = 0, l = parts.length; i < l; i++) {
    const part = parts[i];
    if (!part || part === ".") continue;
    else newParts.push(part);
  }
  if (parts[0] === "") newParts.unshift("");
  return newParts.join("/");
}
async function ensureFolderExists(path) {
  const dirs = path.replace(/\\/g, "/").split("/");
  dirs.pop();
  if (dirs.length) {
    const dir = join(...dirs);
    if (!window.app.vault.getAbstractFileByPath(dir)) await window.app.vault.createFolder(dir);
  }
}
async function getNotePath(directory, filename) {
  if (!filename.endsWith(".md")) filename += ".md";
  const path = (0, import_obsidian.normalizePath)(join(directory, filename));
  await ensureFolderExists(path);
  return path;
}
async function getTemplateInfo(template) {
  const { metadataCache, vault } = window.app;
  const templatePath = (0, import_obsidian.normalizePath)(template);
  if (templatePath === "/") return ["", null];
  try {
    const templateFile = metadataCache.getFirstLinkpathDest(templatePath, "");
    return [await vault.cachedRead(templateFile), window.app.foldManager.load(templateFile)];
  } catch (err) {
    console.error(`Failed to read the daily note template '${templatePath}'`, err);
    new import_obsidian.Notice("Failed to read the daily note template");
    return ["", null];
  }
}
function getDateUID(date, granularity = "day") {
  return `${granularity}-${date.clone().startOf(granularity).format()}`;
}
function removeEscapedCharacters(format) {
  return format.replace(/\[[^\]]*\]/g, "");
}
function isFormatAmbiguous(format, granularity) {
  if (granularity === "week") {
    const cleanFormat = removeEscapedCharacters(format);
    return /w{1,2}/i.test(cleanFormat) && (/M{1,4}/.test(cleanFormat) || /D{1,4}/.test(cleanFormat));
  }
  return false;
}
function getDateFromFile(file, granularity) {
  return getDateFromFilename(file.basename, granularity);
}
function getDateFromFilename(filename, granularity) {
  const format = {
    day: getDailyNoteSettings,
    week: getWeeklyNoteSettings,
    month: getMonthlyNoteSettings,
    quarter: getQuarterlyNoteSettings,
    year: getYearlyNoteSettings
  }[granularity]().format.split("/").pop();
  const noteDate = window.moment(filename, format, true);
  if (!noteDate.isValid()) return null;
  if (isFormatAmbiguous(format, granularity)) {
    if (granularity === "week") {
      const cleanFormat = removeEscapedCharacters(format);
      if (/w{1,2}/i.test(cleanFormat)) return window.moment(filename, format.replace(/M{1,4}/g, "").replace(/D{1,4}/g, ""), false);
    }
  }
  return noteDate;
}
var DailyNotesFolderMissingError = class extends Error {
};
async function createDailyNote(date) {
  var _a;
  const { app } = window;
  const { vault } = app;
  const moment3 = window.moment;
  const { template = "", format = "", folder = "" } = (_a = getDailyNoteSettings()) != null ? _a : {};
  const [templateContents, IFoldInfo] = await getTemplateInfo(template);
  const filename = date.format(format);
  const normalizedPath = await getNotePath(folder, filename);
  try {
    const createdFile = await vault.create(normalizedPath, templateContents.replace(/{{\s*date\s*}}/gi, filename).replace(/{{\s*time\s*}}/gi, moment3().format("HH:mm")).replace(/{{\s*title\s*}}/gi, filename).replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (_, _timeOrDate, calc, timeDelta, unit, momentFormat) => {
      const now = moment3();
      const currentDate = date.clone().set({
        hour: now.get("hour"),
        minute: now.get("minute"),
        second: now.get("second")
      });
      if (calc) currentDate.add(parseInt(timeDelta, 10), unit);
      if (momentFormat) return currentDate.format(momentFormat.substring(1).trim());
      return currentDate.format(format);
    }).replace(/{{\s*yesterday\s*}}/gi, date.clone().subtract(1, "day").format(format)).replace(/{{\s*tomorrow\s*}}/gi, date.clone().add(1, "d").format(format)));
    app.foldManager.save(createdFile, IFoldInfo);
    return createdFile;
  } catch (err) {
    console.error(`Failed to create file: '${normalizedPath}'`, err);
    new import_obsidian.Notice("Unable to create new file.");
  }
}
function getDailyNote(date, dailyNotes) {
  var _a;
  return (_a = dailyNotes[getDateUID(date, "day")]) != null ? _a : null;
}
function getAllDailyNotes() {
  const { vault } = window.app;
  const { folder = "" } = getDailyNoteSettings();
  const dailyNotesFolder = vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(folder));
  if (!(dailyNotesFolder instanceof import_obsidian.TFolder)) throw new DailyNotesFolderMissingError("Failed to find daily notes folder");
  const dailyNotes = {};
  import_obsidian.Vault.recurseChildren(dailyNotesFolder, (note) => {
    if (note instanceof import_obsidian.TFile) {
      const date = getDateFromFile(note, "day");
      if (date) {
        const dateString = getDateUID(date, "day");
        dailyNotes[dateString] = note;
      }
    }
  });
  return dailyNotes;
}
function appHasDailyNotesPluginLoaded() {
  var _a, _b, _c;
  const { app } = window;
  const dailyNotesPlugin = app.internalPlugins.plugins["daily-notes"];
  if (dailyNotesPlugin && dailyNotesPlugin.enabled) return true;
  return !!((_c = (_b = (_a = app.plugins.getPlugin("periodic-notes")) == null ? void 0 : _a.settings) == null ? void 0 : _b.daily) == null ? void 0 : _c.enabled);
}

// src/section.ts
var import_state = require("@codemirror/state");
var import_view = require("@codemirror/view");
var DEFAULT_SETTINGS = {
  targetHeading: "Journal",
  headingLevel: 2,
  timestampPattern: "\\d{2}:\\d{2}",
  timestampColor: "#7c3aed",
  timestampBgColor: "#ede9fe",
  readonlyTimestamps: true,
  autoTimestamp: true,
  sttEndpoint: "",
  sttApiKey: "",
  sttModel: "whisper-1",
  sttLanguage: "zh",
  sttRealtime: true,
  recordingFolder: "",
  imageFolder: "",
  submitShortcut: "shift+enter",
  sortOrder: "desc"
};
function findSection(doc, headingName, headingLevel) {
  const prefix = "#".repeat(headingLevel) + " ";
  const lines = doc.split("\n");
  let charOffset = 0;
  let startOffset = -1;
  for (const line of lines) {
    if (startOffset === -1) {
      if (line.startsWith(prefix) && line.slice(prefix.length).trim() === headingName) {
        startOffset = charOffset + line.length + 1;
      }
    } else {
      const m = line.match(/^(#+)\s/);
      if (m && m[1].length <= headingLevel) {
        return { from: startOffset, to: charOffset };
      }
    }
    charOffset += line.length + 1;
  }
  return startOffset === -1 ? null : { from: startOffset, to: doc.length };
}
function getTimestampRanges(doc, settings) {
  var _a;
  const section = findSection(
    doc,
    settings.targetHeading,
    settings.headingLevel
  );
  if (!section) return [];
  const linePattern = new RegExp(
    `^(?:[-*+]\\s+)?(${settings.timestampPattern})(?=\\s|$)`
  );
  const sectionText = doc.slice(section.from, section.to);
  const lines = sectionText.split("\n");
  const result = [];
  let offset = section.from;
  for (const line of lines) {
    const m = linePattern.exec(line);
    if ((m == null ? void 0 : m[1]) !== void 0) {
      const prefixLen = m[0].length - m[1].length;
      const from = offset + ((_a = m.index) != null ? _a : 0) + prefixLen;
      result.push({ from, to: from + m[1].length });
    }
    offset += line.length + 1;
  }
  return result;
}
function generateTimestamp() {
  const now = /* @__PURE__ */ new Date();
  return String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0");
}
function buildDecorations(doc, settings) {
  const builder = new import_state.RangeSetBuilder();
  const mark = import_view.Decoration.mark({
    class: "jp-timestamp",
    inclusiveStart: false,
    inclusiveEnd: false
  });
  for (const { from, to } of getTimestampRanges(doc, settings)) {
    builder.add(from, to, mark);
  }
  return builder.finish();
}
function parseJournalEntries(sectionText, pattern) {
  const tsRe = new RegExp(`^[-*+]\\s+(${pattern})\\s+(.*)$`);
  const lines = sectionText.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n");
  const entries = [];
  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    if (entries.length > 0 && /^\s+\S/.test(raw)) {
      const cont = raw.replace(/^\s{0,2}/, "");
      entries[entries.length - 1].text += "\n" + cont;
      continue;
    }
    const m = tsRe.exec(raw);
    if (!m) continue;
    entries.push({
      timestamp: m[1],
      text: m[2],
      lineIndex: i
    });
  }
  return entries;
}
function sortJournalEntries(entries, order) {
  const dir = order === "asc" ? 1 : -1;
  return [...entries].sort((a, b) => {
    const cmp = a.timestamp < b.timestamp ? -1 : a.timestamp > b.timestamp ? 1 : 0;
    if (cmp !== 0) return cmp * dir;
    return (a.lineIndex - b.lineIndex) * dir;
  });
}
function buildEntryLine(text, ts) {
  const trimmed = text.trim();
  if (trimmed.length === 0) return `- ${ts} `;
  const parts = trimmed.split("\n").map((l) => l.trim()).filter((l) => l.length > 0);
  if (parts.length === 1) {
    return `- ${ts} ${parts[0]}`;
  }
  const head = `- ${ts} ${parts[0]}  `;
  const tail = parts.slice(1).map(
    (line, idx) => idx === parts.length - 2 ? `  ${line}` : `  ${line}  `
  );
  return [head, ...tail].join("\n");
}
function appendToJournalSection(content, settings, line) {
  const section = findSection(
    content,
    settings.targetHeading,
    settings.headingLevel
  );
  if (!section) {
    const prefix = "#".repeat(settings.headingLevel) + " " + settings.targetHeading;
    const sep = content.length === 0 || content.endsWith("\n") ? "" : "\n";
    const headingBlock = `${sep}
${prefix}
${line}
`;
    return content + headingBlock;
  }
  const before = content.slice(0, section.to);
  const after = content.slice(section.to);
  const beforeTrimmed = before.replace(/\n+$/, "");
  const insertion = `
${line}
`;
  if (after.length === 0) {
    return beforeTrimmed + insertion;
  }
  return beforeTrimmed + insertion + "\n" + after;
}
var AUDIO_EXT_RE = /\.(m4a|mp3|wav|ogg|flac|opus|aac|webm)$/i;
function extractAudioEmbeds(text) {
  const out = [];
  const re = /!\[\[([^\]|#^]+)(?:[#^][^\]|]*)?(?:\|[^\]]*)?\]\]/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const path = m[1].trim();
    if (path.length > 0 && AUDIO_EXT_RE.test(path)) {
      out.push(path);
    }
  }
  return out;
}
function deleteEntryFromSection(content, settings, lineIndex) {
  const section = findSection(
    content,
    settings.targetHeading,
    settings.headingLevel
  );
  if (!section) return content;
  const sectionText = content.slice(section.from, section.to);
  const lines = sectionText.split("\n");
  if (lineIndex < 0 || lineIndex >= lines.length) return content;
  const tsRe = new RegExp(`^[-*+]\\s+(${settings.timestampPattern})(?=\\s|$)`);
  if (!tsRe.test(lines[lineIndex])) return content;
  let end = lineIndex + 1;
  while (end < lines.length && /^\s+\S/.test(lines[end])) {
    end++;
  }
  let charStart = 0;
  for (let i = 0; i < lineIndex; i++) {
    charStart += lines[i].length + 1;
  }
  let charEnd = charStart;
  for (let i = lineIndex; i < end; i++) {
    charEnd += lines[i].length + 1;
  }
  if (end === lines.length) {
    charEnd -= 1;
    if (charStart > 0 && sectionText[charStart - 1] === "\n") {
      charStart -= 1;
    }
  }
  const absStart = section.from + charStart;
  const absEnd = section.from + charEnd;
  return content.slice(0, absStart) + content.slice(absEnd);
}
function removeAudioEmbedsFromEntry(content, settings, lineIndex) {
  const section = findSection(
    content,
    settings.targetHeading,
    settings.headingLevel
  );
  if (!section) return content;
  const sectionText = content.slice(section.from, section.to);
  const lines = sectionText.split("\n");
  if (lineIndex < 0 || lineIndex >= lines.length) return content;
  const tsRe = new RegExp(`^[-*+]\\s+(${settings.timestampPattern})(?=\\s|$)`);
  if (!tsRe.test(lines[lineIndex])) return content;
  let end = lineIndex + 1;
  while (end < lines.length && /^\s+\S/.test(lines[end])) {
    end++;
  }
  const audioEmbedRe = /!\[\[([^\]|#^]+)(?:[#^][^\]|]*)?(?:\|[^\]]*)?\]\]/g;
  let changed = false;
  for (let i = lineIndex; i < end; i++) {
    const before = lines[i];
    const after = before.replace(audioEmbedRe, (full, path) => {
      if (AUDIO_EXT_RE.test(path.trim())) {
        changed = true;
        return "";
      }
      return full;
    });
    if (!changed && after === before) continue;
    let tidy = after.replace(/[^\S\n]{2,}/g, " ");
    const wasSoftBreak = /[^\S\n] {2}$/.test(before) || / {2}$/.test(before);
    if (wasSoftBreak && !/ {2}$/.test(tidy)) {
      tidy = tidy.replace(/\s+$/, "") + "  ";
    } else {
      tidy = tidy.replace(/[^\S\n]+$/, "");
    }
    lines[i] = tidy;
  }
  if (!changed) return content;
  const newSection = lines.join("\n");
  return content.slice(0, section.from) + newSection + content.slice(section.to);
}

// src/capture-view.ts
var import_obsidian2 = require("obsidian");

// src/stats.ts
var CJK_RE = /[一-鿿㐀-䶿]/g;
var WIKI_RE = /!?\[\[[^\]]+\]\]/g;
var ASCII_WORD_RE = /[A-Za-z0-9][A-Za-z0-9'_-]*/g;
var AUDIO_EXT_RE2 = /\.(m4a|mp3|wav|ogg|flac|opus|aac|webm)$/i;
var LIST_MARKER_RE = /^[-*+]\s/;
function countWords(text) {
  var _a, _b;
  if (!text) return 0;
  const cleaned = text.replace(WIKI_RE, " ");
  const cjk = ((_a = cleaned.match(CJK_RE)) != null ? _a : []).length;
  const ascii = ((_b = cleaned.replace(CJK_RE, " ").match(ASCII_WORD_RE)) != null ? _b : []).length;
  return cjk + ascii;
}
function countAudioEmbeds(text) {
  if (!text) return 0;
  const re = /!\[\[([^\]|#^]+)(?:[#^][^\]|]*)?(?:\|[^\]]*)?\]\]/g;
  let n = 0;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (AUDIO_EXT_RE2.test(m[1].trim())) n++;
  }
  return n;
}
function countEntries(sectionText) {
  if (!sectionText) return 0;
  const lines = sectionText.split("\n");
  let count = 0;
  let inParagraph = false;
  for (const raw of lines) {
    const isList = LIST_MARKER_RE.test(raw);
    const isEmpty = raw.trim().length === 0;
    const isIndented = /^\s/.test(raw) && !isEmpty;
    if (isList) {
      count++;
      inParagraph = false;
    } else if (isEmpty) {
      inParagraph = false;
    } else if (isIndented) {
      inParagraph = false;
    } else {
      if (!inParagraph) {
        count++;
        inParagraph = true;
      }
    }
  }
  return count;
}
function accumulateHourHistogram(sectionText, pattern, histogram) {
  if (!sectionText) return;
  const lineRe = new RegExp(`(?:^|\\s)(${pattern})(?=\\s|$)`, "gm");
  let m;
  while ((m = lineRe.exec(sectionText)) !== null) {
    const hm = /^(\d{1,2}):/.exec(m[1]);
    if (!hm) continue;
    const h = parseInt(hm[1], 10);
    if (h >= 0 && h < 24) histogram[h]++;
  }
}
function buildDayStats(key, sectionText) {
  return {
    key,
    entryCount: countEntries(sectionText),
    wordCount: countWords(sectionText),
    audioCount: countAudioEmbeds(sectionText)
  };
}
function getHeatmapLevel(count) {
  if (count <= 0) return 0;
  if (count === 1) return 1;
  if (count <= 3) return 2;
  if (count <= 6) return 3;
  return 4;
}
function computeLongestStreak(dailyMap) {
  const keys = [...dailyMap.keys()].filter((k) => {
    var _a, _b;
    return ((_b = (_a = dailyMap.get(k)) == null ? void 0 : _a.entryCount) != null ? _b : 0) > 0;
  }).sort();
  let longest = 0;
  let current = 0;
  let prev = null;
  for (const k of keys) {
    const t = Date.parse(k + "T00:00:00");
    if (prev !== null && t - prev === 864e5) {
      current++;
    } else {
      current = 1;
    }
    if (current > longest) longest = current;
    prev = t;
  }
  return longest;
}
function computeMostCommonHour(histogram) {
  let bestHour = -1;
  let bestCount = 0;
  for (let h = 0; h < 24; h++) {
    if (histogram[h] > bestCount) {
      bestCount = histogram[h];
      bestHour = h;
    }
  }
  if (bestHour < 0) return "\u2014";
  return String(bestHour).padStart(2, "0") + ":00";
}
function computeYearStats(year, dayInputs, timestampPattern) {
  const dailyMap = /* @__PURE__ */ new Map();
  const histogram = new Array(24).fill(0);
  let totalEntries = 0;
  let totalWords = 0;
  let totalAudios = 0;
  let writingDays = 0;
  for (const { key, sectionText } of dayInputs) {
    const ds = buildDayStats(key, sectionText);
    dailyMap.set(key, ds);
    totalEntries += ds.entryCount;
    totalWords += ds.wordCount;
    totalAudios += ds.audioCount;
    if (ds.entryCount > 0 || ds.wordCount > 0) writingDays++;
    accumulateHourHistogram(sectionText, timestampPattern, histogram);
  }
  return {
    year,
    totalWords,
    totalEntries,
    totalAudios,
    writingDays,
    longestStreak: computeLongestStreak(dailyMap),
    mostCommonHour: computeMostCommonHour(histogram),
    dailyMap
  };
}
function computeAllTimeStats(yearStatsList) {
  let totalWords = 0;
  let totalEntries = 0;
  let totalAudios = 0;
  let writingDays = 0;
  const yearsWithData = [];
  const globalDailyMap = /* @__PURE__ */ new Map();
  for (const ys of yearStatsList) {
    if (ys.totalWords === 0 && ys.totalEntries === 0) continue;
    yearsWithData.push(ys.year);
    totalWords += ys.totalWords;
    totalEntries += ys.totalEntries;
    totalAudios += ys.totalAudios;
    writingDays += ys.writingDays;
    for (const [key, ds] of ys.dailyMap) {
      globalDailyMap.set(key, ds);
    }
  }
  yearsWithData.sort((a, b) => a - b);
  return {
    totalWords,
    totalEntries,
    totalAudios,
    writingDays,
    longestStreak: computeLongestStreak(globalDailyMap),
    yearsWithData
  };
}
function formatChineseWordCount(n) {
  if (n < 1e4) return String(n);
  const wan = n / 1e4;
  if (wan < 10) return `${wan.toFixed(1)} \u4E07`;
  return `${Math.floor(wan)} \u4E07`;
}

// src/capture-view.ts
var CAPTURE_VIEW_TYPE = "journal-partner-capture-view";
var runAsync = (fn) => (...args) => {
  void fn(...args);
};
var JournalCaptureView = class extends import_obsidian2.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    // Top-level tab state
    this.currentTab = "capture";
    this.searchActive = false;
    this.searchDebounceTimer = null;
    this.searchQuery = "";
    this.searchVersion = 0;
    /** All daily note files sorted newest→oldest, set at search start. */
    this.searchFileQueue = [];
    /** Index into searchFileQueue: next file to scan in loadMoreSearchResults. */
    this.searchCursor = 0;
    // Stats state
    this.statsLoading = false;
    this.statsRefreshTimer = null;
    /** All years' stats for all-time aggregation. */
    this.allYearStats = /* @__PURE__ */ new Map();
    /** All-time aggregated stats. */
    this.allTimeStats = null;
    // Cached state
    this.days = [];
    /** Day immediately older than the oldest loaded day; next `loadMore` starts here. */
    this.nextProbeDate = (0, import_obsidian2.moment)().startOf("day").subtract(1, "day");
    /** True once we've scanned far enough back that nothing earlier exists. */
    this.exhausted = false;
    this.loadingMore = false;
    /** Max calendar days we'll probe in a single loadMore call. */
    this.probeWindow = 30;
    /** Hard floor: refuse to scan further back than this many days from today. */
    this.maxLookbackDays = 365;
    this.rerenderTimer = null;
    this.intersectionObs = null;
    // ── Quick-record via URL scheme ──────────────────────────────────────────
    /** Bound to the inner startRecording closure once buildInputCard runs. */
    this.startRecordingFn = null;
    // ── Mobile toolbar auto-hide (scroll-direction triggered) ──
    /** Last observed scrollTop, for direction detection. */
    this.lastScrollTop = 0;
    /** Bound scroll handler we install on the view's scroll container. */
    this.onScrollBound = null;
    /** Element we attached the scroll listener to, kept for clean removal. */
    this.scrollEl = null;
    /** Min pixel delta between events that counts as a real scroll move. */
    this.scrollDeltaThreshold = 6;
    this.plugin = plugin;
  }
  /**
   * Called by the plugin's URL handler when `cmd=record` is received.
   * Ensures the capture pane is visible, then starts recording immediately.
   * Safe to call before `buildInputCard` finishes (startRecordingFn will be
   * null until then, so we schedule a short retry).
   */
  async beginRecording() {
    if (this.currentTab !== "capture") this.switchTab("capture");
    if (this.startRecordingFn) {
      await this.startRecordingFn();
    } else {
      window.setTimeout(runAsync(async () => {
        if (this.startRecordingFn) await this.startRecordingFn();
      }), 200);
    }
  }
  getViewType() {
    return CAPTURE_VIEW_TYPE;
  }
  getDisplayText() {
    return "\u5FEB\u901F\u8BB0\u5F55";
  }
  getIcon() {
    return "feather";
  }
  async onOpen() {
    const root = this.containerEl.children[1];
    root.empty();
    root.addClass("jp-capture-root");
    this.buildTabBar(root);
    this.capturePaneEl = root.createDiv({ cls: "jp-pane jp-pane-capture" });
    this.buildInputCard(this.capturePaneEl);
    this.buildTimeline(this.capturePaneEl);
    this.statsPaneEl = root.createDiv({ cls: "jp-pane jp-pane-stats" });
    this.statsPaneEl.hide();
    this.reviewPaneEl = root.createDiv({ cls: "jp-pane jp-pane-review" });
    this.reviewPaneEl.hide();
    this.registerEvent(
      this.app.vault.on("modify", (file) => {
        if (!(file instanceof import_obsidian2.TFile)) return;
        const day = this.days.find((d) => d.filePath === file.path);
        if (day) {
          this.scheduleDayRefresh(day);
        }
        if (file.extension === "md") {
          this.scheduleStatsRefresh();
        }
      })
    );
    this.registerEvent(
      this.app.vault.on("create", (file) => {
        if (file instanceof import_obsidian2.TFile && file.extension === "md") {
          this.scheduleFullRebuild();
          this.scheduleStatsRefresh();
        }
      })
    );
    this.registerEvent(
      this.app.vault.on("delete", (file) => {
        if (file instanceof import_obsidian2.TFile && this.days.some((d) => d.filePath === file.path)) {
          this.scheduleFullRebuild();
        }
        if (file instanceof import_obsidian2.TFile && file.extension === "md") {
          this.scheduleStatsRefresh();
        }
      })
    );
    this.registerEvent(
      this.app.vault.on("rename", (file) => {
        if (file instanceof import_obsidian2.TFile && file.extension === "md") {
          this.scheduleStatsRefresh();
        }
      })
    );
    await this.fullRebuild();
    this.setupIntersectionObserver();
    this.setupMobileToolbarAutoHide();
  }
  async onClose() {
    if (this.rerenderTimer !== null) {
      window.clearTimeout(this.rerenderTimer);
      this.rerenderTimer = null;
    }
    if (this.statsRefreshTimer !== null) {
      window.clearTimeout(this.statsRefreshTimer);
      this.statsRefreshTimer = null;
    }
    if (this.searchDebounceTimer !== null) {
      window.clearTimeout(this.searchDebounceTimer);
      this.searchDebounceTimer = null;
    }
    if (this.intersectionObs) {
      this.intersectionObs.disconnect();
      this.intersectionObs = null;
    }
    this.teardownMobileToolbarAutoHide();
    this.disposeDays();
    this.containerEl.children[1].empty();
  }
  // ── DOM construction ────────────────────────────────────────────────────
  buildTabBar(root) {
    this.tabBarEl = root.createDiv({ cls: "jp-tab-bar" });
    this.captureTabBtn = this.makeTabBtn("feather", true, "\u5FEB\u901F\u8BB0\u5F55");
    this.captureTabBtn.addEventListener("click", () => this.switchTab("capture"));
    this.reviewTabBtn = this.makeTabBtn("calendar", false, "\u968F\u673A\u56DE\u987E");
    this.reviewTabBtn.addEventListener("click", () => this.switchTab("review"));
    this.searchTabBtn = this.makeTabBtn("search", false, "\u641C\u7D22\u65E5\u8BB0");
    this.searchTabBtn.addEventListener("click", () => this.switchTab("search"));
    this.statsTabBtn = this.makeTabBtn("bar-chart-2", false, "\u5E74\u5EA6\u7EDF\u8BA1");
    this.statsTabBtn.addEventListener("click", () => this.switchTab("stats"));
    this.searchBarEl = root.createDiv({ cls: "jp-search-bar" });
    this.searchBarEl.hide();
    const searchIcon = this.searchBarEl.createSpan({ cls: "jp-search-bar-icon" });
    (0, import_obsidian2.setIcon)(searchIcon, "search");
    this.searchInputEl = this.searchBarEl.createEl("input", {
      cls: "jp-search-input",
      attr: { placeholder: "\u641C\u7D22\u65E5\u8BB0\u2026", type: "text" }
    });
    this.searchInputEl.addEventListener("input", () => {
      const q = this.searchInputEl.value;
      this.searchQuery = q;
      if (this.searchDebounceTimer !== null) window.clearTimeout(this.searchDebounceTimer);
      this.searchDebounceTimer = window.setTimeout(() => {
        this.searchDebounceTimer = null;
        void this.runSearch(q.trim());
      }, 300);
    });
  }
  /** Build one icon-only tab button. */
  makeTabBtn(icon, active, tooltip) {
    const btn = this.tabBarEl.createEl("button", {
      cls: "jp-tab-btn" + (active ? " is-active" : ""),
      attr: tooltip ? { "aria-label": tooltip, title: tooltip } : {}
    });
    const iconEl = btn.createSpan({ cls: "jp-tab-btn-icon" });
    (0, import_obsidian2.setIcon)(iconEl, icon);
    return btn;
  }
  switchTab(tab) {
    if (this.currentTab === tab) return;
    const prevTab = this.currentTab;
    this.currentTab = tab;
    this.captureTabBtn.toggleClass("is-active", tab === "capture");
    this.reviewTabBtn.toggleClass("is-active", tab === "review");
    this.searchTabBtn.toggleClass("is-active", tab === "search");
    this.statsTabBtn.toggleClass("is-active", tab === "stats");
    if (tab === "search") {
      this.capturePaneEl.show();
      this.statsPaneEl.hide();
      this.reviewPaneEl.hide();
      this.inputCardEl.hide();
      this.searchBarEl.show();
      this.searchActive = true;
      if (prevTab !== "search") {
        if (this.searchQuery.length === 0) {
          this.disposeDays();
          this.timelineEl.empty();
          this.exhausted = false;
          this.searchFileQueue = [];
          this.searchCursor = 0;
          this.renderTopLevelMessage("\u8F93\u5165\u5173\u952E\u8BCD\u5F00\u59CB\u641C\u7D22");
        }
        this.searchInputEl.value = this.searchQuery;
        window.setTimeout(() => this.searchInputEl.focus(), 50);
      }
    } else if (tab === "capture") {
      this.capturePaneEl.show();
      this.statsPaneEl.hide();
      this.reviewPaneEl.hide();
      this.inputCardEl.show();
      this.searchBarEl.hide();
      if (this.searchActive || prevTab === "search") {
        this.searchActive = false;
        if (this.searchDebounceTimer !== null) {
          window.clearTimeout(this.searchDebounceTimer);
          this.searchDebounceTimer = null;
        }
      }
      if (prevTab !== "capture") {
        void this.fullRebuild();
      }
    } else if (tab === "review") {
      this.capturePaneEl.hide();
      this.statsPaneEl.hide();
      this.reviewPaneEl.show();
      this.searchBarEl.hide();
      void this.loadReview();
    } else {
      this.capturePaneEl.hide();
      this.statsPaneEl.show();
      this.reviewPaneEl.hide();
      this.inputCardEl.show();
      this.searchBarEl.hide();
      if (this.statsPaneEl.childElementCount === 0) {
        this.buildStatsPane();
      }
      void this.loadAllStats();
    }
  }
  toggleSearch() {
    if (this.currentTab === "search") {
      this.switchTab("capture");
    } else {
      this.switchTab("search");
    }
  }
  async runSearch(query) {
    if (!this.searchActive) return;
    const version = ++this.searchVersion;
    this.disposeDays();
    this.timelineEl.empty();
    this.exhausted = false;
    this.searchFileQueue = [];
    this.searchCursor = 0;
    if (query.length === 0) {
      this.renderTopLevelMessage("\u8F93\u5165\u5173\u952E\u8BCD\u5F00\u59CB\u641C\u7D22");
      return;
    }
    if (!appHasDailyNotesPluginLoaded()) {
      this.renderTopLevelMessage("\u8BF7\u5148\u542F\u7528 Obsidian \u81EA\u5E26\u7684\u300CDaily Notes\u300D\u6838\u5FC3\u63D2\u4EF6");
      return;
    }
    this.renderTopLevelMessage("\u641C\u7D22\u4E2D\u2026");
    const allNotes = getAllDailyNotes();
    const queue = [];
    for (const file of Object.values(allNotes)) {
      if (!(file instanceof import_obsidian2.TFile)) continue;
      const date = getDateFromFile(file, "day");
      if (date) queue.push({ date: date.clone().startOf("day"), file });
    }
    queue.sort((a, b) => a.date.isBefore(b.date) ? 1 : -1);
    this.searchFileQueue = queue.map((q) => q.file);
    if (this.searchVersion !== version) return;
    await this.loadMoreSearchResults();
  }
  /** Scan the next batch of files in searchFileQueue and append matching days. */
  async loadMoreSearchResults() {
    if (!this.searchActive || this.loadingMore) return;
    if (this.searchFileQueue.length === 0) return;
    this.loadingMore = true;
    const version = this.searchVersion;
    const query = this.searchQuery;
    const lower = query.toLowerCase();
    const batchSize = 20;
    let found = 0;
    try {
      while (this.searchCursor < this.searchFileQueue.length && found < batchSize) {
        if (this.searchVersion !== version) return;
        const file = this.searchFileQueue[this.searchCursor++];
        const date = getDateFromFile(file, "day");
        if (!date) continue;
        try {
          const content = await this.app.vault.cachedRead(file);
          const section = findSection(
            content,
            this.plugin.settings.targetHeading,
            this.plugin.settings.headingLevel
          );
          if (!section) continue;
          const text = content.slice(section.from, section.to);
          const entries = parseJournalEntries(text, this.plugin.settings.timestampPattern);
          const matched = entries.filter((e) => this.entryMatchesQuery(e.text, lower));
          if (matched.length === 0) continue;
          if (this.days.length === 0) this.timelineEl.empty();
          const day = {
            date: date.clone().startOf("day"),
            el: createDiv({ cls: "jp-timeline-day" }),
            scope: new import_obsidian2.Component(),
            filePath: file.path
          };
          day.scope.load();
          this.renderSearchDayContent(day, matched, query);
          this.timelineEl.appendChild(day.el);
          this.days.push(day);
          found++;
        } catch (e) {
        }
      }
      if (this.searchVersion !== version) return;
      if (this.searchCursor >= this.searchFileQueue.length) {
        this.exhausted = true;
        if (this.days.length === 0) {
          this.timelineEl.empty();
          this.renderTopLevelMessage(`\u672A\u627E\u5230\u5305\u542B\u300C${query}\u300D\u7684\u8BB0\u5F55`);
        } else {
          this.markEndOfTimeline();
        }
      }
    } finally {
      this.loadingMore = false;
    }
  }
  /**
   * Check whether the searchable text of an entry contains the query.
   * Strips wiki-embeds and markdown image syntax before matching so that
   * file paths (e.g. "Recordings/2024-01-01_...m4a") don't cause false hits.
   */
  entryMatchesQuery(text, lowerQuery) {
    const stripped = text.replace(/!\[\[[^\]]*\]\]/g, "").replace(/!\[[^\]]*\]\([^)]*\)/g, "").toLowerCase();
    return stripped.includes(lowerQuery);
  }
  /** Render search result entries with keyword highlight. */
  renderSearchDayContent(day, entries, query) {
    var _a;
    const headerLabel = this.formatDateHeader(day.date, entries.length);
    const headerRow = day.el.createDiv({ cls: "jp-timeline-entry jp-timeline-entry--header" });
    headerRow.createDiv({ cls: "jp-timeline-dot jp-timeline-dot--header" });
    const headerCard = headerRow.createDiv({ cls: "jp-timeline-header-card" });
    const headerText = headerCard.createDiv({ cls: "jp-timeline-header-text" });
    headerText.createDiv({ cls: "jp-timeline-header-title", text: headerLabel.title });
    headerText.createDiv({ cls: "jp-timeline-header-sub", text: `${entries.length} \u6761\u5339\u914D` });
    this.addOpenNoteBtn(headerCard, day);
    const sourcePath = (_a = day.filePath) != null ? _a : "";
    const sorted = sortJournalEntries(entries, this.plugin.settings.sortOrder);
    for (const entry of sorted) {
      const row = day.el.createDiv({ cls: "jp-timeline-entry" });
      row.createDiv({ cls: "jp-timeline-dot" });
      const head = row.createDiv({ cls: "jp-timeline-entry-head" });
      head.createSpan({ cls: "jp-timestamp", text: entry.timestamp });
      const bubble = row.createDiv({ cls: "jp-timeline-bubble jp-search-bubble" });
      void import_obsidian2.MarkdownRenderer.render(this.app, entry.text, bubble, sourcePath, day.scope).then(() => {
        this.highlightKeyword(bubble, query);
      });
      const openMenu = (evt) => {
        evt.preventDefault();
        this.openEntryMenu(evt, day, entry);
      };
      head.addEventListener("contextmenu", openMenu);
      bubble.addEventListener("contextmenu", openMenu);
    }
  }
  /** Walk DOM text nodes and wrap keyword occurrences in highlight spans. */
  highlightKeyword(el, query) {
    var _a, _b;
    const lower = query.toLowerCase();
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const nodes = [];
    let node;
    while (node = walker.nextNode()) nodes.push(node);
    for (const textNode of nodes) {
      const text = (_a = textNode.nodeValue) != null ? _a : "";
      const idx = text.toLowerCase().indexOf(lower);
      if (idx === -1) continue;
      const frag = createFragment();
      let cursor = 0;
      let pos = text.toLowerCase().indexOf(lower, cursor);
      while (pos !== -1) {
        if (pos > cursor) frag.appendChild(document.createTextNode(text.slice(cursor, pos)));
        const mark = createEl("mark");
        mark.className = "jp-search-highlight";
        mark.textContent = text.slice(pos, pos + query.length);
        frag.appendChild(mark);
        cursor = pos + query.length;
        pos = text.toLowerCase().indexOf(lower, cursor);
      }
      if (cursor < text.length) frag.appendChild(document.createTextNode(text.slice(cursor)));
      (_b = textNode.parentNode) == null ? void 0 : _b.replaceChild(frag, textNode);
    }
  }
  buildInputCard(root) {
    this.inputCardEl = root.createDiv({ cls: "jp-capture-card" });
    const inputWrapper = this.inputCardEl.createDiv({ cls: "jp-capture-input-wrapper" });
    this.textareaEl = inputWrapper.createEl("textarea", {
      cls: "jp-capture-input",
      attr: {
        placeholder: "What's happening?",
        rows: "3"
      }
    });
    this.textareaEl.addEventListener("input", () => {
      this.refreshSubmitState();
      this.autoResizeTextarea();
    });
    this.textareaEl.addEventListener("keydown", (evt) => {
      if (evt.key !== "Enter" || evt.isComposing) return;
      const shortcut = this.plugin.settings.submitShortcut;
      const matches = (shortcut.includes("shift") ? evt.shiftKey : !evt.shiftKey) && (shortcut.includes("ctrl") ? evt.ctrlKey : !evt.ctrlKey) && (shortcut.includes("alt") ? evt.altKey : !evt.altKey);
      if (matches) {
        evt.preventDefault();
        void this.handleSubmit();
      }
    });
    this.registerDomEvent(document, "paste", async (e) => {
      var _a;
      const items = (_a = e.clipboardData) == null ? void 0 : _a.items;
      if (!items) return;
      if (!this.inputCardEl.contains(document.activeElement)) return;
      for (const item of Array.from(items)) {
        if (item.kind !== "file" || !item.type.startsWith("image/")) continue;
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        const blob = item.getAsFile();
        if (!blob) continue;
        try {
          const result = await this.saveImageToVault(blob);
          const textarea = this.textareaEl;
          const start = textarea.selectionStart;
          const end = textarea.selectionEnd;
          const before = textarea.value.substring(0, start);
          const after = textarea.value.substring(end);
          textarea.value = before + result + " " + after;
          const newPos = start + result.length + 1;
          textarea.setSelectionRange(newPos, newPos);
          this.refreshSubmitState();
          this.autoResizeTextarea();
        } catch (err) {
          new import_obsidian2.Notice(`\u56FE\u7247\u4FDD\u5B58\u5931\u8D25\uFF1A${err instanceof Error ? err.message : String(err)}`);
        }
        return;
      }
    }, true);
    this.textareaEl.addEventListener("drop", runAsync(async (e) => {
      var _a;
      const files = (_a = e.dataTransfer) == null ? void 0 : _a.files;
      if (!files) return;
      for (const file of Array.from(files)) {
        if (!file.type.startsWith("image/")) continue;
        e.preventDefault();
        e.stopPropagation();
        try {
          const result = await this.saveImageToVault(file);
          const start = this.textareaEl.selectionStart;
          const end = this.textareaEl.selectionEnd;
          const before = this.textareaEl.value.substring(0, start);
          const after = this.textareaEl.value.substring(end);
          this.textareaEl.value = before + result + " " + after;
          const newPos = start + result.length + 1;
          this.textareaEl.setSelectionRange(newPos, newPos);
          this.refreshSubmitState();
          this.autoResizeTextarea();
        } catch (err) {
          new import_obsidian2.Notice(`\u56FE\u7247\u4FDD\u5B58\u5931\u8D25\uFF1A${err instanceof Error ? err.message : String(err)}`);
        }
        return;
      }
    }));
    this.textareaEl.addEventListener("dragover", (e) => {
      var _a;
      if ((_a = e.dataTransfer) == null ? void 0 : _a.types.includes("Files")) e.preventDefault();
    }, true);
    const fileInput = this.inputCardEl.createEl("input", {
      cls: "jp-capture-image-input",
      attr: {
        type: "file",
        accept: "image/*"
      }
    });
    fileInput.hide();
    fileInput.addEventListener("change", runAsync(async () => {
      const files = fileInput.files;
      if (!files || files.length === 0) return;
      const file = files[0];
      if (!file.type.startsWith("image/")) return;
      fileInput.value = "";
      try {
        const result = await this.saveImageToVault(file);
        const textarea = this.textareaEl;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const before = textarea.value.substring(0, start);
        const after = textarea.value.substring(end);
        textarea.value = before + result + " " + after;
        const newPos = start + result.length + 1;
        textarea.setSelectionRange(newPos, newPos);
        this.refreshSubmitState();
        this.autoResizeTextarea();
      } catch (err) {
        new import_obsidian2.Notice(`\u56FE\u7247\u4FDD\u5B58\u5931\u8D25\uFF1A${err instanceof Error ? err.message : String(err)}`);
      }
    }));
    const recBar = this.inputCardEl.createDiv({ cls: "jp-recording-bar" });
    recBar.hide();
    const recWaveRow = recBar.createDiv({ cls: "jp-recording-wave-row" });
    const recCanvas = recWaveRow.createEl("canvas", { cls: "jp-recording-waveform" });
    const recMeta = recWaveRow.createDiv({ cls: "jp-recording-meta" });
    const recTime = recMeta.createSpan({ cls: "jp-recording-time", text: "00:00" });
    const recStatus = recMeta.createSpan({ cls: "jp-recording-status", text: "\u5F55\u97F3\u4E2D\u2026" });
    const recStopBtn = recBar.createEl("button", {
      cls: "jp-recording-stop",
      attr: { "aria-label": "\u505C\u6B62" }
    });
    (0, import_obsidian2.setIcon)(recStopBtn, "square");
    let mediaRecorder = null;
    let audioChunks = [];
    let recordingTimeout = null;
    let audioCtx = null;
    let analyser = null;
    let rafId = null;
    let recordStartedAt = 0;
    let realtimeProcessor = null;
    let realtimeTimer = null;
    let segmentFrames = [];
    let vadSilenceSamples = 0;
    let vadSegmentSamples = 0;
    let lastTranscript = "";
    let realtimeBaseCursor = 0;
    let realtimeRegionStart = 0;
    let realtimeActive = false;
    let pendingFlush = Promise.resolve();
    let vadFirstSegment = true;
    const VAD_FRAME = 4096;
    const VAD_ENERGY_RMS = 0.012;
    const VAD_SILENCE_CUT_SAMPLES = 0.45;
    const VAD_MAX_SEG_SAMPLES = 4;
    const VAD_MIN_SEG_SAMPLES = 0.8;
    const VAD_FIRST_FLUSH_SAMPLES = 2.4;
    const formatDuration = (ms) => {
      const total = Math.floor(ms / 1e3);
      const m = String(Math.floor(total / 60)).padStart(2, "0");
      const s = String(total % 60).padStart(2, "0");
      return `${m}:${s}`;
    };
    const teardownAnalyser = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      if (realtimeTimer !== null) {
        window.clearInterval(realtimeTimer);
        realtimeTimer = null;
      }
      if (realtimeProcessor) {
        try {
          realtimeProcessor.disconnect();
        } catch (e) {
        }
        realtimeProcessor = null;
      }
      if (audioCtx) {
        void audioCtx.close();
        audioCtx = null;
        analyser = null;
      }
      segmentFrames = [];
      vadSilenceSamples = 0;
      vadSegmentSamples = 0;
      lastTranscript = "";
    };
    const pickRecordingMime = () => {
      const candidates = [
        "audio/mp4;codecs=mp4a.40.2",
        "audio/mp4",
        "audio/webm;codecs=opus",
        "audio/webm"
      ];
      for (const t of candidates) {
        try {
          if (MediaRecorder.isTypeSupported(t)) return t;
        } catch (e) {
        }
      }
      return "";
    };
    const drawWaveform = () => {
      if (!analyser || !recCanvas) {
        rafId = null;
        return;
      }
      const ctx2d = recCanvas.getContext("2d");
      if (!ctx2d) {
        rafId = null;
        return;
      }
      const buf = new Uint8Array(analyser.fftSize);
      analyser.getByteTimeDomainData(buf);
      const w = recCanvas.width;
      const h = recCanvas.height;
      ctx2d.clearRect(0, 0, w, h);
      const stroke = getComputedStyle(recBar).getPropertyValue("--jp-recording-stroke").trim() || "#7c3aed";
      ctx2d.fillStyle = stroke;
      const barCount = 48;
      const gap = Math.max(1, w * 0.012);
      const barW = (w - gap * (barCount - 1)) / barCount;
      const mid = h / 2;
      const maxHalf = mid * 0.98;
      const minHalf = Math.max(1, h * 0.05);
      const samplesPerBar = buf.length / barCount;
      const r = barW / 2;
      const smoother = drawWaveform;
      let smooth = smoother._smooth;
      if (!smooth) {
        smooth = new Float32Array(barCount);
        smoother._smooth = smooth;
      }
      const gain = 2.4;
      for (let i = 0; i < barCount; i++) {
        let peak = 0;
        const start = Math.floor(i * samplesPerBar);
        const end = Math.floor((i + 1) * samplesPerBar);
        for (let j = start; j < end; j++) {
          const v = Math.abs(buf[j] - 128) / 128;
          if (v > peak) peak = v;
        }
        const expanded = Math.sqrt(Math.min(1, peak * gain));
        const prev = smooth[i];
        const target = expanded > prev ? expanded : prev * 0.82 + expanded * 0.18;
        smooth[i] = target;
        const half = Math.max(minHalf, target * maxHalf);
        const x = i * (barW + gap);
        if (typeof ctx2d.roundRect === "function") {
          ctx2d.beginPath();
          ctx2d.roundRect(x, mid - half, barW, half, r);
          ctx2d.fill();
          ctx2d.beginPath();
          ctx2d.roundRect(x, mid, barW, half, r);
          ctx2d.fill();
        } else {
          ctx2d.fillRect(x, mid - half, barW, half);
          ctx2d.fillRect(x, mid, barW, half);
        }
      }
      recTime.setText(formatDuration(performance.now() - recordStartedAt));
      rafId = window.requestAnimationFrame(drawWaveform);
    };
    const stopRecording = async () => {
      if (!mediaRecorder || mediaRecorder.state === "inactive") return;
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      if (realtimeTimer !== null) {
        window.clearInterval(realtimeTimer);
        realtimeTimer = null;
      }
      if (realtimeProcessor) {
        try {
          realtimeProcessor.disconnect();
        } catch (e) {
        }
        realtimeProcessor = null;
      }
      mediaRecorder.stop();
      mediaRecorder.stream.getTracks().forEach((track) => track.stop());
      if (recordingTimeout !== null) {
        window.clearTimeout(recordingTimeout);
        recordingTimeout = null;
      }
    };
    const sttConfigured = () => {
      const s = this.plugin.settings;
      return s.sttEndpoint.trim().length > 0 && s.sttApiKey.trim().length > 0;
    };
    const wantRealtime = () => sttConfigured() && this.plugin.settings.sttRealtime;
    const appendStreamedText = (text) => {
      const ta = this.textareaEl;
      const pos = realtimeBaseCursor;
      const before = ta.value.substring(0, pos);
      const after = ta.value.substring(pos);
      ta.value = before + text + after;
      realtimeBaseCursor = pos + text.length;
      ta.setSelectionRange(realtimeBaseCursor, realtimeBaseCursor);
      this.refreshSubmitState();
      this.autoResizeTextarea();
    };
    const encodeWav = (frames, sampleRate) => {
      const total = frames.reduce((n, f) => n + f.length, 0);
      if (total === 0) return new Blob([], { type: "audio/wav" });
      const buffer = new ArrayBuffer(44 + total * 2);
      const view = new DataView(buffer);
      const writeStr = (off2, s) => {
        for (let i = 0; i < s.length; i++) view.setUint8(off2 + i, s.charCodeAt(i));
      };
      writeStr(0, "RIFF");
      view.setUint32(4, 36 + total * 2, true);
      writeStr(8, "WAVE");
      writeStr(12, "fmt ");
      view.setUint32(16, 16, true);
      view.setUint16(20, 1, true);
      view.setUint16(22, 1, true);
      view.setUint32(24, sampleRate, true);
      view.setUint32(28, sampleRate * 2, true);
      view.setUint16(32, 2, true);
      view.setUint16(34, 16, true);
      writeStr(36, "data");
      view.setUint32(40, total * 2, true);
      let off = 44;
      for (const frame of frames) {
        for (let i = 0; i < frame.length; i++) {
          let s = Math.max(-1, Math.min(1, frame[i]));
          view.setInt16(off, s < 0 ? s * 32768 : s * 32767, true);
          off += 2;
        }
      }
      return new Blob([buffer], { type: "audio/wav" });
    };
    const frameRms = (frame) => {
      let sum = 0;
      for (let i = 0; i < frame.length; i++) sum += frame[i] * frame[i];
      return Math.sqrt(sum / frame.length);
    };
    const transcribeSegment = (frames, sr) => {
      pendingFlush = pendingFlush.then(async () => {
        const wav = encodeWav(frames, sr);
        if (wav.size < 4e3) return;
        try {
          const promptText = lastTranscript.slice(-64);
          const t = (await this.transcribeAudio(wav, promptText)).trim();
          if (t.length > 0) {
            appendStreamedText(t);
            lastTranscript = (lastTranscript + t).slice(-256);
          }
        } catch (e) {
        }
      });
    };
    const flushCurrentSegment = () => {
      if (!audioCtx) return;
      if (segmentFrames.length === 0) return;
      const sr = audioCtx.sampleRate;
      const seg = segmentFrames;
      segmentFrames = [];
      vadSegmentSamples = 0;
      vadSilenceSamples = 0;
      if (seg.reduce((n, f) => n + f.length, 0) / sr < VAD_MIN_SEG_SAMPLES) return;
      vadFirstSegment = false;
      void transcribeSegment(seg, sr);
    };
    const ingestFrame = (frame) => {
      if (!audioCtx) return;
      const sr = audioCtx.sampleRate;
      segmentFrames.push(new Float32Array(frame));
      vadSegmentSamples += frame.length;
      const silent = frameRms(frame) < VAD_ENERGY_RMS;
      vadSilenceSamples = silent ? vadSilenceSamples + frame.length : 0;
      if (vadSilenceSamples >= VAD_SILENCE_CUT_SAMPLES * sr && vadSegmentSamples >= VAD_MIN_SEG_SAMPLES * sr) {
        flushCurrentSegment();
        return;
      }
      if (vadFirstSegment && vadSegmentSamples >= VAD_FIRST_FLUSH_SAMPLES * sr) {
        flushCurrentSegment();
        return;
      }
      if (vadSegmentSamples >= VAD_MAX_SEG_SAMPLES * sr) {
        flushCurrentSegment();
      }
    };
    const insertAtCursor = (text) => {
      const textarea = this.textareaEl;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const before = textarea.value.substring(0, start);
      const after = textarea.value.substring(end);
      const piece = text + " ";
      textarea.value = before + piece + after;
      const newPos = start + piece.length;
      textarea.setSelectionRange(newPos, newPos);
      this.refreshSubmitState();
      this.autoResizeTextarea();
    };
    const startRecording = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        audioChunks = [];
        const mime = pickRecordingMime();
        mediaRecorder = mime ? new MediaRecorder(stream, { mimeType: mime }) : new MediaRecorder(stream);
        const outType = mime.startsWith("audio/mp4") ? "audio/mp4" : "audio/webm";
        mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) audioChunks.push(e.data);
        };
        mediaRecorder.onstop = async () => {
          if (realtimeActive && audioCtx) flushCurrentSegment();
          const flushChain = pendingFlush;
          teardownAnalyser();
          const audioBlob = new Blob(audioChunks, { type: outType });
          const wantSTT = sttConfigured();
          recStatus.setText("\u8F6C\u5199\u4E2D\u2026");
          recBar.addClass("is-transcribing");
          recBar.show();
          try {
            const audioEmbed = await this.saveAudioToVault(audioBlob);
            let text = "";
            if (!realtimeActive && wantSTT) {
              try {
                text = (await this.transcribeAudio(audioBlob)).trim();
              } catch (err) {
                new import_obsidian2.Notice(`\u8F6C\u5199\u5931\u8D25\uFF1A${err instanceof Error ? err.message : String(err)}`);
              }
            }
            await flushChain;
            if (realtimeActive) {
              appendStreamedText(` ${audioEmbed}`);
            } else {
              insertAtCursor(text.length > 0 ? `${text} ${audioEmbed}` : audioEmbed);
            }
          } catch (err) {
            new import_obsidian2.Notice(`\u5F55\u97F3\u4FDD\u5B58\u5931\u8D25\uFF1A${err instanceof Error ? err.message : String(err)}`);
          } finally {
            recBar.removeClass("is-transcribing");
            recBar.removeClass("jp-bar-entering");
            recBar.hide();
            actions.removeClass("is-recording");
          }
        };
        mediaRecorder.start();
        realtimeActive = wantRealtime();
        try {
          const Ctor = window.AudioContext || window.webkitAudioContext;
          if (!Ctor) throw new Error("AudioContext unavailable");
          audioCtx = new Ctor();
          const source = audioCtx.createMediaStreamSource(stream);
          analyser = audioCtx.createAnalyser();
          analyser.fftSize = 1024;
          source.connect(analyser);
          if (realtimeActive) {
            realtimeRegionStart = this.textareaEl.selectionStart;
            realtimeBaseCursor = realtimeRegionStart;
            lastTranscript = "";
            segmentFrames = [];
            vadSilenceSamples = 0;
            vadSegmentSamples = 0;
            vadFirstSegment = true;
            const sp = audioCtx.createScriptProcessor(VAD_FRAME, 1, 1);
            sp.onaudioprocess = (ev) => {
              ingestFrame(ev.inputBuffer.getChannelData(0));
            };
            source.connect(sp);
            sp.connect(analyser);
            realtimeProcessor = sp;
          }
          recStatus.setText(realtimeActive ? "\u5B9E\u65F6\u8F6C\u5199\u4E2D\u2026" : "\u5F55\u97F3\u4E2D\u2026");
          recBar.show();
          recBar.addClass("jp-bar-entering");
          const dpr = window.devicePixelRatio || 1;
          recCanvas.width = Math.max(1, recCanvas.clientWidth) * dpr;
          recCanvas.height = Math.max(1, recCanvas.clientHeight) * dpr;
          recordStartedAt = performance.now();
          rafId = window.requestAnimationFrame(drawWaveform);
        } catch (e) {
        }
        (0, import_obsidian2.setIcon)(micBtn, "square");
        micBtn.addClass("is-recording");
        actions.addClass("is-recording");
        recordingTimeout = window.setTimeout(() => {
          void stopRecording();
          new import_obsidian2.Notice("\u5F55\u97F3\u5DF2\u81EA\u52A8\u505C\u6B62\uFF08\u6700\u957F5\u5206\u949F\uFF09");
        }, 5 * 60 * 1e3);
      } catch (err) {
        new import_obsidian2.Notice(`\u65E0\u6CD5\u8BBF\u95EE\u9EA6\u514B\u98CE\uFF1A${err instanceof Error ? err.message : String(err)}`);
      }
    };
    this.startRecordingFn = startRecording;
    const actions = this.inputCardEl.createDiv({ cls: "jp-capture-actions" });
    const buttonRow = actions.createDiv({ cls: "jp-capture-button-row" });
    const imageBtn = buttonRow.createEl("button", {
      cls: "jp-capture-image-btn",
      attr: { "aria-label": "\u4E0A\u4F20\u56FE\u7247" }
    });
    (0, import_obsidian2.setIcon)(imageBtn, "image");
    imageBtn.addEventListener("click", () => {
      fileInput.click();
    });
    const micBtn = buttonRow.createEl("button", {
      cls: "jp-capture-mic-btn",
      attr: { "aria-label": "\u5F55\u97F3" }
    });
    (0, import_obsidian2.setIcon)(micBtn, "mic");
    const doStop = async () => {
      await stopRecording();
      micBtn.removeClass("is-recording");
      (0, import_obsidian2.setIcon)(micBtn, "mic");
    };
    micBtn.addEventListener("click", runAsync(async () => {
      if (!mediaRecorder || mediaRecorder.state === "inactive") {
        await startRecording();
      } else {
        await doStop();
      }
    }));
    recStopBtn.addEventListener("click", () => void doStop());
    const clearBtn = buttonRow.createEl("button", {
      cls: "jp-capture-clear-btn",
      attr: { "aria-label": "\u6E05\u7A7A" }
    });
    (0, import_obsidian2.setIcon)(clearBtn, "delete");
    clearBtn.addEventListener("click", () => {
      const value = this.textareaEl.value;
      if (value.trim().length === 0) return;
      void this.confirmClearInput(value);
    });
    this.submitBtn = actions.createEl("button", {
      cls: "jp-capture-submit",
      text: "NOTE"
    });
    this.submitBtn.addEventListener("click", () => {
      void this.handleSubmit();
    });
    this.refreshSubmitState();
  }
  /**
   * Resolve the full vault path to save an attachment at.
   *
   * - No configured folder → defer entirely to Obsidian's
   *   `getAvailablePathForAttachment`: it reads the real "Files & links →
   *   Default location for new attachments" setting (`attachmentFolderPath`,
   *   NOT the new-file setting), honours the `.` (same folder as note) and
   *   `/` (vault root) special values, creates the parent dir, and de-dupes.
   * - Configured folder (or `/` for vault root) → de-dupe the base name
   *   against THAT folder and ensure it exists. `getAvailablePathForAttachment`
   *   can't be reused here: it de-dupes against the *attachment*-setting
   *   folder, so when the two differ the suffix would be wrong — it would
   *   skip a name that collides in our folder, or append one needlessly.
   *
   * Note: `FileManager.getNewFileParent` reads the *new-note* location
   * (`newFileLocation` / `newFileFolderPath`), a different setting from the
   * attachment folder — using it here was a bug that landed files in the
   * new-note folder instead of the attachment folder.
   */
  async resolveAttachmentPath(configuredFolder, baseName) {
    var _a;
    const configured = configuredFolder.trim();
    if (configured.length === 0) {
      const todayNote = getDailyNote((0, import_obsidian2.moment)(), getAllDailyNotes());
      const sourcePath = (_a = todayNote == null ? void 0 : todayNote.path) != null ? _a : "";
      return this.app.fileManager.getAvailablePathForAttachment(baseName, sourcePath);
    }
    const folder = configured === "/" ? "" : configured;
    const prefix = folder ? `${folder}/` : "";
    let candidate = `${prefix}${baseName}`;
    if (this.app.vault.getAbstractFileByPath(candidate)) {
      const dot = baseName.lastIndexOf(".");
      const stem = dot === -1 ? baseName : baseName.slice(0, dot);
      const ext = dot === -1 ? "" : baseName.slice(dot);
      let n = 1;
      candidate = `${prefix}${stem} ${n}${ext}`;
      while (this.app.vault.getAbstractFileByPath(candidate)) {
        n++;
        candidate = `${prefix}${stem} ${n}${ext}`;
      }
    }
    await this.ensureAttachmentFolder(folder);
    return candidate;
  }
  /**
   * Create `folder` and any missing parents. `vault.createFolder` only
   * creates a single level, so a nested configured path like `Assets/Audio`
   * would fail if `Assets` doesn't exist yet. No-op for empty (vault root).
   */
  async ensureAttachmentFolder(folder) {
    if (!folder) return;
    let current = "";
    for (const part of folder.split("/").filter(Boolean)) {
      current = current ? `${current}/${part}` : part;
      if (!this.app.vault.getAbstractFileByPath(current)) {
        await this.app.vault.createFolder(current);
      }
    }
  }
  async saveImageToVault(blob) {
    const ext = blob.type === "image/png" ? "png" : blob.type === "image/gif" ? "gif" : blob.type === "image/webp" ? "webp" : blob.type === "image/jpeg" ? "jpg" : "png";
    const now = /* @__PURE__ */ new Date();
    const pad = (n) => String(n).padStart(2, "0");
    const baseName = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}.${ext}`;
    const filePath = await this.resolveAttachmentPath(this.plugin.settings.imageFolder, baseName);
    const buffer = await blob.arrayBuffer();
    const file = await this.app.vault.createBinary(filePath, buffer);
    return `![](${file.path})`;
  }
  async saveAudioToVault(blob) {
    const ext = blob.type === "audio/mp4" ? "m4a" : "webm";
    const now = /* @__PURE__ */ new Date();
    const pad = (n) => String(n).padStart(2, "0");
    const baseName = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}.${ext}`;
    const filePath = await this.resolveAttachmentPath(this.plugin.settings.recordingFolder, baseName);
    const buffer = await blob.arrayBuffer();
    const file = await this.app.vault.createBinary(filePath, buffer);
    return `![[${file.path}]]`;
  }
  /**
   * Transcribe an audio blob via an OpenAI-compatible /audio/transcriptions
   * endpoint. Builds the multipart/form-data body by hand because Obsidian's
   * `requestUrl` has no multipart helper. Returns the plain-text transcript.
   */
  async transcribeAudio(blob, prompt = "") {
    var _a;
    const s = this.plugin.settings;
    const endpoint = s.sttEndpoint.trim();
    const apiKey = s.sttApiKey.trim();
    if (endpoint.length === 0 || apiKey.length === 0) return "";
    const boundary = "----JPBoundary" + Math.floor(Math.random() * 1e9).toString(16);
    const enc = new TextEncoder();
    const parts = [];
    const field = (name, value) => {
      parts.push(
        enc.encode(
          `--${boundary}\r
Content-Disposition: form-data; name="${name}"\r
\r
${value}\r
`
        )
      );
    };
    field("model", s.sttModel.trim() || "whisper-1");
    field("response_format", "json");
    const lang = s.sttLanguage.trim();
    if (lang.length > 0) field("language", lang);
    const promptText = prompt.trim();
    if (promptText.length > 0) field("prompt", promptText);
    const fileBytes = new Uint8Array(await blob.arrayBuffer());
    const ext = blob.type.includes("mp4") ? "m4a" : blob.type.includes("wav") ? "wav" : "webm";
    parts.push(
      enc.encode(
        `--${boundary}\r
Content-Disposition: form-data; name="file"; filename="audio.${ext}"\r
Content-Type: ${blob.type || "audio/webm"}\r
\r
`
      )
    );
    parts.push(fileBytes);
    parts.push(enc.encode(`\r
--${boundary}--\r
`));
    const total = parts.reduce((sum, p) => sum + p.length, 0);
    const body = new Uint8Array(total);
    let offset = 0;
    for (const p of parts) {
      body.set(p, offset);
      offset += p.length;
    }
    const resp = await (0, import_obsidian2.requestUrl)({
      url: endpoint,
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": `multipart/form-data; boundary=${boundary}`
      },
      body: body.buffer
    });
    const text = (_a = resp.json) == null ? void 0 : _a.text;
    return typeof text === "string" ? text : "";
  }
  buildTimeline(root) {
    this.timelineEl = root.createDiv({ cls: "jp-timeline" });
    this.sentinelEl = root.createDiv({ cls: "jp-timeline-sentinel" });
  }
  // ── Behaviour ───────────────────────────────────────────────────────────
  refreshSubmitState() {
    const hasContent = this.textareaEl.value.trim().length > 0;
    this.submitBtn.toggleClass("jp-capture-submit--disabled", !hasContent);
    this.submitBtn.disabled = !hasContent;
  }
  /**
   * Confirm-then-clear the capture textarea. Any `![[*.m4a]]` audio embeds
   * in the text are extracted and their files moved to Obsidian's trash
   * (recoverable), matching the timeline's delete-with-audio behaviour.
   * Image embeds are text-only cleared (no file deletion) — clearing is for
   * discarding a draft, not housekeeping attachments.
   */
  async confirmClearInput(value) {
    const audioPaths = extractAudioEmbeds(value);
    const modal = new import_obsidian2.Modal(this.app);
    modal.titleEl.setText("\u6E05\u7A7A\u8F93\u5165\u6846");
    modal.contentEl.addClass("jp-clear-confirm");
    modal.contentEl.createEl("p", {
      cls: "jp-clear-confirm-question",
      text: audioPaths.length > 0 ? `\u786E\u5B9A\u6E05\u7A7A\u8F93\u5165\u6846\u5417\uFF1F\u5C06\u540C\u65F6\u5220\u9664 ${audioPaths.length} \u4E2A\u5F55\u97F3\u6587\u4EF6\uFF08\u79FB\u5165\u56DE\u6536\u7AD9\uFF0C\u53EF\u6062\u590D\uFF09\u3002` : "\u786E\u5B9A\u6E05\u7A7A\u8F93\u5165\u6846\u5417\uFF1F"
    });
    if (audioPaths.length > 0) {
      const list = modal.contentEl.createEl("ul", { cls: "jp-clear-confirm-list" });
      for (const p of audioPaths) list.createEl("li", { text: p });
    }
    const actions = modal.contentEl.createDiv({ cls: "jp-delete-confirm-actions" });
    const cancelBtn = actions.createEl("button", { cls: "jp-delete-confirm-cancel", text: "\u53D6\u6D88" });
    cancelBtn.addEventListener("click", () => modal.close());
    const confirmBtn = actions.createEl("button", {
      cls: "mod-warning jp-delete-confirm-confirm",
      text: "\u6E05\u7A7A"
    });
    confirmBtn.addEventListener("click", runAsync(async () => {
      modal.close();
      let trashed = 0;
      for (const path of audioPaths) {
        const af = this.app.vault.getAbstractFileByPath(path);
        if (!(af instanceof import_obsidian2.TFile)) continue;
        try {
          await this.app.fileManager.trashFile(af);
          trashed++;
        } catch (err) {
          console.error(`[Journal Partner] trash audio failed: ${path}`, err);
        }
      }
      this.textareaEl.value = "";
      this.refreshSubmitState();
      this.autoResizeTextarea();
      new import_obsidian2.Notice(
        audioPaths.length > 0 ? `\u{1F9F9} \u5DF2\u6E05\u7A7A\uFF0C${trashed}/${audioPaths.length} \u4E2A\u5F55\u97F3\u6587\u4EF6\u79FB\u5165\u56DE\u6536\u7AD9` : "\u{1F9F9} \u5DF2\u6E05\u7A7A"
      );
    }));
    window.setTimeout(() => cancelBtn.focus(), 0);
    modal.open();
  }
  autoResizeTextarea() {
    this.textareaEl.setCssProps({ height: "auto" });
    const next = Math.min(this.textareaEl.scrollHeight, 240);
    this.textareaEl.setCssProps({ height: `${next}px` });
  }
  scheduleFullRebuild() {
    if (this.currentTab === "search") return;
    if (this.rerenderTimer !== null) return;
    this.rerenderTimer = window.setTimeout(() => {
      this.rerenderTimer = null;
      void this.fullRebuild();
    }, 80);
  }
  scheduleDayRefresh(day) {
    window.setTimeout(() => {
      void this.refreshDay(day);
    }, 80);
  }
  // ── Full rebuild ────────────────────────────────────────────────────────
  async fullRebuild() {
    this.disposeDays();
    this.timelineEl.empty();
    if (!appHasDailyNotesPluginLoaded()) {
      this.renderTopLevelMessage("\u8BF7\u5148\u542F\u7528 Obsidian \u81EA\u5E26\u7684\u300CDaily Notes\u300D\u6838\u5FC3\u63D2\u4EF6");
      this.exhausted = true;
      return;
    }
    this.nextProbeDate = (0, import_obsidian2.moment)().startOf("day").subtract(1, "day");
    this.exhausted = false;
    this.loadingMore = false;
    const today = (0, import_obsidian2.moment)().startOf("day");
    const todayDay = await this.buildDaySection(
      today,
      /* allowEmpty */
      true
    );
    if (todayDay) {
      this.timelineEl.appendChild(todayDay.el);
      this.days.push(todayDay);
    }
    await this.loadMore();
  }
  /**
   * Probe `probeWindow` calendar days backwards looking for non-empty
   * journal sections, append any matches to the timeline. Updates
   * `nextProbeDate` and may flip `exhausted`.
   */
  async loadMore() {
    if (this.searchActive) {
      await this.loadMoreSearchResults();
      return;
    }
    if (this.loadingMore || this.exhausted) return;
    this.loadingMore = true;
    try {
      let probed = 0;
      const today = (0, import_obsidian2.moment)().startOf("day");
      while (probed < this.probeWindow) {
        if (today.diff(this.nextProbeDate, "days") > this.maxLookbackDays) {
          this.exhausted = true;
          break;
        }
        const date = this.nextProbeDate.clone();
        this.nextProbeDate = this.nextProbeDate.clone().subtract(1, "day");
        probed++;
        const day = await this.buildDaySection(
          date,
          /* allowEmpty */
          false
        );
        if (day) {
          this.timelineEl.appendChild(day.el);
          this.days.push(day);
        }
      }
      if (this.exhausted) {
        this.markEndOfTimeline();
      }
    } finally {
      this.loadingMore = false;
    }
  }
  /**
   * Build a day section element + scope for the given date.
   * Returns null when the day has no content and `allowEmpty` is false.
   */
  async buildDaySection(date, allowEmpty) {
    var _a;
    let file = null;
    try {
      file = getDailyNote(date, getAllDailyNotes());
    } catch (err) {
      console.error("[Journal Partner] daily note resolve failed", err);
    }
    let entries = [];
    if (file) {
      try {
        const content = await this.app.vault.cachedRead(file);
        const section = findSection(
          content,
          this.plugin.settings.targetHeading,
          this.plugin.settings.headingLevel
        );
        if (section) {
          const text = content.slice(section.from, section.to);
          entries = parseJournalEntries(text, this.plugin.settings.timestampPattern);
        }
      } catch (err) {
        console.error("[Journal Partner] read failed", err);
      }
    }
    if (entries.length === 0 && !allowEmpty) {
      return null;
    }
    const day = {
      date: date.clone(),
      el: createDiv({ cls: "jp-timeline-day" }),
      scope: new import_obsidian2.Component(),
      filePath: (_a = file == null ? void 0 : file.path) != null ? _a : null
    };
    day.scope.load();
    this.renderDayContent(day, entries);
    return day;
  }
  /** Refresh just one day's section in place (used on vault.modify). */
  async refreshDay(day) {
    var _a;
    let entries = [];
    let file = null;
    try {
      file = getDailyNote(day.date, getAllDailyNotes());
      if (file) {
        const content = await this.app.vault.cachedRead(file);
        const section = findSection(
          content,
          this.plugin.settings.targetHeading,
          this.plugin.settings.headingLevel
        );
        if (section) {
          const text = content.slice(section.from, section.to);
          entries = parseJournalEntries(text, this.plugin.settings.timestampPattern);
        }
      }
    } catch (err) {
      console.error("[Journal Partner] day refresh failed", err);
    }
    day.scope.unload();
    day.scope = new import_obsidian2.Component();
    day.scope.load();
    day.filePath = (_a = file == null ? void 0 : file.path) != null ? _a : day.filePath;
    day.el.empty();
    this.renderDayContent(day, entries);
  }
  /** Render the date header + entry rows for one day into `day.el`. */
  renderDayContent(day, entries) {
    var _a;
    const headerLabel = this.formatDateHeader(day.date, entries.length);
    const headerRow = day.el.createDiv({
      cls: "jp-timeline-entry jp-timeline-entry--header"
    });
    headerRow.createDiv({ cls: "jp-timeline-dot jp-timeline-dot--header" });
    const headerCard = headerRow.createDiv({ cls: "jp-timeline-header-card" });
    const headerText = headerCard.createDiv({ cls: "jp-timeline-header-text" });
    headerText.createDiv({ cls: "jp-timeline-header-title", text: headerLabel.title });
    headerText.createDiv({ cls: "jp-timeline-header-sub", text: headerLabel.subtitle });
    this.addOpenNoteBtn(headerCard, day);
    if (entries.length === 0) {
      day.el.createDiv({ cls: "jp-capture-empty", text: "\u8FD8\u6CA1\u6709 memo\uFF0C\u5199\u70B9\u4EC0\u4E48\u5427 \u2192" });
      return;
    }
    const latestTs = entries.reduce(
      (acc, e) => e.timestamp > acc ? e.timestamp : acc,
      ""
    );
    const sorted = sortJournalEntries(entries, this.plugin.settings.sortOrder);
    const sourcePath = (_a = day.filePath) != null ? _a : "";
    for (const entry of sorted) {
      const row = day.el.createDiv({ cls: "jp-timeline-entry" });
      const dot = row.createDiv({ cls: "jp-timeline-dot" });
      if (day.date.isSame((0, import_obsidian2.moment)().startOf("day"), "day") && entry.timestamp === latestTs) {
        dot.addClass("jp-timeline-dot--latest");
      }
      const head = row.createDiv({ cls: "jp-timeline-entry-head" });
      head.createSpan({ cls: "jp-timestamp", text: entry.timestamp });
      const bubble = row.createDiv({ cls: "jp-timeline-bubble" });
      void import_obsidian2.MarkdownRenderer.render(this.app, entry.text, bubble, sourcePath, day.scope);
      const openMenu = (evt) => {
        evt.preventDefault();
        this.openEntryMenu(evt, day, entry);
      };
      head.addEventListener("contextmenu", openMenu);
      bubble.addEventListener("contextmenu", openMenu);
    }
  }
  /** Build a human-readable date label. */
  formatDateHeader(d, count) {
    const weekdayZh = ["\u5468\u65E5", "\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D"][d.day()];
    const dateLabel = d.format("YYYY\u5E74M\u6708D\u65E5") + ` \xB7 ${weekdayZh}`;
    const today = (0, import_obsidian2.moment)().startOf("day");
    const diff = d.diff(today, "days");
    let relative = "";
    if (diff === 0) relative = " \xB7 \u4ECA\u5929";
    else if (diff === -1) relative = " \xB7 \u6628\u5929";
    else if (diff === 1) relative = " \xB7 \u660E\u5929";
    else if (diff < 0) relative = ` \xB7 ${-diff} \u5929\u524D`;
    else relative = ` \xB7 ${diff} \u5929\u540E`;
    const title = dateLabel + relative;
    const subtitle = count === 0 ? "\u8FD8\u6CA1\u6709 memo" : `${count} \u4E2A memo`;
    return { title, subtitle };
  }
  renderTopLevelMessage(msg) {
    this.timelineEl.createDiv({ cls: "jp-capture-empty", text: msg });
  }
  markEndOfTimeline() {
    const end = createDiv({ cls: "jp-timeline-end", text: "\u2014 \u5DF2\u52A0\u8F7D\u5230\u6700\u65E9\u7684\u65E5\u8BB0 \u2014" });
    this.sentinelEl.replaceWith(end);
    this.sentinelEl = end;
  }
  setupIntersectionObserver() {
    if (this.intersectionObs) this.intersectionObs.disconnect();
    const root = this.containerEl.children[1];
    this.intersectionObs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !this.exhausted && !this.loadingMore) {
            void this.loadMore();
          }
        }
      },
      { root, rootMargin: "200px 0px 200px 0px", threshold: 0 }
    );
    this.intersectionObs.observe(this.sentinelEl);
  }
  /** Tear down all loaded day sections (Component scopes + DOM). */
  disposeDays() {
    for (const d of this.days) d.scope.unload();
    this.days = [];
  }
  // ── Review pane ─────────────────────────────────────────────────────────
  /** Load a random past daily note and render its entries as a timeline. */
  async loadReview() {
    this.reviewPaneEl.empty();
    if (!appHasDailyNotesPluginLoaded()) {
      this.reviewPaneEl.createDiv({ cls: "jp-capture-empty", text: "\u8BF7\u5148\u542F\u7528 Obsidian \u81EA\u5E26\u7684\u300CDaily Notes\u300D\u6838\u5FC3\u63D2\u4EF6" });
      return;
    }
    const allNotes = getAllDailyNotes();
    const today = (0, import_obsidian2.moment)().startOf("day");
    const files = Object.values(allNotes).filter((f) => {
      if (!(f instanceof import_obsidian2.TFile)) return false;
      const d = getDateFromFile(f, "day");
      return !!d && d.isBefore(today, "day");
    });
    if (files.length === 0) {
      this.reviewPaneEl.createDiv({ cls: "jp-capture-empty", text: "\u8FD8\u6CA1\u6709\u8FC7\u53BB\u7684\u65E5\u8BB0\u53EF\u4EE5\u56DE\u987E" });
      return;
    }
    const file = files[Math.floor(Math.random() * files.length)];
    const date = getDateFromFile(file, "day").clone().startOf("day");
    const header = this.reviewPaneEl.createDiv({ cls: "jp-review-header" });
    const dateEl = header.createDiv({ cls: "jp-review-date" });
    const weekdayZh = ["\u5468\u65E5", "\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D"][date.day()];
    dateEl.setText(date.format("YYYY\u5E74M\u6708D\u65E5") + " \xB7 " + weekdayZh);
    const rerollBtn = header.createEl("button", {
      cls: "jp-review-reroll-btn",
      attr: { "aria-label": "\u6362\u4E00\u5929" }
    });
    (0, import_obsidian2.setIcon)(rerollBtn, "dice");
    rerollBtn.addEventListener("click", () => void this.loadReview());
    const openBtn = header.createEl("button", {
      cls: "jp-review-reroll-btn",
      attr: { "aria-label": "\u6253\u5F00\u65E5\u8BB0" }
    });
    (0, import_obsidian2.setIcon)(openBtn, "crosshair");
    openBtn.addEventListener("click", () => void this.openDailyNoteByDate(date));
    let entries = [];
    try {
      const content = await this.app.vault.cachedRead(file);
      const section = findSection(content, this.plugin.settings.targetHeading, this.plugin.settings.headingLevel);
      if (section) {
        const text = content.slice(section.from, section.to);
        const parsed = parseJournalEntries(text, this.plugin.settings.timestampPattern);
        if (parsed.length > 0) {
          entries = parsed;
        } else {
          entries = this.parseLooseEntries(text);
        }
      }
    } catch (err) {
      console.error("[Journal Partner] review read failed", err);
    }
    if (entries.length === 0) {
      this.reviewPaneEl.createDiv({ cls: "jp-capture-empty", text: "\u8FD9\u5929\u6CA1\u6709\u65E5\u8BB0\u5185\u5BB9" });
      return;
    }
    const sorted = sortJournalEntries(entries, this.plugin.settings.sortOrder);
    const scope = new import_obsidian2.Component();
    scope.load();
    this.register(() => scope.unload());
    const timeline = this.reviewPaneEl.createDiv({ cls: "jp-timeline" });
    const sourcePath = file.path;
    for (const entry of sorted) {
      const row = timeline.createDiv({ cls: "jp-timeline-entry" });
      row.createDiv({ cls: "jp-timeline-dot" });
      const head = row.createDiv({ cls: "jp-timeline-entry-head" });
      head.createSpan({ cls: "jp-timestamp", text: entry.timestamp });
      const bubble = row.createDiv({ cls: "jp-timeline-bubble" });
      void import_obsidian2.MarkdownRenderer.render(this.app, entry.text, bubble, sourcePath, scope);
    }
  }
  /**
   * Loose parser: treat every top-level list item as an entry timestamped 00:00.
   * Used when the section has no standard `- HH:MM ...` format.
   */
  parseLooseEntries(sectionText) {
    const result = [];
    const lines = sectionText.split("\n");
    for (let i = 0; i < lines.length; i++) {
      const m = lines[i].match(/^[-*+]\s+(.+)$/);
      if (!m) continue;
      let text = m[1].trim();
      let j = i + 1;
      while (j < lines.length && /^\s+\S/.test(lines[j])) {
        text += "\n" + lines[j].replace(/^\s{0,2}/, "");
        j++;
      }
      result.push({ timestamp: "00:00", text, lineIndex: i });
    }
    return result;
  }
  // ── Stats pane ──────────────────────────────────────────────────────────
  /** Build the static scaffold of the stats pane (toolbar + body). */
  buildStatsPane() {
    this.statsToolbarEl = this.statsPaneEl.createDiv({ cls: "jp-stats-toolbar" });
    this.statsToolbarEl.createDiv({ cls: "jp-stats-toolbar-spacer" });
    this.statsYearLabelEl = this.statsToolbarEl.createDiv({
      cls: "jp-stats-year-label",
      text: "\u5168\u91CF\u6570\u636E"
    });
    this.statsBodyEl = this.statsPaneEl.createDiv({ cls: "jp-stats-body" });
  }
  /** Debounced reload, used in response to vault mutations. */
  scheduleStatsRefresh() {
    if (this.statsPaneEl.childElementCount === 0) return;
    if (this.statsRefreshTimer !== null) {
      window.clearTimeout(this.statsRefreshTimer);
    }
    this.statsRefreshTimer = window.setTimeout(() => {
      this.statsRefreshTimer = null;
      void this.loadAllStats();
    }, 300);
  }
  /** Load + render stats for all available years. */
  async loadAllStats() {
    if (this.statsLoading) return;
    this.statsLoading = true;
    this.statsYearLabelEl.setText("\u5168\u91CF\u6570\u636E");
    this.renderStatsLoading();
    try {
      if (!appHasDailyNotesPluginLoaded()) {
        this.renderStatsError("\u8BF7\u5148\u542F\u7528 Obsidian \u81EA\u5E26\u7684\u300CDaily Notes\u300D\u6838\u5FC3\u63D2\u4EF6");
        return;
      }
      const all = getAllDailyNotes();
      const yearMap = /* @__PURE__ */ new Map();
      for (const file of Object.values(all)) {
        if (!(file instanceof import_obsidian2.TFile)) continue;
        const d = getDateFromFile(file, "day");
        if (!d) continue;
        const year = d.year();
        const key = d.format("YYYY-MM-DD");
        let sectionText = "";
        try {
          const content = await this.app.vault.cachedRead(file);
          const section = findSection(
            content,
            this.plugin.settings.targetHeading,
            this.plugin.settings.headingLevel
          );
          if (section) {
            sectionText = content.slice(section.from, section.to);
          }
        } catch (err) {
          console.error("[Journal Partner] stats read failed", file.path, err);
        }
        if (!yearMap.has(year)) yearMap.set(year, []);
        yearMap.get(year).push({ key, sectionText });
      }
      this.allYearStats.clear();
      for (const [year, dayInputs] of yearMap) {
        const ys = computeYearStats(year, dayInputs, this.plugin.settings.timestampPattern);
        this.allYearStats.set(year, ys);
      }
      this.allTimeStats = computeAllTimeStats([...this.allYearStats.values()]);
      this.renderStatsContent();
    } catch (err) {
      console.error("[Journal Partner] stats load failed", err);
      this.renderStatsError(`\u52A0\u8F7D\u5931\u8D25\uFF1A${err instanceof Error ? err.message : String(err)}`);
    } finally {
      this.statsLoading = false;
    }
  }
  /**
   * Scan every daily note in `year` and return per-day raw journal-section text.
   *
   * The stats layer works off raw section text (not parsed entries) so we
   * can count plain-paragraph memos from older journals that never used the
   * `- HH:MM ...` convention. Days whose section is empty (or whose file
   * has no `## Journal` heading at all) still appear in the result with an
   * empty string, so the heatmap can render them as level-0.
   */
  renderStatsLoading() {
    this.statsBodyEl.empty();
    const loading = this.statsBodyEl.createDiv({ cls: "jp-stats-loading" });
    loading.createDiv({ cls: "jp-stats-spinner" });
    loading.createDiv({
      text: "\u6B63\u5728\u52A0\u8F7D\u65E5\u8BB0\u6570\u636E\u2026",
      cls: "jp-stats-loading-text"
    });
  }
  renderStatsError(msg) {
    this.statsBodyEl.empty();
    this.statsBodyEl.createDiv({ cls: "jp-stats-empty", text: msg });
  }
  renderStatsContent() {
    this.statsBodyEl.empty();
    const allTime = this.allTimeStats;
    if (!allTime) return;
    const hero = this.statsBodyEl.createDiv({ cls: "jp-stats-hero" });
    const top = hero.createDiv({ cls: "jp-stats-hero-top" });
    const numLine = top.createDiv({ cls: "jp-stats-hero-number" });
    const formatted = formatChineseWordCount(allTime.totalWords);
    if (formatted.includes("\u4E07")) {
      const [num, unit] = formatted.split(" ");
      numLine.createSpan({ cls: "jp-stats-hero-num", text: num });
      numLine.createSpan({ cls: "jp-stats-hero-unit", text: unit });
    } else {
      numLine.createSpan({ cls: "jp-stats-hero-num", text: formatted });
      numLine.createSpan({ cls: "jp-stats-hero-unit", text: "\u5B57" });
    }
    const sub = top.createDiv({ cls: "jp-stats-hero-sub" });
    const yearsStr = allTime.yearsWithData.length > 0 ? `${allTime.yearsWithData[0]}\u2013${allTime.yearsWithData[allTime.yearsWithData.length - 1]} \u5E74` : "\u6682\u65E0\u6570\u636E";
    sub.createSpan({ text: yearsStr });
    const grid = hero.createDiv({ cls: "jp-stats-hero-kpis" });
    this.makeStatsKPI(grid, "file-text", `${allTime.writingDays}`, "\u5929", "\u5199\u4F5C\u5929\u6570");
    this.makeStatsKPI(grid, "pencil", `${allTime.totalEntries}`, "\u6761", "\u603B\u6761\u6570");
    this.makeStatsKPI(grid, "mic", `${allTime.totalAudios}`, "\u6BB5", "\u5F55\u97F3\u6570");
    this.makeStatsKPI(grid, "flame", `${allTime.longestStreak}`, "\u5929", "\u6700\u957F\u8FDE\u7EED");
    const years = [...this.allYearStats.keys()].sort((a, b) => b - a);
    for (const year of years) {
      const ys = this.allYearStats.get(year);
      this.renderStatsHeatmapSection(year, ys);
    }
  }
  makeStatsKPI(parent, icon, value, unit, label) {
    const card = parent.createDiv({ cls: "jp-stats-kpi-card" });
    const iconEl = card.createDiv({ cls: "jp-stats-kpi-icon" });
    (0, import_obsidian2.setIcon)(iconEl, icon);
    const row = card.createDiv({ cls: "jp-stats-kpi-row" });
    row.createSpan({ cls: "jp-stats-kpi-value", text: value });
    if (unit) row.createSpan({ cls: "jp-stats-kpi-unit", text: unit });
    card.createDiv({ cls: "jp-stats-kpi-label", text: label });
  }
  renderStatsHeatmapSection(year, stats) {
    const section = this.statsBodyEl.createDiv({ cls: "jp-stats-heatmap-section" });
    const header = section.createDiv({ cls: "jp-stats-heatmap-header" });
    header.createDiv({ cls: "jp-stats-heatmap-title", text: `${year} \u5E74` });
    this.renderStatsHeatmap(
      section.createDiv({ cls: "jp-stats-heatmap-wrap" }),
      stats
    );
    const legend = section.createDiv({ cls: "jp-stats-legend" });
    legend.createSpan({ cls: "jp-stats-legend-label", text: "\u5C11" });
    for (let l = 0; l <= 4; l++) {
      legend.createDiv({ cls: `jp-stats-cell level-${l}` });
    }
    legend.createSpan({ cls: "jp-stats-legend-label", text: "\u591A" });
    const footer = section.createDiv({ cls: "jp-stats-footer" });
    footer.setText(
      `${stats.writingDays} \u5929 \xB7 ${stats.totalWords.toLocaleString("en-US")} \u5B57 \xB7 ${stats.totalEntries} \u6761` + (stats.totalAudios > 0 ? ` \xB7 ${stats.totalAudios} \u6BB5\u5F55\u97F3` : "")
    );
  }
  renderStatsHeatmap(parent, stats) {
    var _a, _b, _c;
    const year = stats.year;
    const today = (0, import_obsidian2.moment)().startOf("day");
    const allDays = [];
    const start = (0, import_obsidian2.moment)({ year, month: 0, day: 1 }).startOf("day");
    const end = (0, import_obsidian2.moment)({ year, month: 11, day: 31 }).startOf("day");
    for (let d = start.clone(); d.isSameOrBefore(end); d.add(1, "day")) {
      const ds = stats.dailyMap.get(d.format("YYYY-MM-DD"));
      allDays.push({
        date: d.clone(),
        entryCount: (_a = ds == null ? void 0 : ds.entryCount) != null ? _a : 0,
        wordCount: (_b = ds == null ? void 0 : ds.wordCount) != null ? _b : 0
      });
    }
    const firstDow = allDays[0].date.day();
    const startPad = firstDow === 0 ? 6 : firstDow - 1;
    const paddedDays = [];
    for (let i = 0; i < startPad; i++) paddedDays.push(null);
    paddedDays.push(...allDays);
    const totalWeeks = Math.ceil(paddedDays.length / 7);
    const monthWeek = {};
    for (let w = 0; w < totalWeeks; w++) {
      for (let dow = 0; dow < 7; dow++) {
        const item = paddedDays[w * 7 + dow];
        if (!item) continue;
        const mo = item.date.month();
        if (!(mo in monthWeek)) monthWeek[mo] = w;
      }
    }
    const inner = parent.createDiv({ cls: "jp-stats-heatmap-inner" });
    const labelsCol = inner.createDiv({ cls: "jp-stats-daylabels" });
    const dayLabels = { 0: "\u4E00", 2: "\u4E09", 4: "\u4E94" };
    for (let i = 0; i < 7; i++) {
      labelsCol.createDiv({ cls: "jp-stats-daylabel", text: (_c = dayLabels[i]) != null ? _c : "" });
    }
    const rightCol = inner.createDiv({ cls: "jp-stats-heatmap-right" });
    const monthRow = rightCol.createDiv({ cls: "jp-stats-monthrow" });
    for (let w = 0; w < totalWeeks; w++) {
      const entry = Object.entries(monthWeek).find(([, wk]) => wk === w);
      monthRow.createDiv({
        cls: "jp-stats-monthlabel",
        text: entry ? `${Number(entry[0]) + 1}\u6708` : ""
      });
    }
    const grid = rightCol.createDiv({ cls: "jp-stats-grid" });
    for (let w = 0; w < totalWeeks; w++) {
      const col = grid.createDiv({ cls: "jp-stats-col" });
      for (let dow = 0; dow < 7; dow++) {
        const item = paddedDays[w * 7 + dow];
        if (!item) {
          col.createDiv({ cls: "jp-stats-cell is-empty" });
          continue;
        }
        const { date, entryCount, wordCount } = item;
        const level = getHeatmapLevel(entryCount);
        const isToday = date.isSame(today, "day");
        const isFuture = date.isAfter(today, "day");
        const classes = `jp-stats-cell level-${level}` + (isToday ? " is-today" : "") + (isFuture ? " is-future" : "");
        const cell = col.createDiv({ cls: classes });
        const label = date.format("YYYY\u5E74M\u6708D\u65E5");
        if (entryCount > 0) {
          cell.setAttr("title", `${label} \xB7 ${entryCount} \u6761 \xB7 ${wordCount} \u5B57`);
        } else {
          cell.setAttr("title", isFuture ? label : `${label} \xB7 \u672A\u5199`);
        }
        if (!isFuture) {
          cell.addEventListener("click", () => void this.openDailyNoteByDate(date));
        }
      }
    }
  }
  /** Add a locate button to the right side of a day header card. */
  addOpenNoteBtn(headerCard, day) {
    if (!day.filePath) return;
    const btn = headerCard.createEl("button", {
      cls: "jp-timeline-open-btn",
      attr: { "aria-label": "\u6253\u5F00\u65E5\u8BB0" }
    });
    (0, import_obsidian2.setIcon)(btn, "crosshair");
    btn.addEventListener("click", () => void this.openDailyNoteByDate(day.date));
  }
  /** Open the daily note for `date` in a new center tab. */
  async openDailyNoteByDate(date) {
    try {
      const file = getDailyNote(date, getAllDailyNotes());
      if (!file) {
        new import_obsidian2.Notice(`${date.format("YYYY\u5E74M\u6708D\u65E5")} \u6CA1\u6709\u65E5\u8BB0\u6587\u4EF6`);
        return;
      }
      const leaf = this.app.workspace.getLeaf(false);
      await leaf.openFile(file);
    } catch (err) {
      console.error("[Journal Partner] open daily note failed", err);
      new import_obsidian2.Notice("\u6253\u5F00\u5931\u8D25");
    }
  }
  // ── Mobile toolbar auto-hide ────────────────────────────────────────────
  /**
   * On mobile, hide Obsidian's bottom toolbar (`.mobile-toolbar`) when the
   * user scrolls down (looking at older entries) and reveal it when they
   * scroll up. Restores the toolbar on view close so we never leave it in
   * a hidden state when the user navigates away.
   */
  setupMobileToolbarAutoHide() {
    if (!import_obsidian2.Platform.isMobile) return;
    const scroller = this.containerEl.children[1];
    if (!scroller) return;
    this.scrollEl = scroller;
    this.lastScrollTop = scroller.scrollTop;
    this.onScrollBound = () => {
      const top = scroller.scrollTop;
      const delta = top - this.lastScrollTop;
      if (Math.abs(delta) < this.scrollDeltaThreshold) return;
      if (top <= 8) {
        this.setToolbarHidden(false);
      } else if (delta > 0) {
        this.setToolbarHidden(true);
      } else {
        this.setToolbarHidden(false);
      }
      this.lastScrollTop = top;
    };
    scroller.addEventListener("scroll", this.onScrollBound, { passive: true });
  }
  teardownMobileToolbarAutoHide() {
    if (this.scrollEl && this.onScrollBound) {
      this.scrollEl.removeEventListener("scroll", this.onScrollBound);
    }
    this.scrollEl = null;
    this.onScrollBound = null;
    this.setToolbarHidden(false);
  }
  setToolbarHidden(hidden) {
    document.body.toggleClass("jp-hide-mobile-toolbar", hidden);
  }
  // ── Entry context menu (copy / delete) ──────────────────────────────────
  /**
   * Build and show the right-click / long-press context menu for one entry.
   * Items shown:
   *   - 复制                — copies the raw markdown body to clipboard
   *   - 删除 memo           — deletes only the entry line(s) from the daily note
   *   - 仅删除录音文件       — keeps the memo text, trashes audio + strips ![[..]]
   *
   * The audio-related item is only added when the entry actually
   * embeds at least one audio attachment (`![[*.m4a]]` etc.).
   */
  openEntryMenu(evt, day, entry) {
    const menu = new import_obsidian2.Menu();
    const audioPaths = extractAudioEmbeds(entry.text);
    menu.addItem(
      (item) => item.setTitle("\u590D\u5236").setIcon("copy").onClick(() => {
        void this.copyEntry(entry);
      })
    );
    menu.addSeparator();
    menu.addItem(
      (item) => item.setTitle("\u5220\u9664 memo").setIcon("trash-2").onClick(() => {
        const mode = audioPaths.length > 0 ? "memo+audio" : "memo";
        this.confirmAndDelete(day, entry, mode, audioPaths);
      })
    );
    if (audioPaths.length > 0) {
      menu.addItem(
        (item) => item.setTitle(
          audioPaths.length === 1 ? "\u4EC5\u5220\u9664\u5F55\u97F3\u6587\u4EF6\uFF08\u4FDD\u7559\u6587\u5B57\uFF09" : `\u4EC5\u5220\u9664 ${audioPaths.length} \u4E2A\u5F55\u97F3\u6587\u4EF6\uFF08\u4FDD\u7559\u6587\u5B57\uFF09`
        ).setIcon("mic-off").onClick(() => {
          this.confirmAndDelete(day, entry, "audio-only", audioPaths);
        })
      );
    }
    menu.showAtMouseEvent(evt);
  }
  /** Copy the raw markdown body of the entry (without `- HH:MM` prefix). */
  async copyEntry(entry) {
    try {
      await navigator.clipboard.writeText(entry.text);
      new import_obsidian2.Notice("\u{1F4CB} \u5DF2\u590D\u5236");
    } catch (err) {
      console.error("[Journal Partner] copy failed", err);
      new import_obsidian2.Notice(`\u590D\u5236\u5931\u8D25\uFF1A${err instanceof Error ? err.message : String(err)}`);
    }
  }
  /**
   * Show a confirmation modal (when `settings.confirmDelete` is on) listing
   * what will be deleted, then execute the deletion on confirm. When the
   * setting is off, the action executes immediately.
   *
   * Audio files are moved to Obsidian's configured trash via
   * `fileManager.trashFile` so they remain recoverable regardless of which
   * mode is picked.
   */
  confirmAndDelete(day, entry, mode, audioPaths) {
    const run = () => {
      void this.executeDelete(day, entry, mode, audioPaths);
    };
    new DeleteConfirmModal(this.app, {
      title: mode === "memo" ? "\u5220\u9664 memo" : mode === "memo+audio" ? "\u5220\u9664 memo \u548C\u5F55\u97F3\u6587\u4EF6" : "\u5220\u9664\u5F55\u97F3\u6587\u4EF6",
      preview: this.buildEntryPreview(entry),
      timestamp: entry.timestamp,
      audioPaths: mode === "memo" ? [] : audioPaths,
      mode,
      onConfirm: run
    }).open();
  }
  /** Compact preview text for the confirm modal (≤ 80 chars, single line). */
  buildEntryPreview(entry) {
    const raw = entry.text.replace(/\s+/g, " ").trim();
    return raw.length > 80 ? raw.slice(0, 80) + "\u2026" : raw;
  }
  /**
   * Perform the actual deletion. Rewrites the daily note via
   * `vault.modify`, then (when relevant) trashes audio files. Audio
   * failures are logged but don't roll back the text deletion — they're
   * independent pieces of state and the user explicitly opted into both.
   *
   * Modes:
   *   - 'memo'       : drop entry head + continuation lines
   *   - 'memo+audio' : same as above, plus trash audio files
   *   - 'audio-only' : keep memo text but strip ![[...]] audio embeds,
   *                    plus trash audio files
   */
  async executeDelete(day, entry, mode, audioPaths) {
    if (!day.filePath) {
      new import_obsidian2.Notice("\u627E\u4E0D\u5230\u5BF9\u5E94\u7684\u65E5\u8BB0\u6587\u4EF6");
      return;
    }
    const file = this.app.vault.getAbstractFileByPath(day.filePath);
    if (!(file instanceof import_obsidian2.TFile)) {
      new import_obsidian2.Notice("\u627E\u4E0D\u5230\u5BF9\u5E94\u7684\u65E5\u8BB0\u6587\u4EF6");
      return;
    }
    try {
      const content = await this.app.vault.read(file);
      const next = mode === "audio-only" ? removeAudioEmbedsFromEntry(content, this.plugin.settings, entry.lineIndex) : deleteEntryFromSection(content, this.plugin.settings, entry.lineIndex);
      if (next === content) {
        new import_obsidian2.Notice("\u65E5\u8BB0\u5185\u5BB9\u5DF2\u53D8\u5316\uFF0C\u8BF7\u5237\u65B0\u540E\u91CD\u8BD5");
        await this.refreshDay(day);
        return;
      }
      await this.app.vault.modify(file, next);
    } catch (err) {
      console.error("[Journal Partner] delete entry failed", err);
      new import_obsidian2.Notice(`\u5220\u9664\u5931\u8D25\uFF1A${err instanceof Error ? err.message : String(err)}`);
      return;
    }
    const trashAudio = mode === "memo+audio" || mode === "audio-only";
    let trashed = 0;
    let missing = 0;
    if (trashAudio) {
      for (const path of audioPaths) {
        const af = this.app.vault.getAbstractFileByPath(path);
        if (!(af instanceof import_obsidian2.TFile)) {
          missing++;
          continue;
        }
        try {
          await this.app.fileManager.trashFile(af);
          trashed++;
        } catch (err) {
          console.error(`[Journal Partner] trash audio failed: ${path}`, err);
        }
      }
    }
    if (mode === "memo") {
      new import_obsidian2.Notice("\u{1F5D1}\uFE0F \u5DF2\u5220\u9664");
    } else if (mode === "memo+audio") {
      if (missing === audioPaths.length) {
        new import_obsidian2.Notice("\u{1F5D1}\uFE0F memo \u5DF2\u5220\u9664\uFF08\u5F55\u97F3\u6587\u4EF6\u5DF2\u4E0D\u5B58\u5728\uFF09");
      } else if (trashed === audioPaths.length) {
        new import_obsidian2.Notice(`\u{1F5D1}\uFE0F \u5DF2\u5220\u9664 memo \u548C ${trashed} \u4E2A\u5F55\u97F3\u6587\u4EF6`);
      } else {
        new import_obsidian2.Notice(`\u{1F5D1}\uFE0F memo \u5DF2\u5220\u9664\uFF1B${trashed}/${audioPaths.length} \u4E2A\u5F55\u97F3\u6587\u4EF6\u79FB\u5165\u56DE\u6536\u7AD9`);
      }
    } else {
      if (missing === audioPaths.length) {
        new import_obsidian2.Notice("\u{1F399}\uFE0F \u5F55\u97F3\u94FE\u63A5\u5DF2\u79FB\u9664\uFF08\u6587\u4EF6\u5DF2\u4E0D\u5B58\u5728\uFF09");
      } else if (trashed === audioPaths.length) {
        new import_obsidian2.Notice(`\u{1F399}\uFE0F \u5DF2\u5220\u9664 ${trashed} \u4E2A\u5F55\u97F3\u6587\u4EF6\uFF08memo \u4FDD\u7559\uFF09`);
      } else {
        new import_obsidian2.Notice(`\u{1F399}\uFE0F \u94FE\u63A5\u5DF2\u79FB\u9664\uFF1B${trashed}/${audioPaths.length} \u4E2A\u5F55\u97F3\u6587\u4EF6\u79FB\u5165\u56DE\u6536\u7AD9`);
      }
    }
  }
  // ── Submit / write path ─────────────────────────────────────────────────
  async handleSubmit() {
    const raw = this.textareaEl.value;
    if (raw.trim().length === 0) return;
    if (!appHasDailyNotesPluginLoaded()) {
      new import_obsidian2.Notice("\u8BF7\u5148\u542F\u7528 Obsidian \u81EA\u5E26\u7684\u300CDaily Notes\u300D\u6838\u5FC3\u63D2\u4EF6");
      return;
    }
    this.submitBtn.disabled = true;
    this.submitBtn.addClass("jp-capture-submit--disabled");
    const originalText = this.submitBtn.textContent;
    this.submitBtn.setText("\u5199\u5165\u4E2D\u2026");
    try {
      const ok = await this.plugin.writeToTodayJournal(raw);
      if (!ok) return;
      this.textareaEl.value = "";
      this.autoResizeTextarea();
      const todayDay = this.days.find(
        (d) => d.date.isSame((0, import_obsidian2.moment)().startOf("day"), "day")
      );
      if (!todayDay) {
        await this.fullRebuild();
      }
      const scroller = this.containerEl.children[1];
      scroller.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("[Journal Partner] submit failed", err);
      new import_obsidian2.Notice(`\u5199\u5165\u5931\u8D25\uFF1A${err instanceof Error ? err.message : String(err)}`);
    } finally {
      this.submitBtn.setText(originalText != null ? originalText : "NOTE");
      this.refreshSubmitState();
    }
  }
};
var DeleteConfirmModal = class extends import_obsidian2.Modal {
  constructor(app, opts) {
    super(app);
    this.opts = opts;
  }
  onOpen() {
    const { contentEl, titleEl } = this;
    titleEl.setText(this.opts.title);
    contentEl.addClass("jp-delete-confirm");
    contentEl.createEl("p", {
      cls: "jp-delete-confirm-question",
      text: this.opts.mode === "audio-only" ? "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u6761 memo \u7684\u5F55\u97F3\u6587\u4EF6\u5417\uFF1Fmemo \u6587\u5B57\u4F1A\u4FDD\u7559\u3002" : "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u6761 memo \u5417\uFF1F"
    });
    const preview = contentEl.createDiv({ cls: "jp-delete-confirm-preview" });
    preview.createSpan({
      cls: "jp-timestamp",
      text: this.opts.timestamp
    });
    preview.createSpan({
      cls: "jp-delete-confirm-preview-text",
      text: this.opts.preview.length > 0 ? this.opts.preview : "(\u7A7A memo)"
    });
    if (this.opts.audioPaths.length > 0) {
      const audioBlock = contentEl.createDiv({ cls: "jp-delete-confirm-audio" });
      audioBlock.createDiv({
        cls: "jp-delete-confirm-audio-label",
        text: this.opts.mode === "audio-only" ? "\u5C06\u79FB\u5165\u56DE\u6536\u7AD9\u7684\u5F55\u97F3\u6587\u4EF6\uFF08\u53EF\u6062\u590D\uFF09\uFF1A" : "\u9644\u5E26\u5220\u9664\u7684\u5F55\u97F3\u6587\u4EF6\uFF08\u79FB\u5165\u56DE\u6536\u7AD9\uFF0C\u53EF\u6062\u590D\uFF09\uFF1A"
      });
      const list = audioBlock.createEl("ul", { cls: "jp-delete-confirm-audio-list" });
      for (const path of this.opts.audioPaths) {
        list.createEl("li", { text: path });
      }
    }
    const actions = contentEl.createDiv({ cls: "jp-delete-confirm-actions" });
    const cancelBtn = actions.createEl("button", {
      cls: "jp-delete-confirm-cancel",
      text: "\u53D6\u6D88"
    });
    cancelBtn.addEventListener("click", () => this.close());
    const confirmBtn = actions.createEl("button", {
      cls: "mod-warning jp-delete-confirm-confirm",
      text: "\u5220\u9664"
    });
    confirmBtn.addEventListener("click", () => {
      this.close();
      this.opts.onConfirm();
    });
    window.setTimeout(() => cancelBtn.focus(), 0);
  }
  onClose() {
    this.contentEl.empty();
  }
};

// src/main.ts
var forceUpdateEffect = import_state2.StateEffect.define();
var JournalPartnerPlugin = class extends import_obsidian3.Plugin {
  async onload() {
    await this.loadSettings();
    this.applyCSSVariables();
    this.registerEditorExtension(this.createEditorExtensions());
    this.registerMarkdownPostProcessor((el, ctx) => this.postProcessor(el, ctx));
    this.addSettingTab(new JournalPartnerSettingTab(this.app, this));
    this.registerView(
      CAPTURE_VIEW_TYPE,
      (leaf) => new JournalCaptureView(leaf, this)
    );
    this.addCommand({
      id: "open-capture-view",
      name: "\u6253\u5F00\u5FEB\u901F\u8BB0\u5F55\u4FA7\u8FB9\u680F",
      callback: () => void this.activateCaptureView()
    });
    this.addRibbonIcon("feather", "\u5FEB\u901F\u8BB0\u5F55", () => void this.activateCaptureView());
    this.registerObsidianProtocolHandler("journal-partner", (params) => {
      void this.handleProtocol(params);
    });
  }
  async activateCaptureView() {
    const existing = this.app.workspace.getLeavesOfType(CAPTURE_VIEW_TYPE);
    if (existing.length > 0) {
      void this.app.workspace.revealLeaf(existing[0]);
      return;
    }
    const leaf = import_obsidian3.Platform.isMobile ? this.app.workspace.getLeaf(true) : this.app.workspace.getRightLeaf(false);
    if (!leaf) return;
    await leaf.setViewState({ type: CAPTURE_VIEW_TYPE, active: true });
    void this.app.workspace.revealLeaf(leaf);
  }
  // ── Quick-capture write path (shared) ─────────────────────────────────────
  /**
   * Append a single entry to today's `## Journal` section.
   *
   * Used by both the in-app capture textarea and the URL protocol handler.
   * Creates today's daily note and the journal heading if they don't exist
   * yet.
   *
   * @param text     Raw user content (may contain newlines).
   * @param ts       Timestamp string in `HH:MM` form. Defaults to now.
   * @param audio    Optional vault-relative path to an audio attachment;
   *                 when provided, ` ![[path]]` is appended to the entry.
   * @returns        true on success, false if Daily Notes plugin is missing
   *                 or the write fails.
   */
  async writeToTodayJournal(text, ts, audio) {
    var _a;
    if (!appHasDailyNotesPluginLoaded()) {
      new import_obsidian3.Notice("\u8BF7\u5148\u542F\u7528 Obsidian \u81EA\u5E26\u7684\u300CDaily Notes\u300D\u6838\u5FC3\u63D2\u4EF6");
      return false;
    }
    const trimmed = text.trim();
    const audioPath = (_a = audio == null ? void 0 : audio.trim()) != null ? _a : "";
    if (trimmed.length === 0 && audioPath.length === 0) return false;
    const stamp = ts != null ? ts : generateTimestamp();
    const body = audioPath.length > 0 ? `${trimmed}${trimmed.length > 0 ? " " : ""}![[${audioPath}]]` : trimmed;
    const line = buildEntryLine(body.replace(/\r\n/g, "\n"), stamp);
    try {
      let file = getDailyNote((0, import_obsidian3.moment)(), getAllDailyNotes());
      if (!file) {
        file = await createDailyNote((0, import_obsidian3.moment)());
      }
      await this.app.vault.process(
        file,
        (content) => appendToJournalSection(content, this.settings, line)
      );
      return true;
    } catch (err) {
      console.error("[Journal Partner] writeToTodayJournal failed", err);
      new import_obsidian3.Notice(`\u5199\u5165\u5931\u8D25\uFF1A${err instanceof Error ? err.message : String(err)}`);
      return false;
    }
  }
  /**
   * Handle `obsidian://journal-partner?...` URLs.
   *
   * The protocol handler is registered specifically for `journal-partner`,
   * so every invocation is implicitly the quick-capture action. We accept:
   *   - `cmd`  optional command: "record" → open sidebar and start recording
   *   - `text`  (optional if `audio` is given) — entry body
   *   - `time`  optional `HH:MM` override
   *   - `audio` optional vault-relative attachment path; rendered as
   *             `![[path]]` so Obsidian shows the inline audio player
   *
   * Note: `params.action` is reserved by Obsidian and will always equal
   * the protocol handler name (`journal-partner`) here — do NOT use it
   * as a routing key.
   */
  async handleProtocol(params) {
    var _a, _b;
    if (params.cmd === "record") {
      await this.activateCaptureView();
      window.setTimeout(() => {
        var _a2;
        const leaves = this.app.workspace.getLeavesOfType(CAPTURE_VIEW_TYPE);
        const view = (_a2 = leaves[0]) == null ? void 0 : _a2.view;
        if (view) void view.beginRecording();
      }, 150);
      return;
    }
    const text = (_a = params.text) != null ? _a : "";
    const audio = (_b = params.audio) != null ? _b : "";
    if (text.trim().length === 0 && audio.trim().length === 0) {
      new import_obsidian3.Notice("Quick capture \u81F3\u5C11\u9700\u8981 text \u6216 audio \u53C2\u6570\u4E4B\u4E00");
      return;
    }
    const time = params.time;
    const tsValid = typeof time === "string" && /^\d{2}:\d{2}$/.test(time);
    const ts = tsValid ? time : void 0;
    const ok = await this.writeToTodayJournal(text, ts, audio);
    if (ok) {
      const previewSrc = text.trim().length > 0 ? text : audio || "\u8BED\u97F3";
      const preview = previewSrc.trim().replace(/\s+/g, " ").slice(0, 20);
      const ellip = previewSrc.length > 20 ? "\u2026" : "";
      const tag = audio.trim().length > 0 ? "\u{1F399}\uFE0F" : "\u{1F4DD}";
      new import_obsidian3.Notice(`${tag} \u5DF2\u8BB0\u5F55\uFF1A${preview}${ellip}`);
    }
  }
  // ── Editor extension (source + live-preview) ───────────────────────────────
  createEditorExtensions() {
    const getSettings = () => this.settings;
    const viewPlugin = import_view2.ViewPlugin.fromClass(
      class {
        constructor(view) {
          this.decorations = buildDecorations(
            view.state.doc.toString(),
            getSettings()
          );
        }
        update(update) {
          const needsRebuild = update.docChanged || update.viewportChanged || update.transactions.some(
            (tr) => tr.effects.some((e) => e.is(forceUpdateEffect))
          );
          if (needsRebuild) {
            this.decorations = buildDecorations(
              update.state.doc.toString(),
              getSettings()
            );
          }
        }
      },
      { decorations: (v) => v.decorations }
    );
    const readonlyFilter = import_state2.EditorState.transactionFilter.of(
      (tr) => {
        if (!this.settings.readonlyTimestamps || !tr.docChanged) return tr;
        const timestamps = getTimestampRanges(
          tr.startState.doc.toString(),
          this.settings
        );
        let blocked = false;
        tr.changes.iterChanges((fromA, toA) => {
          if (blocked) return;
          for (const { from, to } of timestamps) {
            if (fromA < to && toA > from) {
              blocked = true;
              break;
            }
          }
        });
        if (blocked) {
          new import_obsidian3.Notice("\u23F0 \u65F6\u95F4\u6233\u4E0D\u53EF\u4FEE\u6539");
          return [];
        }
        return tr;
      }
    );
    return [viewPlugin, readonlyFilter, this.createEnterKeymap(), this.createTabKeymap()];
  }
  /**
   * Returns a high-priority keymap extension that intercepts Enter inside the
   * target section.
   */
  createEnterKeymap() {
    return import_state2.Prec.high(
      import_view2.keymap.of([
        {
          key: "Enter",
          run: (view) => {
            var _a;
            if (!this.settings.autoTimestamp) return false;
            const state = view.state;
            const doc = state.doc.toString();
            const section = findSection(
              doc,
              this.settings.targetHeading,
              this.settings.headingLevel
            );
            if (!section) return false;
            const cursor = state.selection.main;
            if (cursor.head < section.from || cursor.head > section.to) {
              return false;
            }
            const line = state.doc.lineAt(cursor.head);
            const indentMatch = line.text.match(/^(\s*)/);
            const currentIndent = (_a = indentMatch == null ? void 0 : indentMatch[1]) != null ? _a : "";
            const isNested = currentIndent.length > 0;
            const markerMatch = line.text.match(/^\s*([-*+]\s+)/);
            const listMarker = markerMatch ? markerMatch[1] : "";
            if (!listMarker) return false;
            let insertion;
            if (isNested) {
              insertion = "\n" + currentIndent + listMarker;
            } else {
              const ts = generateTimestamp();
              insertion = "\n" + listMarker + ts + " ";
            }
            view.dispatch(
              state.update({
                changes: { from: cursor.from, to: cursor.to, insert: insertion },
                selection: { anchor: cursor.from + insertion.length },
                scrollIntoView: true
              })
            );
            return true;
          }
        }
      ])
    );
  }
  /**
   * Returns a high-priority keymap extension that intercepts Tab inside the
   * target section.
   */
  createTabKeymap() {
    return import_state2.Prec.high(
      import_view2.keymap.of([
        {
          key: "Tab",
          run: (view) => {
            var _a, _b;
            const state = view.state;
            const doc = state.doc.toString();
            const section = findSection(
              doc,
              this.settings.targetHeading,
              this.settings.headingLevel
            );
            if (!section) return false;
            const cursor = state.selection.main;
            if (cursor.head < section.from || cursor.head > section.to) {
              return false;
            }
            const line = state.doc.lineAt(cursor.head);
            const indentMatch = line.text.match(/^(\s*)/);
            const currentIndent = (_a = indentMatch == null ? void 0 : indentMatch[1]) != null ? _a : "";
            const isTopLevel = currentIndent.length === 0;
            if (!isTopLevel) return false;
            const timestampMatch = line.text.match(
              new RegExp(`^([-*+]\\s+)(${this.settings.timestampPattern})\\s+`)
            );
            if (!timestampMatch) return false;
            const markerAndSpace = timestampMatch[1];
            const timestampText = timestampMatch[2];
            const afterTimestampMatch = line.text.match(
              new RegExp(`^([-*+]\\s+)(${this.settings.timestampPattern})\\s+(.*)`)
            );
            const contentAfterTimestamp = (_b = afterTimestampMatch == null ? void 0 : afterTimestampMatch[3]) != null ? _b : "";
            const newLinePrefix = "	" + markerAndSpace + contentAfterTimestamp;
            const replaceEnd = line.from + markerAndSpace.length + timestampText.length + 1 + contentAfterTimestamp.length;
            const changes = [
              { from: line.from, to: replaceEnd, insert: newLinePrefix }
            ];
            view.dispatch(
              state.update({
                changes,
                selection: { anchor: line.from + 1 + markerAndSpace.length },
                scrollIntoView: true
              })
            );
            return true;
          }
        }
      ])
    );
  }
  // ── Reading-view post processor ────────────────────────────────────────────
  postProcessor(el, ctx) {
    const info = ctx.getSectionInfo(el);
    if (!info) return;
    if (!this.isInTargetSection(info.text, info.lineStart)) return;
    this.highlightTimestampsInElement(el);
  }
  isInTargetSection(docText, lineStart) {
    const section = findSection(
      docText,
      this.settings.targetHeading,
      this.settings.headingLevel
    );
    if (!section) return false;
    const sectionStartLine = docText.slice(0, section.from).split("\n").length - 1;
    const sectionEndLine = docText.slice(0, section.to).split("\n").length - 1;
    return lineStart >= sectionStartLine && lineStart < sectionEndLine;
  }
  highlightTimestampsInElement(el) {
    var _a;
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    let node;
    while (node = walker.nextNode()) textNodes.push(node);
    for (const textNode of textNodes) {
      const raw = (_a = textNode.textContent) != null ? _a : "";
      const m = new RegExp(this.settings.timestampPattern).exec(raw);
      if (!m) continue;
      const before = raw.slice(0, m.index);
      const after = raw.slice(m.index + m[0].length);
      const span = createSpan({ cls: "jp-timestamp", text: m[0] });
      const parent = textNode.parentNode;
      if (before) parent.insertBefore(document.createTextNode(before), textNode);
      parent.insertBefore(span, textNode);
      if (after) parent.insertBefore(document.createTextNode(after), textNode);
      parent.removeChild(textNode);
    }
  }
  // ── CSS variables & settings plumbing ─────────────────────────────────────
  applyCSSVariables() {
    const root = document.documentElement;
    root.style.setProperty("--jp-ts-color", this.settings.timestampColor);
    root.style.setProperty("--jp-ts-bg", this.settings.timestampBgColor);
  }
  async loadSettings() {
    const loaded = await this.loadData();
    this.settings = { ...DEFAULT_SETTINGS, ...loaded };
  }
  async saveSettings() {
    await this.saveData(this.settings);
    this.applyCSSVariables();
    this.refreshEditors();
  }
  refreshEditors() {
    this.app.workspace.iterateAllLeaves((leaf) => {
      if (leaf.view instanceof import_obsidian3.MarkdownView) {
        const cm = leaf.view.editor.cm;
        cm == null ? void 0 : cm.dispatch({ effects: forceUpdateEffect.of(null) });
      }
    });
  }
  /**
   * Re-render any open capture sidebar views. Used after settings that affect
   * the timeline's display (e.g. sort order) change, so the new value applies
   * immediately instead of waiting for the next natural refresh.
   */
  refreshCaptureViews() {
    for (const leaf of this.app.workspace.getLeavesOfType(CAPTURE_VIEW_TYPE)) {
      if (leaf.view instanceof JournalCaptureView) {
        void leaf.view.fullRebuild();
      }
    }
  }
};
var JournalPartnerSettingTab = class extends import_obsidian3.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  /** Collect all vault folder paths, sorted and deduplicated. */
  getFolderPaths() {
    const folders = this.app.vault.getAllFolders().filter((file) => file instanceof import_obsidian3.TFolder);
    const folderPaths = folders.map((folder) => folder.path === "" ? "/" : folder.path);
    if (!folderPaths.includes("/")) {
      folderPaths.unshift("/");
    }
    return Array.from(new Set(folderPaths)).sort();
  }
  /**
   * Best-effort synchronous read of Obsidian's configured attachment folder,
   * for the settings placeholder so users see the real fallback (not a
   * hard-coded "Attachments") when they leave the field blank.
   *
   * `app.getConfig('attachmentFolderPath')` returns undefined on some Obsidian
   * versions, so we read the in-memory vault config object directly — it's a
   * plain property access, cheap and safe to call during settings render.
   * Special values: `.` = same folder as the note, `/` or empty = vault root.
   */
  attachmentFolderLabel() {
    var _a;
    const folder = (_a = this.app.vault.config) == null ? void 0 : _a.attachmentFolderPath;
    if (!folder || folder === "/" || folder === "") return "Vault \u6839\u76EE\u5F55";
    if (folder === ".") return "\u4E0E\u65E5\u8BB0\u540C\u76EE\u5F55";
    return folder;
  }
  /**
   * A folder-picker setting row shared by the recording and image folders: a
   * text field (placeholder = Obsidian's real attachment folder) plus a 📁
   * button that opens the fuzzy folder-suggest modal. `key` selects which
   * settings field to read/write.
   */
  addFolderSetting(containerEl, name, desc, key) {
    let textComp = null;
    new import_obsidian3.Setting(containerEl).setName(name).setDesc(desc).addText((text) => {
      textComp = text;
      text.setPlaceholder(this.attachmentFolderLabel()).setValue(this.plugin.settings[key]).onChange(async (value) => {
        this.plugin.settings[key] = value.trim();
        await this.plugin.saveSettings();
      });
    }).addButton((btn) => {
      btn.setButtonText("\u{1F4C1}").setTooltip("\u9009\u62E9\u76EE\u5F55").onClick(() => {
        const modal = this.createFolderSuggestModal((path) => {
          this.plugin.settings[key] = path;
          void this.plugin.saveSettings();
          textComp == null ? void 0 : textComp.setValue(path);
        });
        modal.open();
      });
    });
  }
  /** Creates a FuzzySuggestModal pre-populated with vault folder paths. */
  createFolderSuggestModal(onSelect) {
    const folders = this.getFolderPaths();
    return new FolderSuggestModal(this.app, folders, onSelect);
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian3.Setting(containerEl).setName("\u65F6\u95F4\u6233\u8BBE\u7F6E").setHeading();
    new import_obsidian3.Setting(containerEl).setName("\u65E5\u8BB0\u6807\u9898").setDesc("\u63D2\u4EF6\u751F\u6548\u7684\u6807\u9898\uFF0C\u5982 Journal").addText(
      (text) => text.setPlaceholder("Journal").setValue(this.plugin.settings.targetHeading).onChange(async (value) => {
        this.plugin.settings.targetHeading = value.trim() || "Journal";
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian3.Setting(containerEl).setName("\u6807\u9898\u5C42\u7EA7").setDesc("\u76EE\u6807\u6807\u9898\u7684\u5C42\u7EA7\uFF0CH2 \u5BF9\u5E94 ## Journal").addDropdown((dd) => {
      for (let i = 1; i <= 6; i++) {
        dd.addOption(String(i), `H${i}  ${"#".repeat(i)}`);
      }
      dd.setValue(String(this.plugin.settings.headingLevel));
      dd.onChange(async (value) => {
        this.plugin.settings.headingLevel = parseInt(value);
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian3.Setting(containerEl).setName("\u6587\u5B57\u989C\u8272").setDesc("\u65F6\u95F4\u6233\u5FBD\u6807\u7684\u524D\u666F\u8272").addColorPicker(
      (cp) => cp.setValue(this.plugin.settings.timestampColor).onChange(async (value) => {
        this.plugin.settings.timestampColor = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian3.Setting(containerEl).setName("\u80CC\u666F\u989C\u8272").setDesc("\u65F6\u95F4\u6233\u5FBD\u6807\u7684\u80CC\u666F\u8272").addColorPicker(
      (cp) => cp.setValue(this.plugin.settings.timestampBgColor).onChange(async (value) => {
        this.plugin.settings.timestampBgColor = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian3.Setting(containerEl).setName("\u53EA\u8BFB\u4FDD\u62A4").setDesc("\u5F00\u542F\u540E\uFF0C\u65E0\u6CD5\u5728\u7F16\u8F91\u5668\u4E2D\u4FEE\u6539\u5DF2\u5B58\u5728\u7684\u65F6\u95F4\u6233").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.readonlyTimestamps).onChange(async (value) => {
        this.plugin.settings.readonlyTimestamps = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian3.Setting(containerEl).setName("\u56DE\u8F66\u81EA\u52A8\u63D2\u5165").setDesc("\u5728 Journal \u533A\u5757\u5185\u6309\u56DE\u8F66\u65F6\uFF0C\u81EA\u52A8\u5728\u65B0\u884C\u63D2\u5165\u5F53\u524D\u65F6\u95F4").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.autoTimestamp).onChange(async (value) => {
        this.plugin.settings.autoTimestamp = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian3.Setting(containerEl).setName("\u5339\u914D\u6B63\u5219").setDesc("\u8BC6\u522B\u65F6\u95F4\u6233\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u9ED8\u8BA4 \\d{2}:\\d{2}\uFF08HH:MM\uFF09").addText(
      (text) => text.setPlaceholder("\\d{2}:\\d{2}").setValue(this.plugin.settings.timestampPattern).onChange(async (value) => {
        try {
          new RegExp(value);
          this.plugin.settings.timestampPattern = value;
          await this.plugin.saveSettings();
        } catch (e) {
          new import_obsidian3.Notice("\u274C \u65E0\u6548\u7684\u6B63\u5219\u8868\u8FBE\u5F0F");
        }
      })
    );
    new import_obsidian3.Setting(containerEl).setName("\u6392\u5E8F\u65B9\u5F0F").setDesc("\u65F6\u95F4\u7EBF\u4E2D\u65E5\u8BB0\u6761\u76EE\u7684\u6392\u5217\u987A\u5E8F").addDropdown(
      (dropdown) => dropdown.addOption("desc", "\u6700\u65B0\u5728\u4E0A\uFF08\u9ED8\u8BA4\uFF09").addOption("asc", "\u6700\u65E9\u5728\u4E0A").setValue(this.plugin.settings.sortOrder).onChange(async (value) => {
        this.plugin.settings.sortOrder = value;
        await this.plugin.saveSettings();
        this.plugin.refreshCaptureViews();
      })
    );
    const previewEl = containerEl.createDiv({ cls: "jp-settings-preview" });
    previewEl.createSpan({ cls: "jp-settings-preview-label", text: "\u9884\u89C8\uFF1A" });
    previewEl.createSpan({ cls: "jp-timestamp", text: "07:31" });
    previewEl.createSpan({ text: "\u8FD9\u91CC\u662F\u65E5\u8BB0\u5185\u5BB9\u2026" });
    new import_obsidian3.Setting(containerEl).setName("\u8BED\u97F3\u8F6C\u6587\u5B57").setHeading();
    const guide = containerEl.createDiv({ cls: "jp-stt-guide" });
    guide.createEl("p", {
      text: "\u5F55\u97F3\u8F6C\u6587\u5B57\u4F7F\u7528 OpenAI \u517C\u5BB9\u7684 /audio/transcriptions \u63A5\u53E3\u3002\u586B\u597D\u8F6C\u5199\u5730\u5740\u4E0E API Key \u5373\u53EF\u5F00\u542F\uFF1B\u7559\u7A7A\u5219\u5173\u95ED\u8F6C\u5199\uFF0C\u9EA6\u514B\u98CE\u4EC5\u4F5C\u7EAF\u5F55\u97F3\u3002\u4E5F\u53EF\u4E0D\u914D\u7F6E\uFF0C\u76F4\u63A5\u7528\u7CFB\u7EDF\u542C\u5199\uFF08macOS \u53CC\u51FB Fn / iOS \u952E\u76D8\u9EA6\u514B\u98CE\uFF09\u5F80\u8F93\u5165\u6846\u8F93\u5165\u3002"
    });
    guide.createEl("p", {
      text: "\u5B9E\u65F6\u8F6C\u5199\u6A21\u5F0F\uFF1A\u8FB9\u8BF4\u8FB9\u51FA\u5B57\uFF0C\u5728\u505C\u987F\u5904\u5207\u53E5\u5E76\u5E26\u4E0A\u4E0B\u6587\u62FC\u63A5\u3002\u505C\u6B62\u540E\u9ED8\u8BA4\u4FDD\u7559\u5B9E\u65F6\u8349\u7A3F\uFF08\u5FEB\uFF09\uFF1B\u53EF\u5728\u4E0B\u65B9\u5F00\u542F\u300C\u505C\u6B62\u540E\u6574\u6BB5\u91CD\u8F6C\u300D\u7528\u5B8C\u6574\u97F3\u9891\u518D\u8F6C\u4E00\u6B21\u66FF\u6362\u8349\u7A3F\uFF08\u66F4\u51C6\u4F46\u9700\u7B49\u5F85\uFF09\u3002"
    });
    const table = guide.createEl("table", { cls: "jp-stt-guide-table" });
    const thead = table.createEl("thead");
    const headRow = thead.createEl("tr");
    for (const h of ["\u670D\u52A1\u5546", "\u8F6C\u5199\u5730\u5740", "\u6A21\u578B", "\u8D39\u7528", "\u8BF4\u660E"]) {
      headRow.createEl("th", { text: h });
    }
    const tbody = table.createEl("tbody");
    const rows = [
      ["SiliconFlow\uFF08\u56FD\u5185\u63A8\u8350\uFF09", "https://siliconflow.cn", "https://api.siliconflow.cn/v1/audio/transcriptions", "FunAudioLLM/SenseVoiceSmall", "\u514D\u8D39", "\u56FD\u5185\u53EF\u76F4\u8FDE\uFF0C\u4E2D\u6587\u8D28\u91CF\u597D\uFF0C\u6CE8\u518C\u5B9E\u540D\u540E\u751F\u6210 Key"],
      ["Groq", "https://console.groq.com", "https://api.groq.com/openai/v1/audio/transcriptions", "whisper-large-v3", "\u6709\u514D\u8D39\u989D\u5EA6", "\u901F\u5EA6\u6781\u5FEB\uFF0C\u9700\u7F51\u7EDC\u53EF\u8FBE"],
      ["OpenAI", "https://platform.openai.com", "https://api.openai.com/v1/audio/transcriptions", "whisper-1", "\u4ED8\u8D39", "\u5B98\u65B9\u63A5\u53E3\uFF0C\u9700\u5916\u7F51"],
      ["\u963F\u91CC\u767E\u70BC", "https://bailian.console.aliyun.com", "\u9700\u7528 DashScope \u517C\u5BB9\u7AEF\u70B9", "paraformer-v2", "\u6709\u514D\u8D39\u989D\u5EA6", "\u4E2D\u6587\u4F18\u79C0\uFF0C\u6CE8\u610F\u63A5\u53E3\u683C\u5F0F"],
      ["\u81EA\u5EFA faster-whisper", "https://github.com/ahmetoner/whisper-asr-webservice", "http://\u4F60\u7684\u670D\u52A1\u5668:9000/v1/audio/transcriptions", "whisper-1 / small / medium", "\u514D\u8D39", "Docker \u90E8\u7F72 OpenAI \u517C\u5BB9\u670D\u52A1\uFF0C\u9690\u79C1\u65E0\u5FE7"]
    ];
    for (const r of rows) {
      const [name, nameUrl, endpoint, model, cost, note] = r;
      const tr = tbody.createEl("tr");
      const nameTd = tr.createEl("td");
      const nameA = nameTd.createEl("a", { text: name });
      nameA.href = nameUrl;
      nameA.target = "_blank";
      nameA.rel = "noopener";
      const epTd = tr.createEl("td");
      const epA = epTd.createEl("a", { text: endpoint });
      epA.href = endpoint.startsWith("http") ? endpoint : nameUrl;
      epA.target = "_blank";
      epA.rel = "noopener";
      tr.createEl("td", { text: model });
      tr.createEl("td", { text: cost });
      tr.createEl("td", { text: note });
    }
    const hintP = guide.createEl("p", { cls: "jp-stt-guide-hint" });
    hintP.appendText("\u63D0\u793A\uFF1A\u4EE5\u4E0A\u670D\u52A1\u7684\u989D\u5EA6\u4E0E\u6A21\u578B\u540D\u4EE5\u5B98\u7F51\u516C\u793A\u4E3A\u51C6\uFF0C\u53EF\u80FD\u968F\u65F6\u8C03\u6574\u3002SenseVoiceSmall \u5F53\u524D\u5728 SiliconFlow \u6807\u6CE8\u4E3A\u514D\u8D39 \u2192 ");
    const hintA = hintP.createEl("a", { text: "SiliconFlow \u5B9A\u4EF7" });
    hintA.href = "https://siliconflow.cn/pricing";
    hintA.target = "_blank";
    hintA.rel = "noopener";
    hintP.appendText("\u3002");
    let apiKeyInputEl = null;
    this.addFolderSetting(
      containerEl,
      "\u5F55\u97F3\u5B58\u653E\u4F4D\u7F6E",
      "Vault \u76F8\u5BF9\u8DEF\u5F84\uFF0C\u7528\u4E8E\u5B58\u653E\u5F55\u97F3\u6587\u4EF6\u3002\u7559\u7A7A\u5219\u4F7F\u7528 Obsidian \u9644\u4EF6\u6587\u4EF6\u5939\u3002",
      "recordingFolder"
    );
    new import_obsidian3.Setting(containerEl).setName("\u8F6C\u5199\u5730\u5740").setDesc("OpenAI \u517C\u5BB9\u7684 /audio/transcriptions \u5730\u5740\u3002\u7559\u7A7A\u5219\u5173\u95ED\u5F55\u97F3\u8F6C\u6587\u5B57\u3002").addText(
      (text) => text.setPlaceholder("https://api.openai.com/v1/audio/transcriptions").setValue(this.plugin.settings.sttEndpoint).onChange(async (value) => {
        this.plugin.settings.sttEndpoint = value.trim();
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian3.Setting(containerEl).setName("API Key").setDesc("\u4EE5 Bearer \u5F62\u5F0F\u53D1\u9001\u7684\u5BC6\u94A5\u3002\u53EF\u586B OpenAI / Groq / \u81EA\u5EFA\u670D\u52A1\u7684\u5BC6\u94A5\u3002").addText((text) => {
      text.inputEl.type = "password";
      apiKeyInputEl = text.inputEl;
      text.setPlaceholder("sk-\u2026").setValue(this.plugin.settings.sttApiKey).onChange(async (value) => {
        this.plugin.settings.sttApiKey = value.trim();
        await this.plugin.saveSettings();
      });
      return text;
    }).addExtraButton((button) => {
      let isPassword = true;
      button.setIcon("eye").setTooltip("\u663E\u793A/\u9690\u85CF API Key").onClick(() => {
        isPassword = !isPassword;
        if (apiKeyInputEl) {
          apiKeyInputEl.type = isPassword ? "password" : "text";
        }
        button.setIcon(isPassword ? "eye" : "eye-off");
      });
      return button;
    });
    new import_obsidian3.Setting(containerEl).setName("\u6A21\u578B").setDesc("multipart \u4E2D\u7684 model \u5B57\u6BB5\uFF0C\u5982 whisper-1\u3001whisper-large-v3\u3002").addText(
      (text) => text.setPlaceholder("whisper-1").setValue(this.plugin.settings.sttModel).onChange(async (value) => {
        this.plugin.settings.sttModel = value.trim();
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian3.Setting(containerEl).setName("\u8BED\u8A00").setDesc("ISO-639-1 \u8BED\u8A00\u63D0\u793A\uFF0C\u5982 zh\u3001en\u3002\u7559\u7A7A\u8BA9\u6A21\u578B\u81EA\u52A8\u8BC6\u522B\u3002").addText(
      (text) => text.setPlaceholder("zh").setValue(this.plugin.settings.sttLanguage).onChange(async (value) => {
        this.plugin.settings.sttLanguage = value.trim();
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian3.Setting(containerEl).setName("\u5B9E\u65F6\u8F6C\u5199").setDesc("\u5F55\u97F3\u65F6\u8FB9\u8BF4\u8FB9\u51FA\u5B57\uFF0C\u5728\u505C\u987F\u5904\u5207\u53E5\u5E76\u5E26\u4E0A\u4E0B\u6587\u62FC\u63A5\u3002\u5173\u95ED\u5219\u5F55\u5B8C\u6574\u6BB5\u540E\u4E00\u6B21\u6027\u8F6C\u5199\u3002").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.sttRealtime).onChange(async (value) => {
        this.plugin.settings.sttRealtime = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian3.Setting(containerEl).setName("\u5176\u4ED6").setHeading();
    this.addFolderSetting(
      containerEl,
      "\u56FE\u7247\u5B58\u653E\u4F4D\u7F6E",
      "Vault \u76F8\u5BF9\u8DEF\u5F84\uFF0C\u7528\u4E8E\u5B58\u653E\u7C98\u8D34/\u4E0A\u4F20\u7684\u56FE\u7247\u3002\u7559\u7A7A\u5219\u4F7F\u7528 Obsidian \u9644\u4EF6\u6587\u4EF6\u5939\u3002",
      "imageFolder"
    );
    new import_obsidian3.Setting(containerEl).setName("\u63D0\u4EA4\u5FEB\u6377\u952E").setDesc("\u5728\u8F93\u5165\u6846\u4E2D\u63D0\u4EA4\u65E5\u8BB0\u7684\u5FEB\u6377\u952E\u7EC4\u5408").addDropdown(
      (dropdown) => dropdown.addOption("shift+enter", "Shift + Enter").addOption("ctrl+enter", "Ctrl + Enter").addOption("alt+enter", "Alt + Enter").addOption("ctrl+shift+enter", "Ctrl + Shift + Enter").setValue(this.plugin.settings.submitShortcut).onChange(async (value) => {
        this.plugin.settings.submitShortcut = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian3.Setting(containerEl).setName("Apple Shortcut").setDesc("\u914D\u5408 iPhone Action Button \u4F7F\u7528\uFF0C\u5FEB\u901F\u5F55\u97F3\u5E76\u5199\u5165\u65E5\u8BB0").addButton(
      (btn) => btn.setButtonText("\u83B7\u53D6\u6377\u5F84").setCta().onClick(() => {
        window.open(
          "https://www.icloud.com/shortcuts/2b5bbc7c721a4010807c4ed337245360",
          "_blank"
        );
      })
    );
    const urlSection = containerEl.createDiv({ cls: "jp-settings-url-section" });
    urlSection.createDiv({ text: "URL Scheme", cls: "jp-settings-url-title" });
    urlSection.createDiv({
      text: "\u53EF\u5728\u6D4F\u89C8\u5668\u5730\u5740\u680F\u3001\u5FEB\u6377\u6307\u4EE4\u3001\u81EA\u52A8\u5316 App \u7B49\u4EFB\u610F\u4F4D\u7F6E\u8C03\u7528\uFF0C\u81EA\u52A8\u6253\u5F00\u4FA7\u8FB9\u680F\u5E76\u5F00\u59CB\u5F55\u97F3\u3002",
      cls: "jp-settings-url-desc"
    });
    const url = "obsidian://journal-partner?cmd=record";
    const row = urlSection.createDiv({ cls: "jp-settings-url-row" });
    const code = row.createEl("code", { text: url, cls: "jp-settings-url-code" });
    code.setAttr("title", "\u70B9\u51FB\u590D\u5236");
    code.addEventListener("click", () => {
      void navigator.clipboard.writeText(url).then(() => new import_obsidian3.Notice("\u5DF2\u590D\u5236 URL"));
    });
  }
};
var FolderSuggestModal = class extends import_obsidian3.FuzzySuggestModal {
  constructor(app, folders, onSelect) {
    super(app);
    this.folders = folders;
    this.onSelectFolder = onSelect;
    this.setPlaceholder("\u9009\u62E9\u6216\u641C\u7D22\u6587\u4EF6\u5939\u8DEF\u5F84");
  }
  getItems() {
    return this.folders;
  }
  getItemText(item) {
    return item;
  }
  onChooseItem(item) {
    this.onSelectFolder(item);
  }
};
//# sourceMappingURL=main.js.map
