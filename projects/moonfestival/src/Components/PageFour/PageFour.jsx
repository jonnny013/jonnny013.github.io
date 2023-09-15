import React from "react";
import "../PageOne/PageOne.css";
import Button from "../PageOne/Button";
import "./PageFour.css"
import { useTranslation } from "react-i18next";

const PageFour = ({ answer, text, handleClick, handleCorrectAnswer, reset }) => {
  const { t } = useTranslation();
  return (
    <div className="mainBody pageFour">
      <h1 className="pageOneH1">{t("Q4")}</h1>

      <Button
        class="button  buttonOne allButton"
        text={t("Q4A1")}
        handleClick={() => handleClick("4")}
        answer={answer}
        answerText={text}
        link="/gamePage4"
        reset={reset}
      />
      <Button
        class="button buttonTwo allButton"
        text={t("Q4A2")}
        handleClick={() => handleClick("1")}
        answer={answer}
        answerText={text}
        link="/gamePage4"
        reset={reset}
      />
      <Button
        class="button buttonThree allButton"
        text={t("Q4A3")}
        handleClick={() => handleClick("2")}
        answer={answer}
        answerText={text}
        link="/gamePage4"
        reset={reset}
      />
      <Button
        class="button buttonFour allButton"
        text={t("Q4A4")}
        handleClick={() => handleClick("3")}
        answer={answer}
        answerText={text}
        link="/gamePage4"
        reset={reset}
      />
      <Button
        class="button buttonFive allButton"
        text={t("Q4A5")}
        handleClick={handleCorrectAnswer}
        answer={answer}
        answerText={text}
        link="/gamePage5"
        reset={reset}
      />
    </div>
  );
};

export default PageFour;
