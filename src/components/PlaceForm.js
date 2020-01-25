import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class PlaceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.place ? props.place.title : '',
      price: props.place ? (props.place.price / 100).toString() : '',
      summary: props.place ? props.place.summary : '',
      createdAt: props.place ? moment(props.place.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  titleChangeHandler = e => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };
  priceChangeHandler = e => {
    const price = e.target.value;
    if (!price || price.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ price }));
    }
  };
  summaryChangeHandler = e => {
    const summary = e.target.value;
    this.setState(() => ({ summary }));
  };
  dateChangeHandler = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  calendarFocusHandler = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  submitHandler = e => {
    e.preventDefault();
    if (!this.state.price || !this.state.title) {
      this.setState(() => ({ error: 'Please Provide Title and Price' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        title: this.state.title,
        price: parseFloat(this.state.price, 10) * 100,
        summary: this.state.summary,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };
  render() {
    return (
      <form className='form' onSubmit={this.submitHandler}>
        {this.state.error ? (
          <p className='form__error'>{this.state.error}</p>
        ) : (
          ''
        )}
        <input
          type='text'
          placeholder='Title'
          autoFocus
          value={this.state.title}
          onChange={this.titleChangeHandler}
          className='text-input'
        />
        <input
          type='text'
          placeholder='Price per night'
          value={this.state.price}
          onChange={this.priceChangeHandler}
          className='text-input'
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.dateChangeHandler}
          focused={this.state.calendarFocused}
          onFocusChange={this.calendarFocusHandler}
          numberOfMonths={1}
        />
        <textarea
          placeholder='Summary'
          value={this.state.summary}
          onChange={this.summaryChangeHandler}
          className='text-area'
        ></textarea>
        <div>
          <button className='button' type='submit'>
            Save Hosting Place
          </button>
        </div>
      </form>
    );
  }
}

export default PlaceForm;
