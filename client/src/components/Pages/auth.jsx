import React, { Component } from 'react';

import M from "materialize-css";

import { Link } from "react-router-dom";


class Auth extends Component {


	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
			user: {}
		};
	}


	componentDidMount() {
		M.AutoInit();

		if (this.state.isLoggedIn) {
			this.props.history.push('/home')
		}
	}

	render() {
		return (
			<div id="page">
				<div className="content-container">
					<h2 className="text-center"> Welcome to your Books Store </h2>
					<br />
					<Link to='/login' className="btn btn-block waves-effect">
						Signin
					</Link>
					<br />
					<br />
					<Link to='/register' className="btn btn-block waves-effect">
						Signup
					</Link>
					<br />
					<Link to='/book' className="waves-effect">
						Books
					</Link>
				</div>
			</div>
		);
	}
}

export default Auth;