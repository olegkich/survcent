import * as React from "react";
import { Guid } from "guid-typescript";

export interface QuestionItemProps {
  question: { question: string; id: Guid };
  onDelete: (id: Guid) => void;
  onClick: (question: { question: string; id: Guid }) => void;
}

const QuestionItem: React.SFC<QuestionItemProps> = (props) => {
  const handleClick = (question: { question: string; id: Guid }) => {
    props.onClick(question);
  };

  const handleDelete = (id: Guid) => {
    props.onDelete(id);
  };

  return (
    <div className={"questions-item"}>
      <span onClick={() => handleClick(props.question)}>
        {props.question.question}{" "}
      </span>
      <span
        style={{ marginLeft: "10px", marginRight: "5px" }}
        onClick={() => handleDelete(props.question.id)}
      >
        x
      </span>
    </div>
  );
};

export default QuestionItem;
