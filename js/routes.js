import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
  NotFound
  , Greeting
  , Author
  , Raag
  , Raags
  , Authors
  , Bookmarks
  , Hukamnama
  , About
  , Baani
  , SGGS
  , Nitnem
  , Calendar
  , Shabad
  , Shabads
} from './components';


export default App => (
  <Route path="/SikhJS/" component={App} >
    <IndexRoute component={Greeting} />
    <Route path="about" component={About} />
    <Route path="sggs" component={SGGS} />
    <Route path="sggs/:ang" component={SGGS} />
    <Route path="calendar" component={Calendar} />
    <Route path="shabads" component={Shabads} />
    <Route path="bookmarks" component={Bookmarks} />
    <Route path="authors" component={Authors} />
    <Route path="author/:id" component={Author} />
    <Route path="raags" component={Raags} />
    <Route path="raag/:id" component={Raag} />
    <Route path="shabads/:q" component={Shabads} />
    <Route path="shabad/:id" component={Shabad} />
    <Route path="nitnem" component={Nitnem} />
    <Route path="nitnem/:baani" component={Baani} />
    <Route path="hukamnama" component={Hukamnama} />
    <Route path="*" component={NotFound} />
  </Route>
)
