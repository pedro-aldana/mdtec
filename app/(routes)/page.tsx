import Hero from "./components/Hero";
import Tools from "./components/Tools";
import { DarkPricing } from "./components/Pricing";
import Text from "./components/Text";
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white ">
      <TransitionPage />
      <Hero />
      <Tools />
      <Text />
      <DarkPricing />
    </div>
  );
}
