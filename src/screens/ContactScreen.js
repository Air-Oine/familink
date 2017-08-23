import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';

import HeaderBar from '../components/HeaderBar';
import AppString from '../strings';

export const CONTACT_SCENE_NAME = 'CONTACT_SCENE';

export class ContactScreen extends Component {
  static navigationOptions = {
    title: AppString.contactPageName,
  };

  render() {
    const navigation = this.props.navigation;
    return (
      <View>
        <HeaderBar navigation={navigation} title={AppString.contactPageName} />
        <Text>
          { this.props.contactLink }
        </Text>
      </View>
    );
  }
}

ContactScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};

function mapStateToProps(state) {
  return {
    contactLink: state.familinkReducer.contactLink,
  };
}

export default connect(mapStateToProps, undefined)(ContactScreen);
ContactScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
  contactLink: PropTypes.any.isRequired,
};
