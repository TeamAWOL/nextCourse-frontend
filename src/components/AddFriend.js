import React, { Component } from "react";
import { Form } from 'react-form';
import '../css/AddFriend.css';

class AddFriend extends Component {

    constructor(props) {
        super(props)
        this.state={
           friends:[]
        }
    }

    handleChange(e){
        // copy friends array from state
        var {friends} = this.state

        var inFlag = false
        var insertIndex = 0

        if (friends.length > 0)
        {
             Object.keys(friends).map((element, i) => {

               if( Object.keys(friends[i]).indexOf(e.target.id) !== -1)
               {
                  inFlag = true
                  insertIndex = i
               }
             })
        }

        if (!inFlag) {
          var keyVal = {[e.target.id]: ''}
          friends.push(keyVal)
          Object.keys(friends).map((element, i) => {
            if( Object.keys(friends[i]).indexOf(e.target.id) !== -1)
            {
              if( Object.keys(friends[i]).indexOf(e.target.id) !== -1)
              {
                insertIndex = i
             }
           }
          })
        }

        var friendAttr = friends[insertIndex]

        var xx= friendAttr[e.target.id]

        var attrFlag = false
        var attrIndex = 0

        if (xx)
        {

          xx.map((element, i) => {

            if( Object.keys(xx[i]).indexOf(e.target.name) !== -1)
            {
               attrFlag = true
               attrIndex = i
            }
          })

        }

        if ( !attrFlag ) {
            var keyValue = { [e.target.name]: e.target.value }

             xx = Array.from(xx)
             xx.push(keyValue)

             friendAttr[e.target.id] = xx
        }
        else {
            //debugger
           xx[attrIndex][e.target.name] = e.target.value
        }

        this.setState({friends: friends })

        this.props.updateFriends(this.state.friends)
    }

    handleFriendDelete(formApi,i){
        formApi.removeValue('friends', i)
        var friends = this.state.friends;

        var index = -1

        if (friends.length > 0)
        {
             var ii = -1
             // index = Object.keys(friends[0]).indexOf(e.target.id)
             Object.keys(friends).map((element, i) => {

                  if (i === 0)
                     ii = Object.keys(friends[i]).indexOf('friend')
                  else {
                     let il = i - 1
                     ii = Object.keys(friends[i]).indexOf('friend' + il)
                  }

                  if ( ii !== -1)
                  {
                    index = ii
                  }
             })

        }

        if (index !== -1) {
          friends.splice(index-1, 1);
        }

        this.setState({friends: friends })
    }

    handleFriendAdd(formApi) {
        formApi.addValue('friends', '')
    }

    render() {
      return (
        <div>
          <Form >
            { formApi => (
              <div>

                <form id="dynamic-form">
                  <input
                    className="form-item"
                    placeholder="Player's Name"
                    name="name"
                    type="text"
                    id="friend"
                    onChange={this.handleChange.bind(this)}
                  />
                  <input
                    className="form-item"
                    placeholder="Player's Email"
                    name="email"
                    type="text"
                    id="friend"
                    onChange={this.handleChange.bind(this)}
                  />
                  <input
                    className="form-item"
                    placeholder="Food Preference"
                    name="preference"
                    type="text"
                    id="friend"
                    onChange={this.handleChange.bind(this)}
                  />

                  { formApi.values.friends && formApi.values.friends.map( ( friend, i ) => (

                    <div key={`friend${i}`}>
                      <input
                        className="form-item"
                        placeholder="Player's Name"
                        name="name"
                        type="text"
                        id={`friend${i}`}
                        onChange={this.handleChange.bind(this)}
                      />
                      <input
                        className="form-item"
                        placeholder="Player's Email"
                        name="email"
                        type="text"
                        id={`friend${i}`}
                        onChange={this.handleChange.bind(this)}
                      />
                      <input
                        className="form-item"
                        placeholder="Food Preference"
                        name="preference"
                        type="text"
                        id={`friend${i}`}
                        onChange={this.handleChange.bind(this)}
                      />


                      <button
                        onClick={() => this.handleFriendDelete(formApi,i)}
                        type="button"
                        className="mb-4 btn btn-danger">- </button>
                    </div>
                  ))}

                  <button
                    onClick={() => this.handleFriendAdd(formApi)}
                    type="button"
                    className="mb-4 mr-4 btn btn-success">+</button>
                </form>
              </div>
            )}
          </Form>
        </div>
      );
    }
  }

export default AddFriend
