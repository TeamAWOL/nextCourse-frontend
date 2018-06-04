import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
class RecentOutings extends Component {

  render() {
    return (
      <div>
        <h1><strong>Recent Outings</strong></h1><hr/>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Winner</th>
              <th colSpan="2">Restaurant</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td colSpan="2">Otto's burgers</td>
              <td>04/20/16</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td colSpan="2">McDonalds</td>
              <td>04/20/17</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td colSpan="2">Taco Bell</td>
              <td>04/20/18</td>
            </tr>
            <tr>
              <td>Tony</td>
              <td colSpan="2">Jack in the Box</td>
              <td>04/20/19</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }




}
export default RecentOutings;
