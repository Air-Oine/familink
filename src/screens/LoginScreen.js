import React, { Component, PropTypes } from 'react';
import { Image, View, Text, Keyboard, TouchableWithoutFeedback, TouchableOpacity, NetInfo } from 'react-native';
import { connect } from 'react-redux';
import { Form, Item, Input, Button, CheckBox, Icon } from 'native-base';

import AppString from '../strings';
import { styles, inputError, inputPlaceHolderColor, inputSelectionColor } from '../style';
import Storage from '../asyncStorage';
import { loginUser, setRememberMe, getProfileUser, addToken } from '../actions/familink.actions';

import { HOME_SCENE_NAME } from './HomeScreen';
import { SIGNIN_SCENE_NAME } from './SignInScreen';
import { FORGOTTENPWD_SCENE_NAME } from './ForgottenPwdScreen';

export const LOGIN_SCENE_NAME = 'LOGIN_SCENE';
const logo = require('../../assets/iconFamilink.png');

class LoginScreen extends Component {
  static navigationOptions = {
    drawerLockMode: 'locked-closed',
    drawerLabel: AppString.loginPageName,
    drawerIcon: () => (<Icon name="log-out" style={styles.menuDrawer_itemIcon} />),
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

  componentWillMount() {
    Storage.getItem('token').then((token) => {
      console.log('token :', token);
      if (token === null) {
        this.props.addToken('');
      } else {
        this.props.addToken(token);
      }
      NetInfo.fetch().then((reach) => {
        if (reach !== 'NONE') {
          this.props.getProfileUser()
            .then((response) => {
              console.log('response :', response);
              if (response === true) {
                console.log('ok');
                this.props.navigation.navigate(HOME_SCENE_NAME);
              }
            });
        }
      });
    });
    Storage.getItem('phone')
      .then((response) => {
        console.log('ffffffff  ', response);
        if (response === '' || response === null) {
          this.setState({
            rememberMeStatus: false,
            user: '',
          });
        } else {
          this.setState({
            rememberMeStatus: true,
            user: response,
          });
        }
      })
      .catch(() => {
        this.setState({
          rememberMeStatus: true,
        });
      });
  }

  async login() {
    const loginString = `{
      "phone": "${this.state.user}",
      "password": "${this.state.password}"
    }`;

    this.props.loginAction(loginString)
      .then((response) => {
        if (response !== false) {
          this.goHome();
        }
      });
  }

  pressedRemember() {
    this.setState({
      rememberMeStatus: !this.state.rememberMeStatus,
    });
  }

  goHome() {
    if (this.state.rememberMeStatus) {
      Storage.setItem('phone', this.state.user);
    } else {
      Storage.setItem('phone', '');
    }
    this.props.rememberAction(this.state.rememberMeStatus);
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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.login_view}>
          <Form style={styles.form}>
            <Image source={logo} style={styles.login_logo} />
            <Item style={[styles.input, inputError(false)]} rounded>
              <Icon name="ios-call-outline" style={styles.inputIcon} />
              <Input
                maxLength={10}
                keyboardType="numeric"
                onChangeText={text => this.setState({ user: text })}
                value={this.state.user}
                placeholder={AppString.loginUser}
                placeholderTextColor={inputPlaceHolderColor}
                selectionColor={inputSelectionColor}
                style={styles.inputText}
              />
            </Item>
            <Item style={[styles.input, inputError(false)]} rounded>
              <Icon name="ios-lock-outline" style={styles.inputIcon} />
              <Input
                secureTextEntry
                maxLength={4}
                keyboardType="numeric"
                placeholder={AppString.loginPassword}
                onChangeText={text => this.setState({ password: text })}
                placeholderTextColor={inputPlaceHolderColor}
                selectionColor={inputSelectionColor}
                style={styles.inputText}
              />
            </Item>

            <View style={styles.checkBox} >
              <TouchableOpacity
                style={styles.checkBoxTouchable}
                onPress={() => this.pressedRemember()}
              >
                <CheckBox
                  checked={this.state.rememberMeStatus}
                  onPress={() => this.pressedRemember()}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.checkBoxTouchable}
                onPress={() => this.pressedRemember()}
              >
                <Text
                  style={styles.textCheckbox}
                >
                  {AppString.loginRememberMe}
                </Text>
              </TouchableOpacity>
            </View>
            <Button
              style={styles.button}
              iconRight
              full
              light
              onPress={this.login}
            >
              <Text style={styles.buttonText}>{AppString.loginOK}</Text>
              <Icon name="ios-arrow-dropright-outline" style={styles.iconButton} />
            </Button>
            <View style={styles.login_viewSignInPwdForgot}>
              <Text
                onPress={this.toSignin}
                style={styles.login_underlineTextLogin}
              >
                {AppString.loginSignup}
              </Text>
              <Text
                onPress={this.toForgotPassword}
                style={styles.login_underlineTextLogin}
              >
                {AppString.loginForgotPassword}
              </Text>
            </View>
          </Form>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
  loginAction: PropTypes.func.isRequired,
  rememberAction: PropTypes.func.isRequired,
  getProfileUser: PropTypes.any.isRequired,
  addToken: PropTypes.any.isRequired,
};

function mapStateToProps(state) {
  return {
    userToken: state.familinkReducer.userToken,
    rememberMe: state.familinkReducer.rememberMe,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginAction: loginString => dispatch(loginUser(loginString)),
    rememberAction: newState => dispatch(setRememberMe(newState)),
    getProfileUser: () => dispatch(getProfileUser()),
    addToken: token => dispatch(addToken(token)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
