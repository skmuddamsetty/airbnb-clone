import React from 'react';
import { Link } from 'react-router-dom';

const PlaceListItem = props => (
  <Link to={`/place-view/${props.place.id}`} className='list-item'>
    <div>
      <h3 className='list-item__title'>{props.place.title}</h3>
      <span className='list-item__sub-title'>{props.place.createdAt}</span>
    </div>
    <h3 className='list-item__data'>{props.place.price}</h3>
  </Link>
);

export default PlaceListItem;
