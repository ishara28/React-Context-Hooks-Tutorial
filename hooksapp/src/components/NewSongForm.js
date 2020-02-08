import React, { useState } from "react";

const NewSongForm = ({ addSong }) => {
  const [Title, setTitle] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addSong(Title);
    setTitle("");
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">New Song</label> <br />
      <input
        type="text"
        value={Title}
        onChange={e => setTitle(e.target.value)}
      />{" "}
      <br />
      <button type="submit">Add Song</button>
    </form>
  );
};

export default NewSongForm;
