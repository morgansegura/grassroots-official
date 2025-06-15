import { USE_LANDING } from "@/constants";
import { ComingSoonScreen } from "./screens/coming-soon/coming-soon";
import { HomeScreen } from "./screens/home-screen/home-screen";

export default function Home() {
  return USE_LANDING ? <ComingSoonScreen /> : <HomeScreen />;
}
