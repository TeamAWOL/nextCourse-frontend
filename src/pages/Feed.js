import React, { Component } from 'react';
import '../css/Feed.css';
import AuthService from '../api/AuthService';
import { Jumbotron } from 'react-bootstrap'
import GroupsTable from '../components/GroupsTable'
import RecentOutings from '../components/RecentOutings'

class Feed extends Component {

  render() {
    return (
      <div id="feed-page">
        <div id="account-info">
          <Jumbotron>WELCOME BACK USER</Jumbotron>
        </div>
        <br/>
        <div id="groups-area" className="col-lg-6">
          <GroupsTable />
        </div>
        <div id="recents-area"className="col-lg-6">
          <RecentOutings />
        </div>
      </div>
    );
  }




}
export default Feed;
