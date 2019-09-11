import React from 'react';

import { Container } from './styles';
import HeaderComponent from '../../components/HeaderComponent';
import DividerComponent from '../../components/DividerComponent';
import CounterClassContainer from '../../containers/CounterClassContainer';

const StatePage = () => (
  <Container>
    <HeaderComponent>State</HeaderComponent>
    <DividerComponent />
    <CounterClassContainer />
  </Container>
);

export default StatePage;
