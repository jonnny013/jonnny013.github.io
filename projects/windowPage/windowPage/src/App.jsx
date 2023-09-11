import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Trash from './Components/Trash'
import { Draggable, Droppable } from "react-drag-and-drop";
import File from './Components/File';
import Folder from './Components/Folder';



function App() {
const [file, setFile] = useState([]);
const [folder, setFolder] = useState([]);


const handleAddNew = (base, setBase) => {
const newFileItem = 
  {
  id: base.length + 1,
  number: base.length + 1
}
const newFile = [...base, newFileItem]
setBase(newFile)
}

  return (
    <>
      <Header
        newFile={() => handleAddNew(file, setFile)}
        newFolder={() => handleAddNew(folder, setFolder)}
      />
      <div className="wholePageDiv">
        {file.map((x) => (
          <File key={x.id} number={x.id} />
        ))}
        {folder.map((x) => (
          <Folder key={x.id} number={x.id}/>
        ))}

        <Trash />
      </div>
    </>
  );
}

export default App
