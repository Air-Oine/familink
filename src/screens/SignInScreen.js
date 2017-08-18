import React, { Component } from 'react';
import {
  ScrollView,
  View,
} from 'react-native';

import HeaderBar from '../components/HeaderBar';
import AppString from '../strings';

export const SIGNIN_SCENE_NAME = 'SIGNIN_SCENE';


export default class SignInScreen extends Component {
  static navigationOptions = {
    title: AppString.signInPageName,
  };

  /* constructor(props) {
    super(props);
  } */

  render() {
    const navigation = this.props.navigation;
    return (
      <View>
        <HeaderBar navigation={navigation} title={AppString.signInPageName} />
        <ScrollView />
      </View>
    );
  }
}
