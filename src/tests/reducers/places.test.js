import placesReducer from '../../reducers/places';
import places from '../fixtures/places';

test('should set default state', () => {
  const state = placesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove place by id', () => {
  const action = {
    type: 'REMOVE_PLACE',
    id: places[1].id
  };
  const state = placesReducer(places, action);
  expect(state).toEqual([places[0], places[2]]);
});

test('should not remove place if id not found', () => {
  const action = {
    type: 'REMOVE_PLACE',
    id: -1
  };
  const state = placesReducer(places, action);
  expect(state).toEqual(places);
});

test('should add a place', () => {
  const action = {
    type: 'ADD_PLACE',
    place: places[1]
  };
  const state = placesReducer(places, action);
  expect(state).toEqual([...places, action.place]);
});

test('should edit a place with id', () => {
  const action = {
    type: 'EDIT_PLACE',
    updates: {
      title: 'John Doe Apartments'
    },
    id: places[0].id
  };
  const state = placesReducer(places, action);
  expect(state[0].title).toEqual(action.updates.title);
});

test('should not edit place if id not found', () => {
  const action = {
    type: 'EDIT_PLACE',
    updates: {
      title: 'John Doe Apartments'
    },
    id: -1
  };
  const state = placesReducer(places, action);
  expect(state).toEqual(places);
});
