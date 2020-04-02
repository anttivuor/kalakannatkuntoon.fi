import React, { PureComponent } from "react";

import "./styles.css";

class Header extends PureComponent {
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
