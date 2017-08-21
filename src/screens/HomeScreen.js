import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import { Container, Header, Content, Button, Icon, Grid, Col } from 'native-base';
import { styles } from '../style';
import Menu from '../components/Menu';

import { CONTACTLIST_SCENE_NAME } from './ContactListScreen';
import AppString from '../strings';

export const HOME_SCENE_NAME = 'HOME_SCENE';


const image = require('../../assets/annuaire.jpg');

export default class HomeScreen extends Component {
  /* constructor(props) {
    super(props);
  } */
  render() {
    return (
      <Container>
        <Content>
          <Grid>
            <Col>
              <TouchableOpacity onPress={this.navigateToContactList}>
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
