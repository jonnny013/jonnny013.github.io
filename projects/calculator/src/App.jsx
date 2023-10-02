import React, { useEffect, useState } from "react";
import "./App.css";
import Display from "./Components/Display";
import Buttons from "./Components/Buttons";
import ControlButtons from "./Components/ControlButtons";

const App = () => {
  const [display, setDisplay] = useState("");
  const [controllers, setControllers] = useState("");
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const [displayReset, setDisplayReset] = useState(false);
  const [fixDoubleOperator, setFixDoubleOperator] = useState(false);
  const [equalRepeated, setEqualRepeated] = useState(false);

  //console.log(`display: ${display} ${typeof display}, controller: ${controllers}, first number: ${firstNumber}, second number: ${secondNumber}, operator: ${operator}, reset: ${displayReset} `);

  const clear = () => {
    setControllers("");
    setDisplay("");
    setFirstNumber(null);
    setSecondNumber(null);
    setOperator(null);
    setDisplayReset(false);
    setFixDoubleOperator(false);
  };

  const calculationTypeOne = (type, display) => {
    setControllers("");
    setOperator(type);
    setFirstNumber(Number(display));
    setDisplayReset(true);
    setEqualRepeated(false);
  };

  const calculationTypeTwo = (type) => {
    setControllers("");
    setSecondNumber(Number(display));
    calculatorChoice(Number(display));
    setOperator(type);
    setDisplayReset(true);
    setEqualRepeated(false);
  };

  const calculationTypeThree = (type, display) => {
    setControllers("");
    setOperator(type);
    setDisplayReset(true);
    setSecondNumber(Number(display));
  };

  const equals = () => {
    if (equalRepeated === true) {
      setEqualRepeated(true);
      setControllers("");
      setFirstNumber(Number(display));
      calculatorChoice(secondNumber);
      setDisplayReset(true);
    } else {
      setEqualRepeated(true);
      setControllers("");
      setSecondNumber(Number(display));
      calculatorChoice(Number(display));
      setDisplayReset(true);
    }
  };

  const numbers = [
    { number: "1", id: 1 },
    { number: "2", id: 2 },
    { number: "3", id: 3 },
    { number: "4", id: 4 },
    { number: "5", id: 5 },
    { number: "6", id: 6 },
    { number: "7", id: 7 },
    { number: "8", id: 8 },
    { number: "9", id: 9 },
    { number: "0", id: 0 },
  ];
  const controls = [
    { control: "c", id: "c" },
    { control: "÷", id: "÷" },
    { control: "x", id: "x" },
    { control: "-", id: "-" },
    { control: "+", id: "+" },
    { control: "=", id: "=" },
  ];
  const keyMappings = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    "+": "+",
    "-": "-",
    "*": "x",
    "/": "÷",
    "=": "=",
    Enter: "=",
    Escape: "c",
  };

  const handleKeyClick = (key) => {
    if (keyMappings[key]) {
      const buttonId = keyMappings[key];
      const buttonElement = document.getElementById(buttonId);
      if (buttonElement) {
        buttonElement.click();
      }
    }
  };
  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key;
      handleKeyClick(key);
    };
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const calculatorChoice = (num) => {
    switch (operator) {
      case "÷":
        const newNum = firstNumber / num;
        setDisplay(newNum);
        setFirstNumber(newNum);
        break;
      case "x":
        const newNum1 = firstNumber * num;
        setDisplay(newNum1);
        setFirstNumber(newNum1);
        break;
      case "-":
        const newNum2 = firstNumber - num;
        setDisplay(newNum2);
        setFirstNumber(newNum2);
        break;
      case "+":
        const newNum3 = firstNumber + num;
        setDisplay(newNum3);
        setFirstNumber(newNum3);
        break;
    }
  };

  const handleNumberClick = (num) => {
    setEqualRepeated(false);
    setFixDoubleOperator(false);
    if (displayReset) {
      setDisplay(num);
      setDisplayReset(false);
    } else {
      setDisplay(display.concat(num));
    }
  };

  const handleControlClick = (item) => {
    setTimeout(() => setFixDoubleOperator(true), 1);
    setControllers(item);
  };
  if (operator === null) {
    switch (controllers) {
      case "c":
        clear();
        break;
      case "÷":
        calculationTypeOne("÷", display);
        break;
      case "x":
        calculationTypeOne("x", display);
        break;
      case "-":
        if (display === "") {
          setControllers("");
          setDisplay(display.concat("-"));
          break;
        } else {
          calculationTypeOne("-", display);
          break;
        }
      case "+":
        calculationTypeOne("+", display);
        break;
      case "=":
        setControllers("");
        setFirstNumber(Number(display));
        break;
    }
  } else if (operator !== null && fixDoubleOperator === false) {
    switch (controllers) {
      case "c":
        clear();
        break;
      case "÷":
        calculationTypeTwo("÷");
        break;
      case "x":
        calculationTypeTwo("x");
        break;
      case "-":
        calculationTypeTwo("-");
        break;
      case "+":
        calculationTypeTwo("+");
        break;
      case "=":
        equals();
        break;
    }
  } else if (operator !== null && fixDoubleOperator === true) {
    switch (controllers) {
      case "÷":
        calculationTypeThree("÷", display);
        break;
      case "x":
        calculationTypeThree("x", display);
        break;
      case "-":
        calculationTypeThree("-", display);
        break;
      case "+":
        calculationTypeThree("+", display);
        break;
      case "c":
        clear();
        break;
      case "=":
        equals();
        break;
    }
  }

  return (
    <div>
        <button
          onClick={() => {
            window.location.href='../../index.html'
          }}
          style={{
            textAlign: "center",
            margin: "5px",
            width: 80,
            fontSize: 20,
            backgroundColor: "black",
            color: "white",
            borderRadius: 5,
            border: "2px solid purple",
          }}
        >Home</button>
      <div className="outerLayer">
        <Display display={display} />
        <div className="allButtons">
          <div className="numBtnDiv">
            {numbers.map((x) => (
              <Buttons
                key={x.id}
                id={x.id}
                text={x.number}
                handleClick={handleNumberClick}
              />
            ))}
          </div>
          <div className="controlBtnDiv">
            {controls.map((x) => (
              <ControlButtons
                key={x.id}
                id={x.id}
                text={x.control}
                handleClick={handleControlClick}
                operator={operator}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
