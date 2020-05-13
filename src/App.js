import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.js";
import QuizContainer from "./components/dashboard/QuizContainer.js";
import Scoreboard from "./components/scoreboard/Scoreboard.js";
import SignIn from "./components/auth/SignIn.js";
import SignUp from "./components/auth/SignUp.js";
import Homepage from "./components/Homepage.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/quiz" component={QuizContainer} />
            <Route exact path="/scoreboard" component={Scoreboard} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/" component={Homepage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
