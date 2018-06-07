import React, { Component } from 'react';
import '../css/Team.css';
import { Jumbotron , Carousel} from 'react-bootstrap';
import CustomCarousel from '../components/Carousel';


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
          <CustomCarousel />
        </div>
    </div>
    );
  }
}


export default Team;
