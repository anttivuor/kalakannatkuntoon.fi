import React, { Component } from "react";
import CardComponent from '../CardComponent'

class Participation extends Component {
  render() {
    return (
       <CardComponent
        title={'"Levitä tietoisuutta vesivoiman haitoista"'}
        backgroundImage={'./images/2.jpg'}
        cardAlignment={'right'}
      >
      '"Lorem Ipsum is simply dummy text of the printing and typesetting industry.".'
      </CardComponent>
    );
  }
}

export default Participation;
