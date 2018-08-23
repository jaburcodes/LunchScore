// @flow
import React, {Component} from 'react';
import Home from './screens/Home';

import { createStackNavigator } from 'react-navigation';

export default createStackNavigator(
  {
    Home: Home,
  },
  {
    initialRouteName: 'Home',
  }
);