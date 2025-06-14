import { CommonProps } from "@/types/common.types";
import type { ElementType, ReactNode } from "react";

type TypographyType = "heading" | "body" | "label" | "caption" | "button";
type TypographySize = "xs" | "sm" | "base" | "lg" | "xl";
type TypographyTransform = "uppercase" | "lowercase" | "captilize";

export interface TypographyProps extends CommonProps {
  as?: ElementType;
  align?: "left" | "center" | "right";
  children: ReactNode;
  className?: string;
  size?: TypographySize;
  transform?: TypographyTransform;
  type?: TypographyType;
}
