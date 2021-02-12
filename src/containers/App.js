import React, { Component } from "react";
import Display from "../components/Display/Display";
import Buttons from "../components/Buttons/Buttons";
import './App.css';

class App extends Component {
  state = {
    buttons: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
    ],
  };

  render() {
    let buttons = <Buttons buttons={this.state.buttons} />;
    return (
      <div className="App">
        <h1>Calculator</h1>
        <Display />
        {buttons}
      </div>
    );
  }
}

export default App;
