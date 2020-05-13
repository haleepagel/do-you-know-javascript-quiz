import React, { Component } from "react";
import Quiz from "./Quiz.js";
import { connect } from "react-redux";

class QuizContainer extends Component {
  render() {
    const questions = this.props.questions;
    const createQuestions = questions.map((obj) => {
      return (
        <>
          <hr></hr>
          <h5 className="quizQuestion">{obj.question}</h5>
          <br></br>
          <div class="quizQuestionContainer">
            <button
              class="box"
              value={obj["1"]}
              onClick={(e) => {
                if (e.target.value === obj["answer"]) {
                  alert("That's correct!");
                } else alert("Sorry, try again!");
              }}
            >
              {obj["1"]}
            </button>
            <button
              class="box"
              value={obj["2"]}
              onClick={(e) => {
                if (e.target.value === obj["answer"]) {
                  alert("That's correct!");
                } else alert("Sorry, try again!");
              }}
            >
              {obj["2"]}
            </button>
            <button
              class="box"
              value={obj["3"]}
              onClick={(e) => {
                if (e.target.value === obj["answer"]) {
                  alert("That's correct!");
                } else alert("Sorry, try again!");
              }}
            >
              {obj["3"]}
            </button>
            <button
              class="box"
              value={obj["4"]}
              onClick={(e) => {
                if (e.target.value === obj["answer"]) {
                  alert("That's correct!");
                } else alert("Sorry, try again!");
              }}
            >
              {obj["4"]}
            </button>
          </div>
        </>
      );
    });

    return (
      <div className="quiz">
        <div className="quiz">
          <Quiz />
          <div>start {createQuestions} end</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    scoreboard: state.scoreboard.scoreboard,
    questions: state.scoreboard.questions,
  };
};

export default connect(mapStateToProps)(QuizContainer);
