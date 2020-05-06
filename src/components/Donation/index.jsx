import React, { Component } from 'react'

import ImageSection from '../ImageSection'
import MoneyCollected from './Components/MoneyCollected'

//lisätään tänne kohta, jossa käyttäjän mennessä ensimäistä kertaa tähän osioon näkyy osiossa, jossa on lahjoittajien määrä ja lahjoitettu summa,
//niin ne kasvavat hidastuvalla nopeudella lopullisiin lukuihin
//lisätään myös slideri jossa voi valita lahjoitettavan rahan määrä sekä nappi joka vie verkkopankkiosioon leikisti

class Donation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // Increase the amount of collected money linearly (goal is 10 000 €)
      moneyCollected: Math.round((31 * 24 * 60 * 60 * 1000 - (new Date('2020-05-31').getTime() - new Date().getTime())) / (31 * 24 * 60 * 60 * 1000) * 10000)
    }
  }
  render() {
    const { moneyCollected } = this.state

    return (
      <ImageSection
        title={'"Liity yhteisiin talkoisiimme"'}
        description={
          'Lahjoita sinäkin tänään. Kerätyillä rahoilla rahoitamme uusien kalateiden rakentamista ympäri Suomea.'
        }
        backgroundImage={'./images/3.jpg'}
        cardAlignment={'left'}
      >
        <MoneyCollected amount={moneyCollected} />
      </ImageSection>
    )
  }
}

export default Donation;
