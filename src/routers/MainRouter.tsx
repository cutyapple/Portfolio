import React from 'react';

import { Route, Switch } from 'react-router-dom';

import MainPage from '../page/main/MainPage';
import AboutPage from '../page/about/AboutPage';

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route exact path="/about" component={AboutPage} />
    </Switch>
  );
};

export default MainRouter;
