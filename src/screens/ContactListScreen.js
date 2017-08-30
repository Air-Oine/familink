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
  Header,
  Item,
  Input,
  Body,
  Left,
} from 'native-base';
import { connect } from 'react-redux';
import { addContactLink, addContactsList } from '../actions/familink.actions';
// import Storage from '../asyncStorage';
import HeaderBar from '../components/HeaderBar';
import AppString from '../strings';
// import WebServices from '../webServices/WebServices';
import { CONTACT_SCENE_NAME } from './ContactScreen';

import { styles, accentColor, darkPrimaryColor } from '../style';

const _ = require('lodash');

export const CONTACTLIST_SCENE_NAME = 'CONTACTLIST_SCENE';
const noAvatar = require('../../assets/no_avatar.png');

class ContactListScreen extends Component {
  static navigationOptions = {
    drawerLabel: AppString.contactListPageName,
    drawerIcon: () => (<Icon name="contacts" style={styles.menuDrawer_itemIcon} />),
  };
  constructor(props) {
    super(props);
    this.state = {
      contactsFilter: [],
    };
    this.goToDetail = this.goToDetail.bind(this);
    this.searchInput = this.searchInput.bind(this);
    this.do = false;
  }


  componentWillMount() {
    // raz du link
    this.props.addContactLink(null);
    // récupération de liste de contacts
    this.props.addContactsList();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ contactsFilter: nextProps.listOfContacts });
  }


  goToDetail(user) {
    const navigation = this.props.navigation;
    this.props.addContactLink(user);
    navigation.navigate(CONTACT_SCENE_NAME);
  }

  searchInput(Nsearch) {
    const search = _.lowerCase(Nsearch);
    if (search !== '') {
      this.setState({ contactsFilter: _.filter(
        this.props.listOfContacts, item => _.lowerCase(item.firstName).indexOf(search) > -1 ||
        _.lowerCase(item.lastName).indexOf(search) > -1,
      ),
      });
    } else {
      this.setState({ contactsFilter: this.props.listOfContacts });
    }
  }

  renderItem(item) {
    let image;
    if (item.gravatar === '') {
      image = (<Image style={styles.contactList_img} source={noAvatar} />);
    } else {
      image = (<Image style={styles.contactList_img} source={{ uri: item.gravatar }} />);
    }
    return (
      <ListItem button onPress={() => { this.goToDetail(item); }} >
        <Left style={styles.contactList_viewItem}>
          {image}
        </Left>
        <Body style={styles.contactList_viewItemBody}>
          <Text style={styles.contactList_name}>{item.lastName} {item.firstName} </Text>
          <Text style={styles.contactList_phone}>{item.phone} </Text>
        </Body>
      </ListItem>
    );
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <Container>
        <HeaderBar navigation={navigation} title={AppString.contactListPageName} />
        <Header searchBar androidStatusBarColor={darkPrimaryColor} rounded style={styles.searchBar}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" onChangeText={(search) => { this.searchInput(search); }} />
          </Item>
        </Header>
        <View style={styles.flex1}>
          <List
            dataArray={this.state.contactsFilter}
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
  addContactLink: PropTypes.func.isRequired,
  addContactsList: PropTypes.any.isRequired,
  listOfContacts: PropTypes.any.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    addContactLink: user => dispatch(addContactLink(user)),
    addContactsList: () => dispatch(addContactsList()),
  };
}
function mapStateToProps(state) {
  return {
    listOfContacts: state.familinkReducer.contactsList,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactListScreen);
