import React from "react";
import Button from "./Button/Button";

const buttons = (props) =>
  props.buttons.map((button, index) => {
    return <Button
      key={index}
      numberOrSign={button} />;
  });

export default buttons;
