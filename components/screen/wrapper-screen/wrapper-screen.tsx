import { cn } from "@/lib/utils";
import { fontAlternate, fontBase, fontHeading } from "@/fonts";

import { Footer, Header } from "@/components/layout";
import { ConsentDefaults, GoogleTagManager } from "@/components/analytics";
import { CookieConsentProvider } from "@/components/cookie-consent";
import { OrganizationSchema, WebsiteSchema } from "@/components/seo";

import "./wrapper-screen.css";

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
        <OrganizationSchema />
        <WebsiteSchema />
        <CookieConsentProvider>
          <Header />
          {children}
          <Footer />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
