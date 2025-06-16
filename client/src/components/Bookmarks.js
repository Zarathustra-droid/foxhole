import React, { useEffect, useState } from 'react';

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState(null);

  useEffect(() => {
    fetch('/api/bookmarks')
      .then(res => res.json())
      .then(data => setBookmarks(data))
      .catch(console.error);
  }, []);

  if (!bookmarks) return <div>Loading bookmarks...</div>;

  return (
    <div>
      <h3>Bookmarks</h3>
      <p>{bookmarks.data}</p>
    </div>
  );
};

export default Bookmarks;

