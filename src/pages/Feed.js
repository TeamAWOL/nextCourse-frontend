import React, { Component } from 'react';
import '../css/Feed.css';
import AuthService from '../api/AuthService';
import WithAuth from '../api/WithAuth'


class Feed extends Component {

  render() {
    return (
      <div>
         <h1> WASSUP </h1>
         <h1> this.props.userId </h1>
      </div>
    )
  }

}
export default WithAuth(Feed);
