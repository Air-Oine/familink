import React, { PropTypes } from 'react';
import { BackHandler } from 'react-native';
import { Header, Left, Right, Button, Body, Title, Icon } from 'native-base';

import { styles, darkPrimaryColor } from '../style';

import { HOME_SCENE_NAME } from '../screens/HomeScreen';

/**
 * Generate a button with icon
 * @param {*} onPress function called when onPress button
 * @param {*} iconName 
 */
function renderButton(onPress = {}, iconName) {
  return (
    <Button
      transparent
      onPress={onPress}
    >
      <Icon
        style={styles.headerBarIcon}
        name={iconName}
      />
    </Button>
  );
}

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

  // Menu button
  let menuButton = null;

  if (props.goBackTo) {
    // Back button
    menuButton = renderButton(() => { props.navigation.navigate(props.goBackTo); }, 'arrow-round-back');
  } else {
    // Menu button
    menuButton = renderButton(() => { props.navigation.navigate('DrawerOpen'); }, 'menu');
  }

  // Alter button
  let alterButton = null;
  if (props.alterOnPress) {
    alterButton = renderButton(props.alterOnPress, 'md-create');
  }

  // Delete button
  let deleteButton = null;
  if (props.deleteOnPress) {
    deleteButton = renderButton(props.deleteOnPress, 'trash');
  }

  // Handle long title
  const bodySize = {
    flex: props.title.length > 10 ? 9 : 4,
  };

  return (
    <Header androidStatusBarColor={darkPrimaryColor} style={styles.headerBarHeader}>
      {/* BURGER MENU BUTTON */}
      <Left style={styles.flex1}>
        {menuButton}
      </Left>
      {/* PAGE TITLE */}
      <Body style={bodySize}>
        <Title style={styles.headerBarTitle}>
          {props.title}
        </Title>
      </Body>
      <Right>
        {alterButton}
        {deleteButton}
      </Right>
    </Header>
  );
}

HeaderBar.propTypes = {
  navigation: PropTypes.any.isRequired,
  title: PropTypes.any.isRequired,
  goBackTo: PropTypes.string,
  alterOnPress: PropTypes.func,
  deleteOnPress: PropTypes.func,
};

HeaderBar.defaultProps = {
  goBackTo: null,
  alterOnPress: null,
  deleteOnPress: null,
};
