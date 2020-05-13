import React from "react";

const Scoreboard = () => {
  return (
    <div className="scoreboard">
      {" "}
      <h4>Scoreboard</h4>
      <h6>The results are in...</h6>
      <div className="result">
        <p>__name here__ got 5/5 correct!</p>
      </div>
      <div className="result">
        <p>__name here__ got 4/5 correct!</p>
      </div>
      <div className="result">
        <p>__name here__ got 4/5 correct!</p>
      </div>
    </div>
  );
};
export default Scoreboard;
