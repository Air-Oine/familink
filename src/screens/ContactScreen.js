import React, { Component, PropTypes } from 'react';
import {
  View,
  Image,
  ScrollView,
} from 'react-native';
import { Form, Input, Item, Button, Text, Grid, Col } from 'native-base';
import { connect } from 'react-redux';
import HeaderBar from '../components/HeaderBar';
import AppString from '../strings';
import { styles, inputError, inputPlaceHolderColor, inputSelectionColor } from '../style';
import Helper from '../helpers/Helper';
import Tools from '../Tools';
import Hidden from '../Hidden';
import { createContact, deleteContact, updateContact } from '../actions/familink.actions';
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
      modification: false,
      visualisation: false,
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
    this.delete = this.delete.bind(this);
    this.isDeleted = this.isDeleted.bind(this);
    this.alter = this.alter.bind(this);
  }

  componentWillMount() {
    // Modification
    if (this.props.contactLink !== null) {
      this.setState({
        visualisation: true,
        lastName: this.props.contactLink.lastName,
        firstName: this.props.contactLink.firstName,
        avatarUrl: this.props.contactLink.gravatar,
        tel: this.props.contactLink.phone,
        email: this.props.contactLink.email,
      });
    }
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

      if (!this.state.modification) {
        // Contact creation
        this.props.createContact(contact).then((response) => {
          if (response === 401) {
            // Handling unauthorized
            Tools.alertUnauthorized();
            // Go to login
            this.props.navigation.navigate(LOGIN_SCENE_NAME);
          }
          if (response !== false) {
            // Show success
            Tools.toastSuccess(AppString.addContactToastSuccess);
            // Go back to contact list
            this.props.navigation.navigate(CONTACTLIST_SCENE_NAME);
          }
        });
      } else {
        // Contact update
        this.props.updateContact(this.props.contactLink._id, contact).then((response) => {
          if (response === 401) {
            Tools.alertUnauthorized();
            this.props.navigation.navigate(LOGIN_SCENE_NAME);
          }
          if (response !== false) {
            // Show success
            Tools.toastSuccess(AppString.addContactToastUpdateSuccess);

            // Go back to contact list
            this.props.navigation.navigate(CONTACTLIST_SCENE_NAME);
          }
        });
      }
    }
  }

  /**
   * Switch to modification mode
   */
  alter() {
    this.setState({ modification: true });
  }

  isDeleted() {
    this.props.deleteContact(this.props.contactLink).then((response) => {
      if (response === 401) {
        Tools.alertUnauthorized();
        this.props.navigation.navigate(LOGIN_SCENE_NAME);
      }
      if (response !== false) {
        this.props.navigation.navigate(CONTACTLIST_SCENE_NAME);
        Tools.toastSuccess(AppString.contactDeleteSuccess);
      }
    });
  }

  delete() {
    Tools.alert(AppString.contactTitleAlertMessage,
      `${AppString.contactBodyAlertMessage1} ${this.props.contactLink.firstName} ${this.props.contactLink.lastName} ${AppString.contactBodyAlertMessage2}`,
      AppString.contactYesAlertMessage, this.isDeleted,
      AppString.contactNoAlertMessage);
  }

  render() {
    const navigation = this.props.navigation;

    // Render save button
    let saveButton = null;
    if (!this.state.visualisation || this.state.modification) {
      saveButton = (
        <Button
          style={styles.button}
          iconRight
          full
          light
          onPress={this.save}
        >
          <Text>{AppString.addContactSave}</Text>
        </Button>
      );
    }

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
        <HeaderBar
          navigation={navigation}
          title={AppString.contactPageName}
          goBackTo={CONTACTLIST_SCENE_NAME}
          alterOnPress={
            this.state.visualisation && !this.state.modification ? () => this.alter() : null
          }
          deleteOnPress={this.state.visualisation ? () => this.delete() : null}
        />
        <ScrollView>
          <Form style={styles.form}>
            {/* LAST NAME */}
            <Item
              rounded
              style={[styles.input]}
            >
              <Input
                value={this.state.lastName}
                onChangeText={text => this.setState({ lastName: text })}
                disabled={this.state.visualisation && !this.state.modification}
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
                value={this.state.firstName}
                onChangeText={text => this.setState({ firstName: text })}
                disabled={this.state.visualisation && !this.state.modification}
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
                    value={this.state.avatarUrl}
                    onChangeText={text => this.setState({ avatarUrl: text })}
                    disabled={this.state.visualisation && !this.state.modification}
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
                value={this.state.tel}
                onChangeText={text => this.setState({ tel: text })}
                disabled={this.state.visualisation && !this.state.modification}
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
                keyboardType="email-address"
                value={this.state.email}
                onChangeText={text => this.setState({ email: text })}
                disabled={this.state.visualisation && !this.state.modification}
                placeholder={AppString.addContactEmail}
                placeholderTextColor={inputPlaceHolderColor}
                selectionColor={inputSelectionColor}
                style={styles.inputText}
              />
            </Item>

            {/* SAVE BUTTON */}
            {saveButton}
          </Form>
        </ScrollView>
      </View>
    );
  }
}

ContactScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
  contactLink: PropTypes.any,
  createContact: PropTypes.func.isRequired,
  updateContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

ContactScreen.defaultProps = {
  contactLink: null,
};

function mapStateToProps(state) {
  return {
    contactLink: state.familinkReducer.contactLink,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    createContact: contact => dispatch(createContact(contact)),
    updateContact: (id, contact) => dispatch(updateContact(id, contact)),
    deleteContact: contact => dispatch(deleteContact(contact)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactScreen);
