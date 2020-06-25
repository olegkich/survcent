import * as React from "react";
import "./SurveyList.css";
import SurveyCard from "../../Components/SurveyCard/SurveyCard";
import { RouteComponentProps } from "react-router-dom";

export interface ListProps extends RouteComponentProps {}

const List: React.SFC<ListProps> = ({ history }) => {
  return (
    <div className="surveyList">
      <h1>Your surveys:</h1>
      <div className="surveyList-container">
        <div className="addSurvey-container">
          <div
            className="addSurvey-btn"
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

      <div className="searchSurvey">
        <h1>Other surveys</h1>
        <input className="searchSurvey-input" placeholder="search..." />
      </div>
      <div className="surveyList-container">
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
  );
};

export default List;
