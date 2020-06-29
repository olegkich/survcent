import * as React from "react";
import "./SurveyView.css";
import Axios from "axios";

export interface SurveyProps {}

let data: any = {};

const Survey: React.SFC<SurveyProps> = () => {
  const [loading, setLoading] = React.useState(true);

  const fetchSurvey = async () => {
    data = await (await Axios.get("http://localhost:8000/surveys/1")).data;
    setLoading(false);
    console.log(data);
  };
  fetchSurvey();

  const survey: any = data.survey;
  console.log(survey);
  if (loading) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  } else
    return (
      <div className="surveyView">
        <h1>{survey.name}</h1>
        {data.questions[0].question}
        {data.options.map((option: any) => (
          <div>{option.options}</div>
        ))}
      </div>
    );
};

export default Survey;
