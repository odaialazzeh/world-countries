import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Country = ({ country }) => (
  <Card className="card rounded my-1 p-1">
    <Link to={`/alpha/${[country.cca3]}`}>
      {' '}
      <Card.Img
        className="mb-3 rounded"
        src={country.flags.png}
        alt={country.name.common}
        variant="top"
        style={{ width: '100%', height: '190px' }}
      />
      <Card.Body>
        <Card.Title>
          <strong>{country.name.common}</strong>
        </Card.Title>
        <Card.Text className="card__data">
          <span>Continent: </span>
          <strong>{country.continents}</strong>
        </Card.Text>
        <Card.Text className="card__data">
          <span>Population: </span>
          <strong>
            {country.population >= 1000000
              ? `${(country.population / 1000000).toLocaleString()} million`
              : `${(country.population / 1000).toLocaleString()} thousand`}
          </strong>
        </Card.Text>
        <Card.Text className="card__data">
          <span>Capital: </span>
          <strong>{country.capital}</strong>
        </Card.Text>
      </Card.Body>
    </Link>
  </Card>
);

Country.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.shape({
      common: PropTypes.string.isRequired,
    }).isRequired,
    continents: PropTypes.arrayOf(PropTypes.string).isRequired,
    cca3: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    flags: PropTypes.shape({
      png: PropTypes.string.isRequired,
    }).isRequired,
    population: PropTypes.number.isRequired,
    capital: PropTypes.string.isRequired,
  }).isRequired,
};

export default Country;
