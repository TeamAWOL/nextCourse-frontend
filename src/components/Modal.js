import React, { Component } from 'react';
import '../css/Modal.css';
import { Modal, ButtonToolbar, Button } from 'react-bootstrap';



class GameModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleHide() {
    this.setState({ show: false });
  }

  render() {
    return (
      <ButtonToolbar>
        <Button bsStyle="primary" onClick={this.handleShow}>
        Play Game
        </Button>

        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              Selecting Restaurant
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
            <div class="container">
                <div class="item item-1"></div>
                <div class="item item-2"></div>
                <div class="item item-3"></div>
                <div class="item item-4"></div>
            </div>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Click for Results</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}



export default GameModal;
