import React, { Component } from 'react';
import '../css/Modal.css';
import WithAuth from '../api/WithAuth'
import { Button, ButtonGroup, Grid, Col, Row, ListGroup, ListGroupItem, Modal } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';
import { get_user_groups, delete_user_group } from '../api/GroupAPI'
import EditGroup from '../pages/EditGroup'





class GroupsTable extends Component {
  constructor(props){
    super(props)
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.state = {
      groups: [],
      show: false,
      redirect: false,
    };
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


  handleDeleteClick(e) {
    delete_user_group(e.target.name)
  }

  handleEditClick(e) {
    this.setState({ groupId: e.target.name });
    console.log(this.state.groupId);
  }

  handlePlayClick(e) {

    console.log("######  " + e.target.name)

    this.props.setSelectedGroupId(e.target.name)

    this.setState({
      show: true
    });

  }

  handleHide() {
    this.setState({ redirect: true });
  }

  render() {
    return (
      <div>
        <h1><strong>Groups</strong></h1>
        <li className="list-group-item green"><span>&nbsp;</span>
          <Button href="../CreateGroup" id="addGroup" className="green">Add new group <i class="far fa-plus-square"></i></Button>
        </li>
        <ListGroup className="list-group">
          {this.state.groups.map((group, index) =>{
            return (
              <ListGroupItem className="list-item" key={index}>
                <h4>{group.name}</h4>
                <ButtonGroup className="pull-right">
                <Button href="../Feed" name={group.id} onClick={this.handleDeleteClick.bind(this)} bsSize="small" bsStyle="danger">Delete</Button>
                <Link to={`/EditGroup/${group.id}`}><Button className="pull-left" bsSize="small" bsStyle="primary">Edit</Button></Link>
                <Router>
                  <Route exact path="/EditGroup" render={(props) => <EditGroup groupId={this.state.groupId}/>} />
                </Router>

                <Button id="play_text" bsSize="small" bsStyle="success" onClick={this.handleShow}>Play</Button>
                <Button name={group.id} bsSize="small" bsStyle="primary" onClick={this.handleEditClick.bind(this)}>Edit</Button>

                </ButtonGroup>
              </ListGroupItem>
            )
          })}
        </ListGroup>
        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              Selecting Restaurant
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
            <div className="modalContainer">
                <div className="item item-1"></div>
                <div className="item item-2"></div>
                <div className="item item-3"></div>
                <div className="item item-4"></div>
            </div>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Click for Results</Button>
          </Modal.Footer>
          {this.state.redirect && <Redirect to={'/Result'} /> }
        </Modal>
      </div>
    )
  }

}
export default WithAuth(GroupsTable);
