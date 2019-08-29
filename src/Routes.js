import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Todo from './components/Todo/Todo';
import Nav from './components/Nav/Nav';

const Routes = () => (
  <BrowserRouter>
    <Landing>
      <Nav />
      <Header />
    </Landing>
    <Switch>
      <Route exact path="/" component={Todo} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

