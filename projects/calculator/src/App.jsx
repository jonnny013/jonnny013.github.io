import React from 'react'
import './App.css'
import Display from './Components/Display'
import Buttons from './Components/Buttons'

const App = () => {
  const numbers = [
    { number: 0, id: 0 },
    { number: 1, id: 1 },
    { number: 2, id: 2 },
    { number: 3, id: 3 },
    { number: 4, id: 4 },
    { number: 5, id: 5 },
    { number: 6, id: 6 },
    { number: 7, id: 7 },
    { number: 8, id: 8 },
    { number: 9, id: 9 },
  ];

  return (
    <div className="outerLayer">
      <Display />
      <div className="numBtnDiv">
        {numbers.map((x) => (
          <Buttons key={x.id} text={x.number} />
        ))}
      </div>
    </div>
  );
}

export default App