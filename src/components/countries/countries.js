import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CountriesList from './CountriesList';

const Countries = ({ countries }) => {
  const [input, setInput] = useState('');

  const filteredData = countries.filter((country) => {
    const data = Object.keys(country).some((key) => {
      const res = country[key].toString().toLowerCase().includes(input.toString().toLowerCase());
      return res;
    });
    return data;
  });

  return (
    <div className="section">
      <div className="input">
        <input
          type="search"
          className="search"
          placeholder="Search by country name .."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
      </div>

      <div className="listContainer">
        {filteredData.map((country) => (
          <CountriesList
            key={country.countryName}
            name={country.countryName}
            latlng={country.latlng}
          />
        ))}
      </div>
    </div>
  );
};

Countries.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Countries;
