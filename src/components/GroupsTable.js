import React, { Component } from 'react';
import { Button, ButtonGroup, Grid, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap'
import WithAuth from '../api/WithAuth'
import { get_user_groups } from '../api/GroupAPI'

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
                  <Button href="../Game" bsStyle="success">Play</Button>
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




// class GroupsTable extends Component {
//
//   render() {
//     return (
//       <div>
//         <h1><strong>Groups</strong></h1><hr/>
//         <ul className="list-group">
//           <li className="list-group-item">
//             <span>Family</span>
//             <ButtonGroup className="pull-right" bsSize="small">
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
