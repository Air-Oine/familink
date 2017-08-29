import React, { Component, PropTypes } from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { Form, Input, Icon, Item, Label, Button, Text } from 'native-base';
import HeaderBar from '../components/HeaderBar';
import AppString from '../strings';
import { styles, inputSelectionColor } from '../style';
import { HOME_SCENE_NAME } from './HomeScreen';

export const PROFILE_SCENE_NAME = 'PROFILE_SCENE';


export class ProfileScreen extends Component {
  static navigationOptions = {
    drawerLabel: AppString.profilePageName,
    drawerIcon: () => (<Icon name="man" style={styles.menuDrawer_itemIcon} />),
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      lastname: '',
      firstname: '',
      email: '',
      firstNameInputError: false,
      emailInputError: false,
    };
  }
  componentDidMount() {
    this.props.getProfile();
  }
  render() {
    const navigation = this.props.navigation;
    return (
      <View>
        <HeaderBar
          navigation={navigation}
          title={AppString.profilePageName}
          goBackTo={HOME_SCENE_NAME}
          alterButton={this.a}
        />
        <Form style={styles.form}>
          <Item
            rounded
            style={[styles.input]}
          >
            <Icon name="ios-call-outline" style={styles.inputIcon} />
            <Label>{AppString.profileUser} :</Label>
            <Input
              disabled
              selectionColor={inputSelectionColor}
              style={styles.inputText}
            />
          </Item>
          <Item
            rounded
            style={[styles.input]}
          >
            <Icon name="ios-man-outline" style={styles.inputIcon} />
            <Label>{AppString.profileLastName} :</Label>
            <Input
              disabled
              selectionColor={inputSelectionColor}
              style={styles.inputText}
            />
          </Item>
          <Item
            rounded
            style={[styles.input]}
          >
            <Icon name="ios-man-outline" style={styles.inputIcon} />
            <Label>{AppString.profileFirstName} :</Label>
            <Input
              selectionColor={inputSelectionColor}
              style={styles.inputText}
            />
          </Item>
          <Item
            rounded
            style={[styles.input]}
          >
            <Icon name="ios-at-outline" style={styles.inputIcon} />
            <Label>{AppString.profileEmail} :</Label>
            <Input
              selectionColor={inputSelectionColor}
              style={styles.inputText}
            />
          </Item>
          <Item
            rounded
            style={[styles.input]}
          >
            <Icon name="ios-at-outline" style={styles.inputIcon} />
            <Label>{AppString.profileProfil} :</Label>
            <Input
              selectionColor={inputSelectionColor}
              style={styles.inputText}
            />
          </Item>
          <Button
            style={styles.button}
            iconRight
            full
            light
            onPress={() => this.signIn()}
          >
            <Text style={styles.buttonText}>{AppString.profileSave}</Text>
            <Icon name="ios-arrow-dropright-outline" style={styles.iconButton} />
          </Button>
        </Form>
      </View>
    );
  }
}

ProfileScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    addContactsList: () => dispatch(addContactsList()),
  };
}

function mapStateToProps(state) {
  return {
    userToken: state.familinkReducer.userToken,
    listOfContacts: state.familinkReducer.contactsList,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
