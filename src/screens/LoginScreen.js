import React, { Component } from 'react';
import {
  ScrollView,
  Text,
} from 'react-native';

export const LOGIN_SCENE_NAME = 'LOGIN_SCENE';


export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  /* constructor(props) {
    super(props);
  } */

  render() {
    return (
      <ScrollView>
        <Text>
              Ceci est la page de login
        </Text>
      </ScrollView>
    );
  }
}
