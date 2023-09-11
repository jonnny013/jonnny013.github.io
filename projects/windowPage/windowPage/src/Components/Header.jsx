import React, { useEffect, useState } from "react";
import "./Header.css";

function Header(props) {
  const [date, setDate] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    document.title = date;
    const timerId = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  const tick = () => {
    setDate(new Date().toLocaleTimeString());
  };

  const handleOnClick = () => {
    console.log("success")
  }

  return (
    <div className="headerDiv">
      <Button
        text="File"
        classname="headerButton"
        menu1="Save"
        menu2="New File"
        menu3="New Folder"
        click1={props.newFile}
        click2={props.newFile}
        click3={props.newFolder}
      />
      <Button
        text="Edit"
        classname="headerButton"
        menu1="Undo"
        menu2="Copy"
        menu3="Paste"
      />
      <Button
        text="View"
        classname="headerButton"
        menu1="Zoom In"
        menu2="Zoom Out"
        menu3="Night View"
      />
      <p className="headerDirectory clock">{date}</p>
    </div>
  );
}

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

export default Header;
