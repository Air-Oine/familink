import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';

export const FORGOTTENPWD_SCENE_NAME = 'FORGETTENPWD_SCENE';


export default class ForgottenPwdScreen extends Component {
  static navigationOptions = {
    title: 'ForgottenPwd',
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

