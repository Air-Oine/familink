import React, { PropTypes, Component } from 'react';
import { Icon } from 'native-base';
import { View } from 'react-native';
import Storage from '../asyncStorage';
import AppString from '../strings';
import Tools from '../Tools';
import { styles } from '../style';
import { LOGIN_SCENE_NAME } from './LoginScreen';


export const LOGOUT_SCENE_NAME = 'LOGOUT_SCENE';

export default class LogoutScreen extends Component {
  static navigationOptions = {
    drawerLockMode: 'locked-closed',
    drawerLabel: AppString.logoutPageName,
    drawerIcon: () => (<Icon name="log-out" style={styles.menuDrawer_itemIcon} />),
  };
  componentWillMount() {
    Storage.setItem('token', '');
    Tools.toastSuccess(AppString.logoutConfirm);
    this.props.navigation.navigate(LOGIN_SCENE_NAME);
  }

  render() {
    return (
      <View />
    );
  }
}

LogoutScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};
