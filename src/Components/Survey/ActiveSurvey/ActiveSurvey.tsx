import * as React from "react";
import "./ActiveSurvey.css";
import Option from "./Option/Option";
import { RouteComponentProps } from "react-router-dom";

export interface ActiveSurveyProps {
  onComplete: () => void;
  data: any;
}

interface IQuestion {
  id: number;
  question: string;
  survey_id: number;
}

const ActiveSurvey: React.SFC<ActiveSurveyProps> = (props) => {
  console.log(props.data);
  const questions: IQuestion[] = [...props.data.questions];
  const options = props.data.options;

  const [completed, setCompleted] = React.useState(false);
  let [activeQuestion, setActiveQuestion] = React.useState(0);

  const activeOptions = options.filter(
    (option: any) => option.question_id === questions[activeQuestion].id
  );

  console.log(activeOptions);
  const handleClick = (option: any) => {
    if (activeQuestion === questions.length - 1) {
      setCompleted(true);
    } else {
      setActiveQuestion(activeQuestion + 1);
    }
  };

  return (
    <div className="activeSurvey">
      {completed ? (
        <div className="completed">
          <h3>thanks for completing this survey!</h3>
          <div className="completed-buttons">
            <span className="btn completed-btn" onClick={props.onComplete}>
              cancel
            </span>
            <span className="btn" onClick={props.onComplete}>
              submit
            </span>
          </div>
        </div>
      ) : (
        <div>
          <div className="question">
            <h2>{questions[activeQuestion].question}</h2>
            <span>
              {activeQuestion + 1}/{questions.length}
            </span>
          </div>
          <div className="options-list">
            {activeOptions.map((option: any) => {
              return (
                <Option onClick={() => handleClick(option)} option={option} />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ActiveSurvey;
