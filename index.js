/** @format */
import * as React from 'react';
import {AppRegistry} from 'react-native';
import { ThemeProvider } from 'styled-components';

import App from './src/App';
import theme from './src/utils/theme';
import {name as appName} from './app.json';


const Provider = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)
AppRegistry.registerComponent(appName, () => Provider);
