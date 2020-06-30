import * as React from "react";
import "./SurveyCard.css";

export interface SurveyCardProps {
  onClick: () => void;
  name: string;
}

const SurveyCard: React.SFC<SurveyCardProps> = (props) => {
  return (
    <div className="survey-card" onClick={props.onClick}>
      <span>{props.name}</span>
    </div>
  );
};

export default SurveyCard;
