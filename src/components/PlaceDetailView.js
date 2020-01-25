import React from 'react';
import { connect } from 'react-redux';

const PlaceDetailView = props => (
  <div className='place-detail-view'>
    <div className='place-detail-view__overview'>
      <h1>{props.place.title}</h1>
      <p className='place-detail-view__location'>{props.place.location}</p>
      <div className='place-detail-view__room-details'>
        {props.place.number_of_guests ? (
          <span>{props.place.number_of_guests} guests</span>
        ) : (
          ''
        )}
        {props.place.number_of_bed_rooms ? (
          <span>{props.place.number_of_bed_rooms} bedrooms</span>
        ) : (
          ''
        )}
        {props.place.number_of_beds ? (
          <span>{props.place.number_of_beds} beds</span>
        ) : (
          ''
        )}
        {props.place.number_of_bath_rooms ? (
          <span>{props.place.number_of_bath_rooms} baths</span>
        ) : (
          ''
        )}
      </div>
      <div className='divider'></div>
      <div className='bullet-points'>
        {props.place.bullet_points.map((bullet_point, idx) => {
          return (
            <div key={idx} className='bullet-points__box'>
              <strong>{bullet_point.heading}</strong>
              <p>{bullet_point.sub_heading}</p>
            </div>
          );
        })}
      </div>
      <div className='divider'></div>
      <div>{props.place.summary}</div>
      <div className='divider'></div>
      <div>
        <h4>Ameneties</h4>
        <div className='amenities'>
          {props.place.amenities.map(amenity => {
            return <p className='amenities__item'>{amenity}</p>;
          })}
        </div>
      </div>
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
