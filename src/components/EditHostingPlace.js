import React from 'react';
import PlaceForm from './PlaceForm';
import { connect } from 'react-redux';
import { editPlace } from '../actions/places';

const EditHostingPlacePage = props => {
  return (
    <div>
      <h1>Edit Page</h1>
      <PlaceForm
        place={props.place}
        onSubmit={place => {
          props.dispatch(editPlace(props.place.id, place));
          props.history.push('/');
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    place: state.places.find(place => place.id === props.match.params.id)
  };
};
export default connect(mapStateToProps)(EditHostingPlacePage);
