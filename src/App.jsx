import React, { Component } from "react";
import Header from "./components/Header/index";
import LandingPage from "./components/LandingPage/index";
import Video from "./components/Video/index";
import Facts from "./components/Facts/index";
import Donation from "./components/Donation";
import Participation from "./components/Participation";
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/vendors/scrolloverflow";
import Contact from "./components/Contact";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScreen: 0
    };
  }

  render() {
    const { currentScreen } = this.state;

    return (
      <>
        <Header fullpage={this.fullpage} />
        <ReactFullpage
          scrollOverflow={true}
          afterLoad={(origin, destination, direction) =>
            this.setState({ currentScreen: destination.index })
          }
          ref={ref => (this.fullpage = ref)}
          render={({ state, fullpageApi }) => {
            return (
              <div className="App" id="fullpage-wrapper">
                <div className="section">
                  <LandingPage fullpage={this.fullpage}/>
                </div>
                <div className="section">
                  <Video currentScreen={currentScreen} />
                </div>
                <div className="section">
                  <Facts />
                </div>
                <div className="section">
                  <Participation />
                </div>
                <div className="section">
                  <Donation />
                </div>
                <div className="section">
                  <Contact />
                </div>
              </div>
            );
          }}
        />
      </>
    );
  }
}

export default App;
