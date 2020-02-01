import React from 'react';
const Amenities = props => (
  <div>
    <h4>Ameneties</h4>
    <div className='amenities'>
      {props.place.amenities.map(amenity => {
        return (
          <p className='amenities__item' key={amenity}>
            {amenity}
          </p>
        );
      })}
    </div>
  </div>
);
export default Amenities;
