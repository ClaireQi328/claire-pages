console.log("[figmaEX] extension content.js (02)");

function injectScriptFirst(file_path) {
  var node = document.documentElement || document.head || document.body;
  if (!node) return;

  var script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.setAttribute("src", file_path);
  script.async = false;

  if (node.firstChild) {
    node.insertBefore(script, node.firstChild);
  } else {
    node.appendChild(script);
  }
}

// injectScript(chrome.runtime.getURL("init.js"))
injectScriptFirst(chrome.runtime.getURL("app.js"));

