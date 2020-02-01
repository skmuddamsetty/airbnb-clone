import moment from 'moment';

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
  types_of_places: []
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
    case 'SET_TYPE_OF_PLACES':
      return {
        ...state,
        types_of_places: [...state.types_of_places, ...action.types_of_places]
      };
    default:
      return state;
  }
};

export default filtersReducer;
