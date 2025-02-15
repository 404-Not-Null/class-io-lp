import "../css/steps.css";
import { StepCards } from "../../../reusable_components/reusable_components";
import { HOW_IT_WORKS } from "../../../Global/strings";
import excel from "../../../../assets/ht-excel.svg";
import loc from "../../../../assets/ht-loc.svg";
import qr from "../../../../assets/ht-qr.svg";
import rt from "../../../../assets/ht-rt.svg";
import scan from "../../../../assets/side-scan.svg";

export function Steps () {
  return (
    <div className="step-cards">
    <StepCards icon={qr} icon2={loc} alt=""  ltitle= {HOW_IT_WORKS.STEP_1_LECTURER_ACTION.title} ldescription={HOW_IT_WORKS.STEP_1_LECTURER_ACTION.description} stitle = {HOW_IT_WORKS.STEP_1_STUDENT_ACTION.title} sdescription={HOW_IT_WORKS.STEP_1_STUDENT_ACTION.description} number="01" />

    <StepCards icon={rt} icon2={scan} alt="" ltitle= {HOW_IT_WORKS.STEP_2_LECTURER_ACTION.title} ldescription={HOW_IT_WORKS.STEP_2_LECTURER_ACTION.description} stitle = {HOW_IT_WORKS.STEP_2_STUDENT_ACTION.title} sdescription={HOW_IT_WORKS.STEP_2_STUDENT_ACTION.description} number="02" />

    <StepCards icon={excel} alt="" ltitle= {HOW_IT_WORKS.STEP_3_LECTURER_ACTION.title} ldescription={HOW_IT_WORKS.STEP_3_LECTURER_ACTION.description} stitle = {HOW_IT_WORKS.STEP_3_LECTURER_ACTION.title} sdescription={HOW_IT_WORKS.STEP_3_STUDENT_ACTION.description} number="03" />
    </div>
  
  )
 }