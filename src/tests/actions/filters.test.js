import {
  setTextFilter,
  setStartDate,
  setEndDate,
  sortByDate,
  sortByPrice
} from '../../actions/filters';
import moment from 'moment';

test('should setup setTextFilter action with passed in text', () => {
  const text = 'kayak';
  const action = setTextFilter(text);
  expect(action).toEqual({ type: 'SET_TEXT_FILTER', text });
});

test('should setup setTextFilter action with empty text', () => {
  const action = setTextFilter();
  expect(action).toEqual({ type: 'SET_TEXT_FILTER', text: '' });
});

test('should setup setStartDate action properly', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({ type: 'SET_START_DATE', startDate: moment(0) });
});

test('should setup setEndDate action properly', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({ type: 'SET_END_DATE', endDate: moment(0) });
});

test('should setup sortByDate action properly', () => {
  const action = sortByDate();
  expect(action).toEqual({ type: 'SORT_BY_DATE' });
});

test('should setup sortByPrice action properly', () => {
  const action = sortByPrice();
  expect(action).toEqual({ type: 'SORT_BY_PRICE' });
});
