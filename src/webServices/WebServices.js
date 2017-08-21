import Storage from '../asyncStorage';

const uri = 'https://familink.cleverapps.io';

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
  static async getProfil() {
    try {
      const response = await fetch(`${uri}/public/profiles`);
      const responseJSON = await response.json();
      return responseJSON;
    } catch (error) {
      return error;
    }
  }

  static async createUser(value) {
    try {
      const response = await fetch(`${uri}/public/sign-in`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: value,
      });
      const status = response.status;
      if (status === 200) {
        response.json();
        return true;
      }
      return false;
    } catch (error) {
      return error;
    }
  }

  static async login(value) {
    try {
      const response = await fetch(`${uri}/public/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
      });
      const status = response.status;
      const responseJSON = await response.json();
      Storage.setItem('userToken', JSON.stringify(responseJSON));
      if (status === 200) {
        return true;
      }
      return false;
    } catch (error) {
      return error;
    }
  }

  static async forgetPassWord(value) {
    try {
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
      return error;
    }
  }
}
