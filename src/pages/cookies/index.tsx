import { useCookieConsent } from "@/hooks/useCookieConsent";
import { getCookie } from "@/lib/cookies";

export const CookiesPage = () => {
  const { rejectAll, openConsentModal, analytics, marketing } =
    useCookieConsent();

  const getConsentStatus = () => {
    if (analytics && marketing) return "Allow all";
    if (!analytics && !marketing) return "Necessary only";
    return "Custom preferences";
  };

  const consentId = getCookie("cookie_consent_id") || "N/A";
  const consentDate = getCookie("cookie_consent_date") || "N/A";

  return (
    <section className="max-w-[1240px] pt-[100px] px-2 lg:pt-[40px] mx-auto  text-[20px]  flex  flex-col gap-10 text-left">
      <h1>Cookies policy</h1>
      <p className="text-left">This website uses cookies.</p>

      <p>
        Essential cookies are set automatically. Optional cookies can be adjusted
        to your preferences.
      </p>

      <p>
        For more information about our cookie practices please visit our{" "}
        <a href="https://luna-pay.com/docs/privacy-policy.pdf" className="text-blue-500">
          Privacy Policy
        </a>{" "}
        or contact us at hello@luna-pay.com
        <br />
        Your consent applies to the following domains: luna-pay.com
      </p>

      <div className="border border-gray-700 rounded-md p-4 my-5 bg-white">
        <p>
          Your current state: {getConsentStatus()}
          <br />
          Your consent ID: {consentId}
          <br />
          Consent date: {consentDate}
        </p>
        <div className="mt-4">
          <button
            onClick={openConsentModal}
            className="text-blue-500 mr-4 hover:underline"
          >
            Change your consent
          </button>{" "}
          |
          <button
            onClick={rejectAll}
            className="text-blue-500 ml-4 hover:underline"
          >
            Withdraw your consent
          </button>
        </div>
      </div>

      <p>Cookie declaration last updated on 20.01.2023</p>

      <div className="mt-6  pt-2  flex-col gap-5">
        <h2 className="text-blue-500 font-bold">NECESSARY (1)</h2>
        <p>
          Necessary cookies help make a website usable by enabling basic
          functions like page navigation and access to secure areas of the
          website. The website cannot function properly without these cookies.
        </p>

        <div className="overflow-x-auto w-full">
          <table className="min-w-full mt-4 border-collapse rounded-[12px] text-sm">
            <thead>
              <tr>
                <th className="border border-gray-700 p-2 text-left text-blue-500 bg-gray-100">
                  Name / Provider
                </th>

                <th className="border border-gray-700 p-2 text-left text-blue-500 bg-gray-100">
                  Purpose
                </th>
                <th className="border border-gray-700 p-2 text-left text-blue-500 bg-gray-100">
                  Maximum Storage Duration
                </th>
                <th className="border border-gray-700 p-2 text-left text-blue-500 bg-gray-100">
                  Type
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-700 p-2">
                  CookieConsent / luna-pay.com
                </td>
                <td className="border border-gray-700 p-2 ">
                  Stores the user's cookie consent state for the current domain.
                </td>
                <td className="border border-gray-700 p-2">Persistent</td>
                <td className="border border-gray-700 p-2">HTTP Cookie</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6  pt-2 flex flex-col gap-5">
        <h2 className="text-blue-500 font-bold">STATISTICS (2)</h2>
        <p>
          Statistic cookies help website owners to understand how visitors
          interact with websites by collecting and reporting information
          anonymously.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full mt-4 border-collapse border rounded-[12px]">
            <thead className="text-[14px]">
              <tr>
                <th className="border border-gray-700 p-2 text-left text-blue-500 bg-gray-100">
                  Name / Provider
                </th>

                <th className="border border-gray-700 p-2 text-left text-blue-500 bg-gray-100">
                  Purpose
                </th>
                <th className="border border-gray-700 p-2 text-left text-blue-500 bg-gray-100">
                  Maximum Storage Duration
                </th>
                <th className="border border-gray-700 p-2 text-left text-blue-500 bg-gray-100">
                  Type
                </th>
              </tr>
            </thead>
            <tbody className="text-[14px]">
              <tr>
                <td className="border border-gray-700 p-2">_ga / Google</td>
                <td className="border border-gray-700 p-2 max-w-[400px]">
                  Used to send data to Google Analytics about the visitor&apos;s
                  device and behavior. Tracks the visitor across devices and
                  marketing channels.
                </td>
                <td className="border border-gray-700 p-2">2 years</td>
                <td className="border border-gray-700 p-2">HTTP Cookie</td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">_ga_# / Google</td>
                <td className="border border-gray-700 p-2 max-w-[400px]">
                  Used to send data to Google Analytics about the visitor&apos;s
                  device and behavior. Tracks the visitor across devices and
                  marketing channels.
                </td>
                <td className="border border-gray-700 p-2">2 years</td>
                <td className="border border-gray-700 p-2">HTTP Cookie</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
