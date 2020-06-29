import * as React from "react";
import "./SurveyList.css";
import SurveyCard from "../../Components/SurveyCard/SurveyCard";
import { RouteComponentProps } from "react-router-dom";
import axios from "axios";

export interface ListProps extends RouteComponentProps {}
let surveys: Array<any> = [];
const List: React.SFC<ListProps> = ({ history }) => {
  const [loading, setLoading] = React.useState(true);

  const getSurveys = async () => {
    surveys = await (await axios.get("http://localhost:8000/surveys/")).data;
    setLoading(false);
    console.log(surveys);
  };

  getSurveys();

  return (
    <div className="surveyList">
      {console.log("render", loading, surveys)}
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
                <SurveyCard name={surveyItem.name} />
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
