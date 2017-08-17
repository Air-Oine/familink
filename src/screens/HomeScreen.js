import React, { Component } from 'react';
import {
  ScrollView,
  Text,
} from 'react-native';
import Menu from '../components/Menu';

import Helper from '../helpers/Helper.js';

export const HOME_SCENE_NAME = 'HOME_SCENE';


const image = require('../../assets/menu.png');

export default class HomeScreen extends Component {


  static navigationOptions = {
    title: 'Home',
  };
  constructor(props) {
    super(props);
    Helper.isConnected();

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
