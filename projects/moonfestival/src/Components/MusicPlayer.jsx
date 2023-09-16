import React, { useState, useEffect } from 'react'
import { BsPlayCircleFill, BsPauseCircleFill } from "react-icons/bs";

const MusicPlayer = ({playing, togglePlay}) => {
    
  return (
    <div>
      <button className="musicBtn" onClick={togglePlay}>
        {playing ? <BsPauseCircleFill /> : <BsPlayCircleFill />}
      </button>

    </div>
  );
}

export default MusicPlayer