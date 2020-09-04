import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const AboutModal = (props) => {
  return (
    <Modal 
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          About us
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>
          <p class="about-us">
            "Having flown multiple times in the pandemic, I deeply experienced with the risk and concern of constant exposure with strangers on a half-day trip. These include: sharing the toilets, eating, drinking in close proximity. I used the government Open Data to make a better travel plan, though the effort is not trivial and repetitive. I create CovidClean to give more options with less effort to protect myself and my beloved ones. Likewise, I wish to help many others in the pandemic."
          </p>
          <div class="person-name">
            Anthony Ng
          </div>
          <div class="person-title">
            Founder, CovidClean
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default connect()(AboutModal)