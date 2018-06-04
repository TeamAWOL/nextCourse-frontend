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
                            <label htmlFor="dynamic-first">Name: </label>
                            <Text field="name" id="dynamic-first" />

                            <label htmlFor="dynamic-first">Email: </label>
                            <Text field="email" id="dynamic-first" />

                            <label htmlFor="dynamic-first">Preference: </label>
                            <Text field="preference" id="dynamic-first" />

                            { formApi.values.friends && formApi.values.friends.map( ( friend, i ) => (
                    <div key={`friend{i}`}>
                        <label htmlFor={`friend-name-${i}`}>Name: </label>
                        <Text field={['friends', i]} id={`friend-name-${i}`} />

                        <label htmlFor={`email-id-${i}`}>Email: </label>
                        <Text field={['email', i]} id={`email-id-${i}`} />

                        <label htmlFor={`food-preference-${i}`}>Preference: </label>
                        <Text field={['preference', i]} id={`food-preference-${i}`} />

                      <button
                        onClick={() => formApi.removeValue('friends', i)}
                        type="button"
                        className="btn btn-primary">Remove</button>
                    </div>
                      ))}

                      <br/>

                      <button
                        onClick={() => formApi.addValue('friends', '')}
                        type="button"
                        className="btn btn-primary">Add Another
                      </button>

                    </form>
                  </div>
                )}
              </Form>
            </div>
          );
        }
      }

export default AddFriend
