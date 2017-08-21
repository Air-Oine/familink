import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import HomeScreen, { HOME_SCENE_NAME } from './screens/HomeScreen';
import LoginScreen, { LOGIN_SCENE_NAME } from './screens/LoginScreen';
import SignInScreen, { SIGNIN_SCENE_NAME } from './screens/SignInScreen';
import ContactScreen, { CONTACT_SCENE_NAME } from './screens/ContactScreen';
import ContactListScreen, { CONTACTLIST_SCENE_NAME } from './screens/ContactListScreen';
import ForgottenPwdScreen, { FORGOTTENPWD_SCENE_NAME } from './screens/ForgottenPwdScreen';
import ProfileScreen, { PROFILE_SCENE_NAME } from './screens/ProfileScreen';

const connect = true;
const stackNavigatorConfig = {};

stackNavigatorConfig[HOME_SCENE_NAME] = {
  screen: HomeScreen,
};

if (!connect) {
  stackNavigatorConfig[SIGNIN_SCENE_NAME] = {
    screen: SignInScreen,
  };

  stackNavigatorConfig[CONTACT_SCENE_NAME] = {
    screen: ContactScreen,
  };

  stackNavigatorConfig[FORGOTTENPWD_SCENE_NAME] = {
    screen: ForgottenPwdScreen,
  };
}
stackNavigatorConfig[CONTACTLIST_SCENE_NAME] = {
  screen: ContactListScreen,
};

stackNavigatorConfig[PROFILE_SCENE_NAME] = {
  screen: ProfileScreen,
};

stackNavigatorConfig[LOGIN_SCENE_NAME] = {
  screen: LoginScreen,
};

const ApplicationNavigator = DrawerNavigator(stackNavigatorConfig, {
  initialRouteName: LOGIN_SCENE_NAME, // TODO : Change to HOME before merge
});


export default () => <ApplicationNavigator />;

