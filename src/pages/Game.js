import React, { Component } from 'react';
import '../css/Game.css';
import AuthService from '../api/AuthService';
import GameModal from '../components/Modal.js'


class Game extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <div id="game-page">
        <h1>GaMe PaGe</h1>

        <div>
          <GameModal />
        </div>

  </div>

    );
  }


}
export default Game;
