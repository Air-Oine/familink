import React, { Component, PropTypes } from 'react';
import {
  View,
} from 'react-native';

import { Form, Input, Icon, Item, Label } from 'native-base';
import HeaderBar from '../components/HeaderBar';
import AppString from '../strings';
import { styles, inputSelectionColor } from '../style';

export const PROFILE_SCENE_NAME = 'PROFILE_SCENE';


export default class ProfileScreen extends Component {
  static navigationOptions = {
    drawerLabel: AppString.profilePageName,
    drawerIcon: () => (<Icon name="man" style={styles.menuDrawer_itemIcon} />),
  };

  /* constructor(props) {
    super(props);
  } */

  render() {
    const navigation = this.props.navigation;
    return (
      <View>
        <HeaderBar navigation={navigation} title={AppString.profilePageName} />
        <Form style={styles.form}>
          <Item
            rounded
            style={[styles.input]}
          >
            <Icon name="ios-call-outline" style={styles.inputIcon} />
            <Label>{AppString.profile_User} :</Label>
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
            <Label>{AppString.profile_LastName} :</Label>
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
            <Label>{AppString.profile_FirstName} :</Label>
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
            <Icon name="ios-at-outline" style={styles.inputIcon} />
            <Label>{AppString.profile_Email} :</Label>
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
            <Icon name="ios-at-outline" style={styles.inputIcon} />
            <Label>{AppString.profile_Profil} :</Label>
            <Input
              disabled
              selectionColor={inputSelectionColor}
              style={styles.inputText}
            />
          </Item>
        </Form>
      </View>
    );
  }
}

ProfileScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};
