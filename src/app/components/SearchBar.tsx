import { useState } from 'react';
import './searchBar.css';

interface SearchBarProps {
  filterFunction: (searchInput: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ filterFunction }) => {

  const handleOnChange = (textInput: string) => {
    filterFunction(textInput);
  };

  return (
    <>
      <div className="searchBarContainer">
        <span>&#128269;</span>
        <input
          className="searchBarInput"
          placeholder="Search for a country..."
          onChange={(e) => {
            handleOnChange(e.target.value);
          }}
        ></input>
      </div>
    </>
  );
};
export default SearchBar;
