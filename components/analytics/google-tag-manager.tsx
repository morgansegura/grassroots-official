import Script from "next/script";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

/**
 * Google Tag Manager container.
 *
 * Inert until `NEXT_PUBLIC_GTM_ID` is set, so the site builds and runs
 * unchanged without a container.
 *
 * Must render AFTER `<ConsentDefaults />` in the tree. ConsentDefaults sits
 * in `<head>` and this sits at the top of `<body>`; both use
 * `afterInteractive`, which Next executes in order of placement. That
 * ordering is what lets Consent Mode v2 hold tag firing (`wait_for_update`)
 * until the cookie banner resolves.
 *
 * The container itself always loads — it is Consent Mode, not the container,
 * that gates whether tags fire. Blocking the container outright would also
 * block the consent signals Google uses for conversion modeling.
 */
export function GoogleTagManager() {
  if (!GTM_ID) return null;

  return (
    <>
      <Script
        id="gtm-container"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
`,
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="Google Tag Manager"
        />
      </noscript>
    </>
  );
}
