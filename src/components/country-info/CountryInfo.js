import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import getCountryInfoFromApi from '../../redux/country-info';

const CountryInfo = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.country.countryInfo);

  const { countryName } = params;

  useEffect(() => {
    dispatch(getCountryInfoFromApi(countryName));
  }, [countryName, dispatch]);

  return (
    <>
      {state.length > 0 && (
        <section className="detailsSection">
          <div className="detailsTop">
            <img src={state[0].flag} alt="flag" />
            <div className="region">
              <h2>{countryName}</h2>
              <h4>{state[0].region}</h4>
            </div>
          </div>
          <ul className="detailsBottom">
            <li>
              <span id="title">Official Name: </span>
              <span>{state[0].official}</span>
            </li>
            <li>
              <span id="title">Capital: </span>
              <span>{state[0].capital}</span>
            </li>
            <li>
              <span id="title">Subregion: </span>
              <span>{state[0].subregion}</span>
            </li>
            <li>
              <span id="title">Area: </span>
              <span>
                {+state[0].area}
                &nbsp; km2
              </span>
            </li>
            <li>
              <span id="title">Population: </span>
              <span>
                {(+state[0].population / 1000000).toFixed(1)}
                &nbsp; million
              </span>
            </li>
            <li>
              <span id="title">Time Zone: </span>
              <span>{state[0].timezone}</span>
            </li>
            <li>
              <span id="title">Location: </span>
              <a href={state[0].map}>Click Here</a>
            </li>
          </ul>
        </section>
      )}
    </>
  );
};

export default CountryInfo;
