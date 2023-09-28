import React from 'react'

const ControlButtons = (props) => {
  return (
    <div>
      <button
        className="controlButtons"
        onClick={() => props.handleClick(props.text)}
      >
        {props.text}
      </button>
    </div>
  );
}

export default ControlButtons