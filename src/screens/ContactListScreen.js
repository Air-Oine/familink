import React, { Component, PropTypes } from 'react';
import {
  View,
} from 'react-native';
import {
  Content,
  List,
  Icon,
  Container,
  ListItem,
  Text,
  Right,
  Fab,
} from 'native-base';
import { connect } from 'react-redux';
import { addContactLink } from '../actions/familink.actions';

import HeaderBar from '../components/HeaderBar';
import AppString from '../strings';
import WebServices from '../webServices/WebServices';
import { CONTACT_SCENE_NAME } from './ContactScreen';
import { styles, primaryColor } from '../style';

const _ = require('lodash');

export const CONTACTLIST_SCENE_NAME = 'CONTACTLIST_SCENE';

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjA2MDAwMDAwMDIiLCJpYXQiOjE1MDM0ODA2MzAsImV4cCI6MTUwMzQ4MTUzMH0.XAunkWin6b6H7ClZBYRGBQcLlmq20fhDYHOCQbQRg_c';

export class ContactListScreen extends Component {
  static navigationOptions = {
    title: AppString.contactListPageName,
  };

  constructor(props) {
    super(props);
    this.getContact = this.getContact.bind(this);
    this.goToDetail = this.goToDetail.bind(this);
    // console.log('tokan', this.props.userToken);
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
        <View style={styles.flex1}>
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
          <Fab
            direction="up"
            style={{ backgroundColor: primaryColor }}
            position="bottomRight"
            onPress={() => navigation.navigate(CONTACT_SCENE_NAME)}
          >
            <Icon name="add" />
          </Fab>
        </View>
      </Container>
    );
  }
}


ContactListScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
  addContactLink: PropTypes.any.isRequired,
  // userToken: PropTypes.any.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    addContactLink: phone => dispatch(addContactLink(phone)),
  };
}
function mapStateToProps(state) {
  return {
    userToken: state.familinkReducer.userToken,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactListScreen);
