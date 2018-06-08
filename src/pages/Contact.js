import React, { Component } from 'react';
import '../css/Contact.css';
import AuthService from '../api/AuthService';

class Contact extends Component {

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
                     this.state.dob,
                     this.state.password)
    .then(res =>{
      this.props.history.replace('/Feed')
    })
    .catch(err =>{ alert(err) })
  }

  render() {
    return (
      <div className="center">
        <div className="card">

          <form
            onSubmit={this.handleFormSubmit.bind(this)}
          >
          <input
            className="form-item"
            placeholder="Enter Full Name"
            name="first_name"
            type="text"
            onChange={this.handleChange.bind(this)}
          />

          <input
            className="form-item"
            placeholder="Enter Email"
            name="last_name"
            type="text"
            onChange={this.handleChange.bind(this)}
          />
            </form>
          <input
              className="comment"
              placeholder="Enter Comments"
              name="comment"
              type="textarea"
              onChange={this.handleChange.bind(this)}

          />
          <br/>
          <input
            className="form-submit"
            value="Submit"
            type="submit"
          />



        </div>
      </div>
    );
  }
}

export default Contact;
