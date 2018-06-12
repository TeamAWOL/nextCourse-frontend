import React, { Component } from 'react';
import '../css/Login.css';
import AuthService from '../api/AuthService';


class Login extends Component {
  constructor(){
    super()
    this.Auth = new AuthService()
    this.state={
      email: '',
      password: ''
    }
  }

  componentWillMount() {

    if (this.props.logout)
      if (this.props.logout === 'YES')
         this.Auth.logout()
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFormSubmit(e){
    e.preventDefault()
    this.Auth.login(this.state.email,this.state.password)
    .then(res =>{
      this.props.history.replace('/Feed')
    })
    .catch(err =>{ alert("Incorrect Email or Password") })
  }

  render() {
    return (
    <div>
      <div className="center">
        <div className="card">

          <form
            onSubmit={this.handleFormSubmit.bind(this)}
          >
            <input
              className="form-item"
              placeholder="Enter Email"
              name="email"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={this.state.email}
            />
            <input
              className="form-item"
              placeholder="Enter Password"
              name="password"
              type="password"
              onChange={this.handleChange.bind(this)}
              value={this.state.password}
            />
            <input
              className="form-submit"
              value="SUBMIT"
              type="submit"
            />
          </form>

           <a href="/sign_up"> Sign up</a><br />
        </div>
      </div>
    </div>

    );
  }
}

export default Login;
