import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const demoState = {
  placesToStay: [
    {
      id: 'dawdawdawdawd',
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
      ]
    }
  ],
  filters: {
    text: 'kayak',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
};

// ADD_PLACE_TO_STAY
const addPlaceToStay = ({
  title = '',
  summary = '',
  price = 0,
  createdAt = 0
} = {}) => ({
  type: 'ADD_PLACE_TO_STAY',
  placeToStay: {
    id: uuid(),
    title,
    summary,
    price,
    createdAt
  }
});

// REMOVE_PLACE_TO_STAY
const removePlaceToStay = ({ id } = {}) => ({
  type: 'REMOVE_PLACE_TO_STAY',
  id
});

// EDIT_PLACE_TO_STAY
const editPlaceToStay = (id, updates) => ({
  type: 'EDIT_PLACE_TO_STAY',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({ type: 'SET_TEXT_FILTER', text });

// SORT_BY_PRICE
const sortByPrice = () => ({ type: 'SORT_BY_PRICE' });

// SORT_BY_DATE
const sortByDate = () => ({ type: 'SORT_BY_DATE' });

// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate
});

const placesToStayReducerDefaultState = [];
const placesToStayReducer = (
  state = placesToStayReducerDefaultState,
  action
) => {
  switch (action.type) {
    case 'ADD_PLACE_TO_STAY':
      return [...state, action.placeToStay];
    case 'REMOVE_PLACE_TO_STAY':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_PLACE_TO_STAY':
      return state.map(placeToStay => {
        if (placeToStay.id === action.id) {
          return { ...placeToStay, ...action.updates };
        } else {
          return placeToStay;
        }
      });
    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    case 'SORT_BY_PRICE':
      return { ...state, sortBy: 'price' };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate };
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

// Get Visible Places to Stay
const getVisiblePlacesToStay = (
  placesToStay,
  { text, sortBy, startDate, endDate }
) => {
  return placesToStay
    .filter(placeToStay => {
      const startDateMatch =
        typeof startDate !== 'number' || placeToStay.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== 'number' || placeToStay.createdAt <= endDate;
      const textMatch = placeToStay.title
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'price') {
        return a.price < b.price ? 1 : -1;
      }
    });
};

const store = createStore(
  combineReducers({
    placesToStay: placesToStayReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();

  const visiblePlacesToStay = getVisiblePlacesToStay(
    state.placesToStay,
    state.filters
  );
  console.log(visiblePlacesToStay);
  console.log(store.getState());
});

const placetoStay1 = store.dispatch(addPlaceToStay({ title: 'Kayak & Kayak' }));
const placeToStay2 = store.dispatch(
  addPlaceToStay({ title: 'Cosy Apartment at the Park at Trowbridge - 739' })
);

setTimeout(() => {
  console.log('executing remove action');
  store.dispatch(removePlaceToStay({ id: placeToStay2.placeToStay.id }));
}, 1000);

setTimeout(() => {
  console.log('executing update action');
  store.dispatch(
    editPlaceToStay(placetoStay1.placeToStay.id, { price: 500, createdAt: 500 })
  );
}, 2000);

setTimeout(() => {
  console.log('setting text filter');
  store.dispatch(setTextFilter('kayak'));
}, 2000);

setTimeout(() => {
  console.log('setting sort by price');
  store.dispatch(sortByPrice());
}, 3000);

setTimeout(() => {
  console.log('setting sort by date');
  store.dispatch(sortByDate());
}, 4000);

setTimeout(() => {
  console.log('setting start date');
  store.dispatch(setStartDate(20));
}, 5000);

setTimeout(() => {
  console.log('setting end date');
  store.dispatch(setEndDate(500));
}, 5000);
