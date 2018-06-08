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
            <h1>Team AWOL</h1>
            <p>
              Four Bootcamp Students Eating Together
            </p>
        </Jumbotron>
        </div>

        <div>
          <CustomTeam />
        </div>
    </div>
    );
  }
}


export default Team;
