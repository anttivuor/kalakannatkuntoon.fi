import React, { Component } from "react";
import photo from "./2.jpg"

class Participation extends Component {
  render() {
    return (
      <div className="image-section" style={{ backgroundImage: `url(${photo})`}}>
          <section className={'container'}>
            <div className={"kortti"}>
              <h1>"Levitä tietoisuutta vesivoiman haitoista"</h1>
              <div className="icon-container">
                <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry."</p>
              </div>
            </div>
          </section>
      </div>
    );
  }
}

export default Participation;
