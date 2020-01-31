import uuid from 'uuid';

// ADD_PLACE
export const addPlace = ({
  title = '',
  summary = '',
  price = 0,
  location = '',
  number_of_guests = 0,
  number_of_bed_rooms = 0,
  number_of_beds = 0,
  number_of_bath_rooms = 0,
  amenities = [],
  accessibility = '',
  availability = '',
  reviews = [],
  createdAt = 0,
  id = undefined,
  bullet_points = [],
  type_of_place = ''
} = {}) => ({
  type: 'ADD_PLACE',
  place: {
    // id: undefined ? uuid() : id,
    id: uuid(),
    title,
    summary,
    price,
    createdAt,
    location,
    number_of_guests,
    number_of_bed_rooms,
    number_of_beds,
    number_of_bath_rooms,
    amenities,
    accessibility,
    availability,
    reviews,
    bullet_points,
    type_of_place
  }
});

// REMOVE_PLACE
export const removePlace = ({ id } = {}) => ({
  type: 'REMOVE_PLACE',
  id
});

// EDIT_PLACE
export const editPlace = (id, updates) => ({
  type: 'EDIT_PLACE',
  id,
  updates
});
