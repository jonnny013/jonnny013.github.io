import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import TextBox from './TextBox';

const File = (props) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  return (
    <>
      <div className="fileContainer gridItem" draggable>
        <button
          className="fileBtn"
          onClick={(event) => {
            if (event.detail === 2) {
              handleClick();
            }
          }}
        >
          <FontAwesomeIcon icon={faFile} className="file" />
        </button>
        <p className="fileName">File {props.number}</p>
      </div>
      {open === true && <TextBox />}
    </>
  );
}

export default File