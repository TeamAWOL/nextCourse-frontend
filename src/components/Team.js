import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import '../css/Team.css';
import Damon from '../images/Damon.jpg';
import Steve from '../images/Steve.jpg';
import Mondo from '../images/Mondo.jpg';
import David from '../images/David.jpg';


class CustomTeam extends Component {

  render() {
    return(
      <div className="team-page">
        <Grid>
          <Row>
            <Col xs={4} md={2}>
              <Thumbnail src= { Damon } alt="Damon Brown">
                <h3>Damon Brown</h3>
                <p>Co-Founder</p>
              </Thumbnail>
            </Col>
            <Col xs={4} md={2}>
              <Thumbnail src= { Mondo } alt="Armando Nunez">
                <h3>Armando Nunez</h3>
                <p>CODE MASTA</p>
              </Thumbnail>
            </Col>
            <Col xs={4} md={2}>
              <Thumbnail src={ Steve } alt="Steven Hong">
                <h3>Steven Hong</h3>
                <p>Co-Founder</p>
              </Thumbnail>
            </Col>

            <Col xs={4} md={2}>
              <Thumbnail src={ David } alt="David Yi">
                <h3>David
                <br/> Yi</h3>
                <p>Co-Founder</p>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}


    export default CustomTeam;
