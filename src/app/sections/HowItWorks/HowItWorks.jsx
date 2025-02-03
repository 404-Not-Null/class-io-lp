import "./howItWorks.css";
import { Header } from "./component/Header";
import { Steps } from "./component/Steps";
import { Reasons } from "./component/Reasons";

export function HowItWorks(){
  return (
    <div className="howItWorks-sections" > 
          <Header />
          <Steps />
          <Reasons />
    </div>
  )
}