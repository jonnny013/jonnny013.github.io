import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";

const Folder = ({number}) => {
  return (
    <div className="fileContainer gridItem">
      <FontAwesomeIcon icon={faFolder} className="file" id="folder" />
      <p className="fileName">Folder{number}</p>
    </div>
  );
}

export default Folder