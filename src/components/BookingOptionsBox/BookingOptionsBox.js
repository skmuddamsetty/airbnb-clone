import React from 'react';
import PriceFormatter from '../Utils/PriceFormatter';
import Divider from '../Divider';
import { DateRangePicker } from 'react-dates';
import { setStartDate, setEndDate } from '../../actions/filters';
import { connect } from 'react-redux';

class BookingOptionsBox extends React.Component {
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
      <div className='booking-options-box'>
        <PriceFormatter price={this.props.place.price} />
        <Divider />
        <div className='booking-options-box__date-range-picker'>
          <DateRangePicker
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.datesChangeHandler}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.calendarFocusChangeHandler}
            numberOfMonths={1}
            showClearDates={true}
          />
        </div>
        <button className='button' type='submit'>
          Reserve
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};
export default connect(mapStateToProps)(BookingOptionsBox);
