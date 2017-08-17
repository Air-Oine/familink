import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';

export const CONTACT_SCENE_NAME = 'CONTACT_SCENE';


export default class ConstactScreen extends Component {
  static navigationOptions = {
    title: 'Contact',
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
