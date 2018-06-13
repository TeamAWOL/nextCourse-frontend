import React, { Component } from 'react';
import '../css/CreateGroup.css';
import DollarRating from '../components/DollarRating';
import AddFriend from '../components/AddFriend';
import {update_user_group, get_user_group} from '../api/GroupAPI';
import {get_group_friends, delete_group_friend} from '../api/FriendAPI';
import WithAuth from '../api/WithAuth'
import { Redirect } from 'react-router-dom'
import { Button } from 'react-bootstrap'


class EditGroup extends Component {
  constructor(props){
    super(props)
    this.state={
      form: {
        id:this.props.groupId,
        name: '',
        location:'',
        price_range:''
        },
        POSTsuccess: false,
        group:{},
        friends:[]
    }
  }

  componentWillMount() {
    get_user_group(this.props.groupId)
    .then(APIgroupinfo => {
      this.setState({
        group:APIgroupinfo.group
      })
    })

    get_group_friends(this.props.groupId)
    .then(APIgroupfriends=> {
      this.setState({
        friends:APIgroupfriends.friends
      })
    })
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
    update_user_group(this.state.form)
    .then(resp => {
      this.setState({
        POSTsuccess: true
      })
    })
  }

  handleFriendDelete(e) {
    delete_group_friend(e.target.name)
  }

  render() {
    console.log("AY " + this.props.groupId);
    return (
      <div className="form-body">
        <div className="card">
          <h1>Edit Group</h1>
          <form>
          <br/>
            <div id="group-details" className="col">
              <input
                className="form-item1"
                placeholder={this.state.group.name}
                name="name"
                type="text"
                onChange={this.handleInput.bind(this)}
              />
              <input
                className="form-item1"
                placeholder={this.state.group.location}
                name="location"
                type="text"
                onChange={this.handleInput.bind(this)}
              />
            </div>
            <DollarRating handler={this.handlePriceRangeChange.bind(this)}/>
            {this.state.friends.map((friend, index) =>{
              return (
                <div>
                  <input
                    className="form-item"
                    defaultValue={friend.name}
                    placeholder="Name"
                    name="name"
                    type="text"
                    id="friend"
                  />
                  <input
                    className="form-item"
                    defaultValue={friend.email}
                    placeholder="Email"
                    name="email"
                    type="email"
                    id="friend"
                  />
                  <input
                    className="form-item"
                    defaultValue={friend.preference}
                    placeholder="Preference"
                    name="preference"
                    type="text"
                    id="friend"
                  />
                  <button href="../EditGroup" name={friend.id} onClick={this.handleFriendDelete.bind(this)}>Delete</button>
                </div>
              )
            })}
            <AddFriend updateFriends={this.updateFriends}/>
            <Button
              className="form-submit" onClick={this.handleSubmit.bind(this)}>
              Update
            </Button>
          </form>
          {this.state.POSTsuccess && <Redirect to={"/feed"} /> }
        </div>
      </div>
    );
  }
}

export default WithAuth(EditGroup);
