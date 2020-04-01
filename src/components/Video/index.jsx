import React, { Component } from "react";
import "./styles.css";

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoStarted: false
    };
  }

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
            src={"https://anttivuor.github.io/video/video.mp4"}
            type={"video/mp4"}
          />
          Your browser does not support HTML5 video.
        </video>
      </section>
    );
  }
}

export default Video;
