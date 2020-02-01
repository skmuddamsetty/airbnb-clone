// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({ type: 'SET_TEXT_FILTER', text });

// SORT_BY_PRICE
export const sortByPrice = () => ({ type: 'SORT_BY_PRICE' });

// SORT_BY_DATE
export const sortByDate = () => ({ type: 'SORT_BY_DATE' });

// SET_START_DATE
export const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
export const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate
});

// SET_TYPE_OF_PLACES

export const setTypesOfPlaces = (types_of_places = []) => ({
  type: 'SET_TYPES_OF_PLACES',
  types_of_places
});
