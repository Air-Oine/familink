import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Form, Input, Label, Picker, Item, Button, Text } from 'native-base';
import AppString from '../strings';
import { styles } from '../style';

export const SIGNIN_SCENE_NAME = 'SIGNIN_SCENE';
export default class SignInScreen extends Component {
  static navigationOptions = {
    title: 'SignIn',
  };

  constructor(props) {
    super(props);
    this.getProfile();
    this.state = {
      selected: 0,
      data: [],
    };
    this.onValueChange = this.onValueChange.bind(this);
  }
  onValueChange(value) {
    this.setState({
      selected: value,
    });
  }

  setProfil() {
    const profile = [];
    if (this.state.data != null) {
      let key = 0;
      this.state.data.forEach(((element) => {
        profile.push(<Item label={element} value={key} key={key} />);
        key += 1;
      }));
      return profile;
    }
    return null;
  }
  async getProfile() {
    try {
      const response = await fetch('https://familink.cleverapps.io/public/profiles');
      const responseJSON = await response.json();
      this.setState({
        data: responseJSON,
      });
    } catch (error) {
      console.error(error);
    }
  }
  signIt(){

  }
  render() {
    const profile = this.setProfil();
    return (
      <ScrollView style={styles.form}>
        <Form>
          <Item floatingLabel>
            <Label>{AppString.signIn_User}</Label>
            <Input maxLength={10} keyboardType="numeric" />
          </Item>
          <Item floatingLabel>
            <Label>{AppString.signIn_Pwd}</Label>
            <Input secureTextEntry />
          </Item>
          <Item floatingLabel>
            <Label>{AppString.signIn_PwdConfirm}</Label>
            <Input secureTextEntry />
          </Item>
          <Item floatingLabel>
            <Label>{AppString.signIn_LastName}</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>{AppString.signIn_FirstName}</Label>
            <Input />
          </Item>
          <Item floatingLabel >
            <Label>{AppString.signIn_Email}</Label>
            <Input />
          </Item>
          <Picker
            iosHeader="Profil"
            mode="dropdown"
            selectedValue={this.state.selected}
            onValueChange={val => this.onValueChange(val)}
          >
            {profile}
          </Picker>
        </Form>
        <Button
          style={styles.defaultButtonAtBottom}
          rounded
          onPress={this.signIt}
        >
          <Text>Enregistrer</Text>
        </Button>
      </ScrollView>
    );
  }
}
