import React from "react";
import "../PageOne/PageOne.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../PageOne/Button";
import "./PageFour.css"

const PageFour = () => {
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
    <div className="mainBody pageFour">
      <h1 className="pageOneH1">
        What happened to Chang'e after drinking the elixir?
      </h1>

      <Button
        class="button  buttonOne allButton"
        text="She died."
        handleClick={() => handleClick("4")}
        answer={answer}
        answerText={text}
        link="/gamePage4"
      />
      <Button
        class="button buttonTwo allButton"
        text="She became a rabbit."
        handleClick={() => handleClick("1")}
        answer={answer}
        answerText={text}
        link="/gamePage4"
      />
      <Button
        class="button buttonThree allButton"
        text="She lived forever."
        handleClick={() => handleClick("2")}
        answer={answer}
        answerText={text}
        link="/gamePage4"
      />
      <Button
        class="button buttonFour allButton"
        text="She could fly."
        handleClick={() => handleClick("3")}
        answer={answer}
        answerText={text}
        link="/gamePage4"
      />
      <Button
        class="button buttonFive allButton"
        text="She flew to the moon."
        handleClick={handleCorrectAnswer}
        answer={answer}
        answerText={text}
        link="/gamePage5"
      />
    </div>
  );
};

export default PageFour;
