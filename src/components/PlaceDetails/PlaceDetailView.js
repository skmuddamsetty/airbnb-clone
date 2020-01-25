import React from 'react';
import { connect } from 'react-redux';
import Divider from '../Divider';
import Amenities from './Amenities';
import AttractiveFeatures from './AttractiveFeatures';
import PlacePlanOverview from './PlacePlanOverview';

const PlaceDetailView = props => (
  <div className='place-detail-view'>
    <div className='place-detail-view__overview'>
      <h1>{props.place.title}</h1>
      <p className='place-detail-view__location'>{props.place.location}</p>
      <PlacePlanOverview place={props.place} />
      <Divider />
      <AttractiveFeatures place={props.place} />
      <Divider />
      <div>{props.place.summary}</div>
      <Divider />
      <Amenities place={props.place} />
    </div>
    <div className='place-detail-view__booking-box'>Price Summary</div>
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    place: state.places.find(place => place.id === props.match.params.id)
  };
};
export default connect(mapStateToProps)(PlaceDetailView);
