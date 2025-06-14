import type { ReactNode } from "react";
import type { CommonProps } from "@/types/common.types";

export interface ContainerProps extends CommonProps {
  children: ReactNode;
  variant?: "prose" | "narrow" | "wide" | "full";
}
