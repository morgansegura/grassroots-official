import { JsonLd } from "../json-ld";
import { SITE } from "@/lib/seo";

type ArticleSchemaProps = {
  title: string;
  description: string;
  slug: string;
  datePublished?: string;
  dateModified?: string;
};

export function ArticleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
}: ArticleSchemaProps) {
  const url = `${SITE.url}/blog/${slug}`;

  const data = [
    {
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
      headline: title,
      description,
      url,
      datePublished: datePublished ?? undefined,
      dateModified: dateModified ?? datePublished ?? undefined,
      author: { "@id": `${SITE.url}#organization` },
      publisher: { "@id": `${SITE.url}#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${SITE.url}/blog`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: title,
          item: url,
        },
      ],
    },
  ];

  return <JsonLd data={data} />;
}
