import { USE_LANDING } from "@/constants";
import { ComingSoonScreen } from "./screens/coming-soon/coming-soon";

export default function Home() {
  return USE_LANDING ? <ComingSoonScreen /> : <ComingSoonScreen />;
}
