import getVisiblePlaces from '../../selectors/places';
import moment from 'moment';
import places from '../fixtures/places';

test('should filter by text value and sort by created Dates', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = getVisiblePlaces(places, filters);
  expect(result).toEqual([places[2], places[0], places[1]]);
});

test('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };
  const result = getVisiblePlaces(places, filters);
  expect(result).toEqual([places[2], places[0]]);
});

test('should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days')
  };
  const result = getVisiblePlaces(places, filters);
  expect(result).toEqual([places[0], places[1]]);
});

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = getVisiblePlaces(places, filters);
  expect(result).toEqual([places[2], places[0], places[1]]);
});

test('should sort by price', () => {
  const filters = {
    text: '',
    sortBy: 'price',
    startDate: undefined,
    endDate: undefined
  };
  const result = getVisiblePlaces(places, filters);
  expect(result).toEqual([places[0], places[1], places[2]]);
});
