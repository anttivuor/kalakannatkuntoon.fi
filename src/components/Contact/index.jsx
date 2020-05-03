import React, { Component } from "react";
import ImageSection from "../ImageSection";

//lisää nappi, mistä avautuu ponnahdusikkuna yhteydenottoa varten (ei varmaa tarvitse tehä bäkkäriä, mutta yhteydenotto lähtee kuvitteelisesti)
//lisätään myös sosiaalisen median linkit tähän, ehkä myös etusivulla headeriin tai jtn?

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
