import "../css/top_nav.css";
import classioLogo from "../../assets/logo.svg";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";

export const TopNav = () => {
  return (
    <div class="navDiv">
      <img src={classioLogo} class="reactlogo"></img>
      <p class=" navP">Class-io</p>
      <div>
        <img src={viteLogo} class="reactlogo"></img>
        <img src={reactLogo} class="reactlogo"></img>
      </div>
    </div>
  );
};
