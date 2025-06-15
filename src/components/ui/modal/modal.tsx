"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

import "./modal.css";

import { ModalProps } from "./modal.types";

export function Modal({
  open,
  onClose,
  children,
  appearance = "unstyled",
}: ModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const defaultProps = {
    "data-modal-appearance": appearance,
  };

  return (
    <div className="modal modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-content" {...defaultProps}>
        <button
          className="modal-close-button"
          onClick={onClose}
          aria-label="Close"
        >
          <X />
        </button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
