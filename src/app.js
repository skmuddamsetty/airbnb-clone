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
store.dispatch(
  addPlace({
    id: 'asdvdvsdv-Vgvash-167hbdbanhsdb',
    title: 'Kayaks & Coffee in Novi',
    summary:
      'A true escape, yet at the same time being incredibly well connected to the greater Metro Detroit area',
    price: 54500,
    createdAt: 0,
    location: 'Southfield',
    number_of_guests: 2,
    number_of_bed_rooms: 1,
    number_of_beds: 1,
    number_of_bath_rooms: 1,
    amenities: ['Elevator', 'Wifi', 'Free parking on premises', 'Kitchen'],
    accessibility: 'Elevator',
    availability: '1 night minimum stay',
    reviews: [
      'The apartment is sparkling clean and i am glad i found this amazing apartment. The neighborhood is safe and the building is secure . I look forward to my future stays in this unit !!!',
      'The location was ideal. It was between Ann Arbor and Detroit which was perfect for exploring. There was plenty of parking and the building was secure. The residents that we came in contact with here all very nice as well as the lady working at the front desk. The place was nicely furnished. There was also a lot of really good food in the surrounding area.'
    ],
    bullet_points: [
      {
        heading: 'Entire home',
        sub_heading: 'You’ll have the apartment to yourself.'
      },
      {
        heading: 'Self check-in',
        sub_heading: 'You can check in with the doorman.'
      },
      {
        heading: 'Sparkling clean',
        sub_heading: '2 recent guests said this place was sparkling clean.'
      },
      {
        heading: 'Experienced host',
        sub_heading: 'Service has 159 reviews for other places.'
      }
    ]
  })
);
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
