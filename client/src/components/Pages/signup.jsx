import React, { Component } from "react";
import { Link } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      created: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      first_name: event.target.Fname.value,
      last_name: event.target.Lname.value,
      adress: event.target.adress.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      username: event.target.user.value,
      password: event.target.password.value
    };
    console.log("data==================> ", data);
    fetch(`http://localhost:5000/auth/signup`, {
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
        this.setState({ created: true });
        this.props.history.push("/login");
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
              <h5>S'inscrire</h5>

              <div className="input-field with-icon">
                <span className="icon">
                  <i className="fa fa-pencil"></i>
                </span>
                <input type="text" name="Fname" id="Fname" />
                <label htmlFor="Fname">First name</label>
              </div>

              <div className="input-field with-icon">
                <span className="icon">
                  <i className="fa fa-pencil"></i>
                </span>
                <input type="text" name="Lname" id="Lname" />
                <label htmlFor="Lname">Last name</label>
              </div>

              <div className="input-field with-icon">
                <span className="icon">
                  <i className="fa fa-home"></i>
                </span>
                <input type="text" name="adress" id="adress" />
                <label htmlFor="adress">Adress</label>
              </div>

              <div className="input-field with-icon">
                <span className="icon">
                  <i className="fa fa-envelope"></i>
                </span>
                <input type="text" name="email" id="email" />
                <label htmlFor="email">Email</label>
              </div>


              <div className="input-field with-icon">
                <span className="icon">
                  <i className="fa fa-phone"></i>
                </span>
                <input type="text" name="phone" id="phone" />
                <label htmlFor="phone">Phone</label>
              </div>

              <div className="input-field with-icon">
                <span className="icon">
                  <i className="fa fa-user"></i>
                </span>
                <input type="text" name="user" id="user" />
                <label htmlFor="user">User name</label>
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
                  Créer un compte{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
