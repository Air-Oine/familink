import React, { Component, PropTypes } from 'react';
import {
  View, Image,
} from 'react-native';
import {
  List,
  Icon,
  Container,
  ListItem,
  Text,
  Fab,
} from 'native-base';
import { connect } from 'react-redux';
import { addContactLink } from '../actions/familink.actions';
import Storage from '../asyncStorage';
import HeaderBar from '../components/HeaderBar';
import AppString from '../strings';
import WebServices from '../webServices/WebServices';
import { CONTACT_SCENE_NAME } from './ContactScreen';

import { styles, accentColor } from '../style';

const _ = require('lodash');

export const CONTACTLIST_SCENE_NAME = 'CONTACTLIST_SCENE';
const noAvatar = require('../../assets/no_avatar.png');

export class ContactListScreen extends Component {
  static navigationOptions = {
    drawerLabel: AppString.contactListPageName,
    drawerIcon: () => (<Icon name="contacts" style={styles.menuDrawer_itemIcon} />),
  };
  constructor(props) {
    super(props);
    this.state = {
      listOfContacts: [],
      token: '',
    };
    this.getContact = this.getContact.bind(this);
    this.goToDetail = this.goToDetail.bind(this);
  }

  componentDidMount() {
    Storage.getItem('token').then((v) => {
      this.setState({ token: v });
      this.getContact();
    });
  }

  async getContact() {
    try {
      let temp = await WebServices.getContacts(this.state.token);
      if (temp === null) {
        return null;
      }
      temp = _.orderBy(temp, ['lastName'], ['asc']);
      this.setState({
        listOfContacts: temp,
      });
      return true;
    } catch (error) {
      return (error);
    }
  }

  goToDetail() {
    const navigation = this.props.navigation;
    // this.props.addContactLink(phone);
    navigation.navigate(CONTACT_SCENE_NAME);
  }
  renderItem(item) {
    let image;
    if (item.gravatar === '') {
      image = (<Image style={styles.contactList_img} source={noAvatar} />);
    } else {
      image = (<Image style={styles.contactList_img} source={{ uri: item.gravatar }} />);
    }
    return (
      <ListItem button onPress={() => { this.goToDetail(); }} >
        <View style={styles.contactList_viewItem}>
          {image}
          <View style={styles.contactList_viewItem_name_phone}>
            <Text style={styles.contactList_name}>{item.lastName} {item.firstName} </Text>
            <Text style={styles.contactList_phone}>{item.phone} </Text>
          </View>
        </View>
      </ListItem>
    );
  }
  render() {
    const navigation = this.props.navigation;
    const items = this.state.listOfContacts;
    return (
      <Container>
        <HeaderBar navigation={navigation} title={AppString.contactListPageName} />
        <View style={styles.flex1}>
          <List
            dataArray={items}
            renderRow={item => this.renderItem(item)}
          />
          <Fab
            direction="up"
            style={{ backgroundColor: accentColor }}
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
  // addContactLink: PropTypes.any.isRequired,
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
