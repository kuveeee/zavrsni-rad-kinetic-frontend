import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login';

const PublicRoute = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Redirect to="/login" />
    </Switch>
  );
};

export default PublicRoute;
