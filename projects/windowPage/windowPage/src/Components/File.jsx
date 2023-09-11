import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const File = (props) => {
  return (
    <div className="fileContainer gridItem">
      <FontAwesomeIcon icon={faFile} className="file" />
      <p className="fileName">File {props.number}</p>
    </div>
  );
}

export default File