import React from 'react';
import { AppRegistry } from 'react-native';

import Application from './src/Application';

export default function familink() {
  return (
    <Application />
  );
}

AppRegistry.registerComponent('familink', () => familink);
