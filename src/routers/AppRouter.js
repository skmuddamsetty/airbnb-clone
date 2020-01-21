import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import AddHostingPlacePage from '../components/AddHostingPlace';
import EditHostingPlacePage from '../components/EditHostingPlace';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={DashboardPage} exact={true} />
        <Route path='/create' component={AddHostingPlacePage} />
        <Route path='/edit' component={EditHostingPlacePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
