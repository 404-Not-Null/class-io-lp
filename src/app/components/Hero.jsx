import "../css/hero.css";
import { TopNav } from "./TopNav";
import { Content } from "./Content";

export function Hero() {
  return (
    <div className="hero-section">
      <TopNav />
      <Content />
    </div>
  );
}
