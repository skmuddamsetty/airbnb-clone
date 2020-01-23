import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByPrice } from '../actions/filters';

const PlaceListFilters = props => (
  <div>
    <input
      type='text'
      value={props.filters.text}
      onChange={e => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
    <select
      value={props.filters.sortBy}
      onChange={e => {
        if (e.target.value === 'date') {
          props.dispatch(sortByDate());
        } else {
          props.dispatch(sortByPrice());
        }
      }}
    >
      <option value='date'>Date</option>
      <option value='price'>Price</option>
    </select>
  </div>
);

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};
export default connect(mapStateToProps)(PlaceListFilters);
