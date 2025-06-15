import type { CommonProps } from "@/types/common.types";

export interface LogoProps extends CommonProps {
  size?: "sm" | "base" | "lg";
  variant?: "acronym" | "icon" | "text-stack" | "text";
}
