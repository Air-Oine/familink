import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
} from 'react-native';

import HeaderBar from '../components/HeaderBar';
import AppString from '../strings';

export const LOGIN_SCENE_NAME = 'LOGIN_SCENE';


export default class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: AppString.loginPageName,
  };

  /* constructor(props) {
    super(props);
  } */

  render() {
    const navigation = this.props.navigation;
    return (
      <View>
        <HeaderBar navigation={navigation} title={AppString.loginPageName} />
        <ScrollView>
          <Text>
                Ceci est la page de login
          </Text>
        </ScrollView>
      </View>
    );
  }
}
