import { cn } from "@/lib/utils/cn";
import { Container } from "@/components/structure/container/container";

import "./homescreen.css";

export function HomeScreen() {
  return (
    <Container variant="wide" className={cn("home-screen")}>
      Home
    </Container>
  );
}
