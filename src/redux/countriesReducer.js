import axios from 'axios';

const COUNTRIES_LIST_REQUEST = 'COUNTRIES_LIST_REQUEST';
const COUNTRIES_LIST_SUCCESS = 'COUNTRIES_LIST_SUCCESS';
const COUNTRIES_LIST_FAIL = 'COUNTRIES_LIST_FAIL';

export const countriesListReducer = (state = { countries: [] }, action) => {
  switch (action.type) {
    case COUNTRIES_LIST_REQUEST:
      return { loading: true, countries: [] };
    case COUNTRIES_LIST_SUCCESS:
      return {
        loading: false,
        countries: action.payload,
      };
    case COUNTRIES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listCountries = () => async (dispatch) => {
  try {
    dispatch({ type: COUNTRIES_LIST_REQUEST });

    const { data } = await axios.get('https://restcountries.com/v3.1/all');

    dispatch({
      type: COUNTRIES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COUNTRIES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
