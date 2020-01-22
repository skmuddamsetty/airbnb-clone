const placesReducerDefaultState = [];
const placesReducer = (state = placesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_PLACE':
      return [...state, action.place];
    case 'REMOVE_PLACE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_PLACE':
      return state.map(place => {
        if (place.id === action.id) {
          return { ...place, ...action.updates };
        } else {
          return place;
        }
      });
    default:
      return state;
  }
};

export default placesReducer;
