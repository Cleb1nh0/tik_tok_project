import React, { useRef, useState } from "react";
import Videofooter from "./components/footer/Videofooter";
import Videosidebar from "./components/Siderbar/Videosidebar";
import "./Video.css";

function Video({ likes, messages, shares, name, description, music, url }) {
  const videoRef = useRef(null);
  const [play, setplay] = useState(false);

  function handdlestart() {
    if (play) {
      videoRef.current.pause();
      setplay(false);
    } else {
      videoRef.current.play();
      setplay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdlestart}
        loop
        src={url}
      ></video>
      <Videosidebar likes={likes} messages={messages} shares={shares} />
      <Videofooter name={name} description={description} music={music} />
    </div>
  );
}

export default Video;
