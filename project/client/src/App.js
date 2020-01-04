import React, { Component } from "react";
import Home from "./components/Home";
// import Main from "./components/Mainpage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      // <div className="app">
      //   <Home/>
      // </div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
