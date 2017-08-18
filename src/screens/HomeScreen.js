import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import Menu from '../components/Menu';
import SideMenu from 'react-native-side-menu';
import {CONTACTLIST_SCENE_NAME} from '../screens/ContactListScreen'
export const HOME_SCENE_NAME = 'HOME_SCENE';


const image = require('../../assets/menu.png');
const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Home',
  };
  constructor(props) {
    super(props);

    this.navigate = this.props.navigation.navigate;
    this.navigateToContactList = this.navigateToContactList.bind(this);
    this.onMenuItemSelected = this.onMenuItemSelected.bind(this);
    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
    };
  };

  navigateToContactList(){
    this.navigate(CONTACTLIST_SCENE_NAME);
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  onMenuItemSelected(item){
    this.toggle();
    this.navigateToContactList()
  }
    

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  };

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
        <View style={styles.container}>
          <Text>ceci est la page home </Text>
        </View>
        <TouchableOpacity
          onPress={this.toggle}
          style={styles.button}
        >
          <Image
            source={image}
            style={{ width: 32, height: 32 }}
          />
        </TouchableOpacity>
        
      </SideMenu>
    );
  }
}
