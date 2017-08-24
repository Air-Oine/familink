import React, { Component, PropTypes } from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import { Container, Content, Icon, Grid, Col } from 'native-base';
import { styles } from '../style';
import HeaderBar from '../components/HeaderBar';
import { CONTACTLIST_SCENE_NAME } from './ContactListScreen';
import AppString from '../strings';

export const HOME_SCENE_NAME = 'HOME_SCENE';

class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: AppString.homePageName,
  };
  constructor(props) {
    super(props);
    console.log('token HOME', this.props.userToken);
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <Container>
        <HeaderBar navigation={navigation} title={AppString.homePageName} />
        <Content>
          <Grid>
            <Col>
              <TouchableOpacity onPress={() => { navigation.navigate(CONTACTLIST_SCENE_NAME); }} >
                <Icon name="book" style={styles.icon} />
                <Text style={styles.MenuText}>
                  {AppString.homescreenAnnuaire}
                </Text>
              </TouchableOpacity>
            </Col>
            <Col>
              <TouchableOpacity onPress={this.navigateToContactList}>
                <Icon name="pulse" style={styles.icon} />
                <Text style={styles.MenuText}>
                  {AppString.homescreenHumeur}
                </Text>
              </TouchableOpacity>
            </Col>
          </Grid>
          <Grid>
            <Col>
              <TouchableOpacity onPress={this.navigateToContactList}>
                <Icon name="settings" style={styles.icon} />
                <Text style={styles.MenuText}>
                  {AppString.homescreenConfig}
                </Text>
              </TouchableOpacity>
            </Col>
            <Col>
              <TouchableOpacity onPress={this.navigateToContactList}>
                <Icon name="person" style={styles.icon} />
                <Text style={styles.MenuText}>
                  {AppString.homescreenProfil}
                </Text>
              </TouchableOpacity>
            </Col>
          </Grid>
          <Grid>
            <Col>
              <TouchableOpacity onPress={this.navigateToContactList}>
                <Icon name="exit" style={styles.iconR} />
                <Text style={styles.MenuTextR}>
                  {AppString.homescreenQuitter}
                </Text>
              </TouchableOpacity>
            </Col>
          </Grid>

        </Content>
      </Container>

    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
  userToken: PropTypes.any.isRequired,
};

function mapStateToProps(state) {
  return {
    userToken: state.familinkReducer.userToken,
  };
}

export default connect(mapStateToProps, undefined)(HomeScreen);
