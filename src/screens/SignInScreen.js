import React, { Component, PropTypes } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Form, Input, Icon, Item, Button, Text, Radio } from 'native-base';
import AppString from '../strings';
import { styles, inputError, inputPlaceHolderColor, inputSelectionColor } from '../style';
import Helper from '../helpers/Helper';
import HeaderBar from '../components/HeaderBar';
import { LOGIN_SCENE_NAME } from './LoginScreen';
import Hidden from '../Hidden';
import Tools from '../Tools';
import { getProfiles, createUser, setUserStatus } from '../actions/familink.actions';

const lodash = require('lodash');

export const SIGNIN_SCENE_NAME = 'SIGNIN_SCENE';

class SignInScreen extends Component {
  static navigationOptions = {
    title: AppString.signInPageName,
    drawerLabel: <Hidden />,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedProfile: '',
      profiles: [],
      username: '',
      password: '',
      passwordConfirm: '',
      lastname: '',
      firstname: '',
      email: '',
      usernameInputError: false,
      passwordInputError: false,
      passwordConfirmInputError: false,
      firstNameInputError: false,
      emailInputError: false,
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.validationForm = this.validationForm.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  componentDidMount() {
    this.props.getProfiles()
      .then((response) => {
        if (response.profile !== false) {
          this.setState({
            profiles: response.profile,
            selectedProfile: response.profile[0],
          });
        }
      });
  }
  onValueChange(value) {
    this.setState({
      selectedProfile: value,
    });
  }

  setProfil() {
    const profilItems = [];
    if (this.state.profiles.length > 0) {
      let key = 0;
      this.state.profiles.forEach(((element) => {
        let selected = false;
        if (this.state.selectedProfile === element) {
          selected = true;
        }
        profilItems.push(
          <View key={key} style={styles.radioButton}>
            <Text>{element}</Text>
            <Radio selected={selected} onPress={() => this.onValueChange(element)} />
          </View>);
        key += 1;
      }));
      return profilItems;
    }
    return null;
  }

  goToLogin() {
    const navigation = this.props.navigation;
    navigation.navigate(LOGIN_SCENE_NAME);
  }

  validationForm() {
    const usernameInputError =
      lodash.isEmpty(this.state.username) ||
      !Helper.isValidPhoneNumber(this.state.username);

    let passwordInputError =
      lodash.isEmpty(this.state.password) ||
      !Helper.isValidPassword(this.state.password);

    let passwordConfirmInputError =
      lodash.isEmpty(this.state.passwordConfirm) ||
      !Helper.isValidPassword(this.state.passwordConfirm);

    if (this.state.password !== this.state.passwordConfirm) {
      passwordInputError = true;
      passwordConfirmInputError = true;
    }

    const emailInputError = !Helper.isValidEmail(this.state.email);

    const firstNameInputError = lodash.isEmpty(this.state.firstname);

    // Set error state
    this.setState({
      usernameInputError,
      passwordInputError,
      passwordConfirmInputError,
      emailInputError,
      firstNameInputError,
    });

    return !(
      usernameInputError ||
      passwordInputError ||
      passwordConfirmInputError ||
      emailInputError ||
      firstNameInputError);
  }

  signIn() {
    const result = this.validationForm();
    if (result) {
      let userString;
      if (this.state.email === '') {
        userString = `{
          "phone": "${this.state.username}",
          "password": "${this.state.password}",
          "firstName": "${this.state.firstname}",
          "lastName": "${this.state.lastname}",
          "profile": "${this.state.selectedProfile}"
        }`;
      } else {
        userString = `{
          "phone": "${this.state.username}",
          "password": "${this.state.password}",
          "firstName": "${this.state.firstname}",
          "lastName": "${this.state.lastname}",
          "email": "${this.state.email}",
          "profile": "${this.state.selectedProfile}"
        }`;
      }
      this.props.createUser(userString)
        .then((response) => {
          if (response !== false) {
            const navigation = this.props.navigation;
            Tools.toastSuccess(AppString.signIn_Success);
            navigation.navigate(LOGIN_SCENE_NAME);
          }
        });
    }
  }

  render() {
    const navigation = this.props.navigation;
    const profile = this.setProfil();
    return (
      <View>
        <HeaderBar
          navigation={navigation}
          title={AppString.signInPageName}
          goBackTo={LOGIN_SCENE_NAME}
        />
        <ScrollView>
          <Form style={styles.form}>
            <Item
              rounded
              style={[styles.input, inputError(this.state.usernameInputError)]}
            >
              <Icon name="ios-call-outline" style={styles.inputIcon} />
              <Input
                maxLength={10}
                keyboardType="numeric"
                onChangeText={text => this.setState({ username: text })}
                placeholder={AppString.signIn_User}
                placeholderTextColor={inputPlaceHolderColor}
                selectionColor={inputSelectionColor}
                style={styles.inputText}
              />
            </Item>
            <Item
              rounded
              style={[styles.input, inputError(this.state.passwordInputError)]}
            >
              <Icon name="ios-lock-outline" style={styles.inputIcon} />
              <Input
                secureTextEntry
                maxLength={4}
                keyboardType="numeric"
                onChangeText={text => this.setState({ password: text })}
                placeholder={AppString.signIn_Pwd}
                placeholderTextColor={inputPlaceHolderColor}
                selectionColor={inputSelectionColor}
                style={styles.inputText}
              />
            </Item>
            <Item
              rounded
              style={[styles.input, inputError(this.state.passwordConfirmInputError)]}
            >
              <Icon name="ios-lock-outline" style={styles.inputIcon} />
              <Input
                secureTextEntry
                maxLength={4}
                keyboardType="numeric"
                onChangeText={text => this.setState({ passwordConfirm: text })}
                placeholder={AppString.signIn_PwdConfirm}
                placeholderTextColor={inputPlaceHolderColor}
                selectionColor={inputSelectionColor}
                style={styles.inputText}
              />
            </Item>
            <Item
              rounded
              style={[styles.input]}
            >
              <Icon name="ios-man-outline" style={styles.inputIcon} />
              <Input
                onChangeText={text => this.setState({ lastname: text })}
                placeholder={AppString.signIn_LastName}
                placeholderTextColor={inputPlaceHolderColor}
                selectionColor={inputSelectionColor}
                style={styles.inputText}
              />
            </Item>
            <Item
              rounded
              style={[styles.input, inputError(this.state.firstNameInputError)]}
            >
              <Icon name="ios-man-outline" style={styles.inputIcon} />
              <Input
                onChangeText={text => this.setState({ firstname: text })}
                placeholder={AppString.signIn_FirstName}
                placeholderTextColor={inputPlaceHolderColor}
                selectionColor={inputSelectionColor}
                style={styles.inputText}
              />
            </Item>
            <Item
              rounded
              style={[styles.input, inputError(this.state.emailInputError)]}
            >
              <Icon name="ios-at-outline" style={styles.inputIcon} />
              <Input
                keyboardType="email-address"
                onChangeText={text => this.setState({ email: text })}
                placeholder={AppString.signIn_Email}
                placeholderTextColor={inputPlaceHolderColor}
                selectionColor={inputSelectionColor}
                style={styles.inputText}
              />
            </Item>
            <View style={styles.radioButtonView}>
              {profile}
            </View>
            <Button
              style={styles.button}
              iconRight
              full
              light
              onPress={() => this.signIn()}
            >
              <Text style={styles.buttonText}>{AppString.signInPageName}</Text>
              <Icon name="ios-arrow-dropright-outline" style={styles.iconButton} />
            </Button>
          </Form>
        </ScrollView>
      </View>
    );
  }
}

SignInScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
  getProfiles: PropTypes.any.isRequired,
  profiles: PropTypes.any.isRequired,
  createUser: PropTypes.any.isRequired,
  createUserStatus: PropTypes.any.isRequired,
  setUserStatus: PropTypes.any.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    createUser: user => dispatch(createUser(user)),
    getProfiles: () => dispatch(getProfiles()),
    setUserStatus: status => dispatch(setUserStatus(status)),
  };
}

function mapStateToProps(state) {
  return {
    userProfile: state.familinkReducer.userProfile,
    profiles: state.familinkReducer.profile,
    createUserStatus: state.familinkReducer.createUserStatus,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
