import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';

export const CONTACTLIST_SCENE_NAME = 'CONTACTLIST_SCENE';


export default class ContactListScreen extends Component {
  static navigationOptions = {
    title: 'ContactList',
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
