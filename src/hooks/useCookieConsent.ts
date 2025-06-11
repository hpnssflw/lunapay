import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { setCookie, getCookie, deleteCookie } from "@/lib/cookies";
import {
  loadAnalytics,
  loadMarketing,
  removeAnalytics,
  isAnalyticsLoaded,
  COOKIE_CATEGORIES,
} from "@/lib/analytics";

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

  // Remove cookies by category
  const removeCookiesByCategory = (category: string) => {
    const cookies =
      COOKIE_CATEGORIES[category as keyof typeof COOKIE_CATEGORIES]?.cookies;
    if (!cookies) return;

    cookies.forEach((cookie) => {
      if (cookie.endsWith("*")) {
        // Remove all cookies that start with the prefix
        const prefix = cookie.slice(0, -1);
        Object.keys(
          document.cookie.split(";").reduce((acc, cookie) => {
            const [key, value] = cookie.trim().split("=");
            acc[key] = value;
            return acc;
          }, {} as Record<string, string>)
        ).forEach((existingCookie) => {
          if (existingCookie.startsWith(prefix)) {
            deleteCookie(existingCookie);
          }
        });
      } else {
        deleteCookie(cookie);
      }
    });
  };

  useEffect(() => {
    const consentStatus = getCookie("cookie_consent");

    if (!consentStatus) {
      setIsOpen(true);
      // No consent yet, remove any analytics
      removeAnalytics();
    } else {
      try {
        const preferences = JSON.parse(getCookie("cookie_preferences") || "{}");
        setAnalytics(preferences.analytics || false);
        setMarketing(preferences.marketing || false);

        // Apply saved preferences
        if (preferences.analytics && !isAnalyticsLoaded()) {
          loadAnalytics();
        } else if (!preferences.analytics) {
          removeAnalytics();
        }

        if (preferences.marketing) {
          loadMarketing();
        }
      } catch (e) {
        console.error("Error parsing cookie preferences", e);
        removeAnalytics();
      }
    }

    const handleOpenConsentModal = () => {
      setIsOpen(true);
    };

    // Use both event listener approaches for compatibility
    window.addEventListener("openConsentModal", handleOpenConsentModal);
    document.addEventListener(
      "showCookieConsent",
      handleOpenConsentModal as EventListener
    );

    return () => {
      window.removeEventListener("openConsentModal", handleOpenConsentModal);
      document.removeEventListener(
        "showCookieConsent",
        handleOpenConsentModal as EventListener
      );
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

    // Notify about cookie preferences update
    document.dispatchEvent(new Event("cookiePreferencesUpdated"));
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

    // Remove analytics cookies
    removeCookiesByCategory("analytics");

    // Remove analytics scripts
    removeAnalytics();

    setAnalytics(false);
    setMarketing(false);
    setIsOpen(false);

    // Notify about cookie preferences update
    document.dispatchEvent(new Event("cookiePreferencesUpdated"));
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
      removeCookiesByCategory("analytics");
      removeAnalytics();
    }

    if (marketing) {
      loadMarketing();
    }

    setIsOpen(false);

    // Notify about cookie preferences update
    document.dispatchEvent(new Event("cookiePreferencesUpdated"));
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
