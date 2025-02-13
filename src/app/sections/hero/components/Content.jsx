import "../css/content.css";
import hero from "../../../../assets/hero.svg";
import linkedIn from "../../../../assets/linkedIn.svg";
import { CustomButton } from "../../../reusable_components/reusable_components";
import { HERO_SECTION } from "../../../Global/strings";

export function Content() {
  return (
    <main className="main">
      <div className="hero">
        <div className="hero-content">
          <h1>{HERO_SECTION.HERO_TEXT}</h1>
          <p>{HERO_SECTION.SUB_HERO_TEXT}</p>
          <CustomButton
            href="https://www.linkedin.com/company/class-io/"
            className="hero-button"
          >
            <img src={linkedIn} alt="LinkedIn" />
            <span>{HERO_SECTION.HERO_BUTTON_LABEL}</span>
          </CustomButton>
        </div>
        <div className="hero-image">
          <img src={hero} alt="Class-io Hero" />
        </div>
      </div>
    </main>
  );
}
