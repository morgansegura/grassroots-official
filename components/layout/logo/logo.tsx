import { cn } from "@/lib/utils";
import { LogoIcon, LogoText } from "@/components/layout";

import "./logo.css";

type LogoProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: "full" | "text" | "icon";
  color?: "primary" | "mono-brand" | "mono-black" | "reverse";
  size?: "md" | "sm" | "lg";
};

export function Logo({
  className,
  color = "primary",
  variant = "full",
  size = "md",
}: LogoProps) {
  return (
    <div
      className={cn("logo", className)}
      data-color={color}
      data-size={size}
      data-variant={variant}
    >
      {variant === "full" ? (
        <>
          <LogoIcon />
          <LogoText />
        </>
      ) : null}
      {variant === "icon" ? <LogoIcon /> : null}
      {variant === "text" ? <LogoText /> : null}
    </div>
  );
}
