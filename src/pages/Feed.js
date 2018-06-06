import React, { Component } from 'react';
import '../css/Feed.css';
import AuthService from '../api/AuthService';
import WithAuth from '../api/WithAuth';
import { Jumbotron } from 'react-bootstrap'
import GroupsTable from '../components/GroupsTable'
import RecentOutings from '../components/RecentOutings'
import { get_user } from '../api/UserAPI'


class Feed extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: ''
    }
  }

  componentWillMount() {
    get_user(this.props.userId)
    .then(APIuser => {
      this.setState({
        user:APIuser.user
      })
    }
    )
  }
  render() {
    return (
      <div id="feed-page">
        <div id="account-info">
        <Jumbotron>WELCOME BACK {this.state.user.first_name}</Jumbotron>
        </div>
        <br/>
        <div id="groups-area" className="col-lg-6">
          <GroupsTable />
        </div>
        <div id="recents-area" className="col-lg-6">
          <RecentOutings />
        </div>
      </div>
    );
  }

}
export default WithAuth(Feed);
