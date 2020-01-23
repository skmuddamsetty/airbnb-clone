import React from 'react';
import { connect } from 'react-redux';
import PlaceListItem from './PlaceListItem';
import getVisiblePlaces from '../selectors/places';

const PlacesList = props => (
  <div>
    <h1>Places List</h1>
    {props.places.map(place => {
      return <PlaceListItem place={place} key={place.id} />;
    })}
  </div>
);

// const ConnectedPlacesList = connect(state => {
//   return {
//     places: state.places
//   };
// })(PlacesList);

// export default ConnectedPlacesList;

const mapStateToProps = state => {
  return {
    places: getVisiblePlaces(state.places, state.filters)
  };
};

export default connect(mapStateToProps)(PlacesList);
