import './styles.css'

import axios from 'axios'
import React, { useState } from 'react'
import Modal from 'react-modal'

import CardComponent from '../CardComponent'
import ContactForm from './ContactForm'

const URL = 'https://cranky-mirzakhani-cbd420.netlify.app/.netlify/functions/index/api/feedback'

// Component, where social medias are given and some text also.
// When 'ota yhteyttä' is pressed, information is sent to the database via the backend

const Contact = () => {
  const [IsOpen,setOpen] = useState(false)
  const [fname, setFname] = useState('')
  const [sname, setSname] = useState('')
  const [fback, setFback] = useState('')
  const [badMessage, setBadMessage] = useState('')

  // Open and close the modal
  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  // Send feedback to the database
  // Reset slots and give some feedback to the user
  const handleNewFeedback = async event => {
    event.preventDefault()

    if (fname.length === 0 || sname.length === 0 || fback.length === 0) {
      setBadMessage('täytä jokainen kohta!')
      setTimeout(() => {
        setBadMessage('')
      }, 5000)
    } else {
      const feedBack = {
        fname,
        sname,
        fback
      }
      await axios.post(URL, feedBack)
      setFname('')
      setSname('')
      setFback('')
      setOpen(!IsOpen)
    }
  }

  // Uses modal component from npm library

  return (
    <CardComponent
      title={'Ota yhteyttä'}
      backgroundImage={'./images/4.jpg'}
      cardAlignment={'left'}
    >
      <div className={'icon-container'}>
        <div className={'inf'}>
          <p>Seuraa kampanjaamme myös sosiaalisissa medioissa sekä osallistu keskusteluun <b>#kalakannatkuntoon</b></p>

          <ul style={{ fontSize: '15px' }}>
            <li>kalakannatkuntoon<br></br> <b>(</b>@gmail.com<b>)</b></li>
            <li>+358453196495</li>
            <li>Kalatie 76, 02580 Keitele</li>
          </ul>
        </div>

        <div className={'icons'}>
          <a href={'https://www.instagram.com/virtaavavesi/'} target={'_blank'} rel={'noopener noreferrer'}><img src={'./images/icon.png'} alt={'instagram'} /></a>
          <a href={'https://www.facebook.com/VirtaavaVesi-105852604468111'} target={'_blank'} rel={'noopener noreferrer'}><img src={'./images/facebook.png'} alt={'facebook'} /></a>
          <a href={'https://www.youtube.com/channel/UCwL3qv3pP2feQQgKyS1JORw'} target={'_blank'} rel={'noopener noreferrer'}><img src={'https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/youtube-512.png'} alt={'youtube'} /></a>
          <a href={'https://twitter.com/VirtaavaVesi'} target={'_blank'} rel={'noopener noreferrer'}><img src={'https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png'} alt={'twitter'} /></a>
        </div>
      </div>
      <div className={'contact'} onClick={openModal}>
        <p>Ota yhteyttä</p>
      </div>

      <Modal
        isOpen={IsOpen}
        onRequestClose={closeModal}
        className={'Modal'}
        overlayClassName={'Overlay'}
      >
        <ContactForm
          IsOpen={IsOpen}
          setOpen={setOpen}
          fname={fname}
          sname={sname}
          fback={fback}
          handleNewFeedback={handleNewFeedback}
          setFname={setFname}
          setSname={setSname}
          setFback={setFback}
        />
        <p className={'feedback2'}>{badMessage}</p>
      </Modal>
    </CardComponent>
  )
}

export default Contact