import React, { Component } from 'react'
import '../css/Sign_up.css'
import AuthService from '../api/AuthService'
import WithAuth from '../api/WithAuth'
import { get_user, update_user } from '../api/UserAPI'
import { Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

class EditProfile extends Component {
  constructor(props){
    super(props)
    this.Auth = new AuthService()
    this.state={
      user: {
        id: '',
        first_name: '',
        last_name: '',
        email: '',
        zipcode: '',
        dob:'',
        password: ''
      }, newUser: {}
    }
  }

  handleChange(e){
    this.setState({ newUser.[e.target.name]:
    e.target.value })
  }

  handleFormSubmit(e){
    e.preventDefault()
    debugger
    update_user(this.state.user)
    .then(res =>{
      this.props.history.replace('/Feed')
    })
    .catch(err =>{ alert(err) })
  }


  componentWillMount() {
    get_user(this.props.userId)
    .then(APIuserinfo => {
      this.setState({
        user: APIuserinfo.user,
        id: this.props.userId
      })

    })
  }

  render() {
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

          />

          <input
            className="form-item"
            placeholder={this.state.user.last_name}
            name="last_name"
            type="text"
            onChange={this.handleChange.bind(this)}
          />

          <input
            className="form-item"
            placeholder={this.state.user.email}
            name="email"
            type="email"
            onChange={this.handleChange.bind(this)}
          />

          <input
            className="form-item"
            placeholder={this.state.user.zipcode}
            name="zipcode"
            type="text"
            onChange={this.handleChange.bind(this)}
          />

          <input
            className="form-item"
            placeholder={this.state.user.dob}
            name="dob"
            type="date"
            onChange={this.handleChange.bind(this)}
          />

          <input
            className="form-item"
            placeholder={this.state.user.password}
            name="password"
            type="password"
            onChange={this.handleChange.bind(this)}
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
