"use client";

import * as React from "react";
import Link from "next/link";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";

import { cn } from "@/lib/utils";

import "./hero-carousel.css";
import { MoveRight } from "lucide-react";
import { Eyebrow, Heading } from "@/components/ui";

export type HeroSlide = {
  id: string;
  image: { src: string; alt: string };
  eyebrow?: string;
  heading: string;
  tagline?: string;
  cta?: { label: string; href: string };
};

export type HeroCarouselProps = {
  className?: string;
  slides?: HeroSlide[];
  autoPlayDelay?: number;
};

const DEFAULT_SLIDES: HeroSlide[] = [
  {
    id: "vision",
    image: {
      src: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?auto=format&fit=crop&w=2400&q=80",
      alt: "Young player controlling the ball on the pitch",
    },
    eyebrow: "San Diego, CA",
    heading: "Free\nthe game.",
    tagline:
      "Soccer should be free for every kid. We close the cost barrier that prices working-class families out of competitive youth soccer in San Diego County.",
    cta: { label: "Become a founding donor", href: "/donate" },
  },
  {
    id: "road-to-2026",
    image: {
      src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=2400&q=80",
      alt: "Youth soccer team huddled on the field",
    },
    eyebrow: "The Road to 2026",
    heading: "Roster of 100\nby World Cup 2026.",
    tagline:
      "We're funding 100 youth scholarships before the World Cup comes home. Be part of it.",
    cta: { label: "Read our mission", href: "/mission" },
  },
  {
    id: "what-we-fund",
    image: {
      src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=2400&q=80",
      alt: "Soccer ball on a grass field",
    },
    eyebrow: "What we fund",
    heading: "Tuition. Clinics. Kits.",
    tagline:
      "Real scholarships, real coaches, real fields — built so every kid can step on the pitch.",
    cta: { label: "See programs", href: "/programs" },
  },
];

export function HeroCarousel({
  className,
  slides = DEFAULT_SLIDES,
  autoPlayDelay = 6500,
}: HeroCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Fade()]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  const scrollTo = React.useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi || !autoPlayDelay || slides.length < 2) return;
    const interval = setInterval(() => {
      if (!isPaused) emblaApi.scrollNext();
    }, autoPlayDelay);
    return () => clearInterval(interval);
  }, [emblaApi, autoPlayDelay, isPaused, slides.length]);

  return (
    <section
      className={cn("hero-carousel", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
    >
      <div ref={emblaRef} className="hero-carousel-viewport">
        <div className="hero-carousel-track">
          {slides.map((slide, index) => (
            <Slide
              key={slide.id}
              slide={slide}
              index={index}
              selectedIndex={selectedIndex}
            />
          ))}
        </div>
      </div>

      <div className="hero-carousel-masthead" aria-hidden="true">
        <span>San Diego County</span>
        <span className="hero-carousel-masthead-rule" />
        <span>501(c)(3) Public Charity</span>
      </div>

      {slides.length > 1 ? (
        <div
          className="hero-carousel-indicator"
          role="tablist"
          aria-label="Slide navigation"
        >
          <div className="hero-carousel-indicator-track">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={index === selectedIndex}
                aria-label={`Go to slide ${index + 1} — ${slide.eyebrow ?? slide.heading}`}
                onClick={() => scrollTo(index)}
                data-active={index === selectedIndex}
                className="hero-carousel-indicator-dot"
              >
                <span className="hero-carousel-indicator-fill" />
              </button>
            ))}
          </div>
          <span className="hero-carousel-indicator-count">
            {String(selectedIndex + 1).padStart(2, "0")}
            <span className="hero-carousel-indicator-slash">/</span>
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      ) : null}
    </section>
  );
}

type SlideProps = {
  slide: HeroSlide;
  index: number;
  selectedIndex: number;
};

function Slide({ slide, index, selectedIndex }: SlideProps) {
  const isActive = index === selectedIndex;
  const lines = slide.heading.split("\n");

  return (
    <div
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} of slides`}
      aria-hidden={!isActive}
      data-active={isActive}
      className={cn(
        "hero-carousel-slide",
        isActive
          ? "hero-carousel-slide-active"
          : "hero-carousel-slide-inactive",
      )}
      style={{ backgroundImage: `url(${slide.image.src})` }}
    >
      <div className="hero-carousel-slide-overlay" aria-hidden="true" />
      <div className="hero-carousel-slide-content">
        <div className="hero-carousel-slide-content-inner">
          <div>
            {slide.eyebrow ? (
              <Eyebrow>
                <span className="hero-carousel-slide-eyebrow-text">
                  {slide.eyebrow}
                </span>
              </Eyebrow>
            ) : null}

            <Heading size="3xl" className="hero-carousel-slide-heading">
              {lines.map((line, i) => (
                <span key={i} className="hero-carousel-slide-heading-line">
                  {line}
                </span>
              ))}
            </Heading>
          </div>

          {slide.tagline ? (
            <p className="hero-carousel-slide-tagline">{slide.tagline}</p>
          ) : null}

          {slide.cta ? (
            <Link href={slide.cta.href} className="hero-carousel-slide-cta">
              <span>{slide.cta.label}</span>
              <span
                className="hero-carousel-slide-cta-arrow"
                aria-hidden="true"
              >
                <MoveRight />
              </span>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
