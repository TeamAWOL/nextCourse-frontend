import React, { Component, Form, FormInput } from 'react';
import '../css/CreateGroup.css';
import AuthService from '../api/AuthService';
import StarRatingComponent from 'react-star-rating-component';

class CreateGroup extends Component {

  constructor(props){
    super(props)
    this.Auth = new AuthService()
    this.state={
      group_name: '',
      price: '',
      member_user_names: '',
      location:'',
      rating: 1,
      friends: [],
      newfriend: ''
    }
  }

  onStarClick(nextValue, prevValue, name) {
      this.setState({rating: nextValue})
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


  handleNewFriendInput(event) {
      console.log(event.target.value);
      let {newfriend} = this.state
      newfriend = event.target.value
      this.setState({newfriend: newfriend})
  }

  //pushes a new friend to the friends array
  addFriend(event) {
      let {friends, newfriend} = this.state
      friends.push(newfriend)
      this.setState({friends: friends})
  }

  removeFriend(index) {
      console.log(index);
      let {friends} = this.state
      friends.splice(index, 1)
      console.log(friends);
      this.setState({friends: friends})
  }

  render() {
    const { rating } = this.state

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

          <div>
              <p>Price Range: </p>
              <StarRatingComponent
                  name="price"
                  renderStarIcon={() => <span>$</span>}
                  starCount={4}
                  value={rating}
                  onStarClick={this.onStarClick.bind(this)}
              />
          </div>
          <br/>

          <div>
              <div id="dynamicInput">
                  {this.state.friends.map((input, index )=>  <li className="friend-tile" onClick={this.removeFriend.bind(this, index)}>{input}</li> )}

              </div>

          <input className="form-item"
              placeholder="Friend"
              name="newfriend"
              placeholder="Add Friend"
              type="text"
              onChange={this.handleNewFriendInput.bind(this)}
              />

              <button onClick={this.addFriend.bind(this)}>Add More</button>
          </div>

          <input
              className="form-item"
              placeholder="Location"
              name="location"
              type="text"
              onChange={this.handleChange.bind(this)}
          />

          <input
              className="form-submit"
              value="Submit"
              type="submit"
          />

          </form>

        </div>

      </div>
    );
  }
}

export default CreateGroup;
