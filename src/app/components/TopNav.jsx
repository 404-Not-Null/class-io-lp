import "../css/top_nav.css";
import logo from "../../assets/logo.svg";

export function TopNav() {
  return (
    <nav className="nav">
      <div className="nav-content">
        <div className="nav-logo">
          <span>Class-io</span>
          <img src={logo} alt="Class-io Logo" />
        </div>
        <button className="nav-button">Get Started</button>
      </div>
    </nav>
  );
}
