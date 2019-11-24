import React from 'react';
import * as jokeRoutes from './joke';
import * as userRoutes from './user';
import * as errorRoutes from './error';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/**
 * @function AppRouter
 * @description [ controlls the routing of the application ]
 * @returns {React Router Object}
 * */
function AppRouter() {
  const routes = [
    ...userRoutes.default,
    ...jokeRoutes.default,
    ...errorRoutes.default, // always load this last
  ];
  return (
    <Router>
      <Switch>
        {routes.map(({ url, component, exact = false }, index) => (
          <Route key={index} exact={exact} path={url} component={component} />
        ))}
      </Switch>
    </Router>
  );
}

export default AppRouter;
