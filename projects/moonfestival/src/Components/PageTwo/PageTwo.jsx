import React from "react";
import "../PageOne/PageOne.css";
import Button from "../PageOne/Button";
import { useTranslation } from "react-i18next";

const PageTwo = ({ answer, text, handleClick, handleCorrectAnswer, reset, state }) => {
  const { t } = useTranslation();
  return (
    <div className="mainBody pageTwo">
      <h1 className="pageOneH1">{t("Q2")}</h1>

      <Button
        class="button  pageBtn1"
        text={t("Q2A1")}
        handleClick={() => handleClick("1")}
        answer={answer}
        answerText={text}
        link="/projects/moonfestival/gamePage3"
        reset={reset}
        state={state[0]}
      />
      <Button
        class="button pageBtn2"
        text={t("Q2A2")}
        handleClick={handleCorrectAnswer("5")}
        answer={answer}
        answerText={text}
        link="/projects/moonfestival/gamePage3"
        reset={reset}
        state={state[1]}
      />
      <Button
        class="button pageBtn3"
        text={t("Q2A3")}
        handleClick={() => handleClick("2")}
        answer={answer}
        answerText={text}
        link="/projects/moonfestival/gamePage3"
        reset={reset}
        state={state[2]}
      />
      <Button
        class="button pageBtn4"
        text={t("Q2A4")}
        handleClick={() => handleClick("3")}
        answer={answer}
        answerText={text}
        link="/projects/moonfestival/gamePage3"
        reset={reset}
        state={state[3]}
      />
      <Button
        class="button pageBtn5"
        text={t("Q2A5")}
        handleClick={() => handleClick("4")}
        answer={answer}
        answerText={text}
        link="/projects/moonfestival/gamePage3"
        reset={reset}
        state={state[4]}
      />
    </div>
  );
};

export default PageTwo;
