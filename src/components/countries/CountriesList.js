/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import PropTypes from 'prop-types';
import Country from './Country';

const CountryList = ({ countries }) => (
  <div className="home-container">
    {countries.map((countryData) => (
      <Country country={countryData} key={countryData.name.common} />
    ))}
  </div>
);

export default CountryList;

CountryList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
