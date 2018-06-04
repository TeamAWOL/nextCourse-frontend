import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap'
class GroupsTable extends Component {

  render() {
    return (
      <div>
        <h1><strong>Groups</strong></h1><hr/>
        <ul class="list-group">
          <li class="list-group-item">
            <Button className="pull-left" bsStyle="danger">Delete</Button>
            <span>Family</span>
            <ButtonGroup className="pull-right" bsSize="small">
              <Button bsStyle="success">Play</Button>
              <Button bsStyle="primary">Edit</Button>
            </ButtonGroup>
          </li>
          <li class="list-group-item">
            <Button className="pull-left" bsStyle="danger">Delete</Button>
            <span>Work Friends</span>
            <ButtonGroup className="pull-right" bsSize="small">
              <Button bsStyle="success">Play</Button>
              <Button bsStyle="primary">Edit</Button>
            </ButtonGroup>
          </li>
          <li class="list-group-item"><span>Poker Buds</span>
            <ButtonGroup className="pull-right" bsSize="small">
              <Button bsStyle="success">Play</Button>
              <Button bsStyle="primary">Edit</Button>
              <Button bsStyle="danger">Delete</Button>
            </ButtonGroup>
          </li>
          <li class="list-group-item"><span>Golf Pals</span>
            <ButtonGroup className="pull-right" bsSize="small">
              <Button href="../Login" bsStyle="success">Play</Button>
              <Button bsStyle="primary">Edit</Button>
              <Button bsStyle="danger">Delete</Button>
            </ButtonGroup>
          </li>
        </ul>
      </div>
    )
  }




}
export default GroupsTable;
