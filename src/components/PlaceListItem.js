import React from 'react';
import { removePlace } from '../actions/places';
import { connect } from 'react-redux';

const PlaceListItem = props => (
  <div>
    <div>
      <strong>Place Name:</strong>
      {props.place.title}
    </div>
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
