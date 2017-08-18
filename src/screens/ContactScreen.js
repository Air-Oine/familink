import React, { Component } from 'react';
import {
  ScrollView,
  View,
} from 'react-native';

import HeaderBar from '../components/HeaderBar';
import AppString from '../strings';

export const CONTACT_SCENE_NAME = 'CONTACT_SCENE';

export default class ConstactScreen extends Component {
  static navigationOptions = {
    title: AppString.contactPageName,
  };

  /* constructor(props) {
    super(props);
  } */

  render() {
    const navigation = this.props.navigation;
    return (
      <View>
        <HeaderBar navigation={navigation} title={AppString.contactPageName} />
        <ScrollView />
      </View>
    );
  }
}
