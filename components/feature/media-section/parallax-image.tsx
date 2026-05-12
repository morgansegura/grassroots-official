"use client";

import { useEffect, useRef } from "react";

type ParallaxImageProps = {
  src: string;
  alt: string;
  strength?: number;
};

export function ParallaxImage({ src, alt, strength = 25 }: ParallaxImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    const figure = img?.parentElement;
    if (!img || !figure) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId = 0;
    let visible = false;

    const update = () => {
      const rect = figure.getBoundingClientRect();
      const vh = window.innerHeight;
      const center = rect.top + rect.height / 2;
      const progress = (center - vh / 2) / (vh / 2 + rect.height / 2);
      const clamped = Math.max(-1, Math.min(1, progress));
      img.style.translate = `0 ${-clamped * strength}%`;
    };

    const onScroll = () => {
      if (!visible) return;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) visible = entry.isIntersecting;
        if (visible) update();
      },
      { threshold: 0 },
    );
    io.observe(figure);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [strength]);

  // eslint-disable-next-line @next/next/no-img-element
  return <img ref={imgRef} src={src} alt={alt} />;
}
