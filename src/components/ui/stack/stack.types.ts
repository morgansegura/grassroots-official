import { CommonProps } from "@/types/common.types";
import type { ReactNode } from "react";

type JustifyProps =
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly";
type AlignItemsProps = "start" | "end" | "center";
type ColumnProps = "2" | "3" | "4" | "5" | "6" | "1/3" | "3/1";
type GapProps = "sm" | "base" | "lg" | "none";

export interface StackProps extends CommonProps {
  align?: AlignItemsProps;
  cols?: ColumnProps;
  children: ReactNode;
  direction?: "column" | "row";
  gap?: GapProps;
  justify?: JustifyProps;
  type?: "grid" | "flex";
}
