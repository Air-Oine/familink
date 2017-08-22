import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  View,
  Image,
} from 'react-native';
import { Form, Input, Label, Item, Button, Text, Grid, Col } from 'native-base';

import HeaderBar from '../components/HeaderBar';
import AppString from '../strings';
import { styles } from '../style';
import Helper from '../helpers/Helper';
import WebServices from '../webServices/WebServices';
import Tools from '../Tools';

const lodash = require('lodash');

export const CONTACT_SCENE_NAME = 'CONTACT_SCENE';

export default class ContactScreen extends Component {
  static navigationOptions = {
    title: AppString.contactPageName,
  };

  constructor(props) {
    super(props);

    this.state = {
      lastName: '',
      lastNameError: false,
      firstName: '',
      avatarUrl: '',
      tel: '',
      telError: false,
      email: '',
      emailError: false,
    };

    this.validationForm = this.validationForm.bind(this);
    this.save = this.save.bind(this);
  }

  /**
   * Check if the form is valid (and set errors status)
   * Return true if it is valid, else otherwise
   */
  validationForm() {
    // Validate
    const lastNameError = lodash.isEmpty(this.state.lastName);

    const telError = lodash.isEmpty(this.state.tel) || !Helper.isValidPhoneNumber(this.state.tel);

    const emailError = !Helper.isValidEmail(this.state.email);

    // Set error state
    this.setState({
      lastNameError,
      telError,
      emailError,
    });

    return !(lastNameError || telError || emailError);
  }

  /**
   * Save the contact
   */
  save() {
    // Form is valid
    if (this.validationForm()) {
      /* const userString = `{
          "phone": "${this.state.username}",
          "password": "${this.state.password}",
          "firstName": "${this.state.firstname}",
          "lastName": "${this.state.lastname}",
          "email": "${this.state.email}",
          "profile": "${this.state.profil[this.state.selectedProfil]}"
        }`;
      this.createUser(userString); */

      Tools.toastSuccess(AppString.addContactToastSuccess);
    }
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
              floatingLabel
              error={this.state.lastNameError}
            >
              <Label>{AppString.addContactLastName}</Label>
              <Input onChangeText={text => this.setState({ lastName: text })} />
            </Item>

            {/* FIRST NAME */}
            <Item floatingLabel>
              <Label>{AppString.addContactFirstName}</Label>
              <Input onChangeText={text => this.setState({ firstName: text })} />
            </Item>

            {/* AVATAR */}
            <Grid>
              <Col size={4}>
                <Item floatingLabel>
                  <Label>{AppString.addContactGravatar}</Label>
                  <Input
                    onChangeText={text => this.setState({ avatarUrl: text })}
                  />
                </Item>
              </Col>
              {avatar}
            </Grid>

            {/* TEL */}
            <Item
              floatingLabel
              error={this.state.telError}
            >
              <Label>{AppString.addContactPhone}</Label>
              <Input
                maxLength={10}
                keyboardType="numeric"
                onChangeText={text => this.setState({ tel: text })}
              />
            </Item>

            {/* EMAIL */}
            <Item
              floatingLabel
              error={this.state.emailError}
            >
              <Label>{AppString.addContactEmail}</Label>
              <Input onChangeText={text => this.setState({ email: text })} />
            </Item>
          </Form>

          {/* SAVE BUTTON */}
          <Button
            style={styles.defaultButtonAtBottom}
            rounded
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
};
