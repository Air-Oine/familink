import React, { Component, PropTypes } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { Form, Input, Icon, Item, Button, Text, Radio } from 'native-base';
import HeaderBar from '../components/HeaderBar';
import AppString from '../strings';

import { styles, inputSelectionColor, inputPlaceHolderColor, inputnotWritable, inputError } from '../style';
import { getProfileUser, getProfiles, updateProfileUser } from '../actions/familink.actions';
import Helper from '../helpers/Helper';
import Tools from '../Tools';
import { HOME_SCENE_NAME } from '../screens/HomeScreen';

export const PROFILE_SCENE_NAME = 'PROFILE_SCENE';
const lodash = require('lodash');

class ProfileScreen extends Component {
  static navigationOptions = {
    drawerLabel: AppString.profilePageName,
    drawerIcon: () => (<Icon name="man" style={styles.menuDrawer_itemIcon} />),
  };

  constructor(props) {
    super(props);
    this.state = {
      userProfile: {
        phone: '',
        firstName: '',
        lastName: '',
        email: '',
        profile: '',
      },
      profile: [],
      modify: false,
      firstNameInputError: false,
      emailInputError: false,
    };
    this.alterButton = this.alterButton.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }
  componentDidMount() {
    this.props.getProfileUser()
      .then((response) => {
        if (response.profile !== false) {
          this.setState({
            userProfile: response.userProfile,
          });
        }
      });
    this.props.getProfiles()
      .then((response) => {
        if (response.profile !== false) {
          this.setState({
            profile: response.profile,
          });
        }
      });
  }
  onValueChange(profile) {
    const value = this.state.userProfile;
    value.profile = profile;
    this.setState({
      userProfile: value,
    });
  }
  setProfil() {
    const profilItems = [];
    if (this.props.profiles.length > 0) {
      let key = 0;

      this.props.profiles.forEach(((element) => {
        let selected = false;
        if (this.state.userProfile.profile === element) {
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
  alterButton() {
    this.setState({
      modify: true,
      selectedProfile: this.props.userProfile.profile,
    });
  }
  validationForm() {
    const emailInputError = !Helper.isValidEmail(this.state.userProfile.email);

    const firstNameInputError = lodash.isEmpty(this.state.userProfile.firstName);

    // Set error state
    this.setState({
      emailInputError,
      firstNameInputError,
    });

    return !(
      emailInputError ||
      firstNameInputError);
  }
  saveProfile() {
    const result = this.validationForm();
    if (result) {
      const userProfile = `{
          "firstName": "${this.state.userProfile.firstName}",
          "lastName": "${this.state.userProfile.lastName}",
          "email": "${this.state.userProfile.email}",
          "profile": "${this.state.userProfile.profile}"
        }`;
      this.props.updateProfileUser(userProfile)
        .then((response) => {
          if (response !== false) {
            const navigation = this.props.navigation;
            Tools.toastSuccess(AppString.profileUpdateSuccess);
            navigation.navigate(HOME_SCENE_NAME);
          }
        });
    }
  }
  showSaveButton() {
    if (this.state.modify) {
      return (
        <Button
          style={styles.button}
          iconRight
          full
          light
          onPress={() => this.saveProfile()}
        >
          <Text style={styles.buttonText}>{AppString.profileSave}</Text>
          <Icon name="ios-arrow-dropright-outline" style={styles.iconButton} />
        </Button>
      );
    }
    return null;
  }
  showHeaderBar() {
    const navigation = this.props.navigation;
    if (!this.state.modify) {
      return (
        <HeaderBar
          navigation={navigation}
          title={AppString.profilePageName}
          alterOnPress={this.alterButton}
        />
      );
    }
    return (
      <HeaderBar
        navigation={navigation}
        title={AppString.profilePageName}
      />
    );
  }
  showProfile() {
    if (!this.state.modify) {
      return (
        <Item
          rounded
          style={[styles.input]}
        >
          <Icon name="ios-body-outline" style={styles.inputIcon} />
          <Input
            disabled={!this.state.modify}
            selectionColor={inputSelectionColor}
            style={styles.inputText}
            value={this.state.userProfile.profile}
            placeholder={AppString.profileProfil}
            placeholderTextColor={inputPlaceHolderColor}
          />
        </Item>
      );
    }
    const listprofile = this.setProfil();
    return (
      <View style={styles.radioButtonView}>
        {listprofile}
      </View>
    );
  }
  render() {
    const saveButton = this.showSaveButton();
    const profile = this.showProfile();
    const headerBar = this.showHeaderBar();
    return (
      <View>
        {headerBar}
        <ScrollView>
          <Form style={styles.form}>
            <Item
              rounded
              style={[styles.input, inputnotWritable(this.state.modify)]}
            >
              <Icon name="ios-call-outline" style={styles.inputIcon} />
              <Input
                disabled
                selectionColor={inputSelectionColor}
                style={styles.inputText}
                value={this.state.userProfile.phone}
                placeholder={AppString.profileUser}
                placeholderTextColor={inputPlaceHolderColor}
              />
            </Item>
            <Item
              rounded
              style={[styles.input]}
            >
              <Icon name="ios-man-outline" style={styles.inputIcon} />
              <Input
                disabled={!this.state.modify}
                selectionColor={inputSelectionColor}
                style={styles.inputText}
                value={this.state.userProfile.lastName}
                onChangeText={(text) => {
                  const value = this.state.userProfile;
                  value.lastName = text;
                  this.setState({
                    userProfile: value,
                  });
                }
                }
                placeholder={AppString.profileLastName}
                placeholderTextColor={inputPlaceHolderColor}
              />
            </Item>
            <Item
              rounded
              style={[styles.input, inputError(this.state.firstNameInputError)]}
            >
              <Icon name="ios-man-outline" style={styles.inputIcon} />
              <Input
                disabled={!this.state.modify}
                selectionColor={inputSelectionColor}
                style={styles.inputText}
                value={this.state.userProfile.firstName}
                onChangeText={(text) => {
                  const value = this.state.userProfile;
                  value.firstName = text;
                  this.setState({
                    userProfile: value,
                  });
                }
                }
                placeholder={AppString.profileFirstName}
                placeholderTextColor={inputPlaceHolderColor}
              />
            </Item>
            <Item
              rounded
              style={[styles.input, inputError(this.state.emailInputError)]}
            >
              <Icon name="ios-at-outline" style={styles.inputIcon} />
              <Input
                disabled={!this.state.modify}
                selectionColor={inputSelectionColor}
                style={styles.inputText}
                value={this.state.userProfile.email}
                onChangeText={(text) => {
                  const value = this.state.userProfile;
                  value.email = text;
                  this.setState({
                    userProfile: value,
                  });
                }
                }
                placeholder={AppString.profileEmail}
                placeholderTextColor={inputPlaceHolderColor}
              />
            </Item>
            {profile}
            {saveButton}
          </Form>
        </ScrollView>
      </View>
    );
  }
}

ProfileScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
  getProfileUser: PropTypes.any.isRequired,
  userProfile: PropTypes.any.isRequired,
  getProfiles: PropTypes.any.isRequired,
  profiles: PropTypes.any.isRequired,
  updateProfileUser: PropTypes.any.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    getProfileUser: () => dispatch(getProfileUser()),
    getProfiles: () => dispatch(getProfiles()),
    updateProfileUser: userProfile => dispatch(updateProfileUser(userProfile)),
  };
}

function mapStateToProps(state) {
  return {
    userProfile: state.familinkReducer.userProfile,
    profiles: state.familinkReducer.profile,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
