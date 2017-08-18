import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  View,
} from 'react-native';

import HeaderBar from '../components/HeaderBar';
import AppString from '../strings';

export const CONTACTLIST_SCENE_NAME = 'CONTACTLIST_SCENE';

export default class ContactListScreen extends Component {
  static navigationOptions = {
    title: AppString.contactListPageName,
  };

  /* constructor(props) {
    super(props);
  } */

  render() {
    const navigation = this.props.navigation;
    return (
      <View>
        <HeaderBar navigation={navigation} title={AppString.contactListPageName} />
        <ScrollView />
      </View>
    );
  }
}

ContactListScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};
