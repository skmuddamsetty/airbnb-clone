import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import PlacePlanOverview from './PlaceDetails/PlacePlanOverview';

const PlaceListItem = props => (
  <Link to={`/place-view/${props.place.id}`} className='list-item'>
    <div>
      <h3 className='list-item__title'>{props.place.title}</h3>
      <div className='place-plan-overview__list-item'>
        <PlacePlanOverview place={props.place} />
      </div>
      <span className='list-item__sub-title'>
        {moment(props.place.createdAt).format('MMMM Do, YYYY')}
      </span>
    </div>
    <h3 className='list-item__data'>
      {numeral(props.place.price / 100).format('$0,0.00')}
    </h3>
  </Link>
);

export default PlaceListItem;
