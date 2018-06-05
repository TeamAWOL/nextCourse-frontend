import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap'
import WithAuth from '../api/WithAuth'
import {	 get_user_groups,add_user_group,delete_user_group,update_user_group} from '../api/GroupAPI'
import { get_user } from '../api/UserAPI'

class GroupsTable extends Component {
  componentWillMount() {
     console.log("Inside of GroupsTable")
     console.log("User ID" + this.props.userId)
     let groups = get_user_groups(this.props.userId)

  }

  render() {
    return (
      <div>
        <h1><strong>Groups</strong></h1><hr/>
        <p>User ID is: {this.props.userId}</p>
        <ul className="list-group">
          <li className="list-group-item">
            <span>Family</span>
            <ButtonGroup className="pull-right" bsSize="small">
              <Button bsStyle="success">Play</Button>
              <Button bsStyle="primary">Edit</Button>
              <Button bsStyle="danger">Delete</Button>
            </ButtonGroup>
          </li>
          <li className="list-group-item">
            <span>Work Friends</span>
            <ButtonGroup className="pull-right" bsSize="small">
              <Button bsStyle="success">Play</Button>
              <Button bsStyle="primary">Edit</Button>
              <Button bsStyle="danger">Delete</Button>
            </ButtonGroup>
          </li>
          <li className="list-group-item"><span>Poker Buds</span>
            <ButtonGroup className="pull-right" bsSize="small">
              <Button bsStyle="success">Play</Button>
              <Button bsStyle="primary">Edit</Button>
              <Button bsStyle="danger">Delete</Button>
            </ButtonGroup>
          </li>
          <li className="list-group-item"><span>Golf Pals</span>
            <ButtonGroup className="pull-right" bsSize="small">
              <Button href="../Login" bsStyle="success">Play</Button>
              <Button bsStyle="primary">Edit</Button>
              <Button bsStyle="danger">Delete</Button>
            </ButtonGroup>
          </li>
          <li className="list-group-item green"><span>Add New</span>
            <Button id="addGroup" className="pull-right green"><i className="fas fa-plus-square"></i></Button>
          </li>
        </ul>
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
//         <ul class="list-group">
//           <li class="list-group-item">
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
