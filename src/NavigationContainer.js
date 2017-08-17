import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen, { HOME_SCENE_NAME } from './screens/HomeScreen';
import LoginScreen, { LOGIN_SCENE_NAME } from './screens/LoginScreen';
import SignInScreen, { SIGNIN_SCENE_NAME } from './screens/SignInScreen';
import ContactScreen, { CONTACT_SCENE_NAME } from './screens/ContactScreen';
import ContactListScreen, { CONTACTLIST_SCENE_NAME } from './screens/ContactListScreen';
import ForgottenPwdScreen, { FORGOTTENPWD_SCENE_NAME } from './screens/ForgottenPwdScreen';

const stackNavigatorConfig = {};

stackNavigatorConfig[HOME_SCENE_NAME] = {
  screen: HomeScreen,
};

stackNavigatorConfig[LOGIN_SCENE_NAME] = {
  screen: LoginScreen,
};

stackNavigatorConfig[SIGNIN_SCENE_NAME] = {
  screen: SignInScreen,
};

stackNavigatorConfig[CONTACT_SCENE_NAME] = {
  screen: ContactScreen,
};

stackNavigatorConfig[CONTACTLIST_SCENE_NAME] = {
  screen: ContactListScreen,
};

stackNavigatorConfig[FORGOTTENPWD_SCENE_NAME] = {
  screen: ForgottenPwdScreen,
};

const ApplicationNavigator = StackNavigator(stackNavigatorConfig, {
  initialRouteName: LOGIN_SCENE_NAME,
});


export default () => <ApplicationNavigator />;

