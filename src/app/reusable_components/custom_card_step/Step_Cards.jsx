
import "./step_Cards.css"

export function StepCards(props) {
 return (
  <div className="main-cards"> 

    <div className="count">{props.number}</div>

      <div className="card-data">

          <div className="data-1">

             <div className="icons">

               </div>
             <div className="texts">
              <p>Lecturer</p>
              <p>
                <span>{props.ltitle}: </span>
               {props.ldescription}
              </p>
              
             </div>

          </div>

          <div className="data-2">
          <p>Student</p>
              <p>
                <span>{props.stitle}: </span>
              {props.sdescription}
              </p>
          </div>

      </div>

  </div>
 )
}


