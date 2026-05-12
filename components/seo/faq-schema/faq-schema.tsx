import { JsonLd } from "../json-ld";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSchemaProps = {
  items: FaqItem[];
};

export function FaqSchema({ items }: FaqSchemaProps) {
  const data = {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return <JsonLd data={data} />;
}
