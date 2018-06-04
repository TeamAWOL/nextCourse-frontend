import React, { Component, Form, FormInput } from 'react';
import '../css/CreateGroup.css';
import AuthService from '../api/AuthService';
import DollarRating from '../components/DollarRating';
import AddFriend from '../components/AddFriend';


class CreateGroup extends Component {

  constructor(props){
    super(props)
    this.Auth = new AuthService()
    this.state={
      group_name: '',
      member_user_names: '',
      location:'',
    }
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFormSubmit(e){
    e.preventDefault()
    this.Auth.create(this.state.group_name,
                     this.state.price,
                     this.state.member_user_names,
                     this.state.location)
    .then(res =>{
      this.props.history.replace('/')
    })
    .catch(err =>{ alert(err) })
  }

  render() {
    return (
      <div className="center">
        <div className="card">
          <h1>Create New Group</h1>
          <form
            onSubmit={this.handleFormSubmit.bind(this)}
          >
        <br/>

          <input
            className="form-item"
            placeholder="Group Name"
            name="group_name"
            type="text"
            onChange={this.handleChange.bind(this)}
          />

          <input
              className="form-item"
              placeholder="Preferred Location"
              name="location"
              type="tex t"
              onChange={this.handleChange.bind(this)}
          />

          <DollarRating/>
          <br/>
          <AddFriend/>
          <br/>
          <input
              className="form-submit"
              value="Save"
              type="submit"
          />
          </form>
        </div>

      </div>
    );
  }
}

export default CreateGroup;
