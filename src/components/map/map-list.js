import React from 'react';
import PropTypes from 'prop-types';

const MapList = ({ name }) => (
  <div className="country-map">
    <a href={`/world-countries/${name}`}>{name}</a>
  </div>
);

MapList.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MapList;
