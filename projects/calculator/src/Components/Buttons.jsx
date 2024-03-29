import React from 'react'
import '../App.css'

const Buttons = ({text, handleClick, id}) => {
  return (
    <>
        <button id={id} className="numberButtons" onClick={() => handleClick(text)}>{text}</button>
    </>
  )
}

export default Buttons