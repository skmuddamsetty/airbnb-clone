import { createStore, combineReducers } from 'redux';
import placesReducer from '../reducers/places';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      places: placesReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
