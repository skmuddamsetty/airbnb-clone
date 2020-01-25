import React from 'react';
import { connect } from 'react-redux';
import getVisiblePlaces from '../selectors/places';

const PlacesSummary = ({ placesCount }) => {
  const placeWord = placesCount === 1 ? 'Place' : 'Places';
  return (
    <div className='page-header'>
      <div className='content-container'>
        <h1 className='page-header__title'>
          Viewing <span>{placesCount}</span> Hosting {placeWord}
        </h1>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  const visiblePlaces = getVisiblePlaces(state.places, state.filters);
  return {
    placesCount: visiblePlaces.length
  };
};
export default connect(mapStateToProps)(PlacesSummary);
