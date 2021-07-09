import React from "react";
import { App } from "./App";

export class LoginForm extends React.Component {
  user;
  isTrue = false;
  constructor(props, user) {
    super(props);
    this.state = {
      inputLoginValue: "",
      inputPasswordValue: "",
      isAllowed: false,
    };
    this.user = user = { login: "admin", password: "admin" };
  }
  setLogin = (event) => {
    this.setState({ inputLoginValue: event.target.value });
  };
  setPassword = (event) => {
    this.setState({ inputPasswordValue: event.target.value });
  };
  checkLoginValidation = () => {
    if (
      this.state.inputLoginValue === this.user.login &&
      this.state.inputPasswordValue === this.user.password
    ) {
      this.setState({ isAllowed: true });
    } else {
      console.error("YOU ARE NOT AN ADMIN!!");
    }
  };
  userLogOut = () => {
    this.setState({ isAllowed: false });
  };
  render() {
    if (this.state.isAllowed === true) {
      return (
        <App
          loginValue={this.state.inputLoginValue}
          loginPassword={this.state.inputPasswordValue}
          logOut={this.userLogOut}
        />
      );
    } else {
      return (
        <>
          <div className="container">
            <input
              className="form-login"
              type="text"
              placeholder="Login"
              onChange={this.setLogin}
            />
            <input
              className="form-password"
              type="text"
              placeholder="Password"
              onChange={this.setPassword}
            />{" "}
            <br />
            <button onClick={this.checkLoginValidation}>Login</button>
          </div>
        </>
      );
    }
  }
}
