import React from 'react';
import GridLayout from './GridLayout';
import SearchBar from './SearchBar';
const HomePage = () => {
  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <GridLayout />
    </div>
  );
};

export default HomePage;
