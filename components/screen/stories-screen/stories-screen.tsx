import { Fragment } from "react";

import { cn } from "@/lib/utils";

import { Section } from "@/components/layout/section";
import {
  Callout,
  CardGrid,
  CtaBanner,
  MediaSection,
} from "@/components/feature";

import {
  STORIES_SCREEN_MOCK,
  type StoriesScreenSection,
} from "@/data/mocks/stories-screen.mock";

import "./stories-screen.css";

type StoriesScreenProps = {
  className?: string;
};

export function StoriesScreen({ className }: StoriesScreenProps) {
  return (
    <main className={cn("stories-screen", className)}>
      {STORIES_SCREEN_MOCK.map((entry, i) => (
        <Fragment key={i}>{renderEntry(entry)}</Fragment>
      ))}
    </main>
  );
}

function renderEntry(entry: StoriesScreenSection) {
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

function renderFeature(entry: StoriesScreenSection): React.ReactNode {
  if ("callout" in entry) return <Callout {...entry.callout} />;
  if ("card-grid" in entry) return <CardGrid {...entry["card-grid"]} />;
  if ("media-section" in entry)
    return <MediaSection {...entry["media-section"]} />;
  if ("cta-banner" in entry) return <CtaBanner {...entry["cta-banner"]} />;
  return null;
}
