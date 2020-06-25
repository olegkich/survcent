import * as React from "react";
import "./SurveyView.css";
import ActiveSurvey from "../../Components/ActiveSurvey/ActiveSurvey";

export interface SurveyProps {}

const Survey: React.SFC<SurveyProps> = () => {
  return (
    <div className="surveyView">
      <h1>Survey Name</h1>
      <ActiveSurvey />
    </div>
  );
};

export default Survey;
