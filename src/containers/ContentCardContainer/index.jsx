import React, { useState } from 'react';

import { Container } from './styles';
import DividerComponent from '../../components/DividerComponent';
import HeaderComponent from '../../components/HeaderComponent';
import CounterClassContainer from '../CounterClassContainer';
import { MdCode } from 'react-icons/md';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

import mdCode from '../CounterClassContainer/code';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const ContentCardContainer = () => {
  const [showCode, setShowCode] = useState(false);

  function handleToggleShowCode() {
    setShowCode(state => !state);
  }

  return (
    <Container>
      <div className='content-card-header'>
        <HeaderComponent>Content Header</HeaderComponent>
        <div onClick={handleToggleShowCode} className='show-code-button'>
          <MdCode size={32} />
        </div>
      </div>
      <DividerComponent />
      <section className='content-card-section'>
        <div className='content-card-component-container'>
          <CounterClassContainer title='click on button to increase counter' />
        </div>
        {showCode && (
          <div className='code-content'>
            <SyntaxHighlighter language='jsx' style={okaidia}>
              {mdCode}
            </SyntaxHighlighter>
          </div>
        )}
      </section>
    </Container>
  );
};

export default ContentCardContainer;
