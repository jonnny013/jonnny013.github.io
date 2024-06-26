import React from "react";
import "../PageOne/PageOne.css";
import Button from "../PageOne/Button";
import "../PageFour/PageFour.css";
import { useTranslation } from "react-i18next";

const PageFive = ({answer, text, handleClick, handleCorrectAnswer, reset, state}) => {
  const { t } = useTranslation();

  return (
    <div className="mainBody pageFive">
      <h1 className="pageOneH1">{t("Q5")}</h1>

      <Button
        class="button  buttonOne allButton"
        text={t("Q5A1")}
        handleClick={() => handleClick("4")}
        answer={answer}
        answerText={text}
        link="/projects/moonfestival/gamePage6"
        reset={reset}
        state={state[0]}
      />
      <Button
        class="button buttonTwo allButton"
        text={t("Q5A2")}
        handleClick={() => handleClick("1")}
        answer={answer}
        answerText={text}
        link="/projects/moonfestival/gamePage6"
        reset={reset}
        state={state[1]}
      />
      <Button
        class="button buttonThree allButton"
        text={t("Q5A3")}
        handleClick={handleCorrectAnswer("5")}
        answer={answer}
        answerText={text}
        link="/projects/moonfestival/gamePage6"
        reset={reset}
        state={state[2]}
      />
      <Button
        class="button buttonFour allButton"
        text={t("Q5A4")}
        handleClick={() => handleClick("3")}
        answer={answer}
        answerText={text}
        link="/projects/moonfestival/gamePage6"
        reset={reset}
        state={state[3]}
      />
      <Button
        class="button buttonFive allButton"
        text={t("Q5A5")}
        handleClick={() => handleClick("2")}
        answer={answer}
        answerText={text}
        link="/projects/moonfestival/gamePage6"
        reset={reset}
        state={state[4]}
      />
    </div>
  );
};

export default PageFive;
