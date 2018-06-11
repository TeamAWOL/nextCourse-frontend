import React, { Component } from 'react';
import '../css/About.css';
import { Jumbotron } from 'react-bootstrap';


class About extends Component {

  render() {
    return (
      <div className='about'>
        <div className='jumbo'>
          <Jumbotron>
          </Jumbotron>
        </div>
      
        <div className="about-title">
          <h1>The Feed Me Story</h1>
        <p>
          Four Friends Wanted to Make Restaurant Selections Easier
        </p>
        </div>
        <div className='about-body'>
          <p>
            <h3> Welcome fellow foodie -- we are glad you decided to check us out!</h3>
          </p>
            <h4> One day, like many days, we could not choose what to eat for lunch. Damon, wanted sushi, Steven, wanted pizza, Armando, wanted a burger and David, wanted fish tacos.  We spent the first ten minutes of our lunch-break arguing on a selection!  Finally, we decided pizza but we all thought there had to be a better way </h4>

        </div>

        <div className='mv-statement'>
          <p>
            <h3>Our Mission:</h3><h4> Create a fun restaurant selector that supplies the restaurant and the location allowing you more time to enjoy the food</h4>
          </p>
          <p>
             <h3>Our Values:</h3> <h4>Fair and social -- everyone has the same odds to win with our algorithm</h4>
          </p>
        </div>
    </div>
    );
  }
}


export default About;
