import './App.css';
import { useState } from "react"

function App() {

  const [newItem, setNewItem] = useState("")
  

  function handleSubmit(e) {    
    e.preventDefault()
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">Enter your name</label>
          <input 
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type="text" 
            id="item" 
            />
        </div>
        <button className="btn">Add</button>
      </form>
      <p>Welcome to the game {}</p>
    </div>
  );
}

export default App;
