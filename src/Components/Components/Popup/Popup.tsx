import * as React from "react";
import "./Popup.css";

export interface PopupProps {}

const Popup: React.SFC<PopupProps> = (props) => {
  return (
    <div className="popup-bg">
      <div className="popup-container">{props.children}</div>
    </div>
  );
};

export default Popup;
