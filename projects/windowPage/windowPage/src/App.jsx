import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Trash from './Components/Trash'
import { Draggable, Droppable } from "react-drag-and-drop";

function App() {
  return (
    <>
      <Header />
      <div className='wholePageDiv'>
        <Trash />
      </div>
    </>
  )
}

export default App
