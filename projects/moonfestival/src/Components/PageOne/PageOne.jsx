import "./PageOne.css";
import Button from "./Button";
import { useTranslation } from "react-i18next";

const PageOne = ({ answer, text, handleClick, handleCorrectAnswer, reset }) => {
  const { t } = useTranslation();
  return (
    <div className="mainBody pageOne">
      <h1 className="pageOneH1">{t("Q1")}</h1>

      <Button
        class="button pageBtn1"
        text="1"
        handleClick={() => handleClick("1")}
        answer={answer}
        answerText={text}
        link="/gamePage2"
        reset={reset}
        
      />
      <Button
        class="button pageBtn2"
        text="2"
        handleClick={() => handleClick("2")}
        answer={answer}
        answerText={text}
        link="/gamePage2"
        reset={reset}
        
      />
      <Button
        class="button pageBtn3"
        text="5"
        handleClick={() => handleClick("3")}
        answer={answer}
        answerText={text}
        link="/gamePage2"
        reset={reset}
        
      />
      <Button
        class="button pageBtn4"
        text="10"
        handleClick={handleCorrectAnswer}
        answerText={text}
        link="/gamePage2"
        reset={reset}
        
      />
      <Button
        class="button pageBtn5"
        text="11"
        handleClick={() => handleClick("4")}
        answer={answer}
        answerText={text}
        link="/gamePage2"
        reset={reset}
        
      />
    </div>
  );
};

export default PageOne;
