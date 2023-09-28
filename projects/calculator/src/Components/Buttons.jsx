import React from 'react'
import '../App.css'

const Buttons = ({text, handleClick}) => {
  return (
    <>
        <button className="numberButtons" onClick={() => handleClick(text)}>{text}</button>
    </>
  )
}

export default Buttons