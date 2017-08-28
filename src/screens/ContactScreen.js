import React, { Component, PropTypes } from 'react';
import {
  View,
  Image,
  ScrollView,
} from 'react-native';
import { Form, Input, Item, Button, Text, Grid, Col } from 'native-base';
import { connect } from 'react-redux';
import Storage from '../asyncStorage';
import HeaderBar from '../components/HeaderBar';
import AppString from '../strings';
import { styles, inputError, inputPlaceHolderColor, inputSelectionColor } from '../style';
import Helper from '../helpers/Helper';
import WebServices, { ERROR_REQUEST } from '../webServices/WebServices';
import Tools from '../Tools';
import Hidden from '../Hidden';

import { CONTACTLIST_SCENE_NAME } from './ContactListScreen';
import { LOGIN_SCENE_NAME } from './LoginScreen';

const lodash = require('lodash');

export const CONTACT_SCENE_NAME = 'CONTACT_SCENE';

class ContactScreen extends Component {
  static navigationOptions = {
    title: AppString.contactPageName,
    drawerLabel: <Hidden />,
  };

  constructor(props) {
    super(props);

    this.state = {
      lastName: '',
      firstName: '',
      firstNameError: false,
      avatarUrl: '',
      tel: '',
      telError: false,
      email: '',
      emailError: false,
    };

    this.validationForm = this.validationForm.bind(this);
    this.save = this.save.bind(this);
    this.saveContact = this.saveContact.bind(this);
    this.modif = false;
  }
  componentWillMount() {
    if (this.props.contactLink != null) {
      this.modif = false;
    } else {
      this.modif = true;
    }
  }
  componentDidMount() {
    Storage.getItem('token').then((v) => {
      this.setState({ token: v });
      this.getContact();
    });
  }

  /**
   * Check if the form is valid (and set errors status)
   * Return true if it is valid, else otherwise
   */
  validationForm() {
    // Validate
    const firstNameError = lodash.isEmpty(this.state.firstName);

    const telError = lodash.isEmpty(this.state.tel) || !Helper.isValidPhoneNumber(this.state.tel);

    const emailError = !Helper.isValidEmail(this.state.email);

    // Set error state
    this.setState({
      firstNameError,
      telError,
      emailError,
    });

    return !(firstNameError || telError || emailError);
  }

  /**
   * Save the contact
   */
  save() {
    // Form is valid
    if (this.validationForm()) {
      // Creation of body for query
      let contact = '{';
      if (!lodash.isEmpty(this.state.lastName)) {
        this.state.lastName = lodash.capitalize(lodash.trim(this.state.lastName));
        contact += `"lastName": "${this.state.lastName}",`;
      }
      if (!lodash.isEmpty(this.state.email)) {
        contact += `"email": "${this.state.email}",`;
      }
      this.state.firstName = lodash.capitalize(lodash.trim(this.state.firstName));
      contact += `"firstName": "${this.state.firstName}",`;
      contact += `"gravatar": "${this.state.avatarUrl}",`;
      contact += `"phone": "${this.state.tel}"`;
      contact += '}';

      this.saveContact(contact);
    }
  }

  /**
   * Call WS for saving contact
   * Show toast if success
   */
  async saveContact(contact) {
    try {
      const result = await WebServices.createContact(contact, this.props.userToken);
      if (result === null) {
        return null;
      }
      if (result === true) {
        // Show success
        Tools.toastSuccess(AppString.addContactToastSuccess);

        // Go back to contact list
        this.props.navigation.navigate(CONTACTLIST_SCENE_NAME);
      } else if (result === 401) {
        WebServices.alertUnauthorized();
        // Go to login
        this.props.navigation.navigate(LOGIN_SCENE_NAME);
      }
    } catch (error) {
      Tools.toastWarning(ERROR_REQUEST);
    }
    return false;
  }

  render() {
    const navigation = this.props.navigation;

    // Render avatar
    let avatar = null;
    if (!lodash.isEmpty(this.state.avatarUrl)) {
      avatar = (
        <Col size={1}>
          <Image
            source={{ uri: this.state.avatarUrl }}
            style={styles.gravatar}
          />
        </Col>
      );
    }

    return (
      <View>
        <HeaderBar navigation={navigation} title={AppString.contactPageName} />
        <ScrollView style={styles.form}>
          <Form>
            {/* LAST NAME */}
            <Item
              rounded
              style={[styles.input]}
            >
              <Input
                onChangeText={text => this.setState({ lastName: text })}
                placeholder={AppString.addContactLastName}
                placeholderTextColor={inputPlaceHolderColor}
                selectionColor={inputSelectionColor}
                style={styles.inputText}
              />
            </Item>

            {/* FIRST NAME */}
            <Item
              rounded
              style={[styles.input, inputError(this.state.firstNameError)]}
            >
              <Input
                onChangeText={text => this.setState({ firstName: text })}
                placeholder={AppString.addContactFirstName}
                placeholderTextColor={inputPlaceHolderColor}
                selectionColor={inputSelectionColor}
                style={styles.inputText}
              />
            </Item>

            {/* AVATAR */}
            <Grid>
              <Col size={4}>
                <Item
                  rounded
                  style={[styles.input]}
                >
                  <Input
                    onChangeText={text => this.setState({ avatarUrl: text })}
                    placeholder={AppString.addContactGravatar}
                    placeholderTextColor={inputPlaceHolderColor}
                    selectionColor={inputSelectionColor}
                    style={styles.inputText}
                  />
                </Item>
              </Col>
              {avatar}
            </Grid>

            {/* TEL */}
            <Item
              rounded
              style={[styles.input, inputError(this.state.telError)]}
            >
              <Input
                maxLength={10}
                keyboardType="numeric"
                onChangeText={text => this.setState({ tel: text })}
                placeholder={AppString.addContactPhone}
                placeholderTextColor={inputPlaceHolderColor}
                selectionColor={inputSelectionColor}
                style={styles.inputText}
              />
            </Item>

            {/* EMAIL */}
            <Item
              rounded
              style={[styles.input, inputError(this.state.emailError)]}
            >
              <Input
                onChangeText={text => this.setState({ email: text })}
                placeholder={AppString.addContactEmail}
                placeholderTextColor={inputPlaceHolderColor}
                selectionColor={inputSelectionColor}
                style={styles.inputText}
              />
            </Item>
          </Form>

          {/* SAVE BUTTON */}
          <Button
            style={styles.button}
            iconRight
            full
            light
            onPress={this.save}
          >
            <Text>{AppString.addContactSave}</Text>
          </Button>
        </ScrollView>
      </View>
    );
  }
}

ContactScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
  contactLink: PropTypes.any.isRequired,
  userToken: PropTypes.any.isRequired,
};

function mapStateToProps(state) {
  return {
    contactLink: state.familinkReducer.contactLink,
    userToken: state.familinkReducer.userToken,
  };
}

export default connect(mapStateToProps, undefined)(ContactScreen);
