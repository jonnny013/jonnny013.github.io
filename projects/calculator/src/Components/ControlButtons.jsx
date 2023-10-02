import React from 'react'

const ControlButtons = (props) => {
  let styles
  if (props.operator === props.text) {
     styles = {
      backgroundColor: 'rgb(125, 81, 0)'
    }
  }
  else { styles = {
    backgroundColor: "rgb(255, 166, 0)",
  };}
  return (
    <div>
      <button
      style={styles}
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