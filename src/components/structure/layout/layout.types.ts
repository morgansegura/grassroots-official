import type { ReactNode } from "react";
import type { CommonProps } from "@/types/common.types";

export interface LayoutProps extends CommonProps {
  children: ReactNode;
}
