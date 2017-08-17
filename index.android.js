import React from 'react';
import { AppRegistry } from 'react-native';
import NavigationContainer from './src/NavigationContainer';
import {
  AppRegistry,
  View,
  Text,
} from 'react-native';

import AppString from './src/strings';

export default function familink() {
  console.log(AppString);
  return (
    <NavigationContainer />
  );
}

AppRegistry.registerComponent('familink', () => familink);
