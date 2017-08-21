import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Form, Item, Label, Input, Button } from 'native-base';

import HeaderBar from '../components/HeaderBar';
import AppString from '../strings';
import { styles } from '../style';

export const LOGIN_SCENE_NAME = 'LOGIN_SCENE';

const loginStyle = StyleSheet.create({
  align: {
    flexDirection: 'row',
  },
});

export default class LoginScreen extends Component {
  static navigationOptions = {
    drawerLabel: AppString.loginPageName,
  };

  /* constructor(props) {
    super(props);
  } */

  render() {
    const navigation = this.props.navigation;
    return (
      <View>
        <HeaderBar navigation={navigation} title={AppString.loginPageName} />
        <ScrollView>
          <Form>
            <Item floatingLabel>
              <Label> Login </Label>
              <Input maxLength={10} keyboardType="numeric" />
            </Item>
            <Item floatingLabel>
              <Label> Password </Label>
              <Input secureTextEntry maxLength={4} keyboardType="numeric" />
            </Item>
            <Button
              style={styles.defaultButtonAtBottom}
              rounded
              onPress={this.login}
            >
              <Text>Enregistrer</Text>
            </Button>
          </Form>
          <View style={loginStyle.align}>
            <Text> Sign In </Text>
            <Text> Forgot password ? </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};

