import type { CommonProps } from "@/types/common.types";
import type {
  ReactNode,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from "react";

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export interface BaseProps extends CommonProps {
  appearance?: "primary" | "secondary";
  children?: ReactNode;
  description?: string;
  disabled?: boolean;
  isLoading?: boolean;
  href?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  invert?: boolean;
  onClick?: () => void;
  shape?: "square" | "rounded" | "pill" | "circle";
  size?: "sm" | "base" | "lg";
  title?: string;
  type?: "button" | "submit" | "reset" | "link";
  underline?: boolean;
  unstyled?: boolean;
  variant?: "button" | "link";
  width?: "inline" | "full";
}
