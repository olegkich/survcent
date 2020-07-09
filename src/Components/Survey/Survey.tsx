import * as React from "react";
import "./Survey.css";
import Axios from "axios";
import ActiveSurvey from "./ActiveSurvey/ActiveSurvey";
import { RouteComponentProps } from "react-router-dom";
import { survey_id } from "../List/List";

interface IData {
  survey: {
    id: number;
    name: string;
    userId: number;
  };
}
export interface SurveyProps extends RouteComponentProps {}

let initialState: IData = { survey: { id: 1, name: "", userId: 0 } };

const Survey: React.SFC<SurveyProps> = (props) => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);
  const id = React.useContext(survey_id);

  const handleComplete = () => {
    props.history.push("./list");
  };

  React.useEffect(() => {
    const CancelToken = Axios.CancelToken;
    const source = CancelToken.source();

    const loadData = () => {
      try {
        Axios.get("http://localhost:8000/surveys/1", {
          cancelToken: source.token,
        }).then((data) => {
          console.log(data.data, "hook");
          setData(data.data);
        });
        setLoading(false);
      } catch (error) {
        if (Axios.isCancel(error)) {
          console.log("cancelled");
        } else {
          throw error;
        }
      }
    };

    loadData();
    return () => {
      source.cancel();
    };
  }, []);

  if (data === null) {
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
