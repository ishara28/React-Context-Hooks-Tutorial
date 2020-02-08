import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setsongs] = useState([
    { title: "Title One", id: 1 },
    { title: "Title Two", id: 2 },
    { title: "Title Three", id: 3 }
  ]);

  const [age, setage] = useState(20);

  const addSong = title => {
    setsongs([...songs, { title: title, id: uuid() }]);
  };

  useEffect(() => {
    console.log("UseEffect Hook Ran", songs);
  }, [age]);

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setage(age + 1)}>Add 1 to age  {age}</button>
    </div>
  );
};

export default SongList;
