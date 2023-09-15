import React from "react";
import "../PageOne/PageOne.css";
import Button from "../PageOne/Button";
import "../PageFour/PageFour.css";

const PageFive = ({answer, text, handleClick, handleCorrectAnswer}) => {
  

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
        link="/gamePage6"
      />
      <Button
        class="button buttonTwo allButton"
        text="October"
        handleClick={() => handleClick("1")}
        answer={answer}
        answerText={text}
        link="/gamePage6"
      />
      <Button
        class="button buttonThree allButton"
        text="August"
        handleClick={handleCorrectAnswer}
        answer={answer}
        answerText={text}
        link="/gamePage6"
      />
      <Button
        class="button buttonFour allButton"
        text="July"
        handleClick={() => handleClick("3")}
        answer={answer}
        answerText={text}
        link="/gamePage6"
      />
      <Button
        class="button buttonFive allButton"
        text="June"
        handleClick={() => handleClick("2")}
        answer={answer}
        answerText={text}
        link="/gamePage6"
      />
    </div>
  );
};

export default PageFive;
