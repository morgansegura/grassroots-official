import Link from "next/link";

import { Section } from "@/components/layout";
import { Callout } from "@/components/feature";

import "./not-found.css";

export default function NotFound() {
  return (
    <main className="not-found">
      <Section size="flush" contain={false} ariaLabel="Page not found">
        <Callout
          className="hero-extended"
          eyebrow="404 — page not found"
          title={<>This page didn&apos;t make the roster.</>}
          description={
            <>
              The page you&apos;re looking for isn&apos;t here. It may have
              moved, been renamed, or never existed. Try the homepage, the
              mission page, or head straight to giving.
            </>
          }
        >
          <div className="not-found-actions">
            <Link href="/" className="not-found-action">
              Back to home
            </Link>
            <Link href="/mission" className="not-found-action-secondary">
              Read the mission
            </Link>
            <Link href="/donate" className="not-found-action-secondary">
              Become a founding donor
            </Link>
          </div>
        </Callout>
      </Section>
    </main>
  );
}
