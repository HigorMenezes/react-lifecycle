import React, { useState } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

import mdCode from '../CounterClassContainer/code';

import { Container } from './styles';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const CodeCollapseContainer = () => {
  const [open, setOpen] = useState(false);

  function handleToggleOpen() {
    setOpen(prevState => !prevState);
  }

  return (
    <Container>
      <button className='collapse-button' onClick={handleToggleOpen}>
        Code
      </button>
      {open && (
        <div className='collapse-content'>
          <SyntaxHighlighter language='jsx' style={okaidia}>
            {mdCode}
          </SyntaxHighlighter>
        </div>
      )}
    </Container>
  );
};

export default CodeCollapseContainer;
