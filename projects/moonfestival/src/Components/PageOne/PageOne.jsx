import React from 'react'
import './PageOne.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import Button from './Button';

const PageOne = () => {
    const [answer, setAnswer] = useState(false)

        const handleClick = (event) => {
            setAnswer(!answer)
        } 


console.log(answer)
  return (
    <div className="mainBody pageOne">
      <h1 className="pageOneH1">How many suns were in the sky?</h1>
      <div className='answer'>
        <h2>Try Again!</h2>
      </div>
      <Button class="button pageBtn1" text="1" handleClick={handleClick} />
      <Button class="button pageBtn2" text="2" handleClick={handleClick} />
      <Button class="button pageBtn3" text="5" handleClick={handleClick} />
      <Button class="button pageBtn4" text="10" handleClick={handleClick} />
      <Button class="button pageBtn5" text="11" handleClick={handleClick} />
      
    </div>
  );
}

export default PageOne