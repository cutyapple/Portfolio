import React from 'react';

import { GlobalStyle } from './GlobalStyle';
import Section from './components/section/Section';
import Navigation from './components/navigation/Navigation';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Section />
    </>
  );
};

export default App;
