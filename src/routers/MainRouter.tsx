import React from 'react';

import { Route, Switch } from 'react-router-dom';

import MainPage from '../page/main/MainPage';
import AboutPage from '../page/about/AboutPage';
import SkillPage from '../page/skill/SkillPage';
import ContactPage from '../page/contact/ContactPage';

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/skill' component={SkillPage} />
      <Route exact path='/contact' component={ContactPage} />
    </Switch>
  );
};

export default MainRouter;
