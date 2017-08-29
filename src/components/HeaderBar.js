import React, { PropTypes, Component } from 'react';
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

export default class HeaderBar extends Component {
  componentWillMount() {
    // Handle android back button
    BackHandler.addEventListener('hardwareBackPress', () => {
      if (this.props.goBackTo) {
        // Go back to page defined in props
        this.props.navigation.navigate(this.props.goBackTo);
        return true;
      } else if (this.props.homePage) {
        // Quit app if we already are on Home page
        BackHandler.exitApp();
        return false;
      }
      // Go back to Home page by default
      this.props.navigation.navigate(HOME_SCENE_NAME);
      return true;
    });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress');
  }

  render() {
    // Menu button
    let menuButton = null;

    if (this.props.goBackTo) {
      // Back button
      menuButton = renderButton(() => { this.props.navigation.navigate(this.props.goBackTo); }, 'arrow-round-back');
    } else {
      // Menu button
      menuButton = renderButton(() => { this.props.navigation.navigate('DrawerOpen'); }, 'menu');
    }

    // Alter button
    let alterButton = null;
    if (this.props.alterOnPress) {
      alterButton = renderButton(this.props.alterOnPress, 'md-create');
    }

    // Delete button
    let deleteButton = null;
    if (this.props.deleteOnPress) {
      deleteButton = renderButton(this.props.deleteOnPress, 'trash');
    }

    // Handle long title
    const bodySize = {
      flex: this.props.title.length > 10 ? 9 : 4,
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
            {this.props.title}
          </Title>
        </Body>
        <Right>
          {alterButton}
          {deleteButton}
        </Right>
      </Header>
    );
  }
}

HeaderBar.propTypes = {
  navigation: PropTypes.any.isRequired,
  title: PropTypes.any.isRequired,
  homePage: PropTypes.bool,
  goBackTo: PropTypes.string,
  alterOnPress: PropTypes.func,
  deleteOnPress: PropTypes.func,
};

HeaderBar.defaultProps = {
  homePage: false,
  goBackTo: null,
  alterOnPress: null,
  deleteOnPress: null,
};
