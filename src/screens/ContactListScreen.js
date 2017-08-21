import React, { Component, PropTypes } from 'react';
import {
  View,
  TouchableHighlight,
} from 'react-native';
import {
  Content,
  List,
  Icon,
  Container,
  ListItem,
  Text,
  Right,
} from 'native-base';

import HeaderBar from '../components/HeaderBar';
import AppString from '../strings';
import WebServices from '../webServices/WebServices';

export const CONTACTLIST_SCENE_NAME = 'CONTACTLIST_SCENE';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjA2MDAwMDAwMDEiLCJpYXQiOjE1MDMzMjk4MDYsImV4cCI6MTUwMzMzMDcwNn0.Jt6AsLdDyWYNgBoThqRBk1KNUwJSrsnj-dQ_0qtO-1s';

export default class ContactListScreen extends Component {
  static navigationOptions = {
    title: AppString.contactListPageName,
  };

  constructor(props) {
    super(props);
    this.getContact = this.getContact.bind(this);
    this.state = {
      listOfContacts: [],
    };
    this.getContact();
  }

  async getContact() {
    try {
      const temp = await WebServices.getContacts(token);
      this.setState({
        listOfContacts: temp,
      });
      console.log('ici');
      console.log(this.state.listOfContacts);
      return true;
    } catch (error) {
      return (error);
    }
    // WebServices.getContacts(test).then(list => console.log(list));
  }

  setItem() {
    const contacts = [];
    if (this.state.listOfContacts != null) {
      let key = 0;
      console.log(this.state.listOfContacts);
      this.state.listOfContacts.forEach(((element) => {
        contacts.push(<ListItem key={key} >  <Text> bonjour </Text> </ListItem>);
        key += 1;
      }));
      return contacts;
    }
    return null;
  }

  /* getItem() {
    return (
      <TouchableHighlight>
        <Text />
      </TouchableHighlight>
    );
  } */
  goToDetail(phone) {
    
    console.log(phone);
  }

  render() {
    const navigation = this.props.navigation;
    const items = this.state.listOfContacts;
    return (
      <Container>
        <HeaderBar navigation={navigation} title={AppString.contactListPageName} />
        <Content>
          <List
            dataArray={items}
            renderRow={item =>
              (<TouchableHighlight onPress>
                <ListItem button onPress={() => { this.goToDetail(item.phone); }} >
                  <Text>{item.lastName} {item.firstName} </Text>
                  <Right>
                    <Icon name="brush" />
                  </Right>
                </ListItem>
              </TouchableHighlight>
              )
            }
          />
        </Content>
      </Container>
    );
  }
}

ContactListScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};
