import React, { Component, Form, FormInput } from 'react';
import '../css/CreateGroup.css';
import AuthService from '../api/AuthService';
import StarRatingComponent from 'react-star-rating-component';

class CreateGroup extends Component {

  constructor(){
    super()
    this.Auth = new AuthService()
    this.state={
      group_name: '',
      price: '',
      member_user_names: '',
      location:'',
      rating: 1,
      friends: [''],
      newname: ''
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

  // add friend function, that pushes a new name to the friends array
  addFriend(event) {
      let {friends, newname} = this.state
      friends.push(newname)
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
              <p>Price Range: {rating}</p>
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
              <form>
                  <div id="dynamicInput">
                      {this.state.friends.map(input => <form> {input} </form>)}
                  </div>
              </form>

              <input className="form-item"
              placeholder="Add Friend"
              name="group_name"
              type="text"
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

          </form>

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

export default CreateGroup;
