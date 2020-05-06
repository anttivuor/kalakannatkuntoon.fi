import "./styles.css";

import React, { Component } from "react";

import Modal from "../Modal"
import photo from "./4.jpg"

//lisää nappi, mistä avautuu ponnahdusikkuna yhteydenottoa varten (ei varmaa tarvitse tehä bäkkäriä, mutta yhteydenotto lähtee kuvitteelisesti)
//lisätään myös sosiaalisen median linkit tähän, ehkä myös etusivulla headeriin tai jtn?

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modal: false
    }
  }

  render() {
    const { modal } = this.state

    return (
      <>
        <Modal visible={modal} closeModal={() => this.setState({ modal: false })}>
          <div class="container">
            <form action="action_page.php">
              <label for="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
              <label for="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
              <label for="subject">Subject</label>
              <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>
              <input type="submit" value="Submit"></input>
            </form>
          </div>
        </Modal>
        <section
          className={`xx`}
          style={{ backgroundImage: `url(${photo})`}}
          id={"faktat"}
        >
          <section className={'container'}>
            <div className={"contact"}
              style={{marginTop: "150px", backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', padding: "10px" }}
              onClick={() => this.setState({ modal: true })}>
              <p>Ota yhteyttä</p>
            </div>
            <div className={"kortti"}>
              <h1>ota yhteyttä</h1>
              <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"</p>
              <div className="icons">
                <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Finstagram_174855&psig=AOvVaw0vuLjjr0Gm_P56BrRobPjK&ust=1588690260132000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjSlce6mukCFQAAAAAdAAAAABAD"><img style= {{width: "10%", height: "10%"}}className={"instagram"} src="./images/icon.png" alt="instagram"></img><p className={"icontext"}>@kalakannatkuntoon</p></a>
                <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Finstagram_174855&psig=AOvVaw0vuLjjr0Gm_P56BrRobPjK&ust=1588690260132000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjSlce6mukCFQAAAAAdAAAAABAD"><img style= {{width: "10%", height: "10%" }}className={"instagram"} src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png" alt="facebook"></img><p className={"icontext"}>#kalakannatkuntoon</p></a>
              </div>
            </div>
          </section>
        </section>
      </>
    );
  }
}

export default Contact;
