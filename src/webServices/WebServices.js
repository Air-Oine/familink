import { NetInfo } from 'react-native';
import Storage from '../asyncStorage';
import AppString from '../strings';
import Tools from '../Tools';

const uri = 'https://familink.cleverapps.io';

const NO_CONNECTION = AppString.errorNoConnection;
export const ERROR_REQUEST = AppString.errorRequest;

// Pour appeler une méthode :
//
// async createUser(){
//     const response = await WebServices.createUser();
//     this.setState({
//       data: JSON.parse(response),
//     })
//   }
// Ou faire le traitement à la place du this.setState()

//  Exemple de value pour createUser()
//  const userString = `{
//   "phone": "${this.state.username}",
//   "password": "${this.state.password}",
//   "firstName": "${this.state.firstname}",
//   "lastName": "${this.state.lastname}",
//   "email": "${this.state.email}",
//   "profile": "${this.state.profil[this.state.selectedProfil]}"
// }`;

//   Exemple de value pour le login()
//   {
// "phone": "1234567892",
// "password": "1234",
// }
export default class WebServices {
  static alert() {
    Tools.alert('Login', 'Jeton de connexion expiré');
  }// if status === 401 WebServies.alert();

  static toast() {
    Tools.toastWarning(NO_CONNECTION);
  }
  static checkConnection() {
    NetInfo.isConnected.fetch().then((isConnected) => {
      if (isConnected === true) {
        return true;
      }
      return false;
    });
  }
  static async getProfil() {
    try {
      if (WebServices.checkConnection() === false) {
        WebServices.toast();
        return null;
      }
      const response = await fetch(`${uri}/public/profiles`);
      const responseJSON = await response.json();
      return responseJSON;
    } catch (error) {
      throw ERROR_REQUEST;
    }
  }

  static async createUser(value) {
    try {
      if (WebServices.checkConnection() === false) {
        WebServices.toast();
        return null;
      }
      const response = await fetch(`${uri}/public/sign-in`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: value,
      });
      const status = response.status;
      if (status === 200) {
        return true;
      }
      return false;
    } catch (error) {
      throw ERROR_REQUEST;
    }
  }

  static async login(value) {
    try {
      if (WebServices.checkConnection() === false) {
        WebServices.toast();
        return null;
      }
      const response = await fetch(`${uri}/public/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: value,
      });
      const status = response.status;
      const responseJSON = await response.json();
      Storage.setItem('userToken', JSON.stringify(responseJSON));
      if (status === 200) {
        return true;
      }
      return false;
    } catch (error) {
      throw ERROR_REQUEST;
    }
  }

  static async forgetPassWord(value) {
    try {
      if (WebServices.checkConnection() === false) {
        WebServices.toast();
        return null;
      }
      const response = await fetch(`${uri}/public/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
      });
      const status = response.status;
      await response.json();
      //    Storage.setItem('userToken', JSON.stringify(responseJSON));
      if (status === 200) {
        return true;
      }
      return false;
    } catch (error) {
      throw ERROR_REQUEST;
    }
  }
}
