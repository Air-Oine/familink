import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  View,
  Text,
} from 'react-native';

import HeaderBar from '../components/HeaderBar';
import AppString from '../strings';

export const PROFILE_SCENE_NAME = 'PROFILE_SCENE';


export default class ProfileScreen extends Component {
  static navigationOptions = {
    drawerLabel: AppString.profilePageName,
  };

  /* constructor(props) {
    super(props);
  } */

  render() {
    const navigation = this.props.navigation;
    return (
      <View>
        <HeaderBar navigation={navigation} title={AppString.profilePageName} />
        <ScrollView>
          <Text>
                Ceci est la page de profil
          </Text>
        </ScrollView>
      </View>
    );
  }
}

ProfileScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};
