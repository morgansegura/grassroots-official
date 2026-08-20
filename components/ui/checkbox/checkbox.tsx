import * as React from "react";

import { cn } from "@/lib/utils";

import "./checkbox.css";

type CheckboxProps = Omit<React.ComponentProps<"input">, "type"> & {
  label: React.ReactNode;
};

/**
 * Native checkbox with the label as a large tap target. The whole row is
 * clickable — these are filled out one-handed on a phone.
 */
export function Checkbox({ className, label, id, ...props }: CheckboxProps) {
  return (
    <label className={cn("checkbox", className)} htmlFor={id}>
      <input className="checkbox-input" type="checkbox" id={id} {...props} />
      <span className="checkbox-label">{label}</span>
    </label>
  );
}
