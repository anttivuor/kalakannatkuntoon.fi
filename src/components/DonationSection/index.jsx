import "./styles.css";

import React, { Component } from "react";

//renders a component for the donation section

class DonationSection extends Component {
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
          { title && <h1>{title}</h1> }
          { description && <p>{description}</p> }
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default DonationSection;
