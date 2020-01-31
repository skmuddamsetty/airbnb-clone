import placesReducer from '../../reducers/places';

test('should set default state', () => {
  const state = placesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});
