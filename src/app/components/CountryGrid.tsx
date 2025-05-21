'use client';


import { useState } from 'react';
import NavBar from './NavBar';
import CountryCard from './CountryCard';
import SearchBar from './SearchBar';
import FilterDropDown from './FilterDropDown';
import './CountryGrid.css'
import Country from '../types/Country'

function CountryGrid() {
  const [data, setData] = useState<Country[]>([]);
  const [searchData, setSearchData] = useState<Country[]>([]);

  async function fetchData(filteredCountry: string) {
    let url = `https://restcountries.com/v3.1/all`;

    if (filteredCountry) {
      url = `https://restcountries.com/v3.1/region/${filteredCountry}`;
    }

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setData(data);
      setSearchData(data);
    }
  }

  function filterSearch(searchTerm: string) {
    setSearchData(
      data.filter((country) =>
        country.name.common.toLowerCase().startsWith(searchTerm.toLowerCase())
      )
    );
  }

  return (
    <> 
      <div className='container'>
        <div className="searchBarSpan">
          <SearchBar filterFunction={filterSearch}></SearchBar>
          <FilterDropDown filterFunction={fetchData}></FilterDropDown>
        </div>

        <div className="countryGrid">
        {searchData.map((val, index) => (
          <CountryCard
            key={index}
            flag={val.flags.png}
            name={val.name.common}
            population={val.population}
            region={val.region}
            capital={val.capital ? val.capital[0] : 'N/A'}
          ></CountryCard>
        ))}
      </div>
      </div>
      
    </>
  );
}

export default CountryGrid;
