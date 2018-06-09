import React, { Component } from 'react';
import '../css/Modal.css';
import WithAuth from '../api/WithAuth'
import { Button, ButtonGroup, Grid, Col, Row, ListGroup, ListGroupItem, Modal } from 'react-bootstrap'
import { get_user_groups, delete_user_group } from '../api/GroupAPI'
import { Link, Redirect } from 'react-router-dom'




class GroupsTable extends Component {
  constructor(props){
    super(props)
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.state = {
      groups: [],
      show: false,
      redirect: false
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
    console.log("yoooo");
  }

  handleShow() {
    this.setState({ show: true });
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
                <Link to={`/EditGroup/${group.name}`}><Button className="pull-left" bsSize="small" bsStyle="primary">Edit</Button></Link>
                <Button id="play_text" bsSize="small" bsStyle="success" onClick={this.handleShow}>Play</Button>
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
          {this.state.redirect && <Redirect to={'/Result'}/> }
        </Modal>
      </div>
    )
  }




}
export default WithAuth(GroupsTable);




// class GroupsTable extends Component {
//
//   render() {
//     return (
//       <div>
//         <h1><strong>Groups</strong></h1><hr/>
//         <ul className="list-group">
//           <li className="list-group-item">
//             <span>Family</span>
//             <ButtonGroup className="pull-right">
//               <Button bsStyle="success">Play</Button>
//               <Button bsStyle="primary">Edit</Button>
//               <Button bsStyle="danger">Delete</Button>
//             </ButtonGroup>
//           </li>
//           <li class="list-group-item">
//             <span>Work Friends</span>
//             <ButtonGroup className="pull-right" bsSize="small">
//               <Button bsStyle="success">Play</Button>
//               <Button bsStyle="primary">Edit</Button>
//               <Button bsStyle="danger">Delete</Button>
//             </ButtonGroup>
//           </li>
//           <li class="list-group-item"><span>Poker Buds</span>
//             <ButtonGroup className="pull-right" bsSize="small">
//               <Button bsStyle="success">Play</Button>
//               <Button bsStyle="primary">Edit</Button>
//               <Button bsStyle="danger">Delete</Button>
//             </ButtonGroup>
//           </li>
//           <li class="list-group-item"><span>Golf Pals</span>
//             <ButtonGroup className="pull-right" bsSize="small">
//               <Button href="../Login" bsStyle="success">Play</Button>
//               <Button bsStyle="primary">Edit</Button>
//               <Button bsStyle="danger">Delete</Button>
//             </ButtonGroup>
//           </li>
//         </ul>
//       </div>
//     )
//   }
//
//
//
//
// }
// export default GroupsTable;
