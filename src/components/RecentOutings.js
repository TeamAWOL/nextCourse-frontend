import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class RecentOutings extends Component {

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
            <tr>
              <td>Work Friends</td>
              <td>Jake</td>
              <td colSpan="2">Sushi Stop</td>
              <td>04/20/15</td>
            </tr>
            <tr>
              <td>Poker Buds</td>
              <td>Mark</td>
              <td colSpan="2">Ottos burgers</td>
              <td>04/20/16</td>
            </tr>
            <tr>
              <td>Family</td>
              <td>Jacob</td>
              <td colSpan="2">McDonalds</td>
              <td>04/20/17</td>
            </tr>
            <tr>
              <td>Poker Buds</td>
              <td>Jacob</td>
              <td colSpan="2">Taco Bell</td>
              <td>04/20/18</td>
            </tr>
            <tr>
              <td>Golf Pals</td>
              <td>Tony</td>
              <td colSpan="2">Jack in the Box</td>
              <td>04/20/19</td>
            </tr>
            <tr>
              <td>Family</td>
              <td>Tony</td>
              <td colSpan="2">McDonalds</td>
              <td>04/20/20</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }




}
export default RecentOutings;
