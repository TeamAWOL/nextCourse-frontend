import React, { Component } from 'react';
import '../css/Modal.css';
import { Modal, ButtonToolbar, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'



class GameModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false,
      switch: false
    };
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleHide() {
    this.setState({ switch: true });
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
<<<<<<< HEAD
            <div class="ModalContainer">
                <div class="item item-1"></div>
                <div class="item item-2"></div>
                <div class="item item-3"></div>
                <div class="item item-4"></div>
=======
            <div className="modalContainer">
                <div className="item item-1"></div>
                <div className="item item-2"></div>
                <div className="item item-3"></div>
                <div className="item item-4"></div>
>>>>>>> 42d6a1f6913e5d5af99b130220a54fd6fd98a40e
            </div>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Click for Results</Button>
          </Modal.Footer>
          {this.state.switch && <Redirect to={'/Result'}/> }
        </Modal>
      </ButtonToolbar>
    );
  }
}



export default GameModal;
