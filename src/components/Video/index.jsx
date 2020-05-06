import "./styles.css";

import React, { Component } from "react";

//component used for playing the video. The video starts automatically, as user scrolls to the second page.
//user must press somewhere on the page for the video to be able to start.

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoStarted: false
    };
  }

  //checks, if user's previous position is the the initial page and is on the second page, where video exists
  //then, sets videoStarted to true and plays the video

  componentDidUpdate = prevProps => {
    if (
      prevProps.currentScreen === 0 &&
      this.props.currentScreen === 2 &&
      !this.state.videoStarted
    ) {
      this.setState({ videoStarted: true }, () => {
        this.video.play();
      });
    }
  };

  render() {
    return (
      <section className={"video"}>
        <video
          ref={ref => (this.video = ref)}
          controls
          poster={"./images/video-thumbnail.png"}
        >
          <source
            src={"https://drive.google.com/open?id=1jOtKFidaGxkgeTL0XSPnB3aBv0yQChpb"}
            type={"video/mp4"}
          />
          Your browser does not support HTML5 video.
        </video>
      </section>
    );
  }
}

export default Video;
