import React from 'react';
import { Switch } from 'react-router-dom';

import { Route } from './Route';
import { routes } from './routes';
import { RouteProps } from './types';

const Routes: React.FC = () => (
  <Switch>
    {routes.map((route: RouteProps) =>
      route.component ? (
        <Route
          key={route.id}
          path={route.path}
          exact={route.exact}
          isPrivate={route.isPrivate}
          component={route.component}
        />
      ) : null,
    )}
  </Switch>
);

export default Routes;
