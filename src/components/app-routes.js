import React from 'react';
import { Router, useRouterHistory, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import routes from '../routes';

const browserHistory = useRouterHistory(createHistory)({ basename: '/' });

export default class AppRoutes extends React.Component {
  render(){
    return (
      <Router history={browserHistory} routes={routes} />
    );
  }
}

