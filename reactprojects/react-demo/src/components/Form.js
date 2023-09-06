import { useState } from "react";

export const Form = () => {
  const [description, setDescription] = useState("");
  const [username, setUsername] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleUsernameSubmit = (event) => {
    event.preventDefault();
    alert(`Form data is ${username}`);
  };
  const handleDescriptionSubmit = (event) => {
    event.preventDefault();
    setOutputText(description);
  };

  return (
    <>
      <form onSubmit={handleUsernameSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
      <form onSubmit={handleDescriptionSubmit}>
        <div>
          <label>Write about yourself</label>
          <br></br>
          <textarea
            value={description}
            id="des"
            rows="3"
            cols="50"
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
        <p>{outputText}</p>
      </form>
    </>
  );
};
