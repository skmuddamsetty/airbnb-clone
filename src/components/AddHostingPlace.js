import React from 'react';
import PlaceForm from './PlaceForm';
import { addPlace } from '../actions/places';
import { connect } from 'react-redux';

const AddHostingPlacePage = props => (
  <div>
    <h1>Add Place Page</h1>
    <div className='content-container'>
      <PlaceForm
        onSubmit={place => {
          props.dispatch(addPlace(place));
          props.history.push('/');
        }}
      />
    </div>
  </div>
);

export default connect()(AddHostingPlacePage);
