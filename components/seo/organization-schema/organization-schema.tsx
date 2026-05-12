import { JsonLd } from "../json-ld";
import { SITE } from "@/lib/seo";

export function OrganizationSchema() {
  const data = {
    "@type": "NonprofitOrganization",
    "@id": `${SITE.url}#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    alternateName: SITE.legalName,
    url: SITE.url,
    logo: SITE.logo,
    image: SITE.logo,
    description: SITE.description,
    slogan: SITE.tagline,
    email: SITE.email,
    foundingDate: `${SITE.founded}`,
    taxID: SITE.ein,
    nonprofitStatus: "Nonprofit501c3",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: SITE.state,
      addressCountry: SITE.country,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: SITE.serviceArea,
    },
    knowsAbout: [
      "Youth soccer",
      "Pay-to-play",
      "Club soccer scholarships",
      "Equipment grants",
      "Methodology training clinics",
      "San Diego County youth sports",
      "Need-based access programs",
    ],
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
  };

  return <JsonLd data={data} />;
}
