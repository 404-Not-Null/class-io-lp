import { Hero } from "./sections/hero/Hero";
import { AboutAndFeatures } from "./sections/about/About_And_Features";
import "./app.css";

function App() {
  return (
    <div className="app">
      <Hero />
      <AboutAndFeatures />
    </div>
  );
}

export default App;
