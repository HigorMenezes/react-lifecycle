import React from 'react';

import { Container } from './styles';
import DividerComponent from '../../components/DividerComponent';
import HeaderComponent from '../../components/HeaderComponent';
import CounterClassContainer from '../CounterClassContainer';
import CodeCollapseContainer from '../CodeCollapseContainer';

const ContentCardContainer = () => {
  return (
    <Container>
      <HeaderComponent>Content Header</HeaderComponent>
      <DividerComponent />
      <section className='content-card-section'>
        <div className='content-card-component-container'>
          <CounterClassContainer title='click on button to increase counter' />
        </div>
        <CodeCollapseContainer />
      </section>
    </Container>
  );
};

export default ContentCardContainer;
