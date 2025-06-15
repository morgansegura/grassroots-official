import { TypographyProps } from "@/components/ui/typography/typography.types";

type ContentProps = {
  id: string;
  __typename: string;
  as?: TypographyProps["as"];
  variant?: TypographyProps["variant"];
  size?: TypographyProps["size"];
  text?: string | TrustedHTML;
  label?: string;
  additionalClass?: string;
};

export interface ComingSoonScreenMockProps {
  content: ContentProps[];
}
