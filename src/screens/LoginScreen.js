import React, { Component, PropTypes } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Form, Item, Label, Input, Button, Right, Radio } from 'native-base';

import AppString from '../strings';
import { styles } from '../style';
import Storage from '../asyncStorage';
import { loginUser } from '../actions/familink.actions';
import Tools from '../Tools';

import { HOME_SCENE_NAME } from './HomeScreen';
import { SIGNIN_SCENE_NAME } from './SignInScreen';
import { FORGOTTENPWD_SCENE_NAME } from './ForgottenPwdScreen';

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

class LoginScreen extends Component {
  static navigationOptions = {
    drawerLabel: AppString.loginPageName,
  };

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
      rememberMeStatus: true,
    };

    this.login = this.login.bind(this);
    this.pressedRemember = this.pressedRemember.bind(this);
    this.goHome = this.goHome.bind(this);
    this.toSignin = this.toSignin.bind(this);
    this.toForgotPassword = this.toForgotPassword.bind(this);
  }

  componentDidMount() {
    Storage.getItem('phone')
      .then((v) => {
        this.setState({
          user: v,
        });
      });
  }

  async login() {
    const loginString = `{
      "phone": "${this.state.user}",
      "password": "${this.state.password}"
    }`;

    this.props.loginAction(loginString)
      .then(() => {
        Storage.removeItem('phone'); // Remove phone from database
        // If remember me is activated :
        if (this.state.rememberMeStatus) {
          Storage.setItem('phone', this.state.user);
        }
        if (this.props.userToken !== null && this.props.userToken !== false) {
          this.goHome();
        }
        console.log('TOAST');
        Tools.toastWarning(this.props.rejectedMessage);
      });
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

  toSignin() {
    const navigation = this.props.navigation;
    navigation.navigate(SIGNIN_SCENE_NAME);
  }

  toForgotPassword() {
    const navigation = this.props.navigation;
    navigation.navigate(FORGOTTENPWD_SCENE_NAME);
  }

  render() {
    return (
      <View>
        <ScrollView style={styles.form}>
          <Form>
            <Item floatingLabel>
              <Label> {AppString.loginUser} </Label>
              <Input
                maxLength={10}
                keyboardType="numeric"
                onChangeText={text => this.setState({ user: text })}
                value={this.state.user}
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
            <Button
              onPress={this.toSignin}
            >
              <Text> {AppString.loginSignup}</Text>
            </Button>
            <Button
              style={loginStyle.textright}
              onPress={this.toForgotPassword}
            >
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
  loginAction: PropTypes.func.isRequired,
  userToken: PropTypes.any.isRequired,
  rejectedMessage: PropTypes.any.isRequired,
};

function mapStateToProps(state) {
  return {
    userToken: state.familinkReducer.userToken,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginAction: loginString => dispatch(loginUser(loginString)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
