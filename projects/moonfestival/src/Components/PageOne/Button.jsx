import React from 'react'

const Button = (props) => {
  return (
    <div className={props.class}>
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  );
}

export default Button