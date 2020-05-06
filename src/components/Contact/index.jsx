import "./styles.css";

import React, { Component } from "react";
import Modal from 'react-modal';
import photo from "./4.jpg"

function Contact() {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function closeModal(){
    setIsOpen(false);
  }
 
    return (
      <div className="image-section" style={{ backgroundImage: `url(${photo})`}}>
          <section className={'container'}>
            <div className={"kortti"}>
              <h1>ota yhteyttä</h1>
              <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry."</p>
              <div className="icons">
                <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Finstagram_174855&psig=AOvVaw0vuLjjr0Gm_P56BrRobPjK&ust=1588690260132000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjSlce6mukCFQAAAAAdAAAAABAD"><img style= {{width: "50px", height: "50px"}}className={"instagram"} src="./images/icon.png" alt="instagram"></img><p className={"icontext"}>@kalakannatkuntoon</p></a>
                <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Finstagram_174855&psig=AOvVaw0vuLjjr0Gm_P56BrRobPjK&ust=1588690260132000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjSlce6mukCFQAAAAAdAAAAABAD"><img style= {{width: "50px", height: "50px" }}className={"instagram"} src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png" alt="facebook"></img><p className={"icontext"}>#kalakannatkuntoon</p></a>
              </div>
              <div className={"contact"} onClick={openModal}>
              <p>Ota yhteyttä</p>
            </div>
            </div>
          </section>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="Modal"
          overlayClassName="Overlay"          
        >
        <div class="contactForm">
            <form target="_blank" action="https://www.google.fi/webhp">
              <label for="fname">Etunimi</label>
              <input type="text" id="fname" name="firstname"></input>
              <label for="lname">Sukunimi</label>
              <input type="text" id="lname" name="lastname"></input>
              <label for="subject">Mitä haluat kertoa?</label>
              <textarea id="subject" name="subject" style={{height:"100px"}}></textarea>
              <input type="submit" value="Submit"></input>
            </form>
          </div>
        </Modal>
      </div>
    );
}

export default Contact;
