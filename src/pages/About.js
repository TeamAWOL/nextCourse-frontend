import React, { Component } from 'react';
import '../css/About.css';
import { Jumbotron, Button } from 'react-bootstrap';


class About extends Component {

  render() {
    return (
        <div className='jumbo'>
        <Jumbotron>
          <h1>The Feed Me Story</h1>
          <p>
            Four Friends Wanted to Make Restaurant Selections Easier
          </p>
      </Jumbotron>
      </div>
    );
  }
}


export default About;
