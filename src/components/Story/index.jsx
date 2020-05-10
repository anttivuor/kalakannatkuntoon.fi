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
        <p style={ {marginTop: "-20px", marginBottom: "-10px"} }>Olemme pieni ja ketterä yhdistys, jonka tavoitteena on edistää tiedon lisäämistä vesivoimasta ja estää sen luomia pysyviä haittoja.</p>
        <div onClick={() => this.setState({ modal1: true })}>
          <p style={ {textDecorationLine: "underline", cursor: "pointer"} }>Lisää yhdistyksestämme</p>
        </div>
        Henkilöinä olemme aidosti kiinnostuneita vesivoimasta ja sen hyödyntämisestä vastuullisella tavalla. Meitä kiehtoo luonnon monimuotoisuuden säilyttäminen ja eettisten arvojen noudattaminen
        <div onClick={() => this.setState({ modal1: true })}>
          <p style={ {textDecorationLine: "underline", cursor: "pointer"} }>Lue lisää kampanjan takana olevista henkilöistä</p>
        </div>
        <Modal className="Modal" overlayClassName="Overlay" isOpen={modal1} onRequestClose={() => this.setState({ modal1: false })}>
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
        </Modal>
        <Modal className="Modal" overlayClassName="Overlay" isOpen={modal2} onRequestClose={() => this.setState({ modal2: false })}>
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
        </Modal>
      </CardComponent>
    );
  }
}

export default Story;