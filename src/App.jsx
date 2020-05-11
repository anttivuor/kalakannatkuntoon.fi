import 'fullpage.js/vendors/scrolloverflow'

import './styles.css'

import ReactFullpage from '@fullpage/react-fullpage'
import React, { Component } from 'react'

import Admin from './components/Admin'
import Contact from './components/Contact'
import Donation from './components/Donation'
import Facts from './components/Facts'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import Participation from './components/Participation'
import Story from './components/Story'
import Video from './components/Video'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentScreen: 0
    }
  }


  render() {
    const { currentScreen } = this.state

    // Render admin page
    if (window.location.pathname === '/admin') {
      return <Admin />
    }

    // Creates a sliding effect when scrolled up or down (ReactFullpage)
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
                  <Story />
                </div>
                <div className="section">
                  <Contact />
                </div>
              </div>
            )
          }}
        />
      </>
    )
  }
}

export default App
