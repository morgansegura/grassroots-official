import { cn } from "@/lib/utils/cn";
import { Container } from "@/components/structure/container/container";

import "./coming-soon.css";

export function ComingSoonScreen() {
  return (
    <Container variant="wide" className={cn("comming-soon-screen")}>
      Coming Soon
    </Container>
  );
}
