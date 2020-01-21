import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Airbnb Clone</h1>
    <NavLink to='/' activeClassName='is-active' exact={true}>
      Dashboard
    </NavLink>
    <NavLink to='/create' activeClassName='is-active'>
      Add Hosting Place
    </NavLink>
  </header>
);

export default Header;
