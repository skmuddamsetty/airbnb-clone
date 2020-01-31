import React from 'react';
import { connect } from 'react-redux';
import {
  setTextFilter,
  sortByDate,
  sortByPrice,
  setStartDate,
  setEndDate
} from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class PlaceListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  datesChangeHandler = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  calendarFocusChangeHandler = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };
  render() {
    return (
      <div className='content-container'>
        <div className='input-group'>
          <div className='input-group__item'>
            <input
              className='text-input'
              type='text'
              value={this.props.filters.text}
              onChange={e => {
                this.props.dispatch(setTextFilter(e.target.value));
              }}
              placeholder='Search Hosting Places'
            />
          </div>
          <div className='input-group__item'>
            <select
              className='select'
              value={this.props.filters.sortBy}
              onChange={e => {
                if (e.target.value === 'date') {
                  this.props.dispatch(sortByDate());
                } else {
                  this.props.dispatch(sortByPrice());
                }
              }}
            >
              <option value='date'>Date</option>
              <option value='price'>Price</option>
            </select>
          </div>
          <div className='input-group__item'>
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.datesChangeHandler}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.calendarFocusChangeHandler}
              numberOfMonths={1}
              showClearDates={true}
              startDatePlaceholderText={'CHECK-IN'}
              endDatePlaceholderText={'CHECK-OUT'}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};
export default connect(mapStateToProps)(PlaceListFilters);
