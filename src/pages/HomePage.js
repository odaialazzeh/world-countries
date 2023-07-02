import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomeHeader from '../components/NavBar/HomeHeader';
import { listCountries } from '../redux/countriesReducer';
import CountryList from '../components/countries/CountriesList';
import Loader from '../components/Loader';
import Error from '../components/Error';

const CountriesHome = () => {
  const dispatch = useDispatch();
  const countriesList = useSelector((state) => state.countriesList);
  const { countries, loading, error } = countriesList;

  const [searchCountry, setSearchCountry] = useState(' ');

  useEffect(() => {
    dispatch(listCountries());
    setSearchCountry('');
  }, [dispatch]);

  const filteredCountries = countries.filter((country) => country.name.common.toLowerCase().includes(searchCountry.toLowerCase()));

  const noMatchesFound = searchCountry.length > 0 && filteredCountries.length === 0;

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchCountry(e.target.value);
  };

  return (
    <div>
      <HomeHeader />
      <div className="search">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898
                 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0
                 008.898 8.899c2.211 0 4.23-.808
                 5.784-2.143l.377.377v1.081l6.845 6.832
                 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search by Country"
          name="searchCountry"
          onChange={handleSearch}
          value={searchCountry}
        />
      </div>
      {loading && <Loader />}
      {noMatchesFound && <Error searchValue={searchCountry} />}
      {!loading && !error && !noMatchesFound && (
        <CountryList
          countries={searchCountry.length ? filteredCountries : countries}
        />
      )}
    </div>
  );
};

export default CountriesHome;
