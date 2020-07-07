import * as React from "react";
import "./SurveyCard.css";

export interface SurveyCardProps {
  onClick: () => void;
  survey: string;
  user: string;
}

const SurveyCard: React.SFC<SurveyCardProps> = (props) => {
  return (
    <div className="survey-card" onClick={props.onClick}>
      <b>{props.user}</b>
      <span>{props.survey}</span>
    </div>
  );
};

export default SurveyCard;
