import React from 'react';
import { Link } from 'react-router-dom';

const PlaceListItem = props => (
  <div>
    <Link to={`/place-view/${props.place.id}`}>
      <strong>Place Name:</strong>
      {props.place.title}
    </Link>
    <div>
      <strong>Price:</strong>
      {props.place.price}
    </div>
    <div>
      <strong>Created At:{props.place.createdAt}</strong>
    </div>
  </div>
);

export default PlaceListItem;
