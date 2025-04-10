/* eslint-disable @typescript-eslint/no-explicit-any */
// todo : handle for test
const GA_ID = "G-BY061G8TJ3";
const GTM_ID = "GTM-KPX8RFRC";

type GtagEvent = "js" | "config" | "consent" | "event";

interface GtagConfig {
  anonymize_ip?: boolean;
  allow_google_signals?: boolean;
  allow_ad_personalization_signals?: boolean;
  [key: string]: any;
}

interface DataLayerEvent {
  "gtm.start"?: number;
  event?: string;
  [key: string]: any;
}

interface GoogleAnalyticsWindow extends Window {
  dataLayer?: DataLayerEvent[];
  gtag?: {
    (...args: [GtagEvent, Date]): void;
    (...args: [GtagEvent, string, GtagConfig?]): void;
    (...args: any[]): void;
  };
}

declare const window: GoogleAnalyticsWindow;

export function loadAnalytics(): void {
  if (typeof window === "undefined") return;
  loadGTM();
  loadGA();
}

export function loadMarketing(): void {
  if (typeof window === "undefined") return;
}

function loadGTM(gtmId: string = GTM_ID): void {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  if (document.getElementById("gtm-script")) return;

  window.dataLayer = window.dataLayer || [];

  const script = document.createElement("script");
  script.id = "gtm-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.head.appendChild(script);

  const noscript = document.createElement("noscript");
  noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
  document.body.appendChild(noscript);

  const gtmEvent: DataLayerEvent = {
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  };
  window.dataLayer.push(gtmEvent);
}

function loadGA(gaId: string = GA_ID): void {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  if (document.getElementById("ga-script")) return;

  window.dataLayer = window.dataLayer || [];

  function gtag(...args: any[]): void {
    window.dataLayer?.push(args);
  }
  window.gtag = gtag;

  const script = document.createElement("script");
  script.id = "ga-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  script.onload = () => {
    if (window.gtag) {
      window.gtag("js", new Date());

      const config: GtagConfig = {
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
      };
      window.gtag("config", gaId, config);
    }
  };
}
