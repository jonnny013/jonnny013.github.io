import React from "react";
import "../PageOne/PageOne.css";
import Button from "../PageOne/Button";

const PageThree = ({ answer, text, handleClick, handleCorrectAnswer }) => {
  
  return (
    <div className="mainBody pageThree">
      <h1 className="pageOneH1">Who drank the elixir?</h1>

      <Button
        class="button  pageBtn1"
        text="Chang'E"
        handleClick={handleCorrectAnswer}
        answer={answer}
        answerText={text}
        link="/gamePage4"
      />
      <Button
        class="button pageBtn2"
        text="Hou Yi"
        handleClick={() => handleClick("1")}
        answer={answer}
        answerText={text}
        link="/gamePage4"
      />
      <Button
        class="button pageBtn3"
        text="Feng Meng"
        handleClick={() => handleClick("2")}
        answer={answer}
        answerText={text}
        link="/gamePage4"
      />
      <Button
        class="button pageBtn4"
        text="Queen Mother"
        handleClick={() => handleClick("3")}
        answer={answer}
        answerText={text}
        link="/gamePage4"
      />
      <Button
        class="button pageBtn5"
        text="Rabbit"
        handleClick={() => handleClick("4")}
        answer={answer}
        answerText={text}
        link="/gamePage4"
      />
    </div>
  );
};

export default PageThree;
