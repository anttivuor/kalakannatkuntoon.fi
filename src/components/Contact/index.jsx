import "./styles.css";

import React, {useState } from "react";
import Modal from 'react-modal';
import axios from 'axios'
import CardComponent from '../CardComponent'
import ContactForm from './ContactForm'

const URL = 'https://cranky-mirzakhani-cbd420.netlify.app/.netlify/functions/index/api/feedback'

//component, where social medias are given and some text also. 
//when ota yhteyttä is pressed, information is sent to the database via the backend 


function Contact() {
  const [IsOpen,setOpen] = useState(false);
  const [fname, setFname] = useState('')
  const [sname, setSname] = useState('')
  const [fback, setFback] = useState('')
  const [goodMessage, setGoodMessage] = useState('')
  const [badMessage, setBadMessage] = useState('')

  //open and close the modal

  function openModal() {
    setOpen(true)
  }
 
  function closeModal() {
    setOpen(false)
  }

  //send feedback to the database
  //reset slots and give some feedback to the user

  const handleNewFeedback = async (event) => {
    event.preventDefault()

    if (fname.length === 0 || sname.length === 0 || fback.length === 0) {
      setBadMessage('täytä jokainen kohta!')
      setTimeout(() => {
        setBadMessage('')
       }, 5000);
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
        setGoodMessage('kiitos yhteydenotostasi!')
        setTimeout(() => {
          setGoodMessage('')
        }, 5000);
    } 
  } 

  //uses modal component from npm library
 
    return (
      <CardComponent
        title={'"Ota yhteyttä"'}
        description={
          '"Lorem Ipsum is simply dummy text of the printing and typesetting industry.".'
        }
        backgroundImage={'./images/4.jpg'}
        cardAlignment={'left'}
      >
        <div className="icon-container">
          <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry."</p>
          <div className="icons">
            <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Finstagram_174855&psig=AOvVaw0vuLjjr0Gm_P56BrRobPjK&ust=1588690260132000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjSlce6mukCFQAAAAAdAAAAABAD"><img src="./images/icon.png" alt="instagram"></img></a>
            <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Finstagram_174855&psig=AOvVaw0vuLjjr0Gm_P56BrRobPjK&ust=1588690260132000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjSlce6mukCFQAAAAAdAAAAABAD"><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png" alt="facebook"></img></a>
            <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Finstagram_174855&psig=AOvVaw0vuLjjr0Gm_P56BrRobPjK&ust=1588690260132000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjSlce6mukCFQAAAAAdAAAAABAD"><img src="https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png" alt="twitter"></img></a>
          </div>
        </div>
        <div className={"contact"} onClick={openModal}>
          <p>Ota yhteyttä</p>
        </div>
        <Modal
          isOpen={IsOpen}
          onRequestClose={closeModal}
          className="Modal"
          overlayClassName="Overlay"          
        >
          <ContactForm fname={fname} sname={sname} fback={fback} handleNewFeedback={handleNewFeedback} setFname={setFname} setSname={setSname} setFback={setFback} />
          <p className="feedback1">{goodMessage}</p>
          <p className="feedback2">{badMessage}</p>
        </Modal>
      </CardComponent>
    );
}

export default Contact;
