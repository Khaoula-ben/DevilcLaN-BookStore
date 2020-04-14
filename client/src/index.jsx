import React, { Fragment } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import Auth from "./components/Pages/auth";
import Register from "./components/Pages/signup";
import Login from "./components/Pages/login";
import Book from "./components/Books/book"
import Todo from "./components/Todo/todo";


import swal from "sweetalert";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      connected: localStorage["connected"]
        ? JSON.parse(localStorage["connected"])
        : false,
      user: {}
    };
  }

  _logoutUser = () => {
    let appState = {
      isLoggedIn: false,
      user: {}
    };

    localStorage["appState"] = JSON.stringify(appState);
    this.setState(appState);
  };

  render() {
    return (
      <Fragment>
        <Switch data="data">
          <Route
            path="/login"
            render={props => <Login {...props} loginUser={this._loginUser} />}
          />

          <Route
            path="/register"
            render={props => (
              <Register {...props} registerUser={this._registerUser} />
            )}
          />

          <Route
            path="/book"
            render={props => (
              <Book {...props} registerUser={this._registerUser} />
            )}
          />

          <Route
            exact
            path="/"
            render={props => (
              <Auth {...props} registerUser={this._registerUser} />
            )}
          />

          <Route
            path="/logout"
            render={props => <Login {...props} logoutUser={this._logoutUser} />}
          />
        </Switch>
      </Fragment>
    );
  }
}

const AppContainer = withRouter(props => <App {...props} />);
render(
  <HashRouter>
    <AppContainer />
  </HashRouter>,
  document.getElementById("main")
);
