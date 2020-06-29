import * as React from "react";
import "./SurveyCard.css";

export interface SurveyCardProps {
  name: string;
}

const SurveyCard: React.SFC<SurveyCardProps> = (props) => {
  return (
    <div className="survey-card">
      <span>{props.name}</span>
    </div>
  );
};

export default SurveyCard;
