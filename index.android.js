import React from 'react';
import {
  AppRegistry,
  View,
  Text,
} from 'react-native';

import AppString from './src/strings';

export default function familink() {
  console.log(AppString);
  return (
    <View>
      <Text> {AppString.test}</Text>
    </View>
  );
}

AppRegistry.registerComponent('familink', () => familink);
