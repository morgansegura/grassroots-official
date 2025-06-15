"use client";

import Link from "next/link";
import { cn } from "@/lib/utils/cn";

import "./button.css";

import type { ButtonProps } from "./button.types";
import { When } from "@/components/helpers/when/when";

export function Button({
  appearance = "primary",
  children,
  className,
  description,
  disabled,
  href,
  invert,
  iconLeft,
  iconRight,
  isLoading,
  shape = "rounded",
  size = "base",
  target,
  title,
  onClick,
  underline,
  unstyled,
  width = "inline",
  variant = "button",
}: ButtonProps) {
  const defaultProps = {
    "aria-busy": isLoading,
    "aria-label": title,
    className: cn("button", className),
    "data-button-appearance": appearance,
    "data-button-invert": invert,
    "data-button-title": title,
    "data-button-description": description,
    "data-button-shape": shape,
    "data-button-size": size,
    "data-button-variant": variant,
    "data-button-disabled": isLoading || disabled,
    "data-button-underline": underline,
    "data-button-loading": isLoading,
    "data-button-unstyled": unstyled,
    disabled,
  };

  const content = isLoading ? (
    <span className="button-label">Loading...</span>
  ) : (
    <>
      <When condition={!!iconLeft}>
        <span className="button-icon-left">{iconLeft}</span>
      </When>
      <When condition={!!children}>
        <span className="button-label">{children}</span>
      </When>
      <When condition={!!iconRight}>
        <span className="button-icon-right">{iconRight}</span>
      </When>
    </>
  );

  if (href) {
    return (
      <div className="button-container" data-button-width={width}>
        <Link
          href={href}
          passHref
          role="link"
          target={target}
          {...defaultProps}
        >
          {content}
        </Link>
      </div>
    );
  }

  return (
    <div className="button-container" data-button-width={width}>
      <button role="button" onClick={onClick} {...defaultProps}>
        {content}
      </button>
    </div>
  );
}
