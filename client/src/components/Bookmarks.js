import React, { useEffect, useState } from 'react';
import { getDataFromCacheOrAPI } from '../utils/cache';

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const cacheKey = "bookmarks";
    getDataFromCacheOrAPI('/api/bookmarks', cacheKey)
        .then(fetchedData => {
          if (fetchedData) {
            setBookmarks(fetchedData);
          } else {
            setError('Failed to load data.');
          }
    })
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

