import React, { Component } from 'react';
import '../css/Team.css';
import { Jumbotron , Carousel} from 'react-bootstrap';
import CustomTeam from '../components/Team';


class Team extends Component {

  render() {
    return (
      <div className='team'>
        <div className='jumbo'>
          <Jumbotron>

        </Jumbotron>
        </div>
        <div className='team-title'>
        <h1>Team AWOL</h1>
          <p>
            Four Bootcamp Students Eating Together
          </p>
        </div>
        <div className='team-body'>
          <CustomTeam />
        </div>
      
    </div>
    );
  }
}


export default Team;
