import React, { PureComponent } from "react";
import "./styles.css";

//lisätään tänne somelinkit?


//component used for rendering the header of the page

class Header extends PureComponent {
  
  //method for moving through the page using the header.
  //receives through props the method for moving and is given the index

  onClick = index => this.props.fullpage.fullpageApi.moveTo(index);

  render() {
    return (
      <div className={"header"}>
        <div onClick={() => this.onClick(5)}>Mitä voin tehdä?</div>
        <div onClick={() => this.onClick(6)}>Lahjoita</div>
        <img onClick={() => this.onClick(1)} src={"./images/logo.png"} className={"logo"} alt={"Fish logo"} />
        <div onClick={() => this.onClick(4)}>Faktat tiskiin</div>
        <div onClick={() => this.onClick(7)}>Ota yhteyttä</div>
      </div>
    );
  }
}

export default Header;
