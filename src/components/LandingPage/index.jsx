import "./styles.css";

import React, { Component } from "react";
import Typing from 'react-typing-animation';

import Modal from '../Modal'

//pitäisikö tänne lisätä esimerkiksi jotain automaattisesti näkyviin tulevaa sisältöä feidattuna, esimerkiksi se kirjoitettu tekstipätkä tai uutisotsikoita?
//lisätään myös nuoli alaspäin, jolla voi klikata seuraavaan osioon ja häviää kun scrollaa alaspäin


class LandingPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modal: false
    }
  }

  onClick = index => this.props.fullpage.fullpageApi.moveTo(index);

  render() {
    const { modal } = this.state

    return (
      <section className={"landing-page section"}>
        <div
          style={{ position: 'absolute', top: 100, left: 60, backgroundColor: 'yellowgreen', width: 60, height: 60, justifyContent: 'center', alignItems: 'center' }}
          onClick={() => this.setState({ modal: true })}
        >
          modal
        </div>
        <Typing speed={150} className="head">"Älä patoa luonnon virtaa"</Typing>
        <div className="arrow" onClick={() => this.onClick(3)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Modal visible={modal} closeModal={() => this.setState({ modal: false })}>
          terve tässä on jotain tekstiä
        </Modal>
      </section>
    );
  }
}

export default LandingPage;
