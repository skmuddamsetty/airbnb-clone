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
