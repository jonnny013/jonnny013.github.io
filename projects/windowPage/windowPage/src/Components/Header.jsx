import React, { useEffect, useState } from "react";



function Header() {
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

 

  return (
    <div className="headerDiv">
      <Button
        text="File"
        classname="headerButton"
        menu1="Save"
        menu2="New Folder"
        menu3="New File"
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
        setOpen(false)
     }
    return (
      <div className="dropdown">
        <button onMouseLeave={handleMouseLeave} onClick={handleOpen}>
          {props.text}
        </button>
        {open && (
          <div>
            <ul className="menu">
              <li className="menuItem">{props.menu1}</li>
              <li className="menuItem">{props.menu2}</li>
              <li className="menuItem">{props.menu3}</li>
            </ul>
          </div>
        )}
      </div>
    );
}

export default Header;
