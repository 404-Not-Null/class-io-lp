import { Hero } from "./sections/hero/Hero";
import { HowItWorks } from "./sections/HowItWorks/HowItWorks";
import { AboutAndFeatures } from "./sections/about/About_And_Features";
import "./app.css";

function App() {
  return (
    <div className="app">
      <Hero />
      <AboutAndFeatures />
      <HowItWorks />
    </div>
  );
}

export default App;

