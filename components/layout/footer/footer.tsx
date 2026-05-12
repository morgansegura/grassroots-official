"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { Logo } from "@/components/layout";
import { CookiePreferencesTrigger } from "@/components/cookie-consent";

import "./footer.css";

type FooterColumn = {
  heading: string;
  links: { label: string; href: string }[];
};

const COLUMNS: FooterColumn[] = [
  {
    heading: "Mission",
    links: [
      { label: "Our Mission", href: "/mission" },
      { label: "Our Story", href: "/story" },
      { label: "Stories", href: "/stories" },
      { label: "Press", href: "/press" },
    ],
  },
  {
    heading: "Programs",
    links: [
      { label: "Scholarships", href: "/programs#scholarships" },
      { label: "Pop-Up Clinics", href: "/programs#clinics" },
      { label: "Apply for a Scholarship", href: "/apply" },
      { label: "Become a Partner Club", href: "/partner" },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { label: "Donate", href: "/donate" },
      { label: "Become a Sustainer", href: "/donate#sustainer" },
      { label: "Sponsor a Clinic", href: "/sponsor" },
      { label: "Volunteer", href: "/volunteer" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "Form 990 & financials", href: "/990" },
      { label: "Blog", href: "/blog" },
    ],
  },
];

const LEGAL_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Donor privacy", href: "/donor-privacy" },
  { label: "Cookies", href: "/cookies" },
  { label: "Terms", href: "/terms" },
  { label: "Youth safeguarding", href: "/safeguarding" },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/grassrootsfdn",
    icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Grass-Roots-Foundation/61566761322907/",
    icon: FacebookIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/grass-roots-foundation",
    icon: LinkedInIcon,
  },
  { label: "X / Twitter", href: "https://x.com/grassroots_fdn", icon: XIcon },
];

type FooterProps = {
  className?: string;
};

export function Footer({ className }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={cn("footer", className)}>
      <div className="footer-container">
        <div className="contain">
          <div className="footer-top">
            <div className="footer-brand">
              <Link
                href="/"
                className="footer-brand-link"
                aria-label="Grassroots Foundation home"
              >
                <Logo />
              </Link>
              <div>
                <p className="footer-brand-tagline">Access, the Goal!</p>
                <p className="footer-brand-location">
                  San Diego County · 501(c)(3) Public Charity
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="contain">
          <div className="footer-columns">
            {COLUMNS.map((column) => (
              <div key={column.heading} className="footer-column">
                <h3 className="footer-column-heading">
                  <span>{column.heading}</span>
                </h3>
                <ul className="footer-column-links">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="footer-column-link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="contain">
          <ul className="footer-legal-row" aria-label="Legal">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer-legal-link">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <CookiePreferencesTrigger className="footer-legal-link" />
            </li>
          </ul>
        </div>

        <div className="contain">
          <div className="footer-bottom">
            <div className="footer-bottom-legal">
              <p className="footer-disclosure">
                Grassroots Foundation is the registered DBA of Grass Roots
                Foundation, a 501(c)(3) public charity. EIN 35-2822183.
                Contributions are tax-deductible to the extent allowed by law.
              </p>
              <p className="footer-copyright">
                © {year} Grass Roots Foundation. All rights reserved.
              </p>
            </div>

            <ul className="footer-social" aria-label="Social media">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="footer-social-link"
                    aria-label={label}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon className="footer-social-icon" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
