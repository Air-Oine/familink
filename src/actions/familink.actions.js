import AppString from '../strings';
import Tools from '../Tools';
import Storage from '../asyncStorage';

export const ADD_ISCONNECTED = 'ADD_ISCONNECTED';
export const ADD_CONTACTLINK = 'ADD_CONTACTLINK';
export const ADD_TOKEN = 'ADD_TOKEN';
export const ADD_API_REJECTED = 'ADD_API_REJECTED';
export const ADD_CONTACTSLIST = 'ADD_CONTACTSLIST';
export const LOGIN_USER = 'LOGIN_USER';
export const SET_CONNECTED = 'SET_CONNECTED';
export const SET_REMEMBER_ME = 'SET_REMEMBER_ME';

export function addToken(newToken) {
  return {
    type: ADD_TOKEN,
    token: newToken,
  };
}

export function setRememberMe(newState) {
  return {
    type: SET_REMEMBER_ME,
    rememberMe: newState,
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

function networkOrNotNetwork(isConnected, uri, optionsFetch) {
  return new Promise((resolve, reject) => {
    if (!isConnected) {
      const toThrow = { code: 0, message: 'No network' };
      reject(toThrow);
    }
    resolve(fetch(uri, optionsFetch));
  });
}

function storePhone(mustRemember, phone) {
  Storage.removeItem('phone'); // Remove phone from database
  // If remember me is activated :
  if (mustRemember) {
    Storage.setItem('phone', phone);
  }
}

function networkReturn(response) {
  const toThrow = { code: 0, message: null };
  switch (response.status) {
    case 200:
      return response.json();

    case 400:
      toThrow.code = 400;
      toThrow.message = AppString.actionError400Message;
      throw toThrow;

    case 500:
      toThrow.code = 500;
      toThrow.message = AppString.actionError500Message;
      throw toThrow;

    default:
      return false;
  }
}

export function addContactsList() {
  return (dispatch, getState) => {
    networkOrNotNetwork(getState().familinkReducer.isConnected,
      `${getState().familinkReducer.uri}/secured/users/contacts`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getState().familinkReducer.userToken}`,
        },
      })
      .then((response) => {
        const toThrow = { code: 0, message: null };
        switch (response.status) {
          case 200:
            return response.json();

          case 400:
            toThrow.code = 400;
            toThrow.message = AppString.actionError400Message;
            throw toThrow;

          case 500:
            toThrow.code = 500;
            toThrow.message = AppString.actionError500Message;
            throw toThrow;

          default:
            return false;
        }
      })
      .then((response) => {
        if (response === null || response === false) {
          return dispatch({
            type: ADD_CONTACTSLIST,
            contactsList: null,
          });
        }
        return dispatch({
          type: ADD_CONTACTSLIST,
          contactsList: response,
        });
      })
      .catch((error) => {
        Tools.toastWarning(error.message);
      });
  };
}

export function loginUser(loginString) {
  return (dispatch, getState) => {
    const a = JSON.parse(loginString);
    const phone = a.phone;
    storePhone(getState().familinkReducer.rememberMe, phone);

    networkOrNotNetwork(getState().familinkReducer.isConnected,
      `${getState().familinkReducer.uri}/public/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: loginString,
      })
      .then(response => networkReturn(response)) // Return is implicit
      .then((response) => {
        if (response === null || response === false) {
          return dispatch({
            type: ADD_TOKEN,
            token: null,
          });
        }
        dispatch({
          type: ADD_TOKEN,
          token: response.token,
        });

        return Promise;
      }).catch((error) => {
        console.log('message : ', error.message);
        Tools.toastWarning(error.message);
      });
  };
}


/*
export function saveContact(contact) {
  return (dispatch, getState) => WebServices.createContact(contact,
    getState().familinkReducer.userToken)
    .then((result) => {
      dispatch({
        type: ADD_CREATECONTACTRESULT,
        createContactResult: result,
      });
      throw Error('error');
    },
    )
    .catch(() => {
      // TODO
      console.log('catch');
    });
}
*/
