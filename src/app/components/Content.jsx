import "../css/content.css";
import hero from "../../assets/hero.svg";

export function Content() {
  return (
    <main className="main">
      <div className="hero">
        <div className="hero-content">
          <h1>Revolutionize Attendance with Class-io</h1>
          <p>
            Secure, Effortless, and Accurate Attendance Taking and Tracking for
            Schools, Colleges, and Universities.
          </p>
          <button className="hero-button">Get Started Today</button>
        </div>
        <div className="hero-image">
          <img src={hero} alt="Class-io Hero" />
        </div>
      </div>
    </main>
  );
}
