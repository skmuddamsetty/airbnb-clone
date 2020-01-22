import React from 'react';
import { connect } from 'react-redux';

const PlacesList = props => (
  <div>
    <h1>Places List</h1>
    {props.places.length}
  </div>
);

// const ConnectedPlacesList = connect(state => {
//   return {
//     places: state.places
//   };
// })(PlacesList);

// export default ConnectedPlacesList;

const mapStateToProps = state => {
  return {
    places: state.places
  };
};

export default connect(mapStateToProps)(PlacesList);
