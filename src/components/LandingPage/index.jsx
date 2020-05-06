import "./styles.css";

import React, { Component } from "react";
import Typing from 'react-typing-animation';

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

    return (
      <section className={"landing-page section"}>
        <Typing speed={150} className="head">"Älä patoa luonnon virtaa"</Typing>
        <div className="arrow" onClick={() => this.onClick(3)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
    );
  }
}

export default LandingPage;
