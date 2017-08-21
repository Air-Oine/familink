import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { Form, Item, Label, Input, Button, Right, Radio } from 'native-base';

import WebServices from '../webServices/WebServices';
import HeaderBar from '../components/HeaderBar';
import AppString from '../strings';
import { styles } from '../style';
import Tools from '../Tools';
import Storage from '../asyncStorage';

import { HOME_SCENE_NAME } from './HomeScreen';

export const LOGIN_SCENE_NAME = 'LOGIN_SCENE';

const loginStyle = StyleSheet.create({
  align: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textright: {
    alignSelf: 'flex-end',
  },
});

export default class LoginScreen extends Component {
  static navigationOptions = {
    drawerLabel: AppString.loginPageName,
  };

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
      rememberMeStatus: true,
      token: '',
    };

    this.login = this.login.bind(this);
    this.pressedRemember = this.pressedRemember.bind(this);
    this.goHome = this.goHome.bind(this);
  }

  async login() {
    const userString = `{
      "phone": "${this.state.user}",
      "password": "${this.state.password}"
    }`;
    try {
      const response = await WebServices.login(userString);
      if (response === false) {
        Tools.toastWarning(AppString.loginError);
        return;
      }
      Storage.getItem('userToken').then(v => {
        console.log('token : ', v);
        const jsonToken = JSON.parse(v);
        this.setState({token: jsonToken.token});
      });
      this.goHome();
    } catch (error) {
      // return error;
    }
  }

  pressedRemember() {
    this.setState({
      rememberMeStatus: !this.state.rememberMeStatus,
    });
  }

  goHome() {
    const navigation = this.props.navigation;
    navigation.navigate(HOME_SCENE_NAME);
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <View>
        <HeaderBar navigation={navigation} title={AppString.loginPageName} />
        <ScrollView>
          <Form>
            <Item floatingLabel>
              <Label> {AppString.loginUser} </Label>
              <Input
                maxLength={10}
                keyboardType="numeric"
                onChangeText={text => this.setState({ user: text })}
              />
            </Item>
            <Item>
              <Label> {AppString.loginRememberMe}</Label>
              <Right>
                <Radio onPress={this.pressedRemember} selected={this.state.rememberMeStatus} />
              </Right>
            </Item>
            <Item floatingLabel>
              <Label> {AppString.loginPassword} </Label>
              <Input
                secureTextEntry
                maxLength={4}
                keyboardType="numeric"
                onChangeText={text => this.setState({ password: text })}
              />
            </Item>
            <Button
              style={styles.defaultButtonAtBottom}
              rounded
              onPress={this.login}
            >
              <Text>{AppString.loginOK}</Text>
            </Button>
          </Form>
          <View style={loginStyle.align}>
            <Button>
              <Text> {AppString.loginSignup}</Text>
            </Button>
            <Button style={loginStyle.textright}>
              <Text> {AppString.loginForgotPassword} </Text>
            </Button>
          </View>
        </ScrollView>
      </View>
    );
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};

