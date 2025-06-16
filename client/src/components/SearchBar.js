import React, { useState } from 'react';
import SearXNGLogo from '../searxng.png';

const Searchbar = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(`https://searxng2.blueberrypi.com/search?q=${encodeURIComponent(query)}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit}>
      <img id="searxng-logo" src={SearXNGLogo} alt="SearXNG Logo" />
      <input
        id="searxng-container"
        type="text"
        placeholder="Search with SearXNG"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: '80%' }}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Searchbar;

