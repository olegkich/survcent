import * as React from "react";
import "./List.css";
import SurveyCard from "../../Components/SurveyCard/SurveyCard";
import Popup from "../../Components/Popup/Popup";

export interface ListProps {}

const List: React.SFC<ListProps> = () => {
  const [popup, setPopup] = React.useState(false);

  const renderPopup = () => {
    return popup ? <Popup /> : null;
  };

  return (
    <div className="list">
      {renderPopup()}
      <h1>Your surveys:</h1>
      <div className="your-survey-container">
        <div
          className="add-survey"
          onClick={() => {
            setPopup(true);
            console.log(popup);
          }}
        >
          +
        </div>
        <SurveyCard />
      </div>
    </div>
  );
};

export default List;
