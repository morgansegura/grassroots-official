import { cn } from "@/lib/utils";

import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionCta } from "@/components/ui/section-cta";

import { ParallaxImage } from "./parallax-image";
import "./media-section.css";
import { Heading } from "@/components/ui";

type MediaAspect = "1/1" | "4/3" | "3/2" | "4/5" | "16/9" | "flush";

/**
 * Layout modes:
 * - "split"   — text and image in a 2-column grid (default).
 * - "bg-half" — image fills one column edge-to-edge as a background; text fills the other.
 * - "bg-full" — image fills the entire section as a background; text overlays a gradient.
 */
type MediaLayout = "split" | "bg-half" | "bg-full";

export type MediaSectionProps = {
  className?: string;
  eyebrow?: string;
  heading: string;
  body?: React.ReactNode;
  media: {
    src: string;
    alt: string;
    aspect?: MediaAspect;
  };
  mediaPosition?: "left" | "right";
  mediaCaption?: string;
  cta?: { label: string; href: string };
  align?: "start" | "center";
  layout?: MediaLayout;
  parallax?: boolean;
};

export function MediaSection({
  className,
  eyebrow,
  heading,
  body,
  media,
  mediaPosition = "right",
  mediaCaption,
  cta,
  align = "start",
  layout = "split",
  parallax = false,
}: MediaSectionProps) {
  return (
    <div
      className={cn("media-section", className)}
      data-media-position={mediaPosition}
      data-align={align}
      data-aspect={media.aspect ?? "4/3"}
      data-layout={layout}
      data-parallax={parallax || undefined}
    >
      <div className="media-section-text">
        <div>
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <Heading as="h2" className="media-section-heading">
            {heading}
          </Heading>
        </div>

        {body ? <div className="media-section-body">{body}</div> : null}

        {cta ? <SectionCta href={cta.href}>{cta.label}</SectionCta> : null}
      </div>

      <figure
        className="media-section-figure"
        style={{ backgroundImage: `url(${media.src})}` }}
      >
        {parallax ? (
          <ParallaxImage src={media.src} alt={media.alt} />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={media.src} alt={media.alt} />
        )}
        {mediaCaption ? (
          <figcaption className="media-section-figure-caption">
            {mediaCaption}
          </figcaption>
        ) : null}
      </figure>
    </div>
  );
}
