import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addPlace } from './actions/places';
import { setTextFilter } from './actions/filters';
import getVisiblePlaces from './selectors/places';

const store = configureStore();
store.dispatch(addPlace({ title: 'Kayaks & Coffee in Novi', price: 8900 }));
store.dispatch(
  addPlace({
    title: 'Cosy Apartment at the Park at Trowbridge - 739',
    price: 5100
  })
);
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
