import { addPlace, editPlace, removePlace } from '../../actions/places';

test('should setup removePlace action object', () => {
  const action = removePlace({ id: '123abc' });
  expect(action).toEqual({ type: 'REMOVE_PLACE', id: '123abc' });
});

test('should setup editPlace action object', () => {
  const action = editPlace('123abc', { title: 'Kayak & Kayak' });
  expect(action).toEqual({
    type: 'EDIT_PLACE',
    id: '123abc',
    updates: {
      title: 'Kayak & Kayak'
    }
  });
});

test('should setup addPlace action object with passed in values', () => {
  const place = {
    title: 'Kayak & Kayak',
    summary: '',
    price: 19500,
    location: '',
    number_of_guests: 0,
    number_of_bed_rooms: 0,
    number_of_beds: 0,
    number_of_bath_rooms: 0,
    amenities: [],
    accessibility: '',
    availability: '',
    reviews: [],
    createdAt: 1000,
    id: undefined,
    bullet_points: [],
    type_of_place: ''
  };
  const action = addPlace(place);
  expect(action).toEqual({
    type: 'ADD_PLACE',
    place: { ...place, id: expect.any(String) }
  });
});

test('should setup addPlace action object with default values', () => {
  const action = addPlace({});
  expect(action).toEqual({
    type: 'ADD_PLACE',
    place: {
      title: '',
      summary: '',
      price: 0,
      location: '',
      number_of_guests: 0,
      number_of_bed_rooms: 0,
      number_of_beds: 0,
      number_of_bath_rooms: 0,
      amenities: [],
      accessibility: '',
      availability: '',
      reviews: [],
      createdAt: 0,
      bullet_points: [],
      type_of_place: '',
      id: expect.any(String)
    }
  });
});
