import React from "react";
import { useState } from "react";

const TextBox = () => {
  const localNotes = localStorage.getItem("text");
  const [text, setText] = useState(localNotes);

  const addText = (event) => {
    event.preventDefault();
    console.log("saved");
  };

  const handleChange = (event) => {
    localStorage.setItem("text", event.target.value);
    setText(event.target.value);
  };

  return (
    <div>
      <form onSubmit={addText}>
        <textarea
          className="textarea"
          placeholder="Type your note here"
          onChange={handleChange}
          value={text}
        ></textarea>
      </form>
    </div>
  );
};

export default TextBox;
