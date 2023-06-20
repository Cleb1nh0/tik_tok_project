import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/fireBase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {

  let maxHeight;
  if(window.innerHeight <= 800){
   maxHeight = window.innerHeight 


  }

  const [video, setvideos] = useState([]);

  async function getVideos() {
    const videoscollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videoscollection);
    const videosList = videosSnapshot.docs.map((doc) => doc.data());
    setvideos(videosList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App" style={{ maxheight: maxHeight + "px" }}>
      <div className="app__videos">
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
