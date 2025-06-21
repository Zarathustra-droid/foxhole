import React, { useEffect, useState } from 'react';
import { getDataFromCacheOrAPI } from '../utils/cache';

const Note = () => {
  const [note, setNote] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cacheKey = "joplin";
    getDataFromCacheOrAPI('/api/joplin', cacheKey)
        .then(fetchedData => {
          if (fetchedData) {
            setNote(fetchedData);
          } else {
            setError('Failed to load data.');
          }
    })
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

