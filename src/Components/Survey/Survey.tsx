import * as React from "react";
import "./Survey.css";
import Axios from "axios";
import ActiveSurvey from "./ActiveSurvey/ActiveSurvey";
import { RouteComponentProps, RouteChildrenProps } from "react-router-dom";
import { survey_id } from "../List/List";

export interface SurveyProps extends RouteComponentProps {}

let data: any = {};

const Survey: React.SFC<SurveyProps> = (props) => {
  const [loading, setLoading] = React.useState(true);

  const id = React.useContext(survey_id);
  const handleComplete = () => {
    props.history.push("./list");
  };

  (async () => {
    data = await (await Axios.get(`http://localhost:8000/surveys/${id}`)).data;
    setLoading(false);
  })();

  if (loading) {
    return (
      <div className="survey">
        <h1>loading...</h1>
      </div>
    );
  } else
    return (
      <div className="survey">
        <h1>{data.survey.name}</h1>
        <ActiveSurvey onComplete={handleComplete} data={data} />
      </div>
    );
};

export default Survey;
