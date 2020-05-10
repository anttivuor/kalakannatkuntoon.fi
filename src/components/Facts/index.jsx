import React, { Component } from "react";
import Modal from 'react-modal';
import CardComponent from '../CardComponent'

//renders a page with statements to be pressed, which open a modal with more information

class Facts extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      modal1: false,
      modal2: false,
      modal3: false
  }
}

  render() {
    const { modal1, modal2, modal3 } = this.state

    return (
      <CardComponent
        title={'"Vesivoima tuhoaa arvokkaat kalakantamme!"'}
        backgroundImage={'./images/1.jpg'}
        cardAlignment={'left'}
      >
        <ul>
          <li 
          style={{cursor: "pointer" }}
          onClick={() => this.setState({ modal1: true })}>
            elämä on keitto, minä olen haarukka
          </li>
          <li 
          style={{cursor: "pointer" }}
          onClick={() => this.setState({ modal2: true })}>
            ollakko vaiko eikö olla
          </li>
          <li 
          style={{cursor: "pointer"}}
          onClick={() => this.setState({ modal3: true })}>
            elämä on ihmisten parasta aikaa
          </li>
        </ul>
        <Modal className="Modal" overlayClassName="Overlay" isOpen={modal1} onRequestClose={() => this.setState({ modal1: false })}>
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
        </Modal>
        <Modal className="Modal" overlayClassName="Overlay" isOpen={modal2} onRequestClose={() => this.setState({ modal2: false })}>
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
        </Modal>
        <Modal className="Modal" overlayClassName="Overlay" isOpen={modal3} onRequestClose={() => this.setState({ modal3: false })}>
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
        </Modal>
      </CardComponent>
    
    );
  }
}


export default Facts;
