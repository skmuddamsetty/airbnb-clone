import React from 'react';
import PlacesList from './PlacesList';
import PlaceListFilters from './PlaceListFilters';

const DashboardPage = () => (
  <div>
    <PlaceListFilters />
    <PlacesList />
  </div>
);

export default DashboardPage;
