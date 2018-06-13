import React, { Component } from 'react'
import '../css/Sign_up.css'
import AuthService from '../api/AuthService'
import WithAuth from '../api/WithAuth'
import {get_user, delete_user, update_user} from '../api/UserAPI'
import { Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

class EditProfile extends Component {
  constructor(){
    super()
    this.Auth = new AuthService()
    this.state={
      initialForm: {
        first_name: '',
        last_name: '',
        email: '',
        zipcode: '',
        dob:'',
        password: ''
      }
    }
  }

  handleChange(e){
    this.setState({ [e.target.name]:
    e.target.value })
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

  canBeSubmitted() {
    let form = this.state
    return (
      form.first_name.length > 0 &&
      form.last_name.length > 0 &&
      form.email.length > 0 &&
      form.zipcode > 4 &&
      form.dob.length > 0 &&
      form.password.length > 6
    )
  }

  componentWillMount() {
    get_user(this.props.userId)
    .then(APIuserinfo => {
      this.setState({
        initialForm:APIuserinfo.user
      })
    })
  }

  render() {
    const isEnabled=this.canBeSubmitted()
    return (
      <div className="center">
        <div className="card">
          <h1>Edit Profile</h1><br/>
          <form
            onSubmit={this.handleFormSubmit.bind(this)}
          >
          <input
            className="form-item"
            placeholder={this.state.user.first_name}
            name="first_name"
            type="text"
            onChange={this.handleChange.bind(this)}
            required
          />

          <input
            className="form-item"
            placeholder={this.state.user.last_name}
            name="last_name"
            type="text"
            onChange={this.handleChange.bind(this)}
            required
          />

          <input
            className="form-item"
            placeholder={this.state.user.email}
            name="email"
            type="email"
            onChange={this.handleChange.bind(this)}
            required
          />

          <input
            className="form-item"
            placeholder={this.state.user.zipcode}
            name="zipcode"
            type="text"
            onChange={this.handleChange.bind(this)}
            required
          />

          <input
            className="form-item"
            placeholder={this.state.user.dob}
            name="dob"
            type="date"
            onChange={this.handleChange.bind(this)}
            required
          />

          <input
            className="form-item"
            placeholder="password"
            name="password"
            type="password"
            onChange={this.handleChange.bind(this)}
            required
          />

          <input
            className="form-submit"
            value="Update"
            type="submit"
          />

          </form>
        </div>
      </div>
    );
  }
}

export default WithAuth(EditProfile);
