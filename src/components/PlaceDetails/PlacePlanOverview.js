import React from 'react';
const PlacePlanOverview = props => (
  <div className='place-plan-overview'>
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
);
export default PlacePlanOverview;
