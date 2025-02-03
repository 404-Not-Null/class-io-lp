import "../css/header.css";
import { HOW_IT_WORKS } from "../../../Global/strings";

export function Header () {
  return (
  <div className="header">
   <p className="header-1"> {HOW_IT_WORKS.TITLE}</p>
   
   <p className="header-2"> {HOW_IT_WORKS.DESCRIPTION}</p>
   </div>
   
  )
 }