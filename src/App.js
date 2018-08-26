// @flow
import React, {Component} from 'react';
import Home from './screens/Home';
import Options from './screens/Options';

import { createStackNavigator } from 'react-navigation';


const RootStack = createStackNavigator({
  Options: {
    screen: Options
  },
  Home: {
    screen: Home
  },
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}