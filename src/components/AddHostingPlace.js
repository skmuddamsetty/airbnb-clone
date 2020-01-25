import React from 'react';
import PlaceForm from './PlaceForm';
import { addPlace } from '../actions/places';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const AddHostingPlacePage = props => (
  <div>
    <div className='page-header'>
      <div className='content-container'>
        <h1 className='page-header__title'>Add Place Page</h1>
        <div className='page-header__actions'>
          <Link className='button' to='/'>
            Home
          </Link>
        </div>
      </div>
    </div>
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
