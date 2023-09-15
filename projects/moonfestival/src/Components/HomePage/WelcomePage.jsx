import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Youtube from './Youtube';

const WelcomePage = () => {
  return (
    <div className="mainBody welcomePage">
      <h1 className='welcomeH1'>Mid Autumn Festival 中秋節</h1>
      <Link to="/gamePage1">
        <div className="button welcomeBtn">
          <button>Start</button>
        </div>
      </Link>
      <Youtube embedId='l2RKMqrEKSU?si=toWSZs5abCfBGkWg' />

    </div>
  );
}

export default WelcomePage