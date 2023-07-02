import axios from 'axios';

const COUNTRY_NAME_REQUEST = 'COUNTRY_NAME_REQUEST';
const COUNTRY_NAME_SUCCESS = 'COUNTRY_NAME_SUCCESS';
const COUNTRY_NAME_FAIL = 'COUNTRY_NAME_FAIL';

export const countyReducer = (state = { country: [] }, action) => {
  switch (action.type) {
    case COUNTRY_NAME_REQUEST:
      return { loading: true, country: [] };
    case COUNTRY_NAME_SUCCESS:
      return {
        loading: false,
        country: action.payload,
      };
    case COUNTRY_NAME_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const countryAction = (cca3) => async (dispatch) => {
  try {
    dispatch({ type: COUNTRY_NAME_REQUEST });

    const { data } = await axios.get(
      `https://restcountries.com/v3.1/alpha/${cca3}`,
    );

    dispatch({
      type: COUNTRY_NAME_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COUNTRY_NAME_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
