import React, { Component } from "react";
import ImageSection from "../ImageSection";

class Facts extends Component {
  render() {
    return (
      <ImageSection
        id={"faktat"}
        title={'"Vesivoima tuhoaa arvokkaat kalakantamme!"'}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
        }
        backgroundImage={"./images/1.jpg"}
        cardAlignment={"left"}
      />
    );
  }
}

export default Facts;
