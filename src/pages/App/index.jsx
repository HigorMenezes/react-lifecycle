import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavbarContainer from '../../containers/NavbarContainer';

import routes from '../../routes';

const App = () => (
  <Router>
    <NavbarContainer />
    {routes.map(route => (
      <Route path={route.path} exact component={route.page} />
    ))}
  </Router>
);

export default App;
