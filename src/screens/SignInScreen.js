import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';

export const SIGNIN_SCENE_NAME = 'SIGNIN_SCENE';


export default class SignInScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  /* constructor(props) {
    super(props);
  } */

  render() {
    return (
      <ScrollView />
    );
  }
}
