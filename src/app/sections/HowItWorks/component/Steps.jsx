import "../css/steps.css";
import { StepCards } from "../../../reusable_components/reusable_components";
import { HOW_IT_WORKS } from "../../../Global/strings";

export function Steps () {
  return (
    <div className="step-cards">
    <StepCards  ltitle= {HOW_IT_WORKS.STEP_1_LECTURER_ACTION.title} ldescription={HOW_IT_WORKS.STEP_1_LECTURER_ACTION.description} stitle = {HOW_IT_WORKS.STEP_1_STUDENT_ACTION.title} sdescription={HOW_IT_WORKS.STEP_1_STUDENT_ACTION.description} number="01" />

    <StepCards  ltitle= {HOW_IT_WORKS.STEP_2_LECTURER_ACTION.title} ldescription={HOW_IT_WORKS.STEP_2_LECTURER_ACTION.description} stitle = {HOW_IT_WORKS.STEP_2_STUDENT_ACTION.title} sdescription={HOW_IT_WORKS.STEP_2_STUDENT_ACTION.description} number="02" />

    <StepCards  ltitle= {HOW_IT_WORKS.STEP_3_LECTURER_ACTION.title} ldescription={HOW_IT_WORKS.STEP_3_LECTURER_ACTION.description} stitle = {HOW_IT_WORKS.STEP_3_LECTURER_ACTION.title} sdescription={HOW_IT_WORKS.STEP_3_STUDENT_ACTION.description} number="03" />
    </div>
  
  )
 }