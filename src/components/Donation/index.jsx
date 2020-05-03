import React, { Component } from "react";
import ImageSection from "../ImageSection";

//lisätään tänne kohta, jossa käyttäjän mennessä ensimäistä kertaa tähän osioon näkyy osiossa, jossa on lahjoittajien määrä ja lahjoitettu summa,
//niin ne kasvavat hidastuvalla nopeudella lopullisiin lukuihin
//lisätään myös slideri jossa voi valita lahjoitettavan rahan määrä sekä nappi joka vie verkkopankkiosioon leikisti

class Donation extends Component {
  render() {
    return (
      <ImageSection
        title={'"Liity yhteisiin talkoisiimme"'}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
        }
        backgroundImage={"./images/3.jpg"}
        cardAlignment={"left"}
      />
    );
  }
}

export default Donation;
