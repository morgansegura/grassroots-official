import type { ReactNode } from "react";
import type { CommonProps } from "@/types/common.types";
import type { ButtonProps } from "@/components/ui/button/button.types";

export interface FooterProps extends CommonProps {
  children?: ReactNode;
  navItems?: ButtonProps[];
}
