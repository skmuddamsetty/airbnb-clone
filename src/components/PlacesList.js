import React from 'react';
import { connect } from 'react-redux';
import PlaceListItem from './PlaceListItem';
import getVisiblePlaces from '../selectors/places';

const PlacesList = props => (
  <div className='content-container'>
    <div className='list-header'>
      <div className='show-for-mobile'>Hosting Places</div>
      <div className='show-for-desktop'>Hosting Place</div>
      <div className='show-for-desktop'>Price per night</div>
    </div>
    <div className='list-body'>
      {props.places && props.places.length === 0 ? (
        <div className='list-item list-item__message'>
          <span>No Hosting Places</span>
        </div>
      ) : (
        props.places.map(place => {
          return <PlaceListItem place={place} key={place.id} />;
        })
      )}
    </div>
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
