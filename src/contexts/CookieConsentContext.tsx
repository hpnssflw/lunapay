import { createContext, useContext, ReactNode } from "react";
import { useCookieConsent } from "@/hooks/useCookieConsent";

interface CookieConsentContextType {
  isOpen: boolean;
  analytics: boolean;
  marketing: boolean;
  setAnalytics: (value: boolean) => void;
  setMarketing: (value: boolean) => void;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: () => void;
  openConsentModal: () => void;
  closeConsentModal: () => void;
  getConsentStatus: () => string;
}

const CookieConsentContext = createContext<
  CookieConsentContextType | undefined
>(undefined);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const cookieConsent = useCookieConsent();

  return (
    <CookieConsentContext.Provider value={cookieConsent}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsentContext() {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error(
      "useCookieConsentContext must be used within a CookieConsentProvider"
    );
  }
  return context;
}
