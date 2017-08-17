import React, { Component } from 'react';
import {
  ScrollView,
  Text,
} from 'react-native';

export const HOME_SCENE_NAME = 'HOME_SCENE';


export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  /* constructor(props) {
    super(props);
  } */

  render() {
    return (
      <ScrollView>
        <Text>
          ceci est la page home
        </Text>
      </ScrollView>
    );
  }
}
