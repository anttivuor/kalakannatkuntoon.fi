import React, { Component } from 'react'

import CardComponent from '../CardComponent'

class Participation extends Component {
  render() {
    return (
      <CardComponent
        title={'Levitä tietoisuutta vesivoiman haitoista'}
        backgroundImage={'./images/2.jpg'}
        cardAlignment={'right'}
      >
        <p style={{ padding: '2px' }}>
          Jokainen meistä voi pienilläkin teoilla vaikuttaa kestävämpään tulevaisuuteen ja kalakantojen turvaamiseen.
        </p>
        <ul className={'mainList'}>
          <li className={'mainListElement'}>Aloita keskustelu aiheesta ja lisää tietoisuutta vesivoiman vaikutuksista lähipiirissäsi</li>
          <li className={'mainListElement'}>Suosi muita kestäviä energiamuotoja, ja pyri välttämään vesivoimaa suosivia energiayhtiöitä</li>
          <li className={'mainListElement'}>Jaa julkaisujamme sosiaalisessa mediassa <b>#kalakannatkuntoon</b></li>
        </ul>
      </CardComponent>
    )
  }
}

export default Participation