import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const NavbarContainer = () => (
  <Container>
    <div className='navbar-container'>
      <Link className='navbar-link' to='/'>
        Home
        <div>
          <Link className='navbar-sublink' to='/about/'>
            About
          </Link>
        </div>
      </Link>
      <Link className='navbar-link' to='/about/'>
        About
      </Link>
    </div>
  </Container>
);

export default NavbarContainer;
