import { NetInfo } from 'react-native';
import AppString from '../strings';
import Tools from '../Tools';

const uri = 'https://familink.cleverapps.io';

const NO_CONNECTION = AppString.errorNoConnection;
export const ERROR_REQUEST = AppString.errorRequest;
// let isConnected = false;
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
  static alertUnauthorized() {
    Tools.alert(AppString.alertTitleConnection, AppString.alertMessageConnection);
  }

  static toast() {
    Tools.toastWarning(NO_CONNECTION);
  }

  static initializeCheckConnection() {
    NetInfo.fetch().then((reach) => {
      if (reach === 'NONE') {
        isConnected = false;
      } else {
        isConnected = true;
      }
    });
    NetInfo.addEventListener(
      'change',
      (reach) => {
        if (reach === 'NONE') {
          isConnected = false;
        } else {
          isConnected = true;
        }
      });
  }

  static async getProfil() {
    try {
      if (!isConnected) {
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

  static async getContacts(token) {
    try {
      if (!isConnected) {
        WebServices.toast();
        return null;
      }
      const response = await fetch(`${uri}/secured/users/contacts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 401) {
        return response.status;
      }
      if (response.status === 200) {
        return response.json();
      }
      return false;
    } catch (error) {
      throw ERROR_REQUEST;
    }
  }

  static async createUser(value) {
    try {
      if (!isConnected) {
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

  static async createContact(value, token, isConnected) {
    try {
      if (!isConnected) {
        WebServices.toast();
        return null;
      }

      const response = await fetch(`${uri}/secured/users/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: value,
      });

      const status = response.status;
      if (status === 200) {
        return true;
      }
      return response.status;
    } catch (error) {
      return error;
    }
  }

  static async forgetPassWord(value) {
    try {
      if (!isConnected) {
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
      if (status === 200) {
        return true;
      }
      return false;
    } catch (error) {
      throw ERROR_REQUEST;
    }
  }
}
