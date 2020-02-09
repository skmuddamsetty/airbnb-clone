import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addPlace } from './actions/places';
import getVisiblePlaces from './selectors/places';
import places from './tests/fixtures/places';

const store = configureStore();
places.forEach(place => {
  store.dispatch(addPlace(place));
});
console.log(store.getState());
// store.dispatch(setTextFilter('kayak'));
const state = store.getState();
console.log(getVisiblePlaces(state.places, state.filters));
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
