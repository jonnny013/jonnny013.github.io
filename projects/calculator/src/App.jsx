import React from 'react'
import './App.css'
import Display from './Components/Display'
import Buttons from './Components/Buttons'
import { useState } from 'react'
import ControlButtons from './Components/ControlButtons'
import equations from './equations'

const App = () => {
  const [display, setDisplay] = useState('')
  const [controllers, setControllers] = useState('')
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0);
  const [operator, setOperator] = useState(null)
  const [displayReset, setDisplayReset] = useState(false)

  console.log(`display: ${display}, controller: ${controllers}, first number: ${firstNumber}, second number: ${secondNumber}, operator: ${operator}, reset: ${displayReset} `)

  const numbers = [
    { number: "1", id: 1 },
    { number: '2', id: 2 },
    { number: '3', id: 3 },
    { number: '4', id: 4 },
    { number: '5', id: 5 },
    { number: '6', id: 6 },
    { number: '7', id: 7 },
    { number: '8', id: 8 },
    { number: '9', id: 9 },
    { number: '0', id: 0 },
  ];
  const controls = [
    { control: "c", id: 1 },
    { control: "÷", id: 2 },
    { control: "x", id: 3 },
    { control: "-", id: 4 },
    { control: "+", id: 5 },
    { control: "=", id: 6 },
  ];

  const calculatorChoice = (num) => {
    switch (operator) {
      case "÷":
        const newNum = (firstNumber / num)
        setDisplay(newNum)
        setFirstNumber(newNum)
        break;
      case "x":
        const newNum1 = (firstNumber * num);
        setDisplay(newNum1);
        setFirstNumber(newNum1);
        break;
      case "-":
        const newNum2 = (firstNumber - num);
        setDisplay(newNum2);
        setFirstNumber(newNum2);
        break;
      case "+":
        const newNum3 = (firstNumber + num);
        setDisplay(newNum3);
        setFirstNumber(newNum3);
        break;
    }
  }

  const handleNumberClick = (num) => {
    if (displayReset) {
      setDisplay(num)
      setDisplayReset(false)
    }
    else{setDisplay(display.concat(num))}
  }

  const handleControlClick = (item) => {
    setControllers(item)
  }
  if (operator === null) {
    switch (controllers) {
      case "c":
        setControllers("");
        setDisplay("");
        setFirstNumber(0);
        setSecondNumber(0);
        setOperator(null);
        setDisplayReset(false)
        break;
      case "÷":
        setControllers("");
        setOperator("÷");
        setFirstNumber(Number(display));
        setDisplayReset(true)
        break;
      case "x":
        setControllers("");
        setOperator("x");
        setFirstNumber(Number(display));
        setDisplayReset(true)
        break;
      case "-":
        setControllers("");
        setOperator("-");
        setFirstNumber(Number(display));
        setDisplayReset(true)
        break;
      case "+":
        setControllers("");
        setOperator("+");
        setFirstNumber(Number(display));
        setDisplayReset(true)
        break;
      case "=":
        setControllers("");
        setFirstNumber(Number(display));
        break;
    }
  }
  else if (operator !== null) {
    switch (controllers) {
      case "c":
        setControllers("");
        setDisplay("");
        setFirstNumber(0);
        setSecondNumber(0);
        setOperator(null);
        setDisplayReset(false)
        break;
      case "÷":
        setControllers("");
        setSecondNumber(Number(display));
        calculatorChoice(Number(display))
        setOperator("÷");
        setDisplayReset(true)
        break;
      case "x":
        setControllers("");
        setSecondNumber(Number(display));
        calculatorChoice(Number(display));
        setOperator("x");
        setDisplayReset(true)
        break;
      case "-":
        setControllers("");
        setSecondNumber(Number(display));
        calculatorChoice(Number(display));
        setOperator("-");
        setDisplayReset(true)
        break;
      case "+":
        setControllers("");
        setSecondNumber(Number(display));
        calculatorChoice(Number(display));
        setOperator("+");
        setDisplayReset(true)
        break;
      case "=":
        if (secondNumber === 0) {
          setControllers("");
        setSecondNumber(Number(display));
        calculatorChoice(Number(display));
        setDisplayReset(true)
        }
        else {
          setControllers("");
        setFirstNumber(Number(display));
        calculatorChoice(secondNumber);
        setDisplayReset(true)
        }
        break;
  }
  }

  

  return (
    <div className="outerLayer">
      <Display display={display} />
      <div className='allButtons'>
        <div className="numBtnDiv">
          {numbers.map((x) => (
            <Buttons
              key={x.id}
              text={x.number}
              handleClick={handleNumberClick}
            />
          ))}
        </div>
        <div className="controlBtnDiv">
          {controls.map((x) => (
            <ControlButtons
              key={x.id}
              text={x.control}
              handleClick={handleControlClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App