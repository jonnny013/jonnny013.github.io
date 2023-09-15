import React from "react";
import "../PageOne/PageOne.css";
import Button from "../PageOne/Button";

const PageTwo = ({ answer, text, handleClick, handleCorrectAnswer }) => {
  return (
    <div className="mainBody pageTwo">
      <h1 className="pageOneH1">What is this man's name?</h1>

      <Button
        class="button  pageBtn1"
        text="Chang'E"
        handleClick={() => handleClick("1")}
        answer={answer}
        answerText={text}
        link="/gamePage3"
      />
      <Button
        class="button pageBtn2"
        text="Hou Yi"
        handleClick={handleCorrectAnswer}
        answer={answer}
        answerText={text}
        link="/gamePage3"
      />
      <Button
        class="button pageBtn3"
        text="Feng Meng"
        handleClick={() => handleClick("2")}
        answer={answer}
        answerText={text}
        link="/gamePage3"
      />
      <Button
        class="button pageBtn4"
        text="Queen Mother"
        handleClick={() => handleClick("3")}
        answer={answer}
        answerText={text}
        link="/gamePage3"
      />
      <Button
        class="button pageBtn5"
        text="Moon"
        handleClick={() => handleClick("4")}
        answer={answer}
        answerText={text}
        link="/gamePage3"
      />
    </div>
  );
};

export default PageTwo;
