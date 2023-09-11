import React from "react";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./Trash.css";
import Draggable from 'react-draggable';

const element = <FontAwesomeIcon icon={faTrashCan} />;

const Trash = () => {
  const [x, setX] = useState(20);
  const [y, setY] = useState(450);

  const handleDragEnd = (event) => {
    setX(event.clientX - 10);
    setY(event.clientY - 10);
    console.log(x, y)
  };

  return (

      <div
        style={{ left: x, top: y,}}
        className="container"
        onDragEnd={handleDragEnd}
        draggable
      >
        <h1 className="trashCan">{element}</h1>
        <p className="trashName">Trash</p>
      </div>

  );
};

export default Trash;
