import React from 'react';
import { removePlace } from '../actions/places';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const PlaceListItem = props => (
  <div>
    <Link to={`/edit/${props.place.id}`}>
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
    <div>
      <button
        onClick={e => {
          props.dispatch(removePlace({ id: props.place.id }));
        }}
      >
        Remove
      </button>
    </div>
  </div>
);

export default connect()(PlaceListItem);
