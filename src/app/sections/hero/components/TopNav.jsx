import "../css/top_nav.css";
import logo from "../../../../assets/logo.svg";
import { CustomButton } from "../../../reusable_components/reusable_components";


export function TopNav() {
  return (
    <nav className="nav">
      <div className="nav-content">
        <div >
          <img src={logo} alt="Class-io Logo" />
        </div>
        <span>Class-io</span>
        {/* <CustomButton>Get Started</CustomButton> */}
      </div>
    </nav>
  );
}
