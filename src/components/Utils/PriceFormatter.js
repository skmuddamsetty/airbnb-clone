import React from 'react';
import numeral from 'numeral';
const PriceFormatter = props => (
  <span className='formatted-price'>
    {numeral(props.price / 100).format('$0,0.00')}
  </span>
);

export default PriceFormatter;
