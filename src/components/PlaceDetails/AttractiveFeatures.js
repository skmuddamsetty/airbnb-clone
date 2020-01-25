import React from 'react';
const AttractiveFeatures = props => (
  <div className='attractive-features'>
    {props.place.bullet_points.map((bullet_point, idx) => {
      return (
        <div key={idx} className='attractive-features__box'>
          <strong>{bullet_point.heading}</strong>
          <p>{bullet_point.sub_heading}</p>
        </div>
      );
    })}
  </div>
);
export default AttractiveFeatures;
