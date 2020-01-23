import React from 'react';

class PlaceForm extends React.Component {
  state = {
    title: '',
    price: '',
    summary: ''
  };
  titleChangeHandler = e => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };
  priceChangeHandler = e => {
    const price = e.target.value;
    if (price.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ price }));
    }
  };
  summaryChangeHandler = e => {
    const summary = e.target.value;
    this.setState(() => ({ summary }));
  };
  render() {
    return (
      <div>
        <form>
          <input
            type='text'
            placeholder='Title'
            autoFocus
            value={this.state.title}
            onChange={this.titleChangeHandler}
          />
          <input
            type='text'
            placeholder='Price per night'
            value={this.state.price}
            onChange={this.priceChangeHandler}
          />
          <textarea
            placeholder='Summary'
            value={this.state.summary}
            onChange={this.summaryChangeHandler}
          ></textarea>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default PlaceForm;
