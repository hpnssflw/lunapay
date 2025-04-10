import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { setCookie, getCookie, deleteCookie } from "@/lib/cookies";
import { loadAnalytics, loadMarketing } from "@/lib/analytics";

export function useCookieConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const getConsentStatus = () => {
    if (analytics && marketing) {
      return "Allow all";
    } else if (!analytics && !marketing) {
      return "Necessary only";
    } else {
      return "Custom preferences";
    }
  };

  useEffect(() => {
    const consentStatus = getCookie("cookie_consent");

    if (!consentStatus) {
      setIsOpen(true);
    } else {
      try {
        const preferences = JSON.parse(getCookie("cookie_preferences") || "{}");
        setAnalytics(preferences.analytics || false);
        setMarketing(preferences.marketing || false);

        // Only load analytics if user has given consent
        if (preferences.analytics) {
          loadAnalytics();
        }
        if (preferences.marketing) {
          loadMarketing();
        }
      } catch (e) {
        console.error("Error parsing cookie preferences", e);
      }
    }

    const handleOpenConsentModal = () => {
      setIsOpen(true);
    };

    window.addEventListener("openConsentModal", handleOpenConsentModal);

    return () => {
      window.removeEventListener("openConsentModal", handleOpenConsentModal);
    };
  }, []);

  const generateConsentId = () => uuidv4();

  const acceptAll = () => {
    const consentId = generateConsentId();
    const now = new Date().toISOString();

    setCookie("cookie_consent", "all", 365);
    setCookie("cookie_consent_id", consentId, 365);
    setCookie("cookie_consent_date", now, 365);
    setCookie(
      "cookie_preferences",
      JSON.stringify({ necessary: true, analytics: true, marketing: true }),
      365
    );

    if (typeof window !== "undefined") {
      localStorage.setItem("cookie_consent_status", "all");
    }

    setAnalytics(true);
    setMarketing(true);
    loadAnalytics();
    loadMarketing();
    setIsOpen(false);
  };

  const rejectAll = () => {
    const consentId = generateConsentId();
    const now = new Date().toISOString();

    setCookie("cookie_consent", "necessary", 365);
    setCookie("cookie_consent_id", consentId, 365);
    setCookie("cookie_consent_date", now, 365);
    setCookie(
      "cookie_preferences",
      JSON.stringify({ necessary: true, analytics: false, marketing: false }),
      365
    );

    if (typeof window !== "undefined") {
      localStorage.setItem("cookie_consent_status", "necessary");
    }

    deleteCookie("_ga");
    deleteCookie("_gid");
    deleteCookie("_gat");

    setAnalytics(false);
    setMarketing(false);
    setIsOpen(false);
  };

  const savePreferences = () => {
    const consentId = generateConsentId();
    const now = new Date().toISOString();

    setCookie("cookie_consent", "custom", 365);
    setCookie("cookie_consent_id", consentId, 365);
    setCookie("cookie_consent_date", now, 365);
    setCookie(
      "cookie_preferences",
      JSON.stringify({ necessary: true, analytics, marketing }),
      365
    );

    if (typeof window !== "undefined") {
      localStorage.setItem("cookie_consent_status", "custom");
    }

    if (analytics) {
      loadAnalytics();
    } else {
      deleteCookie("_ga");
      deleteCookie("_gid");
      deleteCookie("_gat");
    }

    if (marketing) {
      loadMarketing();
    }
  };

  const openConsentModal = () => {
    setIsOpen(true);
  };

  const closeConsentModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    analytics,
    marketing,
    setAnalytics,
    setMarketing,
    acceptAll,
    rejectAll,
    savePreferences,
    openConsentModal,
    closeConsentModal,
    getConsentStatus,
  };
}
