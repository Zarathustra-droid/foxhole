import React from 'react';
import '../styles.css'; // Importing global styles
import Calendar from './Calendar';
import Weather from './Weather';
import Tasks from './Tasks';
import JoplinNote from './JoplinNote';
import KeySites from './KeySites';
import Bookmarks from './Bookmarks';

const GridLayout = () => {
  return (
    <div className="main-container">
      <div className="grid-item">
        <Calendar />
        <Weather />
      </div>
      <div className="grid-item">
        <Tasks />
        <JoplinNote />
      </div>
      <div className="grid-item">
        <KeySites />
        <Bookmarks />
      </div>
    </div>
  );
};

export default GridLayout;

