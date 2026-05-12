import { cn } from "@/lib/utils";

import "./donate-trust-strip.css";

type DonateTrustStripProps = {
  className?: string;
  ein?: string;
  candidProfileUrl?: string;
};

const DEFAULT_EIN = "35-2822183";
const DEFAULT_CANDID_URL = "https://app.candid.org/profile/15255438";

export function DonateTrustStrip({
  className,
  ein = DEFAULT_EIN,
  candidProfileUrl = DEFAULT_CANDID_URL,
}: DonateTrustStripProps) {
  const irsUrl = `https://apps.irs.gov/app/eos/details/?ein=${ein.replace("-", "")}`;
  const propublicaUrl = `https://projects.propublica.org/nonprofits/organizations/${ein.replace("-", "")}`;

  return (
    <section
      className={cn("donate-trust-strip", className)}
      aria-label="Trust and verification"
    >
      <div className="donate-trust-strip-inner contain">
        <p className="donate-trust-strip-heading">Listed with · Verified by</p>

        <ul className="donate-trust-strip-row" role="list">
          <li className="donate-trust-strip-item">
            <a
              href={candidProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="donate-trust-strip-link"
            >
              <span className="donate-trust-strip-label">
                Candid Platinum Seal of Transparency
              </span>
            </a>
          </li>
          <li className="donate-trust-strip-item">
            <a
              href={irsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="donate-trust-strip-link"
            >
              <span className="donate-trust-strip-label">
                IRS 501(c)(3) Verified
              </span>
            </a>
          </li>
          <li className="donate-trust-strip-item">
            <a
              href={propublicaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="donate-trust-strip-link"
            >
              <span className="donate-trust-strip-label">
                ProPublica Nonprofit Explorer
              </span>
            </a>
          </li>
          <li className="donate-trust-strip-item">
            <span className="donate-trust-strip-label donate-trust-strip-label-static">
              PayPal Giving Fund Recipient
            </span>
          </li>
        </ul>

        <p className="donate-trust-strip-disclosure">
          Grassroots Foundation is the registered DBA of Grass Roots Foundation,
          a 501(c)(3) public charity (EIN {ein}). 100% tax-deductible. All
          donations processed by Givebutter.
        </p>
      </div>
    </section>
  );
}
