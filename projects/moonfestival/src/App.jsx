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

const App = () => {
  const [answer, setAnswer] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    switch (answer) {
      case "1":
        setText("No!");
        break;
      case "2":
        setText("Try again!");
        break;
      case "3":
        setText("Sorry!");
        break;
      case "4":
        setText("Nope!");
        break;
      case "correct":
        setText("");
        break;
      default:
        setText("");
    }
  }, [answer]);

  const handleClick = (num) => {
    setAnswer(num);
  };
  const handleCorrectAnswer = () => {
    setAnswer("correct");
  };


  return (
    <>
      <Router>
        <div>
          <Link to="/">Home </Link>
          <Link to="/gamePage1"> Page1 </Link>
          <Link to="/gamePage2"> Page2 </Link>
          <Link to="/gamePage3"> Page3 </Link>
          <Link to="/gamePage4"> Page4 </Link>
          <Link to="/gamePage5"> Page5 </Link>
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
              />
            }
          />
          <Route path="/" element={<WelcomePage />} />
          <Route
            path="/gamePage2"
            element={
              <PageTwo
                answer={answer}
                text={text}
                handleClick={handleClick}
                handleCorrectAnswer={handleCorrectAnswer}
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
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
