import React, { Component } from 'react';
import {update_user,delete_user} from '../api/UserAPI';
import {get_user_groups,add_user_group,delete_user_group,update_user_group} from '../api/GroupAPI'
import {get_user_outings,add_user_outing,delete_user_outing,update_user_outing} from '../api/OutingAPI'
import {get_group_friends,add_group_friend,delete_group_friend,update_group_friend} from '../api/FriendAPI'

import WithAuth from '../api/WithAuth';

class Yelp extends Component {

//  this.props.userId is the loginUserId.  It is available to all pages with WithAuth wrapped page
// YELP TESTING ..  using below logic will get list of 5 resturant from backend
  handleYelpSubmit(e){

    e.preventDefault()

      this.props.history.replace('/Result')

  }


  handleUserDelete(e){
    e.preventDefault()
    let userId = 2
    delete_user(userId)
    .then(res =>{
      this.props.history.replace('/Yelp')
    })
    .catch(err =>{ alert(err) })
  }

  handleUserUpdate(e){
    e.preventDefault()
    let user = {id:1,first_name:"TESTtee"}
    update_user(user)
    .then(res =>{
      this.props.history.replace('/Yelp')
    })
    .catch(err =>{ alert(err) })
  }


  handleGroupGet(e){
    e.preventDefault()

    get_user_groups(this.props.userId)
    .then(res =>{
      this.props.history.replace('/Yelp')
    })
    .catch(err =>{ alert(err) })
  }

  handleGroupAdd(e){
    e.preventDefault()
    var group = {name:"TEST1",location:"Houston",price_range:1}
    add_user_group(this.props.userId,group)
    .then(res =>{
      this.props.history.replace('/Yelp')
    })
    .catch(err =>{ alert(err) })
  }

  handleGroupDelete(e){
    e.preventDefault()

    delete_user_group(4)
    .then(res =>{
      this.props.history.replace('/Yelp')
    })
    .catch(err =>{ alert(err) })
  }

  handleGroupUpdate(e){
    e.preventDefault()
    	var group = {"id":"13","location":"Change5"}
    update_user_group(group)
    .then(res =>{
      this.props.history.replace('/Yelp')
    })
    .catch(err =>{ alert(err) })
  }

  handleOutingGet(e){
    e.preventDefault()

    get_user_outings(this.props.userId)
    .then(res =>{
      this.props.history.replace('/Yelp')
    })
    .catch(err =>{ alert(err) })
  }

  handleOutingAdd(e){
    e.preventDefault()
    var outing = {"name":"TEST20uting","winner":"David"}
    add_user_outing(this.props.userId,outing)
    .then(res =>{
      this.props.history.replace('/Yelp')
    })
    .catch(err =>{ alert(err) })
  }

  handleOutingDelete(e){
    e.preventDefault()

    delete_user_outing(2)

    .then(res =>{
      this.props.history.replace('/Yelp')
    })
    .catch(err =>{ alert(err) })
  }

  handleOutingUpdate(e){
    e.preventDefault()
    var outing = {"id":"1","winner":"MandoMundo"}
    update_user_outing(outing)
    .then(res =>{
      this.props.history.replace('/Yelp')
    })
    .catch(err =>{ alert(err) })
  }

  handleFriendGet(e){
    e.preventDefault()

    get_group_friends(1)
    .then(res =>{
      this.props.history.replace('/Yelp')
    })
    .catch(err =>{ alert(err) })
  }

  handleFriendAdd(e){
    e.preventDefault()
    var friend1 = {name:"test",email:"friend@friend.com",preference:"Sushi"}
    var friend2 = {name:"test2",email:"friend@friend.com",preference:"Burger"}
    var friend3 = {name:"test2",email:"friend@friend.com",preference:"Taco"}
    var friends = {friend1,friend2,friend3}
    add_group_friend(1,friends)
    .then(res =>{
      this.props.history.replace('/Yelp')
    })
    .catch(err =>{ alert(err) })
  }

  handleFriendDelete(e){
    e.preventDefault()

    delete_group_friend(2)
    .then(res =>{
      this.props.history.replace('/Yelp')
    })
    .catch(err =>{ alert(err) })
  }

  handleFriendUpdate(e){
    e.preventDefault()
    	var friend = {"id":"3","name":"MandoMunto"}
    update_group_friend(friend)
    .then(res =>{
      this.props.history.replace('/Yelp')
    })
    .catch(err =>{ alert(err) })
  }

  render() {
    return (
      <div className="center">
        <div className="card">
          <h1>API TEST</h1>

          <form onSubmit={this.handleUserUpdate.bind(this)}>
            <input
              className="form-submit"
              value="User UPDATE"
              type="submit"
            />
          </form>
          <form onSubmit={this.handleUserDelete.bind(this)}>
            <input
              className="form-submit"
              value="User Delete"
              type="submit"
            />
          </form>
          <br/>

          <form onSubmit={this.handleGroupGet.bind(this)}>
            <input
              className="form-submit"
              value="GROUP GET"
              type="submit"
            />
          </form>
          <form onSubmit={this.handleGroupAdd.bind(this)}>
            <input
              className="form-submit"
              value="GROUP Create"
              type="submit"
            />
          </form>
          <form onSubmit={this.handleGroupDelete.bind(this)}>
            <input
              className="form-submit"
              value="GROUP Delete"
              type="submit"
            />
          </form>
          <form onSubmit={this.handleGroupUpdate.bind(this)}>
            <input
              className="form-submit"
              value="GROUP Update"
              type="submit"
            />
          </form>
          <br/>

          <form onSubmit={this.handleFriendGet.bind(this)}>
            <input
              className="form-submit"
              value="Friends GET TEST"
              type="submit"
            />
          </form>
          <form onSubmit={this.handleFriendAdd.bind(this)}>
            <input
              className="form-submit"
              value="Friend Create"
              type="submit"
            />
          </form>
          <form onSubmit={this.handleFriendDelete.bind(this)}>
            <input
              className="form-submit"
              value="Friend Delete"
              type="submit"
            />
          </form>
          <form onSubmit={this.handleFriendUpdate.bind(this)}>
            <input
              className="form-submit"
              value="Friend Update"
              type="submit"
            />
          </form>
          <br/>

          <form onSubmit={this.handleOutingGet.bind(this)}>
            <input
              className="form-submit"
              value="Outing Get"
              type="submit"
            />
          </form>
          <form onSubmit={this.handleOutingAdd.bind(this)}>
            <input
              className="form-submit"
              value="Outing Create"
              type="submit"
            />
          </form>
          <form onSubmit={this.handleOutingDelete.bind(this)}>
            <input
              className="form-submit"
              value="Outing Delete"
              type="submit"
            />
          </form>
          <form onSubmit={this.handleOutingUpdate.bind(this)}>
            <input
              className="form-submit"
              value="Outing Update"
              type="submit"
            />
          </form>
          <br/>

          <form onSubmit={this.handleYelpSubmit.bind(this)}>
            <input
              className="form-submit"
              value="Yelp API TEST"
              type="submit"
            />
          </form>
        </div>

      </div>
    );
  }
}

export default WithAuth(Yelp);
