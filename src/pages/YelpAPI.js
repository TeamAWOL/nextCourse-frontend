import React, { Component } from 'react';
import {get_next_course} from '../api';
import WithAuth from '../api/WithAuth';

class Yelp extends Component {
  constructor(){
    super()
    this.state={
      type: '',
      location: ''
    }
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFormSubmit(e){
    e.preventDefault()
    get_next_course(this.state.type,this.state.location)
    .then(res =>{
      this.props.history.replace('/')
    })
    .catch(err =>{ alert(err) })
  }

  render() {
    return (
      <div className="center">
        <div className="card">
          <h1>Getting the restuant by yelp</h1>
          <form
            onSubmit={this.handleFormSubmit.bind(this)}
          >
            <input
              className="form-item"
              placeholder="Search Param..."
              name="type"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={this.state.email}
            />
            <input
              className="form-item"
              placeholder="Search Param..."
              name="location"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={this.state.email}
            />
            <input
              className="form-submit"
              value="Get Yelp"
              type="submit"
            />
          </form>
          <a href="/sign_up"> Sign up</a><br />
        </div>

      </div>
    );
  }
}

export default WithAuth(Yelp);
