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
      createdAt: 0
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
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    placesToStay: placesToStayReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
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
  store.dispatch(editPlaceToStay(placetoStay1.placeToStay.id, { price: 500 }));
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
