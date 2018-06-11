import React, { Component } from 'react';
import WithAuth from '../api/WithAuth'

import { Table, ListGroupItem, Button } from 'react-bootstrap';
import { get_user_outings,delete_user_outing } from '../api/OutingAPI'


class RecentOutings extends Component {
  constructor(props){
    super(props)
    this.state = {
      outings: []
    }
  }

  componentWillMount() {
    get_user_outings(this.props.userId)
    .then(APIoutings => {
      this.setState({
        outings:APIoutings.outings
      })
    }
    )
  }

  handleDeleteClick(e) {
     delete_user_outing(e.target.id)
     .then(APIoutings => {
       this.setState({
         outings:APIoutings.outings
       })
       console.log(this.state.outings);
     }
     )
  }

  render() {
    return (
      <div>
        <h1><strong>Recent Outings</strong></h1><hr/>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Group</th>
              <th>Winner</th>
              <th colSpan="2">Restaurant</th>
              <th>Date</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {this.state.outings.map((outing, index) =>{
              return (
                  <tr key={index}>
                    <td>{outing.winning_group}</td>
                    <td>{outing.winner}</td>
                    <td colSpan="2"><a href={outing.url}>{outing.winning_restaurant}</a></td>
                    <td>{outing.created_at.slice(0,10)}</td>
                    <td><Button href='../feed' id={outing.id} onClick={this.handleDeleteClick.bind(this)}        bsSize="small" bsStyle="danger">Delete</Button></td>
                  </tr>
              )
            })}

          </tbody>
        </Table>
      </div>
    )
  }




}
export default WithAuth(RecentOutings);
