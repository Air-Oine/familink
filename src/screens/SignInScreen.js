import React, { Component, PropTypes } from 'react';
import { ScrollView } from 'react-native';
import { Form, Input, Label, Picker, Item, Button, Text } from 'native-base';
import AppString from '../strings';
import { styles } from '../style';

import WebServices, { ERROR_REQUEST } from '../webServices/WebServices';
import Helper from '../helpers/Helper';
import { LOGIN_SCENE_NAME } from './LoginScreen';
import Tools from '../Tools';

export const SIGNIN_SCENE_NAME = 'SIGNIN_SCENE';

export default class SignInScreen extends Component {
  static navigationOptions = {
    title: AppString.signInPageName,
  };

  constructor(props) {
    super(props);
    this.getProfil();
    this.state = {
      selectedProfil: 0,
      profil: [],
      username: '',
      password: '',
      passwordConfirm: '',
      lastname: '',
      firstname: '',
      email: '',
      usernameInputError: false,
      passwordInputError: false,
      passwordConfirmInputError: false,
      emailInputError: false,
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.validationRegex = this.validationRegex.bind(this);
    this.signIn = this.signIn.bind(this);
  }
  onValueChange(value) {
    this.setState({
      selectedProfil: value,
    });
  }
  setProfil() {
    const profilItems = [];
    if (this.state.profil.length > 0) {
      let key = 0;
      this.state.profil.forEach(((element) => {
        profilItems.push(<Item label={element} value={key} key={key} />);
        key += 1;
      }));
      return profilItems;
    }
    return null;
  }
  async getProfil() {
    try {
      const response = await WebServices.getProfil();
      if (response) {
        this.setState({
          profil: response,
        });
      }
    } catch (error) {
      Tools.toastWarning(ERROR_REQUEST);
    }
  }
  async createUser(userString) {
    try {
      const value = await WebServices.createUser(userString);
      if (value != null) {
        this.goToLogin();
      }
    } catch (error) {
      Tools.toastWarning(ERROR_REQUEST);
    }
    return false;
  }
  goToLogin() {
    const navigation = this.props.navigation;
    navigation.navigate(LOGIN_SCENE_NAME);
  }
  validationRegex() {
    if (!Helper.isValidPhoneNumber(this.state.username)) {
      return -1;
    }
    if (!Helper.isValidPassword(this.state.password)) {
      return -2;
    }
    if (!Helper.isValidPassword(this.state.passwordConfirm)) {
      return -3;
    }
    if (this.state.password !== this.state.passwordConfirm) {
      return -4;
    }
    if (!Helper.isValidEmail(this.state.email)) {
      return -5;
    }
    return true;
  }

  resetInputError() {
    this.setState({
      usernameInputError: false,
      passwordInputError: false,
      passwordConfirmInputError: false,
      emailInputError: false,
    });
  }
  signIn() {
    const result = this.validationRegex();
    this.resetInputError();
    if (result === true) {
      const userString = `{
          "phone": "${this.state.username}",
          "password": "${this.state.password}",
          "firstName": "${this.state.firstname}",
          "lastName": "${this.state.lastname}",
          "email": "${this.state.email}",
          "profile": "${this.state.profil[this.state.selectedProfil]}"
        }`;
      this.createUser(userString);
    } else {
      if (result === -1) {
        this.setState({
          usernameInputError: true,
        });
      }
      if (result === -2) {
        this.setState({
          passwordInputError: true,
        });
      }
      if (result === -3) {
        this.setState({
          passwordConfirmInputError: true,
        });
      }
      if (result === -4) {
        this.setState({
          passwordInputError: true,
          passwordConfirmInputError: true,
        });
      }
      if (result === -5) {
        this.setState({
          emailInputError: true,
        });
      }
    }
  }
  render() {
    const profile = this.setProfil();
    return (
      <ScrollView style={styles.form}>
        <Form>
          <Item
            floatingLabel
            error={this.state.usernameInputError === true}
          >
            <Label>{AppString.signIn_User}</Label>
            <Input
              maxLength={10}
              keyboardType="numeric"
              onChangeText={text => this.setState({ username: text })}
            />
          </Item>
          <Item
            floatingLabel
            error={this.state.passwordInputError === true}
          >
            <Label>{AppString.signIn_Pwd}</Label>
            <Input
              secureTextEntry
              maxLength={4}
              keyboardType="numeric"
              onChangeText={text => this.setState({ password: text })}
            />
          </Item>
          <Item
            floatingLabel
            error={this.state.passwordConfirmInputError === true}
          >
            <Label>{AppString.signIn_PwdConfirm}</Label>
            <Input
              secureTextEntry
              maxLength={4}
              keyboardType="numeric"
              onChangeText={text => this.setState({ passwordConfirm: text })}
            />
          </Item>
          <Item floatingLabel>
            <Label>{AppString.signIn_LastName}</Label>
            <Input
              onChangeText={text => this.setState({ lastname: text })}
            />
          </Item>
          <Item floatingLabel>
            <Label>{AppString.signIn_FirstName}</Label>
            <Input
              onChangeText={text => this.setState({ firstname: text })}
            />
          </Item>
          <Item
            floatingLabel
            error={this.state.emailInputError === true}
          >
            <Label>{AppString.signIn_Email}</Label>
            <Input
              keyboardType="email-address"
              onChangeText={text => this.setState({ email: text })}
            />
          </Item>
          <Picker
            iosHeader={AppString.profilePageName}
            mode="dropdown"
            selectedValue={this.state.selectedProfil}
            onValueChange={val => this.onValueChange(val)}
          >
            {profile}
          </Picker>
        </Form>
        <Button
          style={styles.defaultButtonAtBottom}
          rounded
          onPress={() => this.signIn()}
        >
          <Text>{AppString.signInPageName}</Text>
        </Button>
      </ScrollView>
    );
  }
}

SignInScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};
