import React, { PropTypes } from 'react';
import {
  Text,
  Image,
  View,
  TouchableHighlight,
} from 'react-native';
import { styles } from '../style';

const image = require('../../assets/menu.png');

export default function HeaderBar(props) {
  return (
    <View style={styles.headerBarContainer} >
      <TouchableHighlight onPress={() => { props.navigation.navigate('DrawerOpen'); }} >
        <Image
          style={styles.headerBarIcon}
          source={image}
        />
      </TouchableHighlight>
      <Text style={styles.headerBarTitle}>
        {props.title}
      </Text>
    </View>
  );
}

HeaderBar.propTypes = {
  navigation: PropTypes.any.isRequired,
  title: PropTypes.any.isRequired,
};
