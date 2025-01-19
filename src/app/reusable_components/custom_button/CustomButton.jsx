import "./custom_button.css";

export function CustomButton({ children, className = "", href = ""}) {
  return (
    <a className="button-link" href={href}>
      <button className={`custom-button ${className}`}>
      {children}
    </button>
    </a>
  );
}
