import React, { Component } from "react";
import ImageSection from "../ImageSection";
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
    <section
    className={`image-section right`}
    style={{ backgroundImage: `url(${photo})`}}
  >
    <section className={'container'}>
    <Modal visible={modal1} closeModal={() => this.setState({ modal1: false })}>
    Pointti 1
    </Modal>
    <Modal visible={modal2} closeModal={() => this.setState({ modal2: false })}>
    Pointti 2
    </Modal>
    <Modal visible={modal3} closeModal={() => this.setState({ modal3: false })}>
    Pointti 3
    </Modal>
    <div className={"kortti"}>
      <h1>'"Vesivoima tuhoaa arvokkaat kalakantamme!"'</h1>
      <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"</p>
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
  </section>
  );
}
}


export default Facts;
