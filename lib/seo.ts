export const SITE = {
  name: "Grassroots Foundation",
  legalName: "Grass Roots Foundation",
  url: "https://grassrootsfdn.org",
  description:
    "Grassroots Foundation removes the cost wall that prices working-class kids out of competitive youth soccer in San Diego County. Need-based scholarships, kit and equipment grants, and reserved seats at training clinics — at established partner clubs.",
  shortDescription:
    "San Diego youth-soccer scholarship nonprofit. Closing the pay-to-play cost wall.",
  tagline: "Access, the Goal!",
  email: "morgan@grassrootsfdn.org",
  ein: "35-2822183",
  founded: 2025,
  region: "San Diego County, California, United States",
  city: "San Diego",
  state: "CA",
  country: "US",
  serviceArea: "San Diego County",
  logo: `https://grassrootsfdn.org/media/brand/logo.png`,
  ogImage: `https://grassrootsfdn.org/media/brand/og-default.jpg`,
  sameAs: [
    "https://www.instagram.com/grassrootsfdn",
    "https://www.facebook.com/people/Grass-Roots-Foundation/61566761322907/",
    "https://www.linkedin.com/company/grass-roots-foundation",
    "https://x.com/grassroots_fdn",
    "https://projects.propublica.org/nonprofits/organizations/352822183",
  ],
  twitter: "@grassroots_fdn",
} as const;

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageTitle(title?: string): string {
  if (!title) return `${SITE.name} — ${SITE.tagline}`;
  return `${title} — ${SITE.name}`;
}

import type { Metadata } from "next";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  ogImage,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const image = ogImage ?? SITE.ogImage;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      title,
      description,
      url,
      locale: "en_US",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: SITE.twitter,
      creator: SITE.twitter,
      images: [image],
    },
  };
}
