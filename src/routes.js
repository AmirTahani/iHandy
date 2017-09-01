import React from 'react';
import { Route, IndexRoute } from 'react-router';
import createStore from './redux/create';
import ApiClient from './helpers/ApiClient';
import { Provider } from 'react-redux';
import {
  App,
  Home,
  NotFound,
  GlassService,
  CarService,
  PipeService,
  HomeService,
  Login,
  Register,
  ForgotPassword
} from './containers';

const client = new ApiClient();
const store = createStore(client);
const requireLogin = () => {
  console.log('its here');
};

export default function getRoutes() {
  return (
    <Provider store={store}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        {/* Add routes below */}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/register" component={ForgotPassword} />
        <Route path="/app" onEnter={requireLogin}>
          <Route path="car-service" component={CarService} />
          <Route path="home-service" component={HomeService} />
          <Route path="glass-service" component={GlassService} />
          <Route path="pipe-service" component={PipeService} />
        </Route>
        <Route path="*" component={NotFound} status={404} />
      </Route>
    </Provider>
  );
}
