import React, { Component, PropTypes } from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import { Container, Content, Icon, Grid, Col, Row } from 'native-base';
import { styles } from '../style';
import HeaderBar from '../components/HeaderBar';
import { CONTACTLIST_SCENE_NAME } from './ContactListScreen';
import AppString from '../strings';

export const HOME_SCENE_NAME = 'HOME_SCENE';
const annuaire = require('../../assets/annuaire.png');
const config = require('../../assets/config.png');
const profil = require('../../assets/profil.png');
const smile = require('../../assets/smile.png');

class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: AppString.homePageName,
    drawerIcon: () => (<Icon name="home" style={styles.menuDrawer_itemIcon} />),
  };

  /*
  constructor(props) {
    super(props);
  }
  */

  render() {
    const navigation = this.props.navigation;
    return (
      <Container>
        <HeaderBar navigation={navigation} title={AppString.homePageName} homePage />
        <Content style={styles.accueilMargin}>
          <Grid>
            <Row size={1}>
              <Col>
                <TouchableOpacity onPress={() => { navigation.navigate(CONTACTLIST_SCENE_NAME); }} >
                  <Text style={styles.MenuText}>
                    {AppString.homescreenAnnuaire}
                  </Text>
                  <Image source={annuaire} />
                </TouchableOpacity>
              </Col>
              <Col>
                <TouchableOpacity onPress={this.navigateToContactList}>

                  <Text style={styles.MenuText}>
                    {AppString.homescreenHumeur}
                  </Text>
                  <Image source={smile} />
                </TouchableOpacity>
              </Col>
            </Row>
            <Row size={1}>
              <Col>
                <TouchableOpacity onPress={this.navigateToContactList}>

                  <Text style={styles.MenuText}>
                    {AppString.homescreenConfig}
                  </Text>
                  <Image source={config} />
                </TouchableOpacity>
              </Col>
              <Col>
                <TouchableOpacity onPress={this.navigateToContactList}>

                  <Text style={styles.MenuText}>
                    {AppString.homescreenProfil}
                  </Text>
                  <Image source={profil} />
                </TouchableOpacity>
              </Col>
            </Row>
          </Grid>
        </Content>
      </Container>

    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};

function mapStateToProps(state) {
  return {
    userToken: state.familinkReducer.userToken,
  };
}

export default connect(mapStateToProps, undefined)(HomeScreen);
