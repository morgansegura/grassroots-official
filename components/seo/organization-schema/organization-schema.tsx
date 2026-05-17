import { JsonLd } from "../json-ld";
import { SITE } from "@/lib/seo";

/**
 * Organization schema — 2026 best practices.
 *
 * Uses NonprofitOrganization (subtype of Organization) for 501(c)(3) work.
 * Includes founder Person schema, contactPoint, parentOrganization
 * (legal DBA relationship), areaServed, and granular knowsAbout entities.
 *
 * Refs:
 *  - https://schema.org/NonprofitOrganization
 *  - https://developers.google.com/search/docs/appearance/structured-data/organization
 */
export function OrganizationSchema() {
  const data = {
    "@type": "NonprofitOrganization",
    "@id": `${SITE.url}#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    alternateName: [SITE.legalName, "GRSF", "Grass Roots Foundation"],
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: SITE.logo,
      width: 512,
      height: 512,
    },
    image: SITE.ogImage,
    description: SITE.description,
    slogan: SITE.tagline,
    email: SITE.email,
    foundingDate: `${SITE.founded}`,
    taxID: SITE.ein,
    naics: "813219", // NAICS: Other Grantmaking and Giving Services
    nonprofitStatus: "Nonprofit501c3",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: SITE.state,
      addressCountry: SITE.country,
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: SITE.serviceArea,
      },
      {
        "@type": "City",
        name: "San Diego",
        containedInPlace: {
          "@type": "State",
          name: "California",
        },
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "general",
      email: SITE.email,
      availableLanguage: ["English", "Spanish"],
    },
    founder: [
      {
        "@type": "Person",
        name: "Morgan Segura",
        jobTitle: "Founder & President",
        worksFor: { "@id": `${SITE.url}#organization` },
      },
      {
        "@type": "Person",
        name: "Mirella Hinojosa",
        jobTitle: "Founder & Secretary",
        worksFor: { "@id": `${SITE.url}#organization` },
      },
    ],
    knowsAbout: [
      "Youth soccer",
      "Pay-to-play",
      "Club soccer scholarships",
      "Equipment grants",
      "Methodology training clinics",
      "San Diego County youth sports",
      "Need-based access programs",
      "Class of 2026",
      "World Cup 2026",
      "South Bay San Diego",
      "Southeast San Diego",
      "East County San Diego",
      "Chula Vista youth soccer",
      "National City youth soccer",
      "ECNL",
      "MLS Next",
      "Girls Academy",
      "Working-class family access",
    ],
    knowsLanguage: ["en-US", "es"],
    sameAs: SITE.sameAs,
  };

  return <JsonLd data={data} />;
}

export function WebsiteSchema() {
  const data = {
    "@type": "WebSite",
    "@id": `${SITE.url}#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.shortDescription,
    publisher: { "@id": `${SITE.url}#organization` },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return <JsonLd data={data} />;
}
