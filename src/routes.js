import React from 'react';
import { Route, IndexRoute } from 'react-router';
import urls from 'constants/urls';
import App from 'containers/App';

export default (
  <Route path={urls.app.url} >
      <IndexRoute component={App} />
  </Route>
);
