import React from 'react';
import PriceFormatter from '../Utils/PriceFormatter';
import Divider from '../Divider';
import { DateRangePicker } from 'react-dates';
import { setStartDate, setEndDate } from '../../actions/filters';
import { connect } from 'react-redux';
import moment from 'moment';

class BookingOptionsBox extends React.Component {
  state = {
    calendarFocused: null,
    number_of_nights: 0,
    total_price_for_selected_duration: 0
  };
  datesChangeHandler = ({ startDate, endDate }) => {
    const number_of_nights = Math.abs(
      moment.duration(startDate.diff(endDate)).as('days')
    );
    const total_price_for_selected_duration =
      this.props.place.price * number_of_nights;
    this.setState(() => ({
      number_of_nights,
      total_price_for_selected_duration
    }));

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
          <p>Dates</p>
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
        <Divider />
        <div className='selected-number-of-nights'>
          <div>
            <PriceFormatter price={this.props.place.price} />
            <span className='number-of-nights-text'>
              {this.state.number_of_nights}
            </span>
          </div>
          <div>
            <PriceFormatter
              price={this.state.total_price_for_selected_duration}
            />
          </div>
        </div>
        <Divider />
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
