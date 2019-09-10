import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import NavbarContainer from '../../containers/NavbarContainer';
import HomePage from '../HomePage';
import AboutPage from '../AboutPage';

const App = () => (
  <Router>
    <NavbarContainer />
    <Route path='/' exact component={HomePage} />
    <Route path='/about' exact component={AboutPage} />
  </Router>
);

export default App;
