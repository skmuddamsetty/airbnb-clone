import uuid from 'uuid';

// ADD_PLACE
export const addPlace = ({
  title = '',
  summary = '',
  price = 0,
  createdAt = 0
} = {}) => ({
  type: 'ADD_PLACE',
  place: {
    id: uuid(),
    title,
    summary,
    price,
    createdAt
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
