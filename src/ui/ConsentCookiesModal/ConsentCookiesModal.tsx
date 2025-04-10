import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { Cookie } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export const ConsentCookiesModal = () => {
  const [showCustomize, setShowCustomize] = useState(false);
  const {
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
  } = useCookieConsent();

  const handleCustomize = () => {
    setShowCustomize(true);
  };

  const handleSavePreferences = () => {
    savePreferences();
    setShowCustomize(false);
    closeConsentModal();
  };

  const handleReopenModal = () => {
    openConsentModal();
    setShowCustomize(false);
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-70 ${
          isOpen ? "block" : "hidden"
        } flex items-center justify-center`}
      >
        <div className="bg-white p-6 rounded-xl max-w-[500px] border border-gray-700">
          {!showCustomize ? (
            <>
              <h2 className="text-xl font-bold mb-3">We use cookies</h2>
              <p className="text-gray-500 mb-6">
                Our website uses cookies to enhance your experience. You can
                manage your cookie preferences below.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-end">
                <Button
                  onClick={acceptAll}
                  className="h-[34px] text-[14px] rounded-[6px]"
                >
                  Accept All
                </Button>
                <Button
                  onClick={rejectAll}
                  variant="default"
                  className="border-gray-600 h-[34px] text-[14px] rounded-[6px]"
                >
                  Reject All
                </Button>
                <Button
                  onClick={handleCustomize}
                  variant="default"
                  className="border-gray-600 h-[34px] text-[14px] rounded-[6px]"
                >
                  Customize
                </Button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-xl font-bold mb-3">Cookie Preferences</h2>
              <p className="text-gray-300 mb-6">
                Adjust your cookie settings below.
              </p>

              {/* Cookie categories section similar to the image */}
              <div className="mb-6 border border-blue-500 rounded-md p-2">
                <h3 className="text-blue-500 font-bold">NECESSARY (1)</h3>
                <p className="text-sm mb-3">
                  Necessary cookies help make a website usable by enabling basic
                  functions like page navigation and access to secure areas of
                  the website. The website cannot function properly without
                  these cookies.
                </p>
                <div className="flex items-center space-x-2">
                  <Checkbox id="necessary" checked disabled />
                  <label
                    htmlFor="necessary"
                    className="text-sm font-medium leading-none"
                  >
                    Necessary (always required)
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-blue-500 font-bold">STATISTICS (2)</h3>
                <p className="text-sm mb-3">
                  Statistic cookies help website owners to understand how
                  visitors interact with websites by collecting and reporting
                  information anonymously.
                </p>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="analytics"
                    checked={analytics}
                    onCheckedChange={(checked) =>
                      setAnalytics(checked as boolean)
                    }
                  />
                  <label
                    htmlFor="analytics"
                    className="text-sm font-medium leading-none"
                  >
                    Analytics
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-blue-500 font-bold">MARKETING</h3>
                <p className="text-sm mb-3">
                  Marketing cookies are used to track visitors across websites.
                  The intention is to display ads that are relevant and engaging
                  for the individual user.
                </p>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="marketing"
                    checked={marketing}
                    onCheckedChange={(checked) =>
                      setMarketing(checked as boolean)
                    }
                  />
                  <label
                    htmlFor="marketing"
                    className="text-sm font-medium leading-none"
                  >
                    Marketing
                  </label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 justify-end">
                <Button
                  onClick={handleSavePreferences}
                  className="h-[34px] text-[14px] rounded-[6px]"
                >
                  Save Preferences
                </Button>
                <Button
                  onClick={rejectAll}
                  variant="default"
                  className="border-gray-600 h-[34px] text-[14px] rounded-[6px]"
                >
                  Reject All
                </Button>
              </div>
            </>
          )}

          {/* Your consent ID and date section similar to image */}
          <div className="mt-6 pt-4 border-t border-gray-700 text-gray-400 text-sm flex justify-between">
            <p>Your current state: {getConsentStatus()}</p>
            <div className="">
              <Link to="cookies" className="text-blue-500">
                Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie icon button */}
      <Button
        onClick={handleReopenModal}
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 h-10 w-10 rounded-full shadow-lg z-50 bg-white hover:bg-neutral-200 border-none"
        title="Cookie Preferences"
      >
        <Cookie strokeWidth={1.25} />
        <span className="sr-only">Open Cookie Preferences</span>
      </Button>
    </>
  );
};
