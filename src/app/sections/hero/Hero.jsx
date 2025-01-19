import "./hero.css";
import { TopNav } from "./components/TopNav";
import { Content } from "./components/Content";

export function Hero() {
  return (
    <div className="hero-section">
      <TopNav />
      <Content />
    </div>
  );
}
