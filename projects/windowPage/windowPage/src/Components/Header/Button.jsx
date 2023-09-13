import { useState } from "react";
import React from "react";

const Button = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };
  return (
    <div className="dropdown">
      <ul className="mainBtn" onMouseLeave={handleMouseLeave}>
        <li>
          <button className="barBtn" onClick={handleOpen}>
            {props.text}
          </button>
        </li>
        {open && (
          <div className="menu">
            <li className="menuItem">
              <button className="menuBtn" onClick={props.click1}>
                {props.menu1}
              </button>
            </li>
            <li className="menuItem">
              <button className="menuBtn" onClick={props.click2}>
                {props.menu2}
              </button>
            </li>
            <li className="menuItem">
              <button className="menuBtn" onClick={props.click3}>
                {props.menu3}
              </button>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Button