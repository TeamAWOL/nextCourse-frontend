import React, { Component } from 'react';
import '../css/CreateGroup.css';
import AuthService from '../api/AuthService';
import DollarRating from '../components/DollarRating';
import AddFriend from '../components/AddFriend';
import WithAuth from '../api/WithAuth'

class EditGroup extends Component {
    constructor(props){
      super(props)
      this.Auth = new AuthService()
      this.state={
        group_name: '',
        location:''
      }
    }

    handleChange(e){
      this.setState({ [e.target.name]: e.target.value })
    }

    handleFormSubmit(e){
      e.preventDefault()
      this.Auth.create(this.state.group_name,
                       this.state.price_range,
                       this.state.member_user_names,
                       this.state.location)
      .then(res =>{
        this.props.history.replace('/')
      })
      .catch(err =>{ alert(err) })
    }


    render() {
      return (
        <div className="form-body">
          <div className="card">
            <h1>Create a Group</h1>
            <form onSubmit={this.handleFormSubmit.bind(this)}>
            <br/>
              <div id="group-details" className="col">
                <input
                  className="form-item1"
                  placeholder="Enter Group Name"
                  name="name"
                  type="text"
                  onChange={this.handleChange.bind(this)}
                />

                <input
                  className="form-item1"
                  placeholder="Enter Preferred Location"
                  name="location"
                  type="text"
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <AddFriend/>
              <br/>
              <DollarRating/>
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

    export default WithAuth(EditGroup);
