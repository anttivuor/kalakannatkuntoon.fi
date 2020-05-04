import "./styles.css";

import React, { PureComponent } from "react";

//lisätään tänne somelinkit?


//component used for rendering the header of the page

class Header extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }

  //method for moving through the page using the header.
  //receives through props the method for moving and is given the index

  onClick = index => {
    if (this.state.open) this.setState({ open: false })
    this.props.fullpage.fullpageApi.moveTo(index);
  }

  render() {
    const { open } = this.state
    // Different navigation for mobile
    if (window.innerWidth < 500) {
      return (
        <div className={`header-mobile ${open ? 'visible' : 'hidden'}`}>
          <div>
            <img onClick={() => this.onClick(1)} src={"./images/logo.png"} className={"logo"} alt={"Fish logo"} />
            <div className={'header-mobile-icon'} onClick={() => this.setState({ open: !this.state.open })}>
              <div />
              <div />
              <div />
            </div>
          </div>
          <div onClick={() => this.onClick(5)}>Mitä voin tehdä?</div>
          <div onClick={() => this.onClick(6)}>Lahjoita</div>
          <div onClick={() => this.onClick(4)}>Faktat tiskiin</div>
          <div onClick={() => this.onClick(7)}>Ota yhteyttä</div>
        </div>
      )
    }
    // Tablet/desktop
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
