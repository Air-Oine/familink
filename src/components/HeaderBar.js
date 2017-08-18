import React, { PropTypes, Component } from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  header_container: {
    flexDirection: 'row',
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

export default class HeaderBar extends Component {
  render() {
    return (
      <View style={styles.header_container} >
        <TouchableHighlight onPress={() => { this.props.navigation.navigate('DrawerOpen'); }} >
          <Image style={styles.icon} source={require('../../assets/menu.png')} />
        </TouchableHighlight>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}

HeaderBar.propTypeq = {
  navigation: PropTypes.any.isRequired,
  title: PropTypes.any.isRequired,
};
