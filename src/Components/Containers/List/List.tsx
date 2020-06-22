import * as React from "react";
import "./List.css";
import SurveyCard from "../../Components/SurveyCard/SurveyCard";

export interface ListProps {}

const List: React.SFC<ListProps> = () => {
  return (
    <div className="list">
      <h1>Your surveys:</h1>
      <div className="your-survey-container">
        <div className="add-survey">+</div>
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
      </div>
    </div>
  );
};

export default List;
