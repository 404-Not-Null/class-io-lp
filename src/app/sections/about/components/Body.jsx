import { ABOUT_AND_FEATURES } from "../../../Global/strings";
import "../css/body.css";
import logofeat from "../../../../assets/logoFeat.svg";
import flutter from "../../../../assets/flutter.svg";
import location from "../../../../assets/location.svg";
import lock from "../../../../assets/lock.svg";
import { Custom_card } from "../../../reusable_components/reusable_components";

export function Body() {
  return (
    <div className="Big_container">
      <div className="Leftside">
        <p>{ABOUT_AND_FEATURES.OVERVIEW_INTRO}</p>
        <p>{ABOUT_AND_FEATURES.CLASS_IO_DESCRIPTION}</p>

        <div className="contain" >
          <Custom_card
            alt="logo"
            icon={logofeat}
            words={
              ABOUT_AND_FEATURES.EFFORTLESS_ATTENDANCE_MANAGEMENT.description
            }
            topic={ABOUT_AND_FEATURES.EFFORTLESS_ATTENDANCE_MANAGEMENT.title}
          />
        </div>
      </div>

      <div className="Rightside">
      <div className="cont" >
          <Custom_card
            alt="logo"
            icon={logofeat}
            words={
              ABOUT_AND_FEATURES.EFFORTLESS_ATTENDANCE_MANAGEMENT.description
            }
            topic={ABOUT_AND_FEATURES.EFFORTLESS_ATTENDANCE_MANAGEMENT.title}
          />
        </div>
        <div className="container" >
        <Custom_card
          alt="location"
          icon={location}
          words={ABOUT_AND_FEATURES.ENHANCED_ACCURACY_SECURITY.description}
          topic={ABOUT_AND_FEATURES.ENHANCED_ACCURACY_SECURITY.title}
        />
        </div>
        
        <div className="container" >
        <Custom_card
          alt="lock"
          icon={lock}
          words={ABOUT_AND_FEATURES.DATA_PRIVACY_FIRST.description}
          topic={ABOUT_AND_FEATURES.DATA_PRIVACY_FIRST.title}
        />
        </div>
       
       <div className="container" >
       <Custom_card
          alt="flutter"
          icon={flutter}
          words={ABOUT_AND_FEATURES.SEAMLESS_INTEGRATION.description}
          topic={ABOUT_AND_FEATURES.SEAMLESS_INTEGRATION.title}
        />
       </div>
        
      </div>
    </div>
  );
}
