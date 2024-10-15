function detectBot() {
    const detectors = {
      webDriver: navigator.webdriver,
      headlessBrowser: navigator.userAgent.includes("Headless"),
      noLanguages: (navigator.languages?.length || 0) === 0,
      pdfViewer: navigator.pdfViewerEnabled,
      inconsistentEval: detectInconsistentEval(),
      domManipulation: document.documentElement
        .getAttributeNames()
        .some((attr) => ["selenium", "webdriver", "driver"].includes(attr)),
    };
    const detections = {};
    let verdict = { bot: false };
  
    for (const detectorName in detectors) {
      const detectorResult = detectors[detectorName];
      detections[detectorName] = { bot: detectorResult };
      if (detectorResult) {
        verdict = { bot: true }; 
      }
    }
  
    return { detections, verdict };
  }
  
  function detectInconsistentEval() {
    let length = eval.toString().length;
    let userAgent = navigator.userAgent.toLowerCase();
    let browser;
  
    if (userAgent.indexOf("edg/") !== -1) {
      browser = "edge";
    } else if (
      userAgent.indexOf("trident") !== -1 ||
      userAgent.indexOf("msie") !== -1
    ) {
      browser = "internet_explorer";
    } else if (userAgent.indexOf("firefox") !== -1) {
      browser = "firefox";
    } else if (
      userAgent.indexOf("opera") !== -1 ||
      userAgent.indexOf("opr") !== -1
    ) {
      browser = "opera";
    } else if (userAgent.indexOf("chrome") !== -1) {
      browser = "chrome";
    } else if (userAgent.indexOf("safari") !== -1) {
      browser = "safari";
    } else {
      browser = "unknown";
    }
  
    if (browser === "unknown") return false;
  
    return (
      (length === 33 && !["chrome", "opera", "edge"].includes(browser)) ||
      (length === 37 && !["firefox", "safari"].includes(browser)) ||
      (length === 39 && !["internet_explorer"].includes(browser))
    );
  }

document.addEventListener("DOMContentLoaded", () => {
  const verdict = detectBot();
  if (verdict.bot) {
    document.body.innerHTML = "";
    window.location.href = "about:blank";
    window.stop();
  } else {
    console.log("Simple Bot Check passed ✅");
  }
})