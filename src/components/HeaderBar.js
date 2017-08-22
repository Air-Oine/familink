import React, { PropTypes } from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableHighlight,
  Platform,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: (Platform.OS === 'ios') ? 20 : 0,
    height: 36,
  },
  icon: {
    width: 36,
    height: 36,
  },
  title: {
    fontSize: 25,
    marginLeft: 10,
  },
});
const image = require('../../assets/menu.png');

export default function HeaderBar(props) {
  return (
    <View style={styles.container} >
      <TouchableHighlight onPress={() => { props.navigation.navigate('DrawerOpen'); }} >
        <Image
          style={styles.icon}
          source={image}
        />
      </TouchableHighlight>
      <Text style={styles.title}>
        {props.title}
      </Text>
    </View>
  );
}

HeaderBar.propTypes = {
  navigation: PropTypes.any.isRequired,
  title: PropTypes.any.isRequired,
};
