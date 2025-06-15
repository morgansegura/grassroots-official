export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  appearance?: "light" | "dark" | "unstyled";
}
