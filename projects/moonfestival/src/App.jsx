import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WelcomePage from "./Components/HomePage/WelcomePage";
import PageOne from "./Components/PageOne/PageOne";
import PageTwo from "./Components/PageTwo/PageTwo";
import PageThree from "./Components/PageThree/PageThree";
import PageFour from "./Components/PageFour/PageFour";
import PageFive from "./Components/PageFive/PageFive";
import { useState, useEffect } from "react";
import PageSix from "./Components/PageSix/PageSix";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./Components/LanguageSelector";
import MusicPlayer from "./Components/MusicPlayer";
import useSound from "use-sound";
import answersound from "../Sounds/answersound.mp3";
import wronganswer from "../Sounds/wronganswer.mp3";
import backgroundmusic from "../Sounds/backgroundmusic.mp3";



const App = () => {
  const [answer, setAnswer] = useState("");
  const [text, setText] = useState("");
  const { t } = useTranslation();
  const [playAnswer] = useSound(answersound);
  const [playWrongAnswer] = useSound(wronganswer)
  const [playing, setPlaying] = useState(false);
  const [play, { pause }] = useSound(backgroundmusic, {
    onplay: () => setPlaying(true),
    onend: () => setPlaying(false),
    volume: 0.4,
  });

  const togglePlay = () => {
    console.log("clicked")
    if (playing) {
      pause();
    } else {
      play();
    }
    setPlaying(!playing);
  };

  useEffect(() => {
    switch (answer) {
      case "1":
        setText(t('StandardA1'));
        break;
      case "2":
        setText(t("StandardA2"));
        break;
      case "3":
        setText(t('StandardA3'));
        break;
      case "4":
        setText(t("StandardA4"));
        break;
      case "correct":
        setText("");
        break;
      default:
        setText("");
    }
  }, [answer]);

  const reset = () => {
    setAnswer("")
  }

  const handleClick = (num) => {
    playWrongAnswer()
    setAnswer(num);
  };
  const handleCorrectAnswer = () => {
    playAnswer();
    setAnswer("correct");
  };

  const toggleSound = () => {
    playAnswer();
  }

  return (
    <>
      <Router>
        <div className="navBar">
          <Link className="navLink" to="/">
            {t("nav1")}{" "}
          </Link>
          <Link className="navLink" to="/gamePage1">
            {" "}
            {t("nav2")}{" "}
          </Link>
          <Link className="navLink" to="/gamePage2">
            {" "}
            {t("nav3")}{" "}
          </Link>
          <Link className="navLink" to="/gamePage3">
            {" "}
            {t("nav4")}{" "}
          </Link>
          <Link className="navLink" to="/gamePage4">
            {" "}
            {t("nav5")}{" "}
          </Link>
          <Link className="navLink" to="/gamePage5">
            {" "}
            {t("nav6")}{" "}
          </Link>
          <Link className="navLink" to="/gamePage6">
            {" "}
            {t("nav7")}{" "}
          </Link>
          <MusicPlayer playing={playing} togglePlay={togglePlay} />
          <LanguageSelector reset={reset} />
        </div>

        <Routes>
          <Route
            path="/gamePage1"
            element={
              <PageOne
                answer={answer}
                text={text}
                handleClick={handleClick}
                handleCorrectAnswer={handleCorrectAnswer}
                reset={reset}
              />
            }
          />
          <Route path="/" element={<WelcomePage toggleSound={toggleSound} />} />
          <Route
            path="/gamePage2"
            element={
              <PageTwo
                answer={answer}
                text={text}
                handleClick={handleClick}
                handleCorrectAnswer={handleCorrectAnswer}
                reset={reset}
              />
            }
          />
          <Route
            path="/gamePage3"
            element={
              <PageThree
                answer={answer}
                text={text}
                handleClick={handleClick}
                handleCorrectAnswer={handleCorrectAnswer}
                reset={reset}
              />
            }
          />
          <Route
            path="/gamePage4"
            element={
              <PageFour
                answer={answer}
                text={text}
                handleClick={handleClick}
                handleCorrectAnswer={handleCorrectAnswer}
                reset={reset}
              />
            }
          />
          <Route
            path="/gamePage5"
            element={
              <PageFive
                answer={answer}
                text={text}
                handleClick={handleClick}
                handleCorrectAnswer={handleCorrectAnswer}
                reset={reset}
              />
            }
          />
          <Route path="/gamePage6" element={<PageSix />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
