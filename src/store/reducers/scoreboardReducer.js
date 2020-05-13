import { Switch } from "react-router-dom";
import { state } from "fs";

const initialState = {
  questions: [
    {
      question: "What is JavaScript?",
      1: "A computer programming language",
      2: "An alien language",
      3: "Another name for Java",
      4: "A robot name",
      answer: "A computer programming language",
    },
    {
      question: "What year was JavaScript introduced?",
      1: "1992",
      2: "1993",
      3: "1994",
      4: "1995",
      answer: "1995",
    },
    {
      question: "Which browser was JavaScript developed for?",
      1: "Netscape Navigator",
      2: "Safari",
      3: "Internet Explorer",
      4: "Mosaic",
      answer: "Netscape Navigator",
    },

    {
      question:
        "What is printed in the console after the following code runs? console.log(false === 'false')",
      1: "false",
      2: "'false'",
      3: "1",
      4: "true",
      answer: "false",
    },
    {
      question:
        "What is printed in the console after the following code runs? console.log(true + false / true + true)",
      1: "1",
      2: "NaN",
      3: "0",
      4: "2",
      answer: "2",
    },
    {
      question:
        "What is the built-in array method used to remove an element at index 0",
      1: "splice(0,1)",
      2: "pop()",
      3: "shift()",
      4: "push()",
      answer: "shift()",
    },
    {
      question:
        "What is printed in the console after the following code runs? const flowers = [ 'rose', 'lily', 'peony', 'jasmine']; console.log(flowers.pop()); ",
      1: "[ 'rose', 'lily', 'peony', 'jasmine']",
      2: "jasmine",
      3: "3",
      4: "rose",
      answer: "jasmine",
    },
    // {
    //   question:
    //     "What is the correct JavaScript syntax to change the content of this HTML tag? <div id='quiz'>Hello, World!</div>",
    //   1: "document.getElement('div').innerHTML = 'Heyyy, Earth!'",
    //   2: "document.getElementById('div').innerHTML = 'Heyyy, Earth!'",
    //   3: "#quiz.innerHTML = 'Heyyy, Earth!'",
    //   4: "document.getElementById('quiz').innerHTML = 'Heyyy, Earth!'",
    //   answer: "document.getElementById('quiz').innerHTML = 'Heyyy, Earth!'",
    // },
    // {
    //   question: "How do you write a comment in JavaScript?",
    //   1: "{/* this is a JS comment */}",
    //   2: "// this is a JS comment",
    //   3: "<!-- this is a JS comment -->",
    //   4: "/ this is a JS comment */",
    //   answer: 2,
    // },
    // {
    //   question: "How do you round the number 3.50 to the nearest integer?",
    //   1: "math.round(3.50)",
    //   2: "Math.round(3.50)",
    //   3: "Math.down(3.50)",
    //   4: "Math.rnd(3.50)",
    //   answer: 2,
    // },
    {
      question: "How do you declare a variable in JavaScipt?",
      1: "string greatestBaseballTeam = 'Anaheim Angels'",
      2: "var greatestBaseballTeam: 'Anaheim Angels'",
      3: "let greatestBaseballTeam = 'Anaheim Angels'",
      4: "greatestBaseballTeam = 'Anaheim Angels'",
      answer: "let greatestBaseballTeam = 'Anaheim Angels'",
    },
    {
      question: "Choose the object.",
      1: "'object'",
      2: "08Jec7",
      3: "[ 5, 6, 7, 8 ]",
      4: "true",
      answer: "[ 5, 6, 7, 8 ]",
    },
    {
      question: "What is this? () => {}",
      1: "A pure function",
      2: "An anonymous function",
      3: "An arrow function",
      4: "A Java function",
      answer: "An arrow function",
    },
  ],
  currentQuizQuestions: [],
  scoreboard: [],
};

const scoreboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_QUESTIONS":
      return { ...state };
    case "NEW_QUIZ":
      return {
        ...state,
        currentQuizQuestions: state.questions.filter(() => {
          for (let i = 0; i < state.questions.length; i++) {
            if (i === 0 || 2 || 4 || 6 || 12) return state.questions[i];
          }
        }),
      };
    default:
      return state;
  }
};

export default scoreboardReducer;
