import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import { Form, Input, Icon, Item, Text, Button } from 'native-base';
import { connect } from 'react-redux';

import HeaderBar from '../components/HeaderBar';
import { styles, inputError, inputPlaceHolderColor, inputSelectionColor } from '../style';
import Helper from '../helpers/Helper';
import AppString from '../strings';
import Tools from '../Tools';

import { forgotPassword } from '../actions/familink.actions';

import { LOGIN_SCENE_NAME } from './LoginScreen';
import Hidden from '../Hidden';

const lodash = require('lodash');

export const FORGOTTENPWD_SCENE_NAME = 'FORGETTENPWD_SCENE';

class ForgottenPwdScreen extends Component {
  static navigationOptions = {
    drawerLockMode: 'locked-closed',
    title: AppString.forgottenPasswordPageName,
    drawerLabel: <Hidden />,
  };

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      usernameInputError: false,
    };

    this.generate = this.generate.bind(this);
  }

  generate() {
    // Validation
    const usernameInputError =
      lodash.isEmpty(this.state.username) ||
      !Helper.isValidPhoneNumber(this.state.username);

    this.setState({
      usernameInputError,
    });

    // Input valid
    if (!usernameInputError) {
      const phoneString = JSON.stringify({ phone: this.state.username });

      this.props.forgotPassword(phoneString)
        .then((response) => {
          // User found => pasword reinit (mock)
          if (response) {
            // Show alert message
            Tools.alert(
              AppString.forgottenPasswordPopInTitle,
              AppString.forgottenPasswordPopInMessage,
              AppString.forgottenPasswordPopInOk,
              () => { this.props.navigation.navigate(LOGIN_SCENE_NAME); });
          }
          // Show wrong phone number
          this.setState({
            usernameInputError: true,
          });
        });
    }
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <View>
        <HeaderBar
          navigation={navigation}
          title={AppString.forgottenPasswordPageName}
          goBackTo={LOGIN_SCENE_NAME}
        />
        <ScrollView>
          <Form style={styles.form}>
            {/* PHONE */}
            <Item
              rounded
              style={[styles.input, inputError(this.state.usernameInputError)]}
            >
              <Icon name="ios-call-outline" style={styles.inputIcon} />
              <Input
                maxLength={10}
                keyboardType="numeric"
                onChangeText={text => this.setState({ username: text })}
                placeholder={AppString.forgottenPasswordPhone}
                placeholderTextColor={inputPlaceHolderColor}
                selectionColor={inputSelectionColor}
                style={styles.inputText}
              />
            </Item>

            {/* GENERATE BUTTON */}
            <Button
              style={styles.button}
              iconRight
              full
              light
              onPress={() => this.generate()}
            >
              <Text style={styles.buttonText}>{AppString.forgottenPasswordSave}</Text>
              <Icon name="ios-arrow-dropright-outline" style={styles.iconButton} />
            </Button>
          </Form>
        </ScrollView>
      </View>
    );
  }
}

ForgottenPwdScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
  forgotPassword: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    forgotPassword: phone => dispatch(forgotPassword(phone)),
  };
}

export default connect(undefined, mapDispatchToProps)(ForgottenPwdScreen);
