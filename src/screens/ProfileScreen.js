import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  View,
  Text,
} from 'react-native';
import { Icon } from 'native-base';

import HeaderBar from '../components/HeaderBar';
import AppString from '../strings';
import { styles } from '../style';

export const PROFILE_SCENE_NAME = 'PROFILE_SCENE';


export default class ProfileScreen extends Component {
  static navigationOptions = {
    drawerLabel: AppString.profilePageName,
    drawerIcon: () => (<Icon name="man" style={styles.menuDrawer_itemIcon} />),
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
