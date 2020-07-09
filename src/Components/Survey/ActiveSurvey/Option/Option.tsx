import * as React from "react";
import "./Option.css";

export interface OptionProps {
  option: any;
  onClick: () => void;
}

const Option: React.SFC<OptionProps> = (props) => {
  console.log(props.option, "option");
  return (
    <div className="option" onClick={props.onClick}>
      {props.option.options}
    </div>
  );
};

export default Option;
