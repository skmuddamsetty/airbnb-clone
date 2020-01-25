import React from 'react';
import PlacesList from './PlacesList';
import PlaceListFilters from './PlaceListFilters';
import PlacesSummary from './PlacesSummary';

const DashboardPage = () => (
  <div>
    <PlacesSummary />
    <PlaceListFilters />
    <PlacesList />
  </div>
);

export default DashboardPage;
