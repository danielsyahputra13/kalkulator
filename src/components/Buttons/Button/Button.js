import React from "react";
import "./Button.css";

const button = (props) => {
  return (
    <div className="Button">
      <p>{ props.numberOrSign }</p>
    </div>
  );
}

export default button