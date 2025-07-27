import React from 'react'
import './SearchBar.css';

const SearchBar = ({ city, setCity }) => {
  return (
    <div className="searchContainer">
      <input type="text" className="searchBar" name="search" placeholder="search for a city..." id="search" value={city} onChange={(e) => setCity(e.target.value)}></input>
    </div>
  )
}

export default SearchBar