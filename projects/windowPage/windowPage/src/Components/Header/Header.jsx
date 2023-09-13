import React, { useEffect, useState } from "react";
import "./Header.css";
import Button from './Button'
import SeachBar from "./SeachBar";

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
        click1={() => console.log("saved")}
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
      <SeachBar />
      <p className="headerDirectory clock">{date}</p>
    </div>
  );
}






export default Header;
