"use client";

import * as React from "react";
import Link from "next/link";

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
    id: "after-the-cup",
    image: {
      src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=2400&q=80",
      alt: "Youth soccer team huddled on the field",
    },
    eyebrow: "After the Cup",
    heading: "The World Cup came home.\nMost kids still can't afford to play.",
    tagline:
      "The Cup left in July. The cost wall didn't. The season starts this fall, and we're building a roster of 100.",
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
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  const scrollTo = React.useCallback(
    (index: number) => {
      setSelectedIndex(
        ((index % slides.length) + slides.length) % slides.length,
      );
    },
    [slides.length],
  );

  React.useEffect(() => {
    if (!autoPlayDelay || slides.length < 2) return;
    const interval = setInterval(() => {
      if (!isPaused) {
        setSelectedIndex((prev) => (prev + 1) % slides.length);
      }
    }, autoPlayDelay);
    return () => clearInterval(interval);
  }, [autoPlayDelay, isPaused, slides.length]);

  return (
    <section
      className={cn("hero-carousel", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
    >
      <div className="hero-carousel-viewport">
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
