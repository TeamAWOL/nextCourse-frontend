import React, { Component } from 'react';
import { Button, ButtonGroup, Grid, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap'
import WithAuth from '../api/WithAuth'
import { get_user_groups } from '../api/GroupAPI'
import { get_next_course } from '../api/YelpAPI'
import { Redirect } from 'react-router-dom'



class GroupsTable extends Component {
  constructor(props){
    super(props)
    this.state = {
      groups: []
    }
  }

  componentWillMount() {
    get_user_groups(this.props.userId)
    .then(APIgroups => {
      this.setState({
        groups:APIgroups.groups

      })
    }
    )
  }

  render() {
    return (
      <div>
        <h1><strong>Groups</strong></h1>
        <li className="list-group-item green"><span>&nbsp;</span>
          <Button href="../CreateGroup" id="addGroup" className="green"><i className="fas fa-plus-square"></i></Button>
        </li>
        <ListGroup className="list-group">
          {this.state.groups.map((group, index) =>{
            return (
              <ListGroupItem className="list-item" key={index}>
                <span>{group.name}</span>
                <ButtonGroup className="pull-right" bsSize="small">
                  <Button href="#" bsStyle="success">Play</Button>
                  <Button href="#" bsStyle="primary">Edit</Button>
                  <Button href="#" bsStyle="danger">Delete</Button>
                </ButtonGroup>
              </ListGroupItem>
            )
          })}
        </ListGroup>
      </div>
    )
  }




}
export default WithAuth(GroupsTable);
