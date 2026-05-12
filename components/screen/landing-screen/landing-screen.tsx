import { Fragment } from "react";

import { cn } from "@/lib/utils";

import { Section } from "@/components/layout/section";
import {
  CampaignsGrid,
  CardGrid,
  CtaBanner,
  FaqSection,
  HeroCarousel,
  ImpactStats,
  MediaSection,
  MissionGrid,
} from "@/components/feature";

import {
  LANDING_SCREEN_MOCK,
  type LandingScreenSection,
} from "@/data/mocks/landing-screen.mock";

import "./landing-screen.css";

type LandingScreenProps = {
  className?: string;
};

export function LandingScreen({ className }: LandingScreenProps) {
  return (
    <main className={cn("landing-screen", className)}>
      {LANDING_SCREEN_MOCK.map((entry, i) => (
        <Fragment key={i}>{renderEntry(entry)}</Fragment>
      ))}
    </main>
  );
}

/**
 * Every feature is wrapped in a <Section>. Non-negotiable. Features that
 * manage their own outer chrome opt out of Section's padding/container by
 * setting `size: "flush"` and `contain: false` in the mock.
 */
function renderEntry(entry: LandingScreenSection) {
  const feature = renderFeature(entry);
  if (!feature) return null;

  return (
    <Section
      size={entry.size}
      tone={entry.tone}
      className={entry.className}
      ariaLabel={entry.ariaLabel}
      id={entry.id}
      contain={entry.contain}
      eyebrow={entry.eyebrow}
      heading={entry.heading}
      description={entry.description}
      cta={entry.cta}
    >
      {feature}
    </Section>
  );
}

function renderFeature(entry: LandingScreenSection): React.ReactNode {
  if ("hero-carousel" in entry)
    return <HeroCarousel {...entry["hero-carousel"]} />;
  if ("card-grid" in entry) return <CardGrid {...entry["card-grid"]} />;
  if ("impact-stats" in entry)
    return <ImpactStats {...entry["impact-stats"]} />;
  if ("media-section" in entry)
    return <MediaSection {...entry["media-section"]} />;
  if ("mission-grid" in entry)
    return <MissionGrid {...entry["mission-grid"]} />;
  if ("campaigns-grid" in entry)
    return <CampaignsGrid {...entry["campaigns-grid"]} />;
  if ("faq-section" in entry) return <FaqSection {...entry["faq-section"]} />;
  if ("cta-banner" in entry) return <CtaBanner {...entry["cta-banner"]} />;
  return null;
}
