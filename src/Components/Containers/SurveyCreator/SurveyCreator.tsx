import * as React from "react";
import "./SurveyCreator.css";
import { Guid } from "guid-typescript";

export interface SurveyCreatorProps {}

const SurveyCreator: React.SFC<SurveyCreatorProps> = () => {
  const [questions, setQuestions] = React.useState([
    { question: "test", id: Guid.create() },
  ]);
  const [input, setInput] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  const handleQuestion = () => {
    setQuestions([...questions, { question: input, id: Guid.create() }]);
    setInput("");
  };

  const deleteQuestion = (id: Guid) => {
    setQuestions(questions.filter((question) => question.id !== id));
  };

  return (
    <div className="surveyCreator">
      <div className="surveyCreator-name">
        <h1>Create a new survey </h1>
        <input placeholder="enter survey name..." />
      </div>
      <div className="surveyCreator-container">
        <div className="surveyCreator-questions">
          <div className="questions-header">
            <input
              placeholder="add a new question..."
              value={input}
              onChange={handleChange}
            />
            <span className="header-btn" onClick={handleQuestion}>
              +
            </span>
          </div>

          <div className="questions-list">
            {questions.map((question) => (
              <div className="questions-item">
                {question.question}{" "}
                <span
                  style={{ marginLeft: "10px", marginRight: "5px" }}
                  onClick={() => deleteQuestion(question.id)}
                >
                  x
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="surveyCreator-options">
          <p>options block</p>
        </div>
      </div>
    </div>
  );
};

export default SurveyCreator;
