import React, { Component } from "react";
import { Form, Text } from 'react-form';
import AuthService from '../api/AuthService';

class AddValue extends Component {
    constructor(props){
        super(props)
        this.Auth = new AuthService()
        this.state={
            friends: [],
            newfriend: ''
        }
    }


    handleNewFriendInput(event) {
        console.log(event.target.value);
        let {newfriend} = this.state
        newfriend = event.target.value
        this.setState({newfriend: newfriend})
    }

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
        return(
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

        )
    }
}


export default AddValue
