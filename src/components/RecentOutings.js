import React, { Component } from 'react';
import WithAuth from '../api/WithAuth'
import { Table } from 'react-bootstrap';
import { get_user_outings } from '../api/OutingAPI'


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
            </tr>
          </thead>
          <tbody>
            {this.state.outings.map((outing, index) =>{
              return (
                  <tr key={index}>
                    <td>{outing.winning_group}</td>
                    <td>{outing.winner}</td>
                    <td colSpan="2">{outing.winning_restaurant}</td>
                    <td>{outing.created_at.slice(0,10)}</td>
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
