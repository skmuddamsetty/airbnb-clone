import React from 'react';
import { connect } from 'react-redux';

const PlaceDetailView = props => (
  <div>
    <h1>{props.place.title}</h1>
    <p>{props.place.location}</p>
    <div>
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
    <div>
      {props.place.bullet_points.map((bullet_point, idx) => {
        return (
          <div key={idx}>
            <strong>{bullet_point.heading}</strong>
            <p>{bullet_point.sub_heading}</p>
          </div>
        );
      })}
    </div>
    <div>{props.place.summary}</div>
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    place: state.places.find(place => place.id === props.match.params.id)
  };
};
export default connect(mapStateToProps)(PlaceDetailView);
