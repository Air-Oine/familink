import React, { PropTypes } from 'react';
import { Header, Left, Right, Button, Body, Title, Icon } from 'native-base';

import { styles, darkPrimaryColor } from '../style';

export default function HeaderBar(props) {
  return (
    <Header androidStatusBarColor={darkPrimaryColor} style={{backgroundColor: '#00BCD4'}}>
      {/* BURGER MENU BUTTON */}
      <Left>
        <Button
          transparent
          onPress={() => { props.navigation.navigate('DrawerOpen'); }}
        >
          <Icon
            style={styles.headerBarIcon}
            name="menu"
          />
        </Button>
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
};
