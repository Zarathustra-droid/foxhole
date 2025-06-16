import React, { useEffect, useState } from 'react';

const Note = () => {
  const [note, setNote] = useState(null);

  useEffect(() => {
    fetch('/api/joplin')
      .then(res => res.json())
      .then(data => setNote(data))
      .catch(console.error);
  }, []);

  if (!note) return <div>Loading note...</div>;

  const noteParts = note.body.split("-");

  return (
    <div>
      <h3>Note</h3>
      <p>{note.title}</p>
      <div id="notes-container">
        {noteParts.map((part, index) => (
          <p key={index}>{part.trim()}</p>
        ))}
      </div>
    </div>
  );
};

export default Note;

