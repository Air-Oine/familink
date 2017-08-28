import WebServices from '../webServices/WebServices';

export const ADD_ISCONNECTED = 'ADD_ISCONNECTED';
export const ADD_CONTACTLINK = 'ADD_CONTACTLINK';
export const ADD_TOKEN = 'ADD_TOKEN';
export const ADD_CONTACTSLIST = 'ADD_CONTACTSLIST';
export const SET_CONNECTED = 'SET_CONNECTED';

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

export function setConnected(newIsConnected) {
  return {
    type: SET_CONNECTED,
    isConnected: newIsConnected,
  };
}

export function addContactsList() {
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

