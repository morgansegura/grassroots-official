import * as React from "react";

import { cn } from "@/lib/utils";

import "./select.css";

/**
 * A native <select>. Deliberately not a custom listbox — on the phones this
 * form is mostly filled out on, the OS picker is faster, works with screen
 * readers and voice control out of the box, and needs no JavaScript.
 */
export function Select({
  className,
  children,
  ...props
}: React.ComponentProps<"select">) {
  return (
    <div className="select-wrap">
      <select className={cn("select", className)} {...props}>
        {children}
      </select>
      <span className="select-arrow" aria-hidden="true" />
    </div>
  );
}
