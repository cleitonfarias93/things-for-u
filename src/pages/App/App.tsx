import React from 'react';

// Routes
import { Outlet } from 'react-router-dom';
// import RoutesComponents from 'routes';

// Styles
import GlobalStyle from 'styles/global';
import { Container } from './styles';

const App: React.FC = () => {
  console.log('App');

  return (
    <>
      <GlobalStyle />
      <Container className="App">
        <span>App</span>
        <Outlet />
      </Container>
    </>
  );
};

export default App;
