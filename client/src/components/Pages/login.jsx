import React, { Component } from "react";
import { Link } from "react-router-dom";

import swal from "sweetalert";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      connected: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = {
      username: event.target.user.value,
      password: event.target.password.value
    };
    console.log("data==================> ", data);

    fetch(`http://localhost:5000/auth/signin`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data ', data);

        JSON.stringify(data);
        let user = { id: data.id, token: data.token };
        localStorage.setItem('user', JSON.stringify(user));
        this.state.connected = true;
        this.props.history.push("/book");
      });

    event.target.password.value = '';
    event.target.user.value = '';
  }

  render() {
    return (
      <div id="page">
        <div className="arrow-left-prev">
          <Link to="/" className="waves-effect">
            <i className="fa fa-angle-left"></i>
          </Link>
        </div>

        <div className="content-container ">
          <form
            onSubmit={this.handleSubmit}
            className="tg-formtheme tg-formtrip"
          >
            <div className="page-block login animated fadeInRight">
              <h5>Login</h5>

              <div className="input-field with-icon">
                <span className="icon">
                  <i className="fa fa-user"></i>
                </span>
                <input type="text" name="user" id="user" />
                <label htmlFor="email">Username</label>
              </div>
              <div className="input-field with-icon">
                <span className="icon">
                  <i className="fa fa-key"></i>
                </span>
                <input type="password" name="password" id="password" />
                <label htmlFor="password">Password</label>
              </div>

              <div className="button-field">
                <button className="btn blue block margin-bottom">
                  {" "}
                  Se connecter{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
