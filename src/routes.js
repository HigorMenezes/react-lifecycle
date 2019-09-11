import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import StatePage from './pages/StatePage';

export default [
  {
    title: 'Home',
    page: HomePage,
    path: '/',
  },
  {
    title: 'About',
    page: AboutPage,
    path: '/about/',
  },
  {
    title: 'State',
    page: StatePage,
    path: '/state/',
  },
];
