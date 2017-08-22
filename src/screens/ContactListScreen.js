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
import { connect } from 'react-redux';
import { addContactLink } from '../actions/familink.actions';


import HeaderBar from '../components/HeaderBar';
import AppString from '../strings';
import WebServices from '../webServices/WebServices';
import { CONTACT_SCENE_NAME } from './ContactScreen';

const _ = require('lodash');

export const CONTACTLIST_SCENE_NAME = 'CONTACTLIST_SCENE';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjA2MDAwMDAwMDIiLCJpYXQiOjE1MDMzOTg2OTIsImV4cCI6MTUwMzM5OTU5Mn0.yG7DD0TPccHm9jwrncC70jd2b3jl6NmjGA5RNCQ97YU';

export class ContactListScreen extends Component {
  static navigationOptions = {
    title: AppString.contactListPageName,
  };

  constructor(props) {
    super(props);
    this.getContact = this.getContact.bind(this);
    this.goToDetail = this.goToDetail.bind(this);
    this.state = {
      listOfContacts: [],
    };
    this.getContact();
  }

  async getContact() {
    try {
      let temp = await WebServices.getContacts(token);
      temp = _.orderBy(temp, ['lastName'], ['asc']);
      this.setState({
        listOfContacts: temp,
      });
      return true;
    } catch (error) {
      return (error);
    }
  }

  goToDetail(phone) {
    const navigation = this.props.navigation;
    this.props.addContactLink(phone);
    navigation.navigate(CONTACT_SCENE_NAME);
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
              (
                <ListItem button onPress={() => { this.goToDetail(item.phone); }} >
                  <Text>{item.lastName} {item.firstName} </Text>
                  <Right>
                    <Icon name="brush" />
                  </Right>
                </ListItem>
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
  addContactLink: PropTypes.any.isRequired,

};

function mapDispatchToProps(dispatch) {
  return {
    addContactLink: phone => dispatch(addContactLink(phone)),
  };
}

export default connect(undefined, mapDispatchToProps)(ContactListScreen);
