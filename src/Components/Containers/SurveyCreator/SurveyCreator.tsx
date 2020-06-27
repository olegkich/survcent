import * as React from "react";
import "./SurveyCreator.css";
// using guid because no shortid for typescript
import { Guid } from "guid-typescript";
import { CANCELLED } from "dns";
import QuestionItem from "../../Components/QuestionItem/QuestionItem";

export interface SurveyCreatorProps {}

const SurveyCreator: React.SFC<SurveyCreatorProps> = () => {
  const [questionInput, setQuestionInput] = React.useState("");
  const [optionInput, setOptionInput] = React.useState("");

  const [questions, setQuestions] = React.useState(Array());
  const [options, setOptions] = React.useState(Array());

  const questionObject = { question: "", id: Guid.create() };
  const [activeQuestion, setActiveQuestion] = React.useState(questionObject);

  const optionsLeft =
    5 -
    options.filter((option) => option.questionsId === activeQuestion.id).length;

  const questionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestionInput(e.currentTarget.value);
  };

  const questionSubmit = () => {
    setQuestions([
      ...questions,
      { question: questionInput, id: Guid.create() },
    ]);
    setQuestionInput("");
  };

  const questionDelete = (id: Guid) => {
    if (
      questions.filter((question) => question.id === id)[0] === activeQuestion
    ) {
      setActiveQuestion(questionObject);
      console.log("called", activeQuestion);
    }
    setOptions(options.filter((option) => option.questionId !== id));
    setQuestions(questions.filter((question) => question.id !== id));
  };

  const questionClick = (question: { question: string; id: Guid }) => {
    setActiveQuestion(question);
  };

  const optionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOptionInput(e.target.value);
  };

  const optionSubmit = () => {
    if (optionsLeft === 0) {
      return;
    } else
      setOptions([
        ...options,
        {
          option: optionInput,
          id: Guid.create(),
          questionsId: activeQuestion.id,
        },
      ]);
    setOptionInput("");
  };

  const optionDelete = (id: Guid) => {
    setOptions(options.filter((option) => option.id !== id));
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
              value={questionInput}
              onChange={questionChange}
            />
            <span className="header-btn" onClick={questionSubmit}>
              +
            </span>
          </div>

          <div className="questions-list">
            {questions.map((question) => (
              <QuestionItem
                question={question}
                onDelete={questionDelete}
                onClick={questionClick}
              />
            ))}
          </div>
        </div>

        <div className="surveyCreator-options">
          <h4 style={{ margin: 0, marginBottom: 5 }}>
            Create options ({optionsLeft}
            /5 remaining)
          </h4>

          <input
            placeholder="create an option..."
            value={optionsLeft === 0 ? "" : optionInput}
            onChange={optionChange}
          />
          <span
            className="btn"
            style={{ marginLeft: 10, marginRight: 10 }}
            onClick={optionSubmit}
          >
            create
          </span>
          <strong>{activeQuestion.question}</strong>
          {options
            .filter((option) => option.questionsId === activeQuestion.id)
            .map((option) => (
              <div className="option-item" key={option.id}>
                <div>{option.option}</div>
                <span
                  style={{ marginLeft: 10, cursor: "pointer" }}
                  onClick={() => optionDelete(option.id)}
                >
                  x
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SurveyCreator;
