import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
	state = {
		credentials: {
      username: '',
      password: ''
		}
	};
	handleChange = e => {
		this.setState({
			credentials: {
				...this.state.credentials,
				[e.target.name]: e.target.value
			}
		});
	};
	login = e => {
		e.preventDefault();
		axiosWithAuth()
    .post('https://chore-tracker-build.herokuapp.com/api/auth/login', this.state.credentials)
    .then(res => {
      console.log(res.data);
      localStorage.setItem('token', res.data.token);
      this.props.history.push('');
    })
    .catch(err => console.log('Access denied', err.response));
};
  render() {
    if (localStorage.getItem("token")) return <Redirect to="" />;
    return (
      <div>
        <h1>Chore Tracker!</h1>
        <div className="form">
          <form>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              placeholder="username"
              autoComplete="username"
              onChange={this.handleChange}
            />

            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              placeholder="password"
              autoComplete="current-password"
              onChange={this.handleChange}
            />
        
            <button type="submit" onClick={this.login}>
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
