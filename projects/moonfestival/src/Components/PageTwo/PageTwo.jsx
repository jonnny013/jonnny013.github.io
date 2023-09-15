import React from "react";
import "../PageOne/PageOne.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../PageOne/Button";

const PageTwo = () => {
  const [answer, setAnswer] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    switch (answer) {
      case "1":
        setText("No!");
        break;
      case "2":
        setText("Try again!");
        break;
      case "3":
        setText("Sorry!");
        break;
      case "4":
        setText("Nope!");
        break;
      case "correct":
        setText("");
        break;
      default:
        setText("");
    }
  }, [answer]);


  const handleClick = (num) => {
    setAnswer(num);
  };
  const handleCorrectAnswer = () => {
    setAnswer("correct");
  };

  return (
    <div className="mainBody pageTwo">
      <h1 className="pageOneH1">What is this man's name?</h1>

      <Button
        class="button  pageBtn1"
        text="Chang'E"
        handleClick={() => handleClick("1")}
        answer={answer}
        answerText={text}
      />
      <Button
        class="button pageBtn2"
        text="Hou Yi"
        handleClick={handleCorrectAnswer}
        answer={answer}
        answerText={text}
      />
      <Button
        class="button pageBtn3"
        text="Feng Meng"
        handleClick={() => handleClick("2")}
        answer={answer}
        answerText={text}
      />
      <Button
        class="button pageBtn4"
        text="Queen Mother"
        handleClick={() => handleClick("3")}
        answer={answer}
        answerText={text}
      />
      <Button
        class="button pageBtn5"
        text="Moon"
        handleClick={() => handleClick("4")}
        answer={answer}
        answerText={text}
      />
    </div>
  );
};

export default PageTwo;
