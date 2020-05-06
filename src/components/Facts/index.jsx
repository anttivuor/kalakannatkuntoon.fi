import React, { Component } from "react";
import "./styles.css"
import photo from "./1.jpg"
import Modal from 'react-modal';

class Facts extends Component {
  
constructor(props) {
  super(props)

  this.state = {
    modal1: false
  }
}

render() {
  const { modal1, modal2, modal3 } = this.state

  return (
    <>
    <section
    className={`image-section`}
    style={{ backgroundImage: `url(${photo})`}}
  >
    <div className={"kortti"}>
      <h1>'"Vesivoima tuhoaa arvokkaat kalakantamme!"'</h1>
      <ul>
      <li 
          style={{cursor: "pointer" }}
          onClick={() => this.setState({ modal1: true })}>
          <p>elämä on keitto, minä olen haarukka</p>
    </li>
     <li 
          style={{cursor: "pointer" }}
          onClick={() => this.setState({ modal2: true })}>
          <p>ollakko vaiko eikö olla</p>
    </li>
     <li 
          style={{cursor: "pointer"}}
          onClick={() => this.setState({ modal3: true })}>
          <p>elämä on ihmisten parasta aikaa</p>
    </li>
    </ul>
    </div>
    </section>
    <Modal className="Modal" overlayClassName="Overlay" isOpen={modal1} onRequestClose={() => this.setState({ modal1: false })}>
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
    </Modal>
    <Modal className="Modal" overlayClassName="Overlay" isOpen={modal2} onRequestClose={() => this.setState({ modal2: false })}>
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
    </Modal>
    <Modal className="Modal" overlayClassName="Overlay" isOpen={modal3} onRequestClose={() => this.setState({ modal3: false })}>
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
    </Modal>
  </>
  );
}
}


export default Facts;
