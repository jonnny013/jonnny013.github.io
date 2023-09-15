import React from "react";
import "../PageOne/PageOne.css";
import Button from "../PageOne/Button";
import "../PageFour/PageFour.css";
import { useTranslation } from "react-i18next";

const PageFive = ({answer, text, handleClick, handleCorrectAnswer, reset}) => {
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
        link="/gamePage6"
        reset={reset}
      />
      <Button
        class="button buttonTwo allButton"
        text={t("Q5A2")}
        handleClick={() => handleClick("1")}
        answer={answer}
        answerText={text}
        link="/gamePage6"
        reset={reset}
      />
      <Button
        class="button buttonThree allButton"
        text={t("Q5A3")}
        handleClick={handleCorrectAnswer}
        answer={answer}
        answerText={text}
        link="/gamePage6"
        reset={reset}
      />
      <Button
        class="button buttonFour allButton"
        text={t("Q5A4")}
        handleClick={() => handleClick("3")}
        answer={answer}
        answerText={text}
        link="/gamePage6"
        reset={reset}
      />
      <Button
        class="button buttonFive allButton"
        text={t("Q5A5")}
        handleClick={() => handleClick("2")}
        answer={answer}
        answerText={text}
        link="/gamePage6"
        reset={reset}
      />
    </div>
  );
};

export default PageFive;
