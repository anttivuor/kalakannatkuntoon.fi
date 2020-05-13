import React, { Component } from "react";
import Modal from 'react-modal';
import CardComponent from '../CardComponent'

class Story extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modal1: false,
      modal2: false
  }
}
  render() {

    const { modal1, modal2 } = this.state

    return (

      <CardComponent
        title={'Meistä'}
        description={
          '"Lorem Ipsum is simply dummy text of the printing and typesetting industry.".'
        }
        backgroundImage={'./images/fish.jpg'}
        cardAlignment={'right'}
      >
        <p style={ {marginTop: "-20px", marginBottom: "-10px"} }>Olemme pieni ja ketterä yhdistys, jonka tavoitteena on levittää objektiivista informaatiota vesivoimasta ja edistää kestävää kalastusta.</p>
        <div onClick={() => this.setState({ modal1: true })}>
          <p style={ {textDecorationLine: "underline", cursor: "pointer"} }>Lisää yhdistyksestämme</p>
        </div>
        Henkilöinä olemme aidosti kiinnostuneita vesivoimasta ja sen hyödyntämisestä vastuullisella tavalla. Meitä kiehtoo luonnon monimuotoisuuden säilyttäminen ja eettisten arvojen noudattaminen
        <div onClick={() => this.setState({ modal2: true })}>
          <p style={ {textDecorationLine: "underline", cursor: "pointer"} }>Eettiset periaatteet</p>
        </div>
        <Modal className="Modal" overlayClassName="Overlay" isOpen={modal1} onRequestClose={() => this.setState({ modal1: false })}>
        <div className="presentationText">Olemme pieni, mutta kunnianhimoinen kalastusyhdistys Ylä-Keiteleeltä. Tahdomme harrastuskalastuksen ohella varmistaa kalakantojen säilymisen myös tuleville polville. Varsinkin uhanalaisten kalalajien suojelu on yhdistyksemme tärkeimpiä prioriteetteja. Rakennamme jatkuvasti kalateitä, jotta kalojen kutupaikoille pääseminen olisi mahdollista siitäkin huolimatta, että vesivoimalat tukkivat luonnon omia polkuja näille paikoille. Pyrimme myös jatkuvasti lobbaamaan vesivoiman haittapuolia ja tätä kautta ohjaamaan uusiutuvaan energiaan suunnattuja määrärahoja vesivoimaa järkevämpiin ratkaisuihin.
        <br></br><br></br><br></br>On hienoa nähdä, että juuri sinä olet löytänyt tiesi kampanjamme sivuille. Jo se itsessään on merkki siitä, että aihe herättää sinussa edes hieman ajatuksia tai tunteita. Toivottavasti juuri sinä osallistut yhteisiin talkoisiin. Vain yhteisellä toiminnalla voimme säilyttää luontomme kauniina ja monimuotoisena sekä kalakantamme rikkaina.
        <br></br><br></br>Ylä-Keiteleen Koukku ry
        </div>
        </Modal>
        <Modal className="Modal" overlayClassName="Overlay" isOpen={modal2} onRequestClose={() => this.setState({ modal2: false })}>
          <ul className="longText">
            <li>Kampanjamme väitteet perustuvat pelkästään faktoihin.</li>
            <li>Emme tiedota mitään, mikä perustuu pelkästään oletuksiin tai mielipiteisiin, vaan haluamme agendoitua luotettavana tiedon lähteenä. Emme myöskään esitä näitä faktoja provosoivalla tai millään tavoin harhaanjohtavalla tavalla.</li>
            <li>Olemme avoimia omasta mielipiteestämme sekä kampanjamme tavoitteista. Pyrimme esittämään faktat neutraalisti hyökkäämättä muita osapuolia, kuten energiayhtiöitä, kohtaan. Otamme siis myös heidän näkökulman huomioon kampanjan toteutuksessa.</li>
            <li>Emme halua painostaa tai manipuloida ketään meidän puolellemme, vaan pyrimme hyvin neutraalilla tavalla informoimaan ihmisiä aiheesta, josta useat eivät tiedä paljoakaan.</li>
          </ul>
        </Modal>
      </CardComponent>
    );
  }
}

export default Story;