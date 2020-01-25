import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import PlacePlanOverview from './PlaceDetails/PlacePlanOverview';
import Amenities from '../components/PlaceDetails/Amenities';

const PlaceListItem = props => (
  <Link to={`/place-view/${props.place.id}`} className='list-item'>
    <div>
      <h4 className='list-item__small-title'>{props.place.type_of_place}</h4>
      <h3 className='list-item__title'>{props.place.title}</h3>
      <div className='list-item__place-plan-overview'>
        <PlacePlanOverview place={props.place} />
      </div>
      <div className='list-item__amenities'>
        <Amenities place={props.place} />
      </div>
      <span className='list-item__sub-title'>
        {moment(props.place.createdAt).format('MMMM Do, YYYY')}
      </span>
    </div>
    <h3 className='list-item__data'>
      {numeral(props.place.price / 100).format('$0,0.00')}
      <span>/night</span>
    </h3>
  </Link>
);

export default PlaceListItem;
