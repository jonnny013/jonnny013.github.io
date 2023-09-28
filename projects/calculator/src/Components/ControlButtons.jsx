import React from 'react'

const ControlButtons = (props) => {
  return (
    <div>
      <button
        id={props.id}
        className="controlButtons"
        onClick={() => props.handleClick(props.text)}
      >
        {props.text}
      </button>
    </div>
  );
}

export default ControlButtons