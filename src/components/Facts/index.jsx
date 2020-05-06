import React, { Component } from "react";
import "./styles.css"
import photo from "./1.jpg"
import Modal from "../Modal"

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
     <Modal visible={modal1} closeModal={() => this.setState({ modal1: false })}>
    Pointti 1
    </Modal>
    <Modal visible={modal2} closeModal={() => this.setState({ modal2: false })}>
    Pointti 2
    </Modal>
    <Modal visible={modal3} closeModal={() => this.setState({ modal3: false })}>
    Pointti 3
    </Modal>
    <section
    className={`image-section left`}
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
  </>
  );
}
}


export default Facts;
