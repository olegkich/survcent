import * as React from "react";
import "./Popup.css";

export interface PopupProps {}

const Popup: React.SFC<PopupProps> = () => {
  return (
    <div className="popup-bg">
      <div className="popup-container">
        <h1>test</h1>
      </div>
    </div>
  );
};

export default Popup;
