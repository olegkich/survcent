import * as React from "react";
import "./SurveyList.css";
import SurveyCard from "../../Components/SurveyCard/SurveyCard";
import { RouteComponentProps } from "react-router-dom";

export interface ListProps extends RouteComponentProps {}

const List: React.SFC<ListProps> = ({ history }) => {
  return (
    <div className="survey-list">
      <h1>Your surveys:</h1>
      <div className="your-survey-container">
        <div className="add-survey-container">
          <div
            className="add-survey"
            onClick={() => {
              history.push("/create");
            }}
          >
            +
          </div>
        </div>
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
      </div>
      <div className="other-survey">
        <div className="search-survey">
          <h1>Other surveys</h1>
          <input className="search-input" placeholder="search..." />
        </div>
        <div className="other-survey-list">
          <SurveyCard />
          <SurveyCard />
          <SurveyCard />
          <SurveyCard />
          <SurveyCard />
          <SurveyCard />
          <SurveyCard />
          <SurveyCard />
          <SurveyCard />
          <SurveyCard />
          <SurveyCard />
          <SurveyCard />
          <SurveyCard />
        </div>
      </div>
    </div>
  );
};

export default List;
