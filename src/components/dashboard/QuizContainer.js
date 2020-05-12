import React, { Component } from "react";
import Quiz from "./Quiz.js";

class QuizContainer extends Component {
  render() {
    return (
      <div className="quiz">
        <div className="row">
          <div className="col s12 m6">
            <p>Scoreboard used to be here but now this is just text.</p>
          </div>
          <div className="col s12 m5 offset-m1">
            <Quiz />
          </div>
        </div>
      </div>
    );
  }
}
export default QuizContainer;
