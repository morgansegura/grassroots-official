import Link from "next/link";

import { LegalScreen } from "../legal-screen";

const LAST_UPDATED = "May 5, 2026";

export function CookiesScreen() {
  return (
    <LegalScreen
      eyebrow="Legal"
      title="Cookie Policy"
      lastUpdated={LAST_UPDATED}
      intro={
        <p>
          Cookies are small text files a website stores on your device when you
          visit. They&apos;re used for a few different purposes — some essential
          to make a site work, some used to remember preferences, some for
          analytics, and some for advertising. This policy describes what we
          use, why, and how to control them.
        </p>
      }
    >
      <section>
        <h2>1. Categories of cookies we use</h2>

        <h3>Strictly necessary</h3>
        <p>
          Required to make the site function. They cannot be turned off without
          breaking core features. These cookies do not store personally
          identifiable information.
        </p>
        <ul>
          <li>
            <strong>Session cookie</strong> — maintains state during your visit
            (e.g., closing a modal once and not seeing it again on the same page
            load).
          </li>
        </ul>

        <h3>Functional</h3>
        <p>
          Remember preferences you&apos;ve set (e.g., dismissing a banner) so
          you don&apos;t see them every page load. We don&apos;t currently set
          any persistent functional cookies; if we add any, this policy will be
          updated and we&apos;ll request consent first where required by law.
        </p>

        <h3>Analytics</h3>
        <p>
          Help us understand how the site is used in aggregate — which pages get
          traffic, where visitors come from, what content performs well. We do
          not currently run third-party analytics (e.g., Google Analytics) on
          this site. If we add analytics, this policy will be updated and
          consent will be requested per the applicable rules below.
        </p>

        <h3>Advertising / marketing</h3>
        <p>
          We do not run targeted advertising and do not set advertising cookies.
          We do not allow third parties to set advertising cookies through this
          site.
        </p>
      </section>

      <section>
        <h2>2. Third-party services that may set cookies</h2>
        <p>
          Some pages embed services from third parties whose privacy and cookie
          practices are governed by their own policies, not ours:
        </p>
        <ul>
          <li>
            <strong>Zeffy.</strong> Our donation form is embedded from Zeffy.
            When you open the donation modal, Zeffy may set cookies on its own
            domain to support the donation flow. See Zeffy&apos;s privacy and
            cookie policies for details.
          </li>
          <li>
            <strong>Vercel.</strong> Our hosting provider may set operational
            cookies for security, anti-abuse, and load balancing.
          </li>
        </ul>
        <p>
          We don&apos;t control cookies set by third parties through their
          embedded services. If you want to block them, see the browser controls
          in section 4.
        </p>
      </section>

      <section>
        <h2>3. Legal basis for setting cookies</h2>
        <p>
          For users in jurisdictions that require it (e.g., the EU, UK,
          California), we set non-essential cookies only with your consent where
          required, and you can withdraw that consent at any time. Strictly
          necessary cookies don&apos;t require consent because the site cannot
          function without them.
        </p>
      </section>

      <section>
        <h2>4. Controlling cookies</h2>
        <p>
          You can control cookies through your browser settings. Each browser
          has its own controls; the following links explain how:
        </p>
        <ul>
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/guide/safari/manage-cookies-sfri11471"
              target="_blank"
              rel="noopener noreferrer"
            >
              Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Edge
            </a>
          </li>
        </ul>
        <p>
          Note that disabling cookies may break parts of this site or any site
          you visit.
        </p>
      </section>

      <section>
        <h2>5. Do Not Track</h2>
        <p>
          We honor the Global Privacy Control (GPC) signal where applicable and
          treat browser-issued Do Not Track signals as a request not to set
          non-essential cookies for the user issuing them.
        </p>
      </section>

      <section>
        <h2>6. Changes to this policy</h2>
        <p>
          We&apos;ll update this policy as our cookie usage changes. The
          &ldquo;Last updated&rdquo; date at the top reflects the most recent
          change. For more on how we handle personal information, see our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </section>
    </LegalScreen>
  );
}
