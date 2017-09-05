import { AsyncStorage } from 'react-native';

export default class Storage {
  // return -1 si une erreur est survenu
  static async getItem(item) {
    return AsyncStorage.getItem(item).then(val => val);
  }
  // return 1 si l'enregistrement est OK
  // return -1 si une erreur est survenu et l'enregistrement pas OK
  static async setItem(item, value) {
    try {
      await AsyncStorage.setItem(item, value);
      return 1;
    } catch (error) {
      throw error;
    }
  }

  static async removeItem(item) {
    try {
      const value = await AsyncStorage.removeItem(item);
      return value;
    } catch (error) {
      throw error;
    }
  }
}

// Exemple pour l'application, il faut use le state 

// export default class App extends Component {

//   componentWillMount() {
//     Storage.setItem('Keytest', 'Oulala');
//   }
//   constructor(props) {
//     super(props);
//      this.state = {
//         token: null,    
//     }
//   }
//   async getitem() {
//     const value = await Storage.getItem('Keytest');
//     this.setState({
//           token: value,
//         })
//     return value;
//   }
//   render() {
//     this.getitem();
//     const item = this.state.token;
//     console.log(this.state.token);
//     return (
//       <View>
//         <Text> {item}
//         </Text>
//       </View>
//     );
//   }
// }
