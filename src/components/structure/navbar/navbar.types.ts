import type { ButtonProps } from "@/components/ui/button/button.types";
import type { CommonProps } from "@/types/common.types";

export interface NavbarProps extends CommonProps {
  navItems: ButtonProps[];
}
