"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { createPortal } from "react-dom";
import { Modal } from "@/components/ui/modal/modal";

const ModalContext = createContext<{
  showModal: (content: ReactNode) => void;
  hideModal: () => void;
} | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const showModal = (content: ReactNode) => setModalContent(content);
  const hideModal = () => setModalContent(null);

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      {typeof window !== "undefined" &&
        createPortal(
          <Modal open={!!modalContent} onClose={hideModal}>
            {modalContent}
          </Modal>,
          document.body,
        )}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used inside ModalProvider");
  return ctx;
}
