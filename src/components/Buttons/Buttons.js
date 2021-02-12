import React from "react";
import Button from "./Button/Button";

const buttons = (props) => {
  let btns = props.buttons.map((button, index) => {
    return <Button key={index} numberOrSign={button} />;
  });

  return (
    <div className="Buttons">
      {btns}
    </div>
  )
}
  
  

export default buttons;
