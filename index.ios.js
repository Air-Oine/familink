import React from 'react';
import { AppRegistry } from 'react-native';
import NavigationContainer from './src/NavigationContainer';
import {
  AppRegistry,
  View,
  Text,
} from 'react-native';

export default function familink() {
  return (
    <NavigationContainer />
  );
}

AppRegistry.registerComponent('familink', () => familink);
