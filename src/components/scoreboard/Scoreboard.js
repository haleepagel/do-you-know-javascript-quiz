import React from "react";

const Scoreboard = () => {
  return (
    <div className="scoreboard-list section">
      {" "}
      Scoreboard Title
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">The results are in...</span>
          <p>score results from ___persons name here___</p>
          <p className="grey-text">I got 5/5 correct!</p>
        </div>
      </div>
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">The results are in...</span>
          <p>score results from ___persons name here___</p>
          <p className="grey-text">I got 4/5 correct!</p>
        </div>
      </div>
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">The results are in...</span>
          <p>score results from ___persons name here___</p>
          <p className="grey-text">I got 3/5 correct!</p>
        </div>
      </div>
    </div>
  );
};
export default Scoreboard;
