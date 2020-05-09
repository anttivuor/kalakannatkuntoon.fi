import React, { Component } from "react";
import photo from "./fish.jpg"
import "./styles.css"
import Modal from 'react-modal';

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
      <div className="image-section" style={{ backgroundImage: `url(${photo})`}}>
          <section className={'container'}>
            <div className={"kortti"}>
              <h1 className="storyh1">Meistä</h1>
                <p className="description">Olemme pieni ja ketterä yhdistys, jonka tavoitteena on edistää tiedon lisäämistä vesivoimasta ja estää sen luomia pysyviä haittoja.</p>
                <div
                onClick={() => this.setState({ modal1: true })}>
                  <p style={ {textDecorationLine: "underline", cursor: "pointer"} }>Lisää yhdistyksestämme</p>
                </div>
                Henkilöinä olemme aidosti kiinnostuneita vesivoimasta ja sen hyödyntämisestä vastuullisella tavalla. Meitä kiehtoo luonnon monimuotoisuuden säilyttäminen ja eettisten arvojen noudattaminen
                <div
                onClick={() => this.setState({ modal1: true })}>
                  <p style={ {textDecorationLine: "underline", cursor: "pointer"} }>Lue lisää kampanjan takana olevista henkilöistä</p>
                </div>
            </div>
          </section>
          <Modal className="Modal" overlayClassName="Overlay" isOpen={modal1} onRequestClose={() => this.setState({ modal1: false })}>
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
          </Modal>
          <Modal className="Modal" overlayClassName="Overlay" isOpen={modal2} onRequestClose={() => this.setState({ modal2: false })}>
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
          </Modal>
      </div>
    );
  }
}

export default Story;