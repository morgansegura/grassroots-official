import { cn } from "@/lib/utils";
import "./foliage.css";

type FoliageProps = {
  children?: React.ReactNode;
  className?: string;
};

export function Foliage({ children, className }: FoliageProps) {
  return (
    <svg
      id="Isolation_Mode"
      data-name="Isolation Mode"
      className={cn("foliage", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 67.9 50.95"
    >
      <path
        className="cls-1"
        d="M67.9,0v13.8s0,9.42-14.27,9.42h-14.16v-13.58s0-9.64,14.86-9.64h13.57Z"
      />
      <path
        className="cls-1"
        d="M31.45,50.95h24.73s11.72,0,11.72-9.97v-13.27s-25.57,0-25.57,0c0,0-10.88,0-10.88,9.85v13.39Z"
      />
      <path
        className="cls-1"
        d="M35.46,23.24H11.4S0,23.24,0,13.27V0h24.88s10.58,0,10.58,9.85v13.39Z"
      />
    </svg>
  );
}
