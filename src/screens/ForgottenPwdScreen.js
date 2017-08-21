import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  View,
} from 'react-native';

import HeaderBar from '../components/HeaderBar';
import AppString from '../strings';

export const FORGOTTENPWD_SCENE_NAME = 'FORGETTENPWD_SCENE';

export default class ForgottenPwdScreen extends Component {
  static navigationOptions = {
    title: AppString.forgottenPasswordPageName,
  };

  /* constructor(props) {
    super(props);
  } */

  render() {
    const navigation = this.props.navigation;
    return (
      <View>
        <HeaderBar navigation={navigation} title={AppString.forgottenPasswordPageName} />
        <ScrollView />
      </View>
    );
  }
}

ForgottenPwdScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};
