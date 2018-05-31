import React, { Component } from 'react';
import '../css/Login.css';
import AuthService from '../api/AuthService';

class Sign_up extends Component {

  constructor(){
    super()
    this.Auth = new AuthService()
    this.state={
      first_name: '',
      last_name: '',
      zipcode: '',
      dob:'',
      email: '',
      password: ''
    }
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFormSubmit(e){
    e.preventDefault()
    this.Auth.create(this.state.first_name,
                     this.state.last_name,
                     this.state.email,
                     this.state.zipcode,
                     this.dob,
                     this.state.password)
    .then(res =>{
      this.props.history.replace('/')
    })
    .catch(err =>{ alert(err) })
  }

  render() {
    return (
      <div className="center">
        <div className="card">
          <h1>Sign Up</h1>
          <form
            onSubmit={this.handleFormSubmit.bind(this)}
          >
          <input
            className="form-item"
            placeholder="First Name goes here..."
            name="first_name"
            type="text"
            onChange={this.handleChange.bind(this)}
          />

          <input
            className="form-item"
            placeholder="Last Name goes here..."
            name="last_name"
            type="text"
            onChange={this.handleChange.bind(this)}
          />

          <input
              className="form-item"
              placeholder="email goes here..."
              name="email"
              type="text"
              onChange={this.handleChange.bind(this)}

          />

          <input
              className="form-item"
              placeholder="zipcode goes here..."
              name="zipcode"
              type="text"
              onChange={this.handleChange.bind(this)}

          />

          <input
              className="form-item"
              placeholder="Birthday goes here..."
              name="dob"
              type="date"
              onChange={this.handleChange.bind(this)}
          />

          <input
              className="form-item"
              placeholder="Password goes here..."
              name="password"
              type="text"
              onChange={this.handleChange.bind(this)}
          />

          <input
              className="form-submit"
              value="Submit"
              type="submit"
          />

          </form>
          <a href="/Login"> Login</a><br />
        </div>
      </div>
    );
  }
}

export default Sign_up;
