import React, { Component } from 'react';
import {
  ScrollView,
  Text,
} from 'react-native';
import Menu from '../components/Menu';

export const HOME_SCENE_NAME = 'HOME_SCENE';


const image = require('../../assets/menu.png');

const styles = StyleSheet.create({
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
});
export default class HomeScreen extends Component {
  
  
  static navigationOptions = {
    title: 'Home',
  };
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

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
    return (
      <ScrollView>
        <Text>
          ceci est la page home
        </Text>
      </ScrollView>
    );
  }
}
