import React from 'react';
import PropTypes from 'prop-types';

const CountriesList = ({ name, latlng }) => (
  <div className="country">
    <ul>
      <li>
        <a href={`/world-countries/${name}`}>{name}</a>
      </li>
      <li>
        <span>latlng:</span>
        <p>{latlng[0].toFixed(1)}</p>
        <p>{latlng[1].toFixed(1)}</p>
      </li>
    </ul>
  </div>
);

CountriesList.propTypes = {
  name: PropTypes.string.isRequired,
  latlng: PropTypes.string.isRequired,
};

export default CountriesList;
