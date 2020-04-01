import React, { Component } from "react";
import ImageSection from "../ImageSection";

class Participation extends Component {
  render() {
    return (
      <ImageSection
        title={'"Levitä tietoisuutta vesivoiman haitoista"'}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
        }
        backgroundImage={"./images/2.jpg"}
        cardAlignment={"right"}
      />
    );
  }
}

export default Participation;
