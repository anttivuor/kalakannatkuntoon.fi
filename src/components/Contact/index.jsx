import "./styles.css";

import React, {useState } from "react";
import Modal from 'react-modal';
import photo from "./4.jpg"
import axios from 'axios'

const URL = 'https://cranky-mirzakhani-cbd420.netlify.app/.netlify/functions/index/api/feedback'

function Contact() {
  const [IsOpen,setOpen] = useState(false);
  const [fname, setFname] = useState('')
  const [sname, setSname] = useState('')
  const [fback, setFback] = useState('')
  const [message, setMessage] = useState('')


  function openModal() {
    setOpen(true)
  }
 
  function closeModal() {
    setOpen(false)
  }

  const handleNewFeedback = async (event) => {
    event.preventDefault()
    const feedBack = {
      fname,
      sname,
      fback
    }
    await axios.post(URL, feedBack)
    setFname('')
    setSname('')
    setFback('')
    setMessage('kiitos yhteydenotostasi!')
    setTimeout(() => {
      setMessage('')
     }, 5000);
  } 
 
    return (
      <div className="image-section" style={{ backgroundImage: `url(${photo})`}}>
          <section className={'contact-container'}>
            <div className={"kortti"}>
              <h1>ota yhteyttä</h1>
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
            </div>
          </section>
        <Modal
          isOpen={IsOpen}
          onRequestClose={closeModal}
          className="Modal"
          overlayClassName="Overlay"          
        >
        <div class="contactForm">
            <form onSubmit={handleNewFeedback} action="https://www.google.fi/webhp">
              <label for="fname">Etunimi</label>
              <input 
              type="text" 
              value={fname} 
              id="fname" 
              name="firstname" 
              onChange={({ target}) => setFname(target.value)}>
              </input>
              <label for="lname">Sukunimi</label>
              <input 
              type="text" 
              id="lname" 
              value={sname}
              name="lastname"
              onChange={({ target}) => setSname(target.value)}>
              </input>
              <label for="subject">Mitä haluat kertoa?</label>
              <textarea 
              id="subject" 
              name="subject"
              value={fback} 
              style={{height:"100px"}}
              onChange={({ target}) => setFback(target.value)}>
              </textarea>
              <input type="submit" value="Submit"></input>
            </form>
          </div>
          <p className="feedback">{message}</p>
        </Modal>
      </div>
    );
}

export default Contact;
