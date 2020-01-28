import filtersReducer from '../../reducers/filters';
import moment from 'moment';
test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_PRICE' });
  expect(state.sortBy).toBe('price');
});

test('should set sortBy to date', () => {
  const defaultState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const state = filtersReducer(defaultState, { type: 'SORT_BY_DATE' });
  expect(state.sortBy).toBe('date');
});

test('should SET_TEXT_FILTER', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_TEXT_FILTER',
    text: 'my string'
  });
  expect(state.text).toBe('my string');
});

test('should SET_START_DATE', () => {
  const startDate = moment().startOf('month');
  const state = filtersReducer(undefined, {
    type: 'SET_START_DATE',
    startDate
  });
  expect(state.startDate).toEqual(startDate);
});

test('should SET_END_DATE', () => {
  const endDate = moment().endOf('month');
  const state = filtersReducer(undefined, {
    type: 'SET_END_DATE',
    endDate
  });
  expect(state.endDate).toBe(endDate);
});
