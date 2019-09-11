import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import routes from '../../routes';

const NavbarContainer = () => (
  <Container>
    <div className='navbar-container'>
      {routes.map(route => (
        <Link className='navbar-link' to={route.path}>
          {route.title}
        </Link>
      ))}

      {/* <div className='navbar-subcontainer'>
          <Link className='navbar-link' to='/'>
            Home
          </Link>
        </div> */}
    </div>
  </Container>
);

export default NavbarContainer;
