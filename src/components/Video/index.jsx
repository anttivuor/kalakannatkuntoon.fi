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
            src={"https://r2---sn-5hnednlk.c.drive.google.com/videoplayback?expire=1588616326&ei=RiSwXr-qFZec-wXiyLCoBA&ip=82.130.9.45&cp=QVNNWkdfVVNQR1hOOmxoMTh5TkRlVW5jT28xd2NyME83c3J0bUxScUFjOExHRGpUemhvQUp1OWg&id=03b0ea843c9fd1d4&itag=22&source=webdrive&requiressl=yes&ttl=transient&susc=dr&driveid=1jOtKFidaGxkgeTL0XSPnB3aBv0yQChpb&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=112.338&lmt=1588601910848581&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIgDUJRTys9Fa0BCMbJ2MV92Pzi6htAgGr18DH1O3dnnG0CIQDkrlud468ELYegg8ym53BsmtK2FP20LbnWk162ETVIBw==&cpn=ICgdg9nTD6Ajidrh&c=WEB_EMBEDDED_PLAYER&cver=20200429&redirect_counter=1&cm2rm=sn-5gols7l&req_id=ecfe328437fb36e2&cms_redirect=yes&mh=3q&mm=34&mn=sn-5hnednlk&ms=ltu&mt=1588601852&mv=m&mvi=1&pl=18&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=ALrAebAwRQIhAKkZLByvciOhJ_qltsRbmTzyzPA5Z2RmX0qx1TKIDFTxAiBIXNpetlINXuJM_9-KIYAHxLhLxcK1ltVRg4loTRf0Pg%3D%3D"}
            type={"video/mp4"}
          />
          Your browser does not support HTML5 video.
        </video>
      </section>
    );
  }
}

export default Video;
