import "../css/content.css";
import hero from "../../../../assets/hero.svg";
import linkedIn from "../../../../assets/linkedIn.svg";
import { CustomButton } from "../../../reusable_components/reusable_components";

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
          <CustomButton
            href="https://www.linkedin.com/company/class-io/"
            className="hero-button"
          >
            <img src={linkedIn} alt="LinkedIn" />
            <span>Follow Us</span>
          </CustomButton>
        </div>
        <div className="hero-image">
          <img src={hero} alt="Class-io Hero" />
        </div>
      </div>
    </main>
  );
}
