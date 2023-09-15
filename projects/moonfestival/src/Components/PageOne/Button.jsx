import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import { useState, useEffect } from 'react';


const Button = (props) => {
  return (
    <>
      {props.answerText !== "" && (
        <div className="answer">
          <h2>{props.answerText}</h2>
        </div>
      )}
      {props.answer === "correct" && (
        <Link to={`${props.link}` }>
          <div className="correct answer">
            <h2 className="correctH2">Great! You got it.</h2>
            <p className="correctH2">Next question...</p>
          </div>
        </Link>
      )}
      <div className={props.class}>
        <button onClick={props.handleClick}>{props.text}</button>
      </div>
    </>
  );
}

export default Button