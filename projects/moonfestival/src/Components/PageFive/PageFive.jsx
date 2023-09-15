import React from "react";
import "../PageOne/PageOne.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../PageOne/Button";
import "../PageFour/PageFour.css";

const PageFive = () => {
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
    <div className="mainBody pageFive">
      <h1 className="pageOneH1">
        Which month is Mid Autumn Festival(Chinese Calender)?
      </h1>

      <Button
        class="button  buttonOne allButton"
        text="September"
        handleClick={() => handleClick("4")}
        answer={answer}
        answerText={text}
        link="/gamePage4"
      />
      <Button
        class="button buttonTwo allButton"
        text="October"
        handleClick={() => handleClick("1")}
        answer={answer}
        answerText={text}
        link="/gamePage4"
      />
      <Button
        class="button buttonThree allButton"
        text="August"
        handleClick={handleCorrectAnswer}
        answer={answer}
        answerText={text}
        link="/gamePage4"
      />
      <Button
        class="button buttonFour allButton"
        text="July"
        handleClick={() => handleClick("3")}
        answer={answer}
        answerText={text}
        link="/gamePage4"
      />
      <Button
        class="button buttonFive allButton"
        text="June"
        handleClick={() => handleClick("2")}
        answer={answer}
        answerText={text}
        link="/gamePage5"
      />
    </div>
  );
};

export default PageFive;
