import Link from "next/link";

import { cn } from "@/lib/utils";
import { Callout, CtaBanner, FaqSection } from "@/components/feature";
import { FaqSchema } from "@/components/seo";

import "./faq-screen.css";
import { Section } from "@/components/layout";

const FAQ_SCHEMA_ITEMS = [
  {
    question: "Where will my money go?",
    answer:
      "Directly toward a kid's season. We pay tuition, kit, equipment, and clinic costs to partner clubs on behalf of need-qualified families. We do not run parallel programs or operate facilities, so overhead stays low and most of every dollar reaches the field.",
  },
  {
    question: "How will you decide which kids to fund?",
    answer:
      "Need-based intake at partner clubs. Families verify income confidentially. There are no auditions and no merit gatekeeping. Scholarships are renewable each season so families plan multi-year participation.",
  },
  {
    question: "Can I direct my gift to a specific need?",
    answer:
      "Yes. We have five programs — Player Scholarships, Team Sponsorship, Kit & Uniform Grants, Equipment Grants, and Methodology Clinic Access. You can give to a specific program or to the general fund.",
  },
  {
    question: "What if I want to sponsor a whole team or age group?",
    answer:
      "Team Sponsorship underwrites an entire roster for a competitive season. Built for major-gift donors and family foundations at $25,000 and up, with recognition terms designed in conversation with the donor.",
  },
  {
    question: "Are donations tax-deductible?",
    answer:
      "Yes. Grassroots Foundation is a 501(c)(3) public charity (EIN 35-2822183). Contributions are tax-deductible to the extent allowed by law. A receipt is issued for every gift.",
  },
  {
    question: "How do I cancel a recurring (sustainer) gift?",
    answer:
      "You can cancel or modify a recurring gift any time from the link in your receipt email, or by emailing morgan@grassrootsfdn.org. No questions asked.",
  },
  {
    question: "Will you sell or share my information?",
    answer:
      "No. We do not sell, rent, or share donor lists. Recognition is opt-in only, and anonymous giving is honored on request.",
  },
  {
    question: "How do I know this is legit?",
    answer:
      "Verify us on the IRS Tax Exempt Organization Search and on ProPublica Nonprofit Explorer using EIN 35-2822183. We are listed on PayPal Giving Fund and Goodstack, and our Candid (GuideStar) listing is in progress.",
  },
  {
    question: "What is the Class of '26?",
    answer:
      "Class of '26 is our founding cohort: 100 funded scholarships across San Diego County by the start of the 2026 season. The first 25 are the founding-donor block, funded by donors who give before kickoff.",
  },
  {
    question: "Why San Diego County specifically?",
    answer:
      "San Diego is the founder's home market and a competitive youth-soccer region where the cost wall is most acute in South Bay communities. We prove the model in San Diego before expanding county-wide.",
  },
  {
    question: "Are you affiliated with any specific clubs?",
    answer:
      "We partner with established San Diego County club programs rather than running parallel programs. Funded kids stay in their existing team and developmental pathway.",
  },
  {
    question: "How will you protect the kids in your programs?",
    answer:
      "Every story we publish about a minor requires written parental consent. Families have full editorial control, can revoke or remove stories at any time, and may choose the level of identification (name and photo, first name only, or anonymous).",
  },
  {
    question: "How can I get involved if I can't donate right now?",
    answer:
      "Volunteer for event support, family intake assistance, or photo and story capture. Become a Partner Club. Spread the word in your network of San Diego soccer families. Every part matters.",
  },
];

type FaqScreenProps = {
  className?: string;
};

const HERO = {
  eyebrow: "FAQ",
  title: <>Common questions, honest answers.</>,
  description:
    "Donations, scholarships, partner clubs, transparency, and youth protection — what people most often want to know about how Grassroots Foundation works.",
};

const FAQ_ITEMS = [
  {
    question: "Where will my money go?",
    answer: (
      <>
        Directly toward a kid&apos;s season. We pay tuition, kit, equipment, and
        clinic costs to partner clubs on behalf of need-qualified families. We
        don&apos;t run parallel programs and we don&apos;t operate facilities,
        so the model keeps overhead low and most of every dollar reaches the
        field. We&apos;ll publish program-expense and fundraising-expense ratios
        as soon as our first audited 990 is filed.
      </>
    ),
  },
  {
    question: "How will you decide which kids to fund?",
    answer: (
      <>
        Need-based — no merit gates, no auditions. Partner clubs surface
        candidate families through their existing family-services intake;
        households verify income confidentially; decisions stay private to the
        family and the club. Scholarships renew each season as long as the kid
        stays on the roster. See <Link href="/apply">how to apply</Link> for the
        full pathway.
      </>
    ),
  },
  {
    question: "Can I direct my gift to a specific need?",
    answer: (
      <>
        Yes. Designate cleats, kit, tuition, or a clinic seat when you donate,
        or give to the general fund and let us deploy where the gap is largest.
        Each program — Player Scholarships, Team Sponsorship, Kit &amp; Uniform
        Grants, Equipment Grants, and Methodology Clinic Access — shows what
        your gift covers on the <Link href="/programs">programs page</Link>.
      </>
    ),
  },
  {
    question: "What if I want to sponsor a whole team or age group?",
    answer: (
      <>
        That&apos;s the plan. Our funding ladder runs from individual kids
        through full team sponsorships, then full competitive levels (DPL, MLS
        Next, ECNL), then full age groups across the region. For team-tier
        sponsorships, <Link href="/contact">reach out</Link> — we structure each
        commitment in conversation.
      </>
    ),
  },
  {
    question: "Are donations tax-deductible?",
    answer: (
      <>
        Yes. Grassroots Foundation is the registered DBA of Grass Roots
        Foundation, a 501(c)(3) public charity (EIN 35-2822183). Donations are
        tax-deductible to the extent allowed by law. We email tax-deductible
        receipts automatically after each gift. For donor-specific protections,
        see our <Link href="/donor-privacy">Donor Privacy Policy</Link>.
      </>
    ),
  },
  {
    question: "How do I cancel a recurring (sustainer) gift?",
    answer: (
      <>
        Anytime. Cancellation is effective immediately and prevents future
        charges. The fastest path is the donor portal in our donation platform;
        you can also <Link href="/contact">contact us</Link> directly. We
        don&apos;t push back on cancellations or ask why.
      </>
    ),
  },
  {
    question: "Will you sell or share my information?",
    answer: (
      <>
        No. We don&apos;t sell, rent, trade, or share donor information for any
        third party&apos;s marketing or fundraising. This applies to current
        donors, prospective donors, and anyone who has previously given. The
        full posture is in the{" "}
        <Link href="/donor-privacy">Donor Privacy Policy</Link>.
      </>
    ),
  },
  {
    question: "How do I know this is legit?",
    answer: (
      <>
        We&apos;re a registered 501(c)(3) public charity (EIN 35-2822183),
        listed in the IRS Tax-Exempt Organization Search and the{" "}
        <a
          href="https://projects.propublica.org/nonprofits/organizations/352822183"
          target="_blank"
          rel="noopener noreferrer"
        >
          ProPublica Nonprofit Explorer
        </a>
        . Our first IRS Form 990 will be filed for the fiscal year ending June
        30, 2027 and published unredacted at <Link href="/990">/990</Link> the
        day it&apos;s filed. We&apos;re also working through Candid&apos;s
        transparency tiers (Bronze → Platinum).
      </>
    ),
  },
  {
    question: "What is the Class of '26?",
    answer: (
      <>
        Our founding cohort: 100 youth players in San Diego County kept in
        competitive soccer through the 2026&ndash;27 season, regardless of what
        their family can afford. Founding donors fund the first names on that
        roster. The cohort begins fall 2026.
      </>
    ),
  },
  {
    question: "Why San Diego County specifically?",
    answer: (
      <>
        Because that&apos;s where the cost reality is firsthand for the founding
        team and where the partner-club relationships are established. The South
        Bay communities — Chula Vista, National City, San Ysidro, Imperial Beach
        — are some of the most concentrated working-class soccer-loving
        households in the country. We&apos;ll prove the model where the cost
        barrier is most acute, then expand from there.
      </>
    ),
  },
  {
    question: "Are you affiliated with any specific clubs?",
    answer: (
      <>
        We work with partner clubs across San Diego County, but we don&apos;t
        name them publicly without their explicit written permission.
        That&apos;s intentional — we exist to serve kids, not to drive
        enrollment to any one club. See{" "}
        <Link href="/partner">become a partner club</Link> if you&apos;re a club
        program interested in working with us.
      </>
    ),
  },
  {
    question: "How will you protect the kids in your programs?",
    answer: (
      <>
        Every adult in our programs follows two-deep, observable, interruptible
        protocols, completes a background check, and completes youth-protection
        training. We never publish a minor&apos;s name, image, or quote without
        written parental consent for that specific use, and consent can be
        withdrawn at any time. The full posture is on the{" "}
        <Link href="/safeguarding">Youth Safeguarding</Link> page.
      </>
    ),
  },
  {
    question: "How can I get involved if I can't donate right now?",
    answer: (
      <>
        Volunteer your skills (legal, accounting, photography, writing, web),
        spread the word to families who might qualify for scholarships, or
        connect us with a partner-club opportunity. The{" "}
        <Link href="/volunteer">volunteer page</Link> lists what we need most
        right now.
      </>
    ),
  },
];

export function FaqScreen({ className }: FaqScreenProps) {
  return (
    <main className={cn("faq-screen", className)}>
      <FaqSchema items={FAQ_SCHEMA_ITEMS} />
      <Callout {...HERO} className="hero-extended" />

      <FaqSection
        eyebrow="Donor, family, transparency, and safeguarding"
        heading="Everything we get asked, in one place."
        items={FAQ_ITEMS}
      />

      <Section size="flush" tone="light">
        <CtaBanner
          tone="dark"
          eyebrow="Still have a question?"
          heading="Ask us directly."
          body="Email is the fastest way to reach us. Donor questions and partner-club inquiries get a response within two business days; press inquiries within one."
          cta={{ label: "Contact us", href: "/contact" }}
          tiers={[]}
        />
      </Section>
    </main>
  );
}
