import React from "react";
import "../PageOne/PageOne.css";
import Button from "../PageOne/Button";
import "./PageFour.css"

const PageFour = ({ answer, text, handleClick, handleCorrectAnswer }) => {
  
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
