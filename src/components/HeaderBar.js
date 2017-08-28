import React, { PropTypes } from 'react';
import { BackHandler } from 'react-native';
import { Header, Left, Right, Button, Body, Title, Icon } from 'native-base';

import { styles, darkPrimaryColor } from '../style';

import { HOME_SCENE_NAME } from '../screens/HomeScreen';

export default function HeaderBar(props) {
  // Handle android back button
  BackHandler.addEventListener('hardwareBackPress', () => {
    if (props.goBackTo) {
      // Go back to page defined in props
      props.navigation.navigate(props.goBackTo);
    } else {
      // Go back to Home page by default
      props.navigation.navigate(HOME_SCENE_NAME);
    }
    return true;
  });

  let menuButton = null;

  if (props.goBackTo) {
    // Back button
    menuButton = (
      <Button
        transparent
        onPress={() => { props.navigation.navigate(props.goBackTo); }}
      >
        <Icon
          style={styles.headerBarIcon}
          name="arrow-round-back"
        />
      </Button>
    );
  } else {
    // Menu button
    menuButton = (
      <Button
        transparent
        onPress={() => { props.navigation.navigate('DrawerOpen'); }}
      >
        <Icon
          style={styles.headerBarIcon}
          name="menu"
        />
      </Button>
    );
  }

  return (
    <Header androidStatusBarColor={darkPrimaryColor} style={styles.headerBarHeader}>
      {/* BURGER MENU BUTTON */}
      <Left>
        {menuButton}
      </Left>
      {/* PAGE TITLE */}
      <Body>
        <Title style={styles.headerBarTitle}>
          {props.title}
        </Title>
      </Body>
      <Right />
    </Header>
  );
}

HeaderBar.propTypes = {
  navigation: PropTypes.any.isRequired,
  title: PropTypes.any.isRequired,
  goBackTo: PropTypes.string,
};

HeaderBar.defaultProps = {
  goBackTo: null,
};
