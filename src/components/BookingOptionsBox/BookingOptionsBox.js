import React from 'react';
import PriceFormatter from '../Utils/PriceFormatter';
import Divider from '../Divider';
class BookingOptionsBox extends React.Component {
  render() {
    return (
      <div className='booking-options-box'>
        <PriceFormatter price={this.props.place.price} />
        <Divider />
        <button className='button' type='submit'>
          Reserve
        </button>
      </div>
    );
  }
}
export default BookingOptionsBox;
