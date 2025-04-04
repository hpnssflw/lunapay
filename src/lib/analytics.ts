// todo : handle for test
const GA_ID = "";
const GTM_ID = "";

type GtagCommand = "config" | "set" | "event" | "js" | "consent" | "get";
type GtagParams = Record<string, unknown>;

interface GoogleAnalyticsWindow {
  dataLayer?: unknown[];
  gtag?: (
    command: GtagCommand,
    params?: string | Date | GtagParams,
    additionalParams?: GtagParams
  ) => void;
}

export function loadAnalytics() {
  if (typeof window === "undefined") return;
  loadGA();
  loadGTM();
}

export function loadMarketing() {
  if (typeof window === "undefined") return;
}

function loadGTM(gtmId = GTM_ID) {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  if (document.getElementById("gtm-script")) return;

  const script = document.createElement("script");
  script.id = "gtm-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.head.appendChild(script);

  const noscript = document.createElement("noscript");
  noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
  document.body.appendChild(noscript);
}

function loadGA(gaId = GA_ID) {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  if (document.getElementById("ga-script")) return;

  const script = document.createElement("script");
  script.id = "ga-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  script.onload = () => {
    const w = window as GoogleAnalyticsWindow;

    w.dataLayer = w.dataLayer || [];

    function gtag(
      command: GtagCommand,
      params?: string | Date | GtagParams,
      additionalParams?: GtagParams
    ) {
      if (command === "js" && params instanceof Date) {
        w.dataLayer?.push(["js", params]);
      } else if (command === "config" && typeof params === "string") {
        w.dataLayer?.push(["config", params, additionalParams || {}]);
      } else {
        w.dataLayer?.push([command, params, additionalParams]);
      }
    }

    w.gtag = gtag;

    gtag("js", new Date());
    gtag("config", gaId);
  };
}
