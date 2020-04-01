import React, { Component } from "react";
import "./styles.css";

class ImageSection extends Component {
  render() {
    const {
      title,
      description,
      cardAlignment = "right",
      backgroundImage,
      id = ""
    } = this.props;
    return (
      <section
        className={`image-section ${cardAlignment}`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
        id={id}
      >
        <div className={"card"}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </section>
    );
  }
}

export default ImageSection;
