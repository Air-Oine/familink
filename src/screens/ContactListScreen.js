import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
} from 'react-native';
import { Container, View, Fab, Icon } from 'native-base';

import HeaderBar from '../components/HeaderBar';
import AppString from '../strings';
import { styles, primaryColor } from '../style';
import { CONTACT_SCENE_NAME } from './ContactScreen';

export const CONTACTLIST_SCENE_NAME = 'CONTACTLIST_SCENE';

export default class ContactListScreen extends Component {
  static navigationOptions = {
    title: AppString.contactListPageName,
  };

  /* constructor(props) {
    super(props);
  } */

  render() {
    const navigation = this.props.navigation;
    return (
      <Container>
        <HeaderBar navigation={navigation} title={AppString.contactListPageName} />
        <View style={styles.flex1}>
          <ScrollView />
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
};
