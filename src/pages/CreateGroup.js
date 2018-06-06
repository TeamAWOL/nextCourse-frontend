import React, { Component } from 'react';
import '../css/CreateGroup.css';
import AuthService from '../api/AuthService';
import DollarRating from '../components/DollarRating';
import AddFriend from '../components/AddFriend';
import {add_user_group} from '../api/GroupAPI';
import WithAuth from '../api/WithAuth'
import { Redirect } from 'react-router-dom'

class CreateGroup extends Component {
  constructor(props){
    super(props)


    this.state={
      form: {
        name: '',
        location:'',
        price_range:''
        },
        POSTsuccess: false,
    }
  }

  handlePriceRangeChange(e){
     let {form} = this.state

     form['price_range'] = e
     this.setState({form})
  }

  handleInput(e){
    let {form} = this.state
    form[e.target.name] = e.target.value
    this.setState({ form })
  }

  handleSubmit(e){
    add_user_group(this.props.userId, this.state.form)
    .then(resp => {
      this.setState({
        POSTsuccess: true
      })
    })


    // e.preventDefault()
    // this.Auth.create(this.state.group_name,
    //                  this.state.price_range,
    //                  this.state.member_user_names,
    //                  this.state.location)
    // .then(res =>{
    //   this.props.history.replace('/')
    // })
    // .catch(err =>{ alert(err) })
  }

  render() {
    return (
      <div className="form-body">
        <div className="card">
          <h1>Create a Group</h1>
          <form>
          <br/>
            <div id="group-details" className="col">
              <input
                className="form-item1"
                placeholder="Enter Group Name"
                name="name"
                type="text"
                onChange={this.handleInput.bind(this)}
              />

              <input
                className="form-item1"
                placeholder="Enter Preferred Location"
                name="location"
                type="text"
                onChange={this.handleInput.bind(this)}
              />
            </div>
            <AddFriend/>
            <br/>
            <DollarRating handler={this.handlePriceRangeChange.bind(this)}/>
            <div
              className="form-submit" onClick={this.handleSubmit.bind(this)}>
              Save
            </div>
          </form>
          {this.state.POSTsuccess && <Redirect to={"/feed"} /> }
        </div>
      </div>
    );
  }
}

export default WithAuth(CreateGroup);
