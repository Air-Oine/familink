import React from 'react';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import HomeScreen, { HOME_SCENE_NAME } from './screens/HomeScreen';
import { LoginScreen, LOGIN_SCENE_NAME } from './screens/LoginScreen';
import SignInScreen, { SIGNIN_SCENE_NAME } from './screens/SignInScreen';
import { ContactScreen, CONTACT_SCENE_NAME } from './screens/ContactScreen';
import { ContactListScreen, CONTACTLIST_SCENE_NAME } from './screens/ContactListScreen';
import ForgottenPwdScreen, { FORGOTTENPWD_SCENE_NAME } from './screens/ForgottenPwdScreen';
import ProfileScreen, { PROFILE_SCENE_NAME } from './screens/ProfileScreen';

const stackNavigatorConfig = {};

stackNavigatorConfig[HOME_SCENE_NAME] = {
  screen: HomeScreen,
};

stackNavigatorConfig[SIGNIN_SCENE_NAME] = {
  screen: SignInScreen,
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

  return <DrawerItems {...props} items={itemsArray} />;
}

const drawerConfig = {
  contentComponent: props => renderMenu(props),
  initialRouteName: LOGIN_SCENE_NAME,
};

const ApplicationNavigator = DrawerNavigator(stackNavigatorConfig, drawerConfig);


export default () => <ApplicationNavigator />;
