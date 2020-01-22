import { createStore, combineReducers } from 'redux';
import placesReducer from '../reducers/places';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      places: placesReducer,
      filters: filtersReducer
    })
  );
  return store;
};
