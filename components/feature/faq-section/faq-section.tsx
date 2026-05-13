import { cn } from "@/lib/utils";

import { Eyebrow } from "@/components/ui/eyebrow";

import "./faq-section.css";
import Link from "next/link";
import { Heading } from "@/components/ui";

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

type FaqImage = {
  src: string;
  alt: string;
};

export type FaqSectionProps = {
  className?: string;
  eyebrow?: string;
  heading?: string;
  items?: FaqItem[];
  images?: [FaqImage, FaqImage, FaqImage];
};

const DEFAULT_IMAGES: [FaqImage, FaqImage, FaqImage] = [
  {
    src: "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=900&q=80",
    alt: "Two young soccer players on a San Diego pitch",
  },
  {
    src: "https://images.unsplash.com/photo-1577741314755-048d8525d31e?auto=format&fit=crop&w=900&q=80",
    alt: "Cleats and ball at the touchline",
  },
  {
    src: "https://images.unsplash.com/photo-1517747614396-d21a78b850e8?auto=format&fit=crop&w=900&q=80",
    alt: "Youth team huddled before a match",
  },
];

const DEFAULT_ITEMS: FaqItem[] = [
  {
    question: "Where does the money go?",
    answer: (
      <>
        Directly to a kid playing soccer. We cover whatever the cost barrier is
        — club fees, travel, uniforms, cleats, gear, training, clinic spots — at
        partner clubs across San Diego County. Every gift is tied to a kid in
        our Class of &apos;26 cohort, so you see exactly where it lands as the
        roster fills.
      </>
    ),
  },
  {
    question: "How do you decide which kids to fund?",
    answer: (
      <>
        Need-based. No merit gatekeeping, no auditions. We work with partner
        clubs to identify families whose financial situation means a kid would
        otherwise step away from the game. Households verify income; the intake
        process is straightforward and stays private.
      </>
    ),
  },
  {
    question: "Can I cover specific things — cleats, kit, a single season?",
    answer: (
      <>
        Yes. We fund the full range — from a $60 pair of cleats to a $5,000–
        $11,000 full season. Give to the general fund or sponsor a specific
        named campaign. Each campaign shows what your gift covers.
      </>
    ),
  },
  {
    question: "What if I want to sponsor a whole team or age group?",
    answer: (
      <>
        That&apos;s the plan. Our funding ladder runs from individual kids up
        through full team sponsorships, then full levels (DPL, MLS Next, ECNL),
        then full age groups across the region. Reach out — we&apos;ll structure
        a campaign to your gift.
      </>
    ),
  },
  {
    question: "How do I know this is legit?",
    answer: (
      <>
        Grassroots Foundation is a registered DBA of Grass Roots Foundation, a
        501(c)(3) public charity (EIN 35-2822183). We&apos;re listed in the IRS
        Tax-Exempt Organization database, the{" "}
        <Link
          href="https://projects.propublica.org/nonprofits/organizations/352822183"
          target="_blank"
        >
          ProPublica Nonprofit Explorer
        </Link>
        , and hold the Candid Platinum Seal of Transparency. We&apos;ll publish
        our 990 the day it&apos;s filed.
      </>
    ),
  },
];

export function FaqSection({
  className,
  eyebrow = "Common questions, honest answers",
  heading = "How donations work, who we fund, and how to be sure we're legit.",
  items = DEFAULT_ITEMS,
  images = DEFAULT_IMAGES,
}: FaqSectionProps) {
  return (
    <section className={cn("faq-section ", className)} aria-label="FAQ">
      <div className="faq-section-inner contain">
        <header className="faq-section-header">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading as="h2" className="faq-section-heading">
            {heading}
          </Heading>
        </header>

        <div className="faq-section-grid ">
          <div className="faq-section-images" aria-hidden="true">
            <figure className="faq-section-image faq-section-image-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={images[0].src} alt={images[0].alt} />
            </figure>
            <figure className="faq-section-image faq-section-image-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={images[1].src} alt={images[1].alt} />
            </figure>
            <figure className="faq-section-image faq-section-image-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={images[2].src} alt={images[2].alt} />
            </figure>
          </div>

          <div className="faq-section-accordion">
            {items.map((item, index) => (
              <details
                key={index}
                name="faq-section"
                className="faq-section-item"
              >
                <summary className="faq-section-question">
                  <span className="faq-section-question-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="faq-section-question-text">
                    {item.question}
                  </span>
                  <span
                    className="faq-section-question-mark"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <div className="faq-section-answer">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
