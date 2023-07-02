import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { countriesListReducer } from './countriesReducer';
import { countyReducer } from './countryNameReducer';

const rootReducer = combineReducers({
  countriesList: countriesListReducer,
  countryList: countyReducer,
});

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: [...middleware],
  devTools: true,
});

export default store;
