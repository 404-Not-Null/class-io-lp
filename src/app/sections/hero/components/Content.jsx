import "../css/content.css";
import hero from "../../../../assets/hero.svg";
import loc from "../../../../assets/side-loc.svg";
import privacy from "../../../../assets/side-privacy.svg";
import scan from "../../../../assets/side-scan.svg";
import linkedIn from "../../../../assets/linkedIn.svg";
import { CustomButton } from "../../../reusable_components/reusable_components";
import { HERO_SECTION } from "../../../Global/strings";

export function Content() {
  return (
    <main className="main">
      <div className="side-icons">
          <img src={scan} alt="Class-io Hero" />
          <img src={loc} alt="Class-io Hero" />
          <img src={privacy} alt="Class-io Hero" />
        </div>
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
