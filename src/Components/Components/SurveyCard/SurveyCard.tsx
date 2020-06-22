import * as React from "react";
import "./SurveyCard.css";

export interface SurveyCardProps {}

const SurveyCard: React.SFC<SurveyCardProps> = (props) => {
  return (
    <div className="survey-card">
      <span>Survey name</span>
      <span>questions</span>
    </div>
  );
};

export default SurveyCard;
