import React, { Component } from "react";
import ImageSection from "../ImageSection";

class Contact extends Component {
  render() {
    return (
      <ImageSection
        id={"faktat"}
        title={"Ota yhteyttä"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
        }
        backgroundImage={"./images/4.jpg"}
        cardAlignment={"right"}
      />
    );
  }
}

export default Contact;
