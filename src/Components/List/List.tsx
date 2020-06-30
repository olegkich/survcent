import * as React from "react";
import "./List.css";
import SurveyCard from "./SurveyCard/SurveyCard";
import { RouteComponentProps } from "react-router-dom";
import axios from "axios";

export interface ListProps extends RouteComponentProps {}
let surveys: Array<any> = [];
export let survey_id: any = 0;

const List: React.SFC<ListProps> = ({ history }) => {
  const [loading, setLoading] = React.useState(true);

  const getSurveys = async () => {
    surveys = await (await axios.get("http://localhost:8000/surveys/")).data;
    setLoading(false);
  };

  getSurveys();

  const handleClick = (id: number) => {
    survey_id = React.createContext(id);
    history.push("./survey");
  };

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
      </div>

      <div className="searchSurvey">
        <h1>Other surveys</h1>
        <input className="searchSurvey-input" placeholder="search..." />
      </div>
      <div className="surveyList-container">
        {!loading ? (
          surveys.map(
            (surveyItem: { id: number; name: string; user_id: null }) => (
              <div>
                <SurveyCard
                  name={surveyItem.name}
                  onClick={() => handleClick(surveyItem.id)}
                />
              </div>
            )
          )
        ) : (
          <h2>loading</h2>
        )}
      </div>
    </div>
  );
};

export default List;
