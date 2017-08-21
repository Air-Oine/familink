import React, { Component, PropTypes } from 'react';
import {
  View,
} from 'react-native';
import { Text } from 'native-base';

import HeaderBar from '../components/HeaderBar';
import AppString from '../strings';

export const HOME_SCENE_NAME = 'HOME_SCENE';

/* const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
}); */


export default class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: AppString.homePageName,
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }
  /* constructor(props) {
    super(props);
  } */
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <View>
        <HeaderBar navigation={navigation} title={AppString.homePageName} />
        <Text>ceci est la page home </Text>
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};
