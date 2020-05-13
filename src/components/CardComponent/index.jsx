import './styles.css'

import React, { Component } from 'react'

// Component used for all normal parts expect for landing page, video and donation

class CardComponent extends Component {
  render() {
    const {
      title,
      cardAlignment,
      backgroundImage,
      id = ''
    } = this.props

    return (
      <div className={'image-section'} id={id} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <section className={`container ${cardAlignment}`}>
          <div className={'kortti'}>
            <h1>{title}</h1>
            {this.props.children}
          </div>
        </section>
      </div>
    )
  }
}

export default CardComponent