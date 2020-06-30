import * as React from "react";
import "./Create.css";
import { Guid } from "guid-typescript";
import QuestionItem from "./QuestionItem/QuestionItem";
import { RouteComponentProps } from "react-router-dom";
import axios from "axios";

export interface CreateProps extends RouteComponentProps {}

export interface IQuestion {
  question: string;
  id: Guid;
  isUndeifned: boolean;
}

const Create: React.SFC<CreateProps> = ({ history }) => {
  const initialActiveQuestion = {
    question: "no question selected",
    id: Guid.create(),
    isUndeifned: true,
  };

  const [surveyName, setSurveyName] = React.useState("");
  const [questionInput, setQuestionInput] = React.useState("");
  const [optionInput, setOptionInput] = React.useState("");

  const [questions, setQuestions] = React.useState(Array());
  const [options, setOptions] = React.useState(Array());

  const [activeQuestion, setActiveQuestion] = React.useState<IQuestion>(
    initialActiveQuestion
  );

  const optionPlaceholder =
    activeQuestion === initialActiveQuestion
      ? "select a question"
      : "create an option...";

  const optionsLeft =
    5 -
    options.filter((option) => option.questionsId === activeQuestion.id).length;

  const questionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestionInput(e.currentTarget.value);
  };

  const questionSubmit = () => {
    if (questionInput.length > 70) {
      setQuestionInput("your question is too long");
      return;
    }
    if (questions.length === 15) {
      setQuestionInput("15 questions max");
      return;
    }
    setQuestions([
      ...questions,
      { question: questionInput, id: Guid.create(), isUndefined: false },
    ]);
    setQuestionInput("");
  };

  const questionDelete = (id: Guid) => {
    if (
      questions.filter((question) => question.id === id)[0] === activeQuestion
    ) {
      setActiveQuestion(initialActiveQuestion);
    }
    setOptions(options.filter((option) => option.questionId !== id));
    setQuestions(questions.filter((question) => question.id !== id));
  };

  const questionClick = (question: IQuestion) => {
    setActiveQuestion(question);
  };

  const optionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOptionInput(e.target.value);
  };

  const optionSubmit = () => {
    if (optionsLeft === 0 || activeQuestion.isUndeifned) {
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

  const surveyNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSurveyName(e.target.value);
  };

  const submitSurvey = async () => {
    const survey = {
      name: surveyName,
      questions: JSON.stringify(
        questions.map((questionItem) => {
          return {
            question: questionItem.question,
            options: options
              .filter((option) => option.questionsId === questionItem.id)
              .map((optionItem) => optionItem.option),
          };
        })
      ),
    };

    await axios.post("http://localhost:8000/surveys/", survey);
    history.push("/list");
  };

  return (
    <div className="surveyCreator">
      <div className="surveyCreator-name">
        <h1>Create a new survey </h1>
        <input
          placeholder="enter survey name..."
          value={surveyName}
          onChange={surveyNameChange}
        />
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
            placeholder={optionPlaceholder}
            value={
              optionsLeft === 0 || activeQuestion.isUndeifned ? "" : optionInput
            }
            onChange={optionChange}
          />
          <span
            className="btn"
            style={{ marginLeft: 10, marginRight: 10 }}
            onClick={optionSubmit}
          >
            create
          </span>
          <strong style={{ fontSize: "x-small" }}>
            {activeQuestion.question}
          </strong>
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
      <div style={{ display: "flex" }}>
        <h2 className="btn" style={{ padding: 10 }} onClick={submitSurvey}>
          create the survey
        </h2>
      </div>
    </div>
  );
};

export default Create;