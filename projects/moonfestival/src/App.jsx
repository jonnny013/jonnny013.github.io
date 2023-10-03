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
import answersound from "/Sounds/answersound.mp3";
import wronganswer from "/Sounds/wronganswer.mp3";
import backgroundmusic from "/Sounds/backgroundmusic.mp3";



const App = () => {
  const [answer, setAnswer] = useState("");
  const [text, setText] = useState("");
  const [buttonStates, setButtonStates] = useState([false, false,false, false, false])
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
        setText(t("StandardA1"));
        break;
      case "2":
        setText(t("StandardA2"));
        break;
      case "3":
        setText(t("StandardA3"));
        break;
      case "4":
        setText(t("StandardA4"));
        break;
      case "5":
        setText(t("StandardA5"));
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
    const newButtonStates = [false, false, false, false, false];
    setButtonStates(newButtonStates);
  }

  const handleClick = (num) => {
    playWrongAnswer()
    setAnswer(num);
    const newButtonStates = [false, false, false, false, false];
    newButtonStates[num - 1] = !newButtonStates[num - 1];
    setButtonStates(newButtonStates)
    
  };
  const handleCorrectAnswer = (num) => () => {
    playAnswer();
    setAnswer("correct");
    const newButtonStates = [false, false, false, false, false];
    newButtonStates[num - 1] = !newButtonStates[num - 1];
    setButtonStates(newButtonStates);
    
  };
  const toggleSound = () => {
    playAnswer();
  }

  return (
    <>
      <Router>
        <div className="navBar">
          <Link className="navLink1" to="/projects/moonfestival/index.html">
            {t("nav1")}{" "}
          </Link>
          <Link className="navLink" to="/projects/moonfestival/gamePage1">
            {" "}
            {t("nav2")}{" "}
          </Link>
          <Link className="navLink" to="/projects/moonfestival/gamePage2">
            {" "}
            {t("nav3")}{" "}
          </Link>
          <Link className="navLink" to="/projects/moonfestival/gamePage3">
            {" "}
            {t("nav4")}{" "}
          </Link>
          <Link className="navLink" to="/projects/moonfestival/gamePage4">
            {" "}
            {t("nav5")}{" "}
          </Link>
          <Link className="navLink" to="/projects/moonfestival/gamePage5">
            {" "}
            {t("nav6")}{" "}
          </Link>
          <Link className="navLink" to="/projects/moonfestival/gamePage6">
            {" "}
            {t("nav7")}{" "}
          </Link>
          <MusicPlayer playing={playing} togglePlay={togglePlay} />
          <LanguageSelector reset={reset} />
        </div>

        <Routes>
          <Route
            path="/projects/moonfestival/gamePage1"
            element={
              <PageOne
                answer={answer}
                text={text}
                handleClick={handleClick}
                handleCorrectAnswer={handleCorrectAnswer}
                reset={reset}
                state={buttonStates}
              />
            }
          />
          <Route
            path="/projects/moonfestival/"
            element={<WelcomePage toggleSound={toggleSound} />}
          />
          <Route
            path="/projects/moonfestival/gamePage2"
            element={
              <PageTwo
                answer={answer}
                text={text}
                handleClick={handleClick}
                handleCorrectAnswer={handleCorrectAnswer}
                reset={reset}
                state={buttonStates}
              />
            }
          />
          <Route
            path="/projects/moonfestival/gamePage3"
            element={
              <PageThree
                answer={answer}
                text={text}
                handleClick={handleClick}
                handleCorrectAnswer={handleCorrectAnswer}
                reset={reset}
                state={buttonStates}
              />
            }
          />
          <Route
            path="/projects/moonfestival/gamePage4"
            element={
              <PageFour
                answer={answer}
                text={text}
                handleClick={handleClick}
                handleCorrectAnswer={handleCorrectAnswer}
                reset={reset}
                state={buttonStates}
              />
            }
          />
          <Route
            path="/projects/moonfestival/gamePage5"
            element={
              <PageFive
                answer={answer}
                text={text}
                handleClick={handleClick}
                handleCorrectAnswer={handleCorrectAnswer}
                reset={reset}
                state={buttonStates}
              />
            }
          />
          <Route
            path="/projects/moonfestival/gamePage6"
            element={<PageSix />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
