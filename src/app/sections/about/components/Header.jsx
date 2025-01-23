import { ABOUT_AND_FEATURES } from "../../../Global/strings";
import "../css/header.css";

export function Header() {

  return(
    <div className="header">
        <div className="header_content">
            {ABOUT_AND_FEATURES.WHAT_IS_CLASS_IO}
        </div>
    </div>

  );
}
