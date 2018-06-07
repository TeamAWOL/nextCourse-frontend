import React, { Component } from "react";
import { Form, Text } from 'react-form';
import '../css/AddFriend.css';

class AddFriend extends Component {
    constructor(props) {
        super(props)
        this.state={}
    }

    render() {
      return (
        <div>
          <Form
            onSubmit={submittedValues => this.setState( { submittedValues } )}>
            { formApi => (
              <div>

                <form onSubmit={formApi.submitForm} id="dynamic-form">
                  <label htmlFor="dynamic-first"></label>
                  <Text field="friends-name" id="dynamic-first" className="form-item1" placeholder="Friend's Name"/>

                  <label htmlFor="dynamic-first"></label>
                  <Text field="preference" id="dynamic-first" className="form-item1" placeholder="Food Preferrence"/>

                  { formApi.values.friends && formApi.values.friends.map( ( friend, i ) => (

                    <div key={`friend${i}`}>
                      <label htmlFor={`friend-name-${i}`}></label>
                      <Text field={['friends', i]} id={`friend-name-${i}`} className="form-item1" placeholder="Friend's Name"/>

                      <label htmlFor={`friend-name-${i}`}></label>
                      <Text field={['friend-name', i]} id={`friend-name-${i}`} className="form-item1" placeholder="Food Preferrence"/>

                      <button
                        onClick={() => formApi.removeValue('friends', i)}
                        type="button"
                        className="mb-4 btn btn-danger">-</button>
                    </div>
                  ))}
                  <button
                    onClick={() => formApi.addValue('friends', '')}
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
