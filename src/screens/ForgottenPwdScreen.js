import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import { Form, Input, Icon, Item, Text, Button } from 'native-base';

import HeaderBar from '../components/HeaderBar';
import { styles, inputError, inputPlaceHolderColor, inputSelectionColor } from '../style';
import Helper from '../helpers/Helper';
import AppString from '../strings';
import Tools from '../Tools';

import { LOGIN_SCENE_NAME } from './LoginScreen';

const lodash = require('lodash');

export const FORGOTTENPWD_SCENE_NAME = 'FORGETTENPWD_SCENE';

class ForgottenPwdScreen extends Component {
  static navigationOptions = {
    title: AppString.forgottenPasswordPageName,
  };

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      usernameInputError: false,
    };
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
      // Show alert message
      Tools.alert(
        AppString.forgottenPasswordPopInTitle,
        AppString.forgottenPasswordPopInMessage,
        AppString.forgottenPasswordPopInOk,
        () => { this.props.navigation.navigate(LOGIN_SCENE_NAME); });
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
};

function mapDispatchToProps(dispatch) {
  return {
    addContactLink: user => dispatch(addContactLink(user)),
    addContactsList: () => dispatch(addContactsList()),
  };
}
function mapStateToProps(state) {
  return {
    userToken: state.familinkReducer.userToken,
    listOfContacts: state.familinkReducer.contactsList,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgottenPwdScreen);