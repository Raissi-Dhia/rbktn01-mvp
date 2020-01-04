import React, { Component } from "react";
import Login from "./Login";
import Register from "./Register";
class Home extends Component {
  render() {
    const mystyle = {
        color: "black",
        backgroundColor: "white",
        padding: "10px",
        fontFamily: "Arial",
        margin: 100
      };
    return (
       
      <div>
          <h1 style={mystyle}>Welcome to Posters </h1>
         
          <h1>Sign in</h1>
        <Login />
          <h1>Sign up</h1>
        <Register />
      </div>
    );
  }
}

export default Home;