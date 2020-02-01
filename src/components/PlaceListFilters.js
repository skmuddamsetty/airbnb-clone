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
    calendarFocused: null,
    displayTypeOfPlacesFilters: false,
    types_of_places: []
  };
  typeOfPlaceHandler = () => {
    this.setState({
      displayTypeOfPlacesFilters: !this.state.displayTypeOfPlacesFilters
    });
  };
  datesChangeHandler = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  calendarFocusChangeHandler = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };
  checkboxHandler = e => {
    if (!e.target.checked) {
      let types_of_places = [...this.state.types_of_places];
      types_of_places = types_of_places.filter(
        place => place !== e.target.value
      );
      this.setState({
        types_of_places
      });
    } else {
      this.setState({
        types_of_places: [...this.state.types_of_places, e.target.value]
      });
    }
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
          <div className='input-group__item'>
            <div className='filters-form'>
              <button
                className='button button--teritiary'
                onClick={this.typeOfPlaceHandler}
              >
                Type Of Place
              </button>
              {this.state.displayTypeOfPlacesFilters ? (
                <form className='filters-form__type-of-place'>
                  <div className='filters-form__checkbox'>
                    <input
                      type='checkbox'
                      onClick={this.checkboxHandler}
                      value='Entire Place'
                    ></input>
                    <div className='filters-form__checkbox-description'>
                      <p>Entire Place</p>
                      <p>Have a place to yourself</p>
                    </div>
                  </div>
                  <div className='filters-form__checkbox'>
                    <input
                      type='checkbox'
                      onClick={this.checkboxHandler}
                      value='Private Room'
                    ></input>
                    <div className='filters-form__checkbox-description'>
                      <p>Private Room</p>
                      <p>Have your own room and share some common spaces</p>
                    </div>
                  </div>
                  <div className='filters-form__checkbox'>
                    <input
                      type='checkbox'
                      onClick={this.checkboxHandler}
                      value='Hotel Room'
                    ></input>
                    <div className='filters-form__checkbox-description'>
                      <p>Hotel Room</p>
                      <p>
                        Have a private or shared room in a boutique hotel,
                        hostel, and more
                      </p>
                    </div>
                  </div>
                  <div className='filters-form__checkbox'>
                    <input
                      type='checkbox'
                      onClick={this.checkboxHandler}
                      value='Shared Room'
                    ></input>
                    <div className='filters-form__checkbox-description'>
                      <p>Shared Room</p>
                      <p>Stay in a shared space, like a common room</p>
                    </div>
                  </div>
                </form>
              ) : (
                ''
              )}
            </div>
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
