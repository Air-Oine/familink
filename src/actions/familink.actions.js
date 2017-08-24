import WebServices from '../webServices/WebServices';

export const ADD_ISCONNECTED = 'ADD_ISCONNECTED';
export const ADD_CONTACTLINK = 'ADD_CONTACTLINK';
export const ADD_TOKEN = 'ADD_TOKEN';
export const ADD_CONTACTSLIST = 'ADD_CONTACTSLIST';
export const LOGIN_USER = 'LOGIN_USER';

export function addToken(newToken) {
  return {
    type: ADD_TOKEN,
    token: newToken,
  };
}

export function addIsConnected(newIsConnected) {
  return {
    type: ADD_ISCONNECTED,
    isConnected: newIsConnected,
  };
}

export function addContactLink(newContactlink) {
  return {
    type: ADD_CONTACTLINK,
    contactLink: newContactlink,
  };
}

export function addContactsList() {
  console.log('action :');
  return (dispatch, getState) => WebServices.getContacts(getState().familinkReducer.userToken)
    .then((contacts) => {
      dispatch({
        type: ADD_CONTACTSLIST,
        contactsList: contacts,
      });
    },
    )
    .catch(() => {
      // TODO

    });
}

export function loginUser(loginString) {
  return (dispatch, getState) => WebServices.login(loginString)
    .then((newToken) => {
      if (newToken === null || newToken === false) {
        dispatch({
          type: ADD_TOKEN,
          token: null,
        });
        throw Error('error');
      }
      dispatch({
        type: ADD_TOKEN,
        token: newToken,
      });
    },
    )
    .catch(() => {
      // TODO
      console.log('catch');
    });
}
