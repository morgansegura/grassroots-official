import { cn } from "@/lib/utils";
import { fontAlternate, fontBase, fontHeading } from "@/fonts";

import { Footer, Header } from "@/components/layout";
import {
  ConsentDefaults,
  GoogleTagManager,
  InteractionTracker,
  MicrosoftClarity,
} from "@/components/analytics";
import { CookieConsentProvider } from "@/components/cookie-consent";
import { OrganizationSchema, WebsiteSchema } from "@/components/seo";

import "./wrapper-screen.css";

// Production only, like GTM, so preview deploys don't record into the real project.
const CLARITY_ID =
  process.env.VERCEL_ENV === "production"
    ? process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID
    : undefined;

type WrapperScreenProps = {
  children?: React.ReactNode;
};

export function WrapperScreen({ children }: WrapperScreenProps) {
  return (
    <html
      lang="en"
      className={cn(
        `${fontBase.variable} ${fontHeading.variable} ${fontAlternate.variable} wrapper-screen`,
      )}
    >
      <head>
        <ConsentDefaults />
      </head>
      <body className="wrapper-body">
        <GoogleTagManager />
        <InteractionTracker />
        <OrganizationSchema />
        <WebsiteSchema />
        <CookieConsentProvider>
          <MicrosoftClarity projectId={CLARITY_ID} />
          <Header />
          {children}
          <Footer />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
