import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing/Landing';
import Songs from './components/Songs/Songs';


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/karaoke" component={Songs} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

