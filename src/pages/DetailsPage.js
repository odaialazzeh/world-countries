import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { countryAction } from '../redux/countryNameReducer';
import Loader from '../components/Loader';
import HomeHeader from '../components/NavBar/HomeHeader';

const CountryDetail = () => {
  const dispatch = useDispatch();
  const { cca3 } = useParams();
  const navigate = useNavigate();

  const countryList = useSelector((state) => state.countryList);
  const { country, loading } = countryList;

  useEffect(() => {
    dispatch(countryAction(cca3));
  }, [dispatch, cca3]);

  // Find the specific country based on the country code
  const countryFind = country.find((cnt) => cnt.cca3 === cca3);
  const languageKeys = countryFind?.languages
    ? Object.keys(countryFind.languages)
    : [];

  const btnHandler = () => {
    navigate('/');
  };
  return (
    <div>
      <HomeHeader />
      <button type="button" className="btn-details" onClick={btnHandler}>
        Back
      </button>
      {loading && <Loader />}
      {!loading && countryFind && (
        <div className="main-container">
          <section className="main_section">
            <section className="left">
              <img
                className="rounded"
                src={countryFind.flags.png}
                alt={countryFind.name.common}
              />
            </section>
            <section className="right">
              <h3>{countryFind.name.common}</h3>
              <main>
                <div>
                  <p>
                    <span>Native Name: </span>
                    <strong>
                      {languageKeys.length > 0
                        ? countryFind.name.nativeName[languageKeys[0]].official
                        : ''}
                    </strong>
                  </p>

                  <p>
                    <span>Continent: </span>
                    <strong>{countryFind.continents}</strong>
                  </p>

                  <p>
                    <span>Population: </span>
                    <strong>
                      {countryFind.population >= 1000000
                        ? `${(
                          countryFind.population / 1000000
                        ).toLocaleString()} million`
                        : `${(
                          countryFind.population / 1000
                        ).toLocaleString()} thousand`}
                    </strong>
                  </p>

                  <p>
                    <span>Region: </span>
                    <strong>{countryFind.region}</strong>
                  </p>

                  <p>
                    <span>Sub Region: </span>
                    <strong>{countryFind.subregion}</strong>
                  </p>

                  <p>
                    <span>Capital: </span>
                    <strong>{countryFind?.capital}</strong>
                  </p>
                </div>
                <div>
                  <p>
                    <span>Currency: </span>
                    <strong>
                      {Object.values(countryFind.currencies)[0]?.name}
                    </strong>
                  </p>
                  <p>
                    <span>Currency Symbol: </span>
                    <strong style={{ fontSize: '1rem' }}>
                      {Object.values(countryFind.currencies)[0]?.symbol}
                    </strong>
                  </p>
                  <p>
                    <span>
                      Languages:
                      <br />
                    </span>
                    <strong>
                      {Object.values(countryFind.languages).map((lang) => (
                        <React.Fragment key={uuidv4()}>
                          {lang}
                          {', '}
                        </React.Fragment>
                      ))}
                      {' '}
                    </strong>
                  </p>

                  <p>
                    <span>Map: </span>
                    <a style={{ textDecoration: 'none' }} href={countryFind.maps.googleMaps}>Google Maps Link</a>
                  </p>
                </div>
              </main>
              <div>
                <h3 className="label">Border Countries: </h3>
                <div className="btn_border">
                  {countryFind.borders ? (
                    countryFind.borders.map((border) => (
                      <span key={uuidv4()} id="border">
                        <Link to={`/alpha/${border}`}>{border}</Link>
                      </span>
                    ))
                  ) : (
                    <p>There is no border for this country</p>
                  )}
                </div>
              </div>
            </section>
          </section>
        </div>
      )}
    </div>
  );
};

export default CountryDetail;
