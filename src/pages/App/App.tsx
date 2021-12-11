import React from 'react';

// Styles
import GlobalStyle from 'styles/global';
import { Container } from './styles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container className="App">
        <span>Things of u</span>
      </Container>
    </>
  );
};

export default App;
