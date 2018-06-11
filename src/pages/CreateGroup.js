import React, { Component } from 'react';
import '../css/CreateGroup.css';
import DollarRating from '../components/DollarRating';
import AddFriend from '../components/AddFriend';
import {add_user_group} from '../api/GroupAPI';
import {add_group_friend} from '../api/FriendAPI'
import WithAuth from '../api/WithAuth'
import { Redirect } from 'react-router-dom'
import { Button } from 'react-bootstrap'


class CreateGroup extends Component {
  constructor(props){
    super(props)
    this.state={
      form: {
        name: '',
        location:'',
        price_range:''
      },
      friends : [],
      POSTsuccess: false,
    }
  }

  handlePriceRangeChange(e){
    let {form} = this.state
    form['price_range'] = e
    this.setState({form})
    console.log(e);
  }

  handleInput(e){
    let {form} = this.state
    form[e.target.name] = e.target.value
    this.setState({ form })
  }


  createGroupFriend(groupId){

    var f = this.state.friends

    f.map((element, i) => {
      var objectKey = Object.keys(element)

      element[objectKey[0]] = element[objectKey[0]].reduce(function(result, item) {
          var key = Object.keys(item)[0];
          result[key] = item[key];
          return result;
      }, {});

    })

    var ff = f.reduce(function(result, item) {
        var key = Object.keys(item)[0];
        result[key] = item[key];
        return result;
    }, {});

    add_group_friend(groupId,ff)
       .then(resp => {
         this.setState({
           POSTsuccess: true
         })
    }).catch(err =>{ alert(err) })

  }

  handleSubmit(e){
    let groupId = null
    add_user_group(this.props.userId, this.state.form)
    .then(resp => {
      groupId = resp.addGroup.id
      this.createGroupFriend(groupId)
      this.setState({
        POSTsuccess: true
      })
    })

  }

  updateFriends = (val) => {
    this.setState({
      friends: val
    })
  }

  canBeSubmitted() {
    let { form } = this.state
    console.log(form.price_range);
    return (
      form.name.length > 0 &&
      form.location.length > 0 &&
      form.price_range
    )
  }

  render() {
    const isEnabled=this.canBeSubmitted()
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
                required
              />
              <input
                className="form-item1"
                placeholder="Enter Preferred Location"
                name="location"
                type="text"
                onChange={this.handleInput.bind(this)}
              />
            </div>
            <DollarRating handler={this.handlePriceRangeChange.bind(this)}/>

            <AddFriend updateFriends={this.updateFriends}/>

            <Button
              className="form-submit" disabled={!isEnabled} onClick={this.handleSubmit.bind(this)}>
              Submit
            </Button>
          </form>
          {this.state.POSTsuccess && <Redirect to={"/feed"} /> }
        </div>
      </div>
    );
  }
}

export default WithAuth(CreateGroup);
