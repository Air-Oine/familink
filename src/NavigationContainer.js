import React, { PropTypes } from 'react';
import { DrawerNavigator, DrawerItems } from 'react-navigation';

import Tools from './Tools';
import AppString from './strings';

import HomeScreen, { HOME_SCENE_NAME } from './screens/HomeScreen';
import LoginScreen, { LOGIN_SCENE_NAME } from './screens/LoginScreen';
import SignInScreen, { SIGNIN_SCENE_NAME } from './screens/SignInScreen';
import ContactScreen, { CONTACT_SCENE_NAME } from './screens/ContactScreen';
import ContactListScreen, { CONTACTLIST_SCENE_NAME } from './screens/ContactListScreen';
import ForgottenPwdScreen, { FORGOTTENPWD_SCENE_NAME } from './screens/ForgottenPwdScreen';
import ProfileScreen, { PROFILE_SCENE_NAME } from './screens/ProfileScreen';
import Hidden from './Hidden';

import { styles, lightPrimaryColor } from './style';

const stackNavigatorConfig = {};

stackNavigatorConfig[HOME_SCENE_NAME] = {
  screen: HomeScreen,
};

stackNavigatorConfig[SIGNIN_SCENE_NAME] = {
  screen: SignInScreen,
  drawerLabel: <Hidden />,
};

stackNavigatorConfig[CONTACT_SCENE_NAME] = {
  screen: ContactScreen,
};

stackNavigatorConfig[FORGOTTENPWD_SCENE_NAME] = {
  screen: ForgottenPwdScreen,
};

stackNavigatorConfig[CONTACTLIST_SCENE_NAME] = {
  screen: ContactListScreen,
};

stackNavigatorConfig[PROFILE_SCENE_NAME] = {
  screen: ProfileScreen,
};

stackNavigatorConfig[LOGIN_SCENE_NAME] = {
  screen: LoginScreen,
};

/**
 * Define items in menu
 * @param {*} props
 */
function renderMenu(props) {
  const itemsArray = [
    { key: HOME_SCENE_NAME, routeName: HOME_SCENE_NAME },
    { key: CONTACTLIST_SCENE_NAME, routeName: CONTACTLIST_SCENE_NAME },
    { key: PROFILE_SCENE_NAME, routeName: PROFILE_SCENE_NAME },
    { key: LOGIN_SCENE_NAME, routeName: LOGIN_SCENE_NAME },
  ];

  return (
    <DrawerItems
      {...props}
      items={itemsArray}
      labelStyle={styles.menuDrawer_itemLabel}
      activeBackgroundColor={lightPrimaryColor}
      onItemPress={(item) => {
        // Handle logout
        if (item.route.routeName === LOGIN_SCENE_NAME) {
          Tools.toastSuccess(AppString.logoutConfirm);
        }
        // Navigate
        props.navigation.navigate(item.route.routeName);
      }}
    />);
}

renderMenu.propTypes = {
  navigation: PropTypes.any.isRequired,
};

const drawerConfig = {
  contentComponent: props => renderMenu(props),
  initialRouteName: LOGIN_SCENE_NAME,
};

const ApplicationNavigator = DrawerNavigator(stackNavigatorConfig, drawerConfig);


export default () => <ApplicationNavigator />;
