"use client";

import * as React from "react";
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";

import { cn } from "@/lib/utils";

type DialogSize = "default" | "sm" | "lg" | "full";

function Dialog(props: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root {...props} />;
}

function DialogTrigger(
  props: React.ComponentProps<typeof DialogPrimitive.Trigger>,
) {
  return <DialogPrimitive.Trigger {...props} />;
}

function DialogPortal(
  props: React.ComponentProps<typeof DialogPrimitive.Portal>,
) {
  return <DialogPrimitive.Portal {...props} />;
}

function DialogBackdrop({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Backdrop>) {
  return (
    <DialogPrimitive.Backdrop
      className={cn(
        "fixed inset-0 z-40",
        "bg-(--color-cleat)/50 backdrop-blur-sm",
        className,
      )}
      {...props}
    />
  );
}

function DialogPopup({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Popup> & { size?: DialogSize }) {
  const sizeClasses: Record<DialogSize, string> = {
    default: "w-[min(95vw,560px)] max-h-[90vh] p-8 overflow-auto",
    sm: "w-[min(95vw,400px)] max-h-[90vh] p-6 overflow-auto",
    lg: "w-[min(95vw,800px)] max-h-[90vh] p-10 overflow-auto",
    full: "w-[min(95vw,1100px)] h-[min(95vh,900px)] p-0 overflow-hidden",
  };

  return (
    <DialogPrimitive.Popup
      className={cn(
        "fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
        "rounded-3xl bg-white outline-none",
        "shadow-[0_24px_64px_-12px_color-mix(in_oklch,var(--color-cleat)_50%,transparent)]",
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  );
}

function DialogClose({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return (
    <DialogPrimitive.Close
      className={cn(
        "absolute top-4 right-4 z-10",
        "flex items-center justify-center",
        "size-9 rounded-full bg-white/95",
        "",
        "transition-colors duration-150 outline-none",
        "focus-visible:ring-2 focus-visible:ring-(--color-touchline)/40",
        "shadow-[0_4px_12px_-4px_color-mix(in_oklch,var(--color-cleat)_30%,transparent)]",
        className,
      )}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      className={cn(
        "font-(family-name:--font-heading) text-2xl md:text-3xl font-medium",
        " leading-tight tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      className={cn("text-base leading-relaxed", className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogBackdrop,
  DialogPopup,
  DialogClose,
  DialogTitle,
  DialogDescription,
  type DialogSize,
};
