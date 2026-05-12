type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  const json = Array.isArray(data) ? data.map(withContext) : withContext(data);

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

function withContext(node: Record<string, unknown>): Record<string, unknown> {
  if (node["@context"]) return node;
  return { "@context": "https://schema.org", ...node };
}
