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
import { addContactLink, addContactsList } from '../actions/familink.actions';
// import Storage from '../asyncStorage';
import HeaderBar from '../components/HeaderBar';
import AppString from '../strings';
// import WebServices from '../webServices/WebServices';
import { CONTACT_SCENE_NAME } from './ContactScreen';
import { styles, primaryColor } from '../style';

const _ = require('lodash');

export const CONTACTLIST_SCENE_NAME = 'CONTACTLIST_SCENE';

class ContactListScreen extends Component {
  static navigationOptions = {
    title: AppString.contactListPageName,
  };

  constructor(props) {
    super(props);
    this.state = {
      token: '',
    };
    this.goToDetail = this.goToDetail.bind(this);
  }

  componentDidMount() {
    // raz du link
    this.props.addContactLink(null);
    // récupération de liste de contacts
    this.props.addContactsList();
  }

  async storeContacts() {
    console.log('afficchage des props', this.props.listOfContacts);
  }
  goToDetail(user) {
    const navigation = this.props.navigation;
    this.props.addContactLink(user);
    navigation.navigate(CONTACT_SCENE_NAME);
  }

  render() {
    const navigation = this.props.navigation;
    const items = _.orderBy(this.props.listOfContacts, ['lastName'], ['asc']);
    this.storeContacts();
    return (
      <Container>
        <HeaderBar navigation={navigation} title={AppString.contactListPageName} />
        <View style={styles.flex1}>
          <Content>
            <List
              dataArray={items}
              renderRow={item =>
                (
                  <ListItem button onPress={() => { this.goToDetail(item); }} >
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
        <Text>
          afficher ici
        </Text>
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
    userToken: state.familinkReducer.userToken,
    listOfContacts: state.familinkReducer.contactsList,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactListScreen);
