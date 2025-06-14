import type { CommonProps } from "@/types/common.types";
import type { ReactNode } from "react";

export interface HeaderProps extends CommonProps {
  variant?: "fixed" | "scroll" | "default";
  children?: ReactNode;
}
