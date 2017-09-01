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
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';
import { addContactLink, addContactsList } from '../actions/familink.actions';
import Tools from '../Tools';
import HeaderBar from '../components/HeaderBar';
import AppString from '../strings';
import { CONTACT_SCENE_NAME } from './ContactScreen';
import { LOGIN_SCENE_NAME } from './LoginScreen';
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
      visible: true,
      isConnected: true,
    };
    this.goToDetail = this.goToDetail.bind(this);
    this.searchInput = this.searchInput.bind(this);
  }


  componentWillMount() {
    // raz du link
    this.props.addContactLink(null);
    // récupération de liste de contacts
    this.props.addContactsList().then((response) => {
      if (response === 401) {
        Tools.alertUnauthorized();
        this.setState({ visible: false });
        this.props.navigation.navigate(LOGIN_SCENE_NAME);
        return;
      }
      if (response === false) {
        this.setState({ visible: false });
        return;
      }
      if (response === -1) {
        this.setState({
          isConnected: false,
        });
      }
      this.setState({
        visible: false,
        contactsFilter: this.props.listOfContacts });
    });
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

  renderContactList() {
    if (_.isEmpty(this.state.contactsFilter) && this.state.isConnected) {
      return (
        <Text style={styles.MenuText}>
          {AppString.contactListEmptyMessage}
        </Text>
      );
    }
    if (_.isEmpty(this.state.contactsFilter) && !this.state.isConnected) {
      return (
        <Text style={styles.MenuText}>
          {AppString.contactListNoContactInApp}
        </Text>
      );
    }
    return (
      <List
        dataArray={this.state.contactsFilter}
        renderRow={item => this.renderItem(item)}
      />
    );
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
          <Spinner visible={this.state.visible} textContent={'Loading...'} textStyle={styles.spinner} />
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" onChangeText={(search) => { this.searchInput(search); }} />
          </Item>
        </Header>

        <View style={styles.flex1}>
          {this.renderContactList()}
          <Fab
            style={{ backgroundColor: accentColor }}
            position="bottomRight"
            onPress={() => navigation.navigate(CONTACT_SCENE_NAME)}
          >
            <Icon name="md-add" />
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
