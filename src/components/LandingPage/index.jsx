import "./styles.css";

import React, { Component } from "react";
import Typing from 'react-typing-animation';


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
