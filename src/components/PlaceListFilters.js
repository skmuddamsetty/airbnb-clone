import React from 'react';
import { connect } from 'react-redux';
import {
  setTextFilter,
  sortByDate,
  sortByPrice,
  setStartDate,
  setEndDate,
  setTypesOfPlaces
} from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class PlaceListFilters extends React.Component {
  state = {
    calendarFocused: null,
    displayTypeOfPlacesFilters: false,
    types_of_places: [],
    checkbox_entire_place: false,
    checkbox_private_place: false,
    checkbox_hotel_room: false,
    checkbox_shared_room: false
  };

  typeOfPlaceHandler = () => {
    this.setState(() => ({
      displayTypeOfPlacesFilters: !this.state.displayTypeOfPlacesFilters
    }));
  };

  datesChangeHandler = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  calendarFocusChangeHandler = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };

  saveTypesOfPlaceHandler = () => {
    this.props.dispatch(setTypesOfPlaces(this.state.types_of_places));
    this.setState(() => ({ displayTypeOfPlacesFilters: false }));
  };

  checkboxHandler = e => {
    if (!e.target.checked) {
      switch (e.target.value) {
        case 'Entire Place':
          this.setState(() => ({ checkbox_entire_place: false }));
          break;
        case 'Private Room':
          this.setState(() => ({ checkbox_private_place: false }));
          break;
        case 'Hotel Room':
          this.setState(() => ({ checkbox_hotel_room: false }));
          break;
        case 'Shared Room':
          this.setState(() => ({ checkbox_shared_room: false }));
          break;
        default:
          break;
      }
      let types_of_places = [...this.state.types_of_places];
      types_of_places = types_of_places.filter(
        place => place !== e.target.value
      );
      this.setState({
        types_of_places
      });
    } else {
      switch (e.target.value) {
        case 'Entire Place':
          this.setState(() => ({ checkbox_entire_place: true }));
          break;
        case 'Private Room':
          this.setState(() => ({ checkbox_private_place: true }));
          break;
        case 'Hotel Room':
          this.setState(() => ({ checkbox_hotel_room: true }));
          break;
        case 'Shared Room':
          this.setState(() => ({ checkbox_shared_room: true }));
          break;
        default:
          break;
      }
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
                      onChange={this.checkboxHandler}
                      value='Entire Place'
                      checked={this.state.checkbox_entire_place}
                      id='checkbox_entire_place'
                    ></input>
                    <div className='filters-form__checkbox-description'>
                      <p>Entire Place</p>
                      <p>Have a place to yourself</p>
                    </div>
                  </div>
                  <div className='filters-form__checkbox'>
                    <input
                      type='checkbox'
                      onChange={this.checkboxHandler}
                      value='Private Room'
                      checked={this.state.checkbox_private_place}
                      id='checkbox_private_place'
                    ></input>
                    <div className='filters-form__checkbox-description'>
                      <p>Private Room</p>
                      <p>Have your own room and share some common spaces</p>
                    </div>
                  </div>
                  <div className='filters-form__checkbox'>
                    <input
                      type='checkbox'
                      onChange={this.checkboxHandler}
                      value='Hotel Room'
                      checked={this.state.checkbox_hotel_room}
                      id='checkbox_hotel_room'
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
                      onChange={this.checkboxHandler}
                      value='Shared Room'
                      checked={this.state.checkbox_shared_room}
                      id='checkbox_shared_room'
                    ></input>
                    <div className='filters-form__checkbox-description'>
                      <p>Shared Room</p>
                      <p>Stay in a shared space, like a common room</p>
                    </div>
                  </div>
                  <button
                    type='button'
                    className='button button--right'
                    onClick={this.saveTypesOfPlaceHandler}
                  >
                    Save
                  </button>
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
