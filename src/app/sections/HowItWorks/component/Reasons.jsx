import "../css/reason.css";
import { WHY_CHOOSE } from "../../../Global/strings";
import {USE_CASES } from "../../../Global/strings";

export function Reasons () {

  return (
    <div className="reasons"> 
        <div className="why">
              <p className="title">{WHY_CHOOSE.TITLE}</p>
              <div className="body" >
               <p>
                <span>{WHY_CHOOSE.GEOLOCATION_PROTECTION.title}: </span>
                {WHY_CHOOSE.GEOLOCATION_PROTECTION.description}
               </p>

               <p>
               <span>{WHY_CHOOSE.REAL_TIME_INSIGHTS.title}: </span>
               {WHY_CHOOSE.REAL_TIME_INSIGHTS.description}
               </p>

               <p>
               <span>{WHY_CHOOSE.DATA_DRIVEN_DECISIONS.title}: </span>
               {WHY_CHOOSE.DATA_DRIVEN_DECISIONS.description}
               </p>

               <p>
               <span>{WHY_CHOOSE.BUILT_WITH_FLUTTER.title}: </span>
               {WHY_CHOOSE.BUILT_WITH_FLUTTER.description}
               </p>

              </div>
        </div>
        
        <div className="usecase">
               <p className="title">{USE_CASES.TITLE}</p>
              <div className="body">
              <p>
                <span>{USE_CASES.UNIVERSITIES_COLLEGES.title}: </span>
                {USE_CASES.UNIVERSITIES_COLLEGES.description}
              </p>

              <p>
              <span>{USE_CASES.SCHOOLS.title}: </span>
              {USE_CASES.SCHOOLS.description}
              </p>

              <p>
              <span>{USE_CASES.INDIVIDUAL_LECTURERS.title}: </span>
              {USE_CASES.INDIVIDUAL_LECTURERS.description}
              </p>
              </div>
        </div>

    </div>
  
  )
 }