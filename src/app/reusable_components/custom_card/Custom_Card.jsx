import { ABOUT_AND_FEATURES } from "../../Global/strings";
import "./custom_card.css";

export function Custom_card(props) {
    return (
        <div className="container">
            <img className="Icon" src={props.icon} alt={props.alt} />

            <div className="Topic" >
                {props.topic}
            </div>

            <div className="Words" >
                {props.words}
            </div>
        </div>    
    )
}


