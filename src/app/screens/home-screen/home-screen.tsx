import { cn } from "@/lib/utils/cn";
import { Container } from "@/components/structure/container/container";

import "./home-screen.css";

export function HomeScreen() {
  return (
    <Container variant="wide" className={cn("home-screen")}>
      Home
    </Container>
  );
}
