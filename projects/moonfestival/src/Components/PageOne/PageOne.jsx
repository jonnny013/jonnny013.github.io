import React, { useState, useEffect } from "react";
import "./PageOne.css";
import { Link } from "react-router-dom";
import Button from "./Button";

const PageOne = () => {
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
    console.log(num);
    setAnswer(num);
  };

  const handleCorrectAnswer = () => {
    setAnswer("correct");
  };

  return (
    <div className="mainBody pageOne">
      <h1 className="pageOneH1">How many suns were in the sky?</h1>

      <Button
        class="button pageBtn1"
        text="1"
        handleClick={() => handleClick("1")}
        answer={answer}
        answerText={text}
        link="/gamePage2"
      />
      <Button
        class="button pageBtn2"
        text="2"
        handleClick={() => handleClick("2")}
        answer={answer}
        answerText={text}
        link="/gamePage2"
      />
      <Button
        class="button pageBtn3"
        text="5"
        handleClick={() => handleClick("3")}
        answer={answer}
        answerText={text}
        link="/gamePage2"
      />
      <Button
        class="button pageBtn4"
        text="10"
        handleClick={handleCorrectAnswer}
        answerText={text}
        link="/gamePage2"
      />
      <Button
        class="button pageBtn5"
        text="11"
        handleClick={() => handleClick("4")}
        answer={answer}
        answerText={text}
        link="/gamePage2"
      />
    </div>
  );
};

export default PageOne;
