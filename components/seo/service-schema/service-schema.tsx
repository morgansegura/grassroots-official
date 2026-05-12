import { JsonLd } from "../json-ld";
import { SITE } from "@/lib/seo";

type ServiceSchemaProps = {
  name: string;
  description: string;
  serviceType?: string;
  url?: string;
};

export function ServiceSchema({
  name,
  description,
  serviceType,
  url,
}: ServiceSchemaProps) {
  const data = {
    "@type": "Service",
    name,
    description,
    serviceType: serviceType ?? "Youth soccer scholarship",
    url: url ?? SITE.url,
    provider: { "@id": `${SITE.url}#organization` },
    areaServed: {
      "@type": "AdministrativeArea",
      name: SITE.serviceArea,
    },
    audience: {
      "@type": "Audience",
      audienceType:
        "Need-qualified youth soccer players ages 8–19 in San Diego County",
    },
  };

  return <JsonLd data={data} />;
}

type ServiceListSchemaProps = {
  services: Array<{ name: string; description: string; url?: string }>;
};

export function ServiceListSchema({ services }: ServiceListSchemaProps) {
  const data = {
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: service.url ?? SITE.url,
        provider: { "@id": `${SITE.url}#organization` },
        areaServed: {
          "@type": "AdministrativeArea",
          name: SITE.serviceArea,
        },
      },
    })),
  };

  return <JsonLd data={data} />;
}
