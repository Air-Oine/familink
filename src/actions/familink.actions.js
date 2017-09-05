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
export const ADD_USER_PROFILE = 'ADD_USER_PROFILE';
export const ADD_PROFILE = 'ADD_PROFILE';
export const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE';
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const FORGOT_PASSWORD_REJECTED = 'FORGOT_PASSWORD_REJECTED';
export const CREATE_CONTACT = 'CREATE_CONTACT';

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
  return new Promise((resolve) => {
    if (!isConnected) {
      const toThrow = { code: 0, message: AppString.errorNoConnection };
      throw toThrow;
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

function networkReturn(response, messageError, noContentReturn) {
  const toThrow = { code: 0, message: null };
  switch (response.status) {
    case 200:
      return response.json();

    case 204:
      if (noContentReturn) {
        return 204;
      }
      return false;

    case 400:
      toThrow.code = 400;
      toThrow.message = messageError;
      throw toThrow;

    case 401:
      return 401;

    case 500:
      toThrow.code = 500;
      toThrow.message = AppString.actionError500Message;
      throw toThrow;

    default:
      toThrow.message = AppString.messageError;
      throw toThrow;
  }
}

export function createUser(user) {
  return (dispatch, getState) => {
    try {
      return networkOrNotNetwork(getState().familinkReducer.isConnected,
        `${getState().familinkReducer.uri}/public/sign-in`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: user,
        })
        .then(response => networkReturn(response, AppString.signIn_ErrorAccount),
        )
        .then((response) => {
          if (response === null || response === false) {
            Tools.toastWarning(AppString.actionErrorSignIn);
            return false;
          }
          return dispatch({
            type: ADD_PROFILE,
            profile: response,
          });
        })
        .catch((error) => {
          Tools.toastWarning(error.message);
          return false;
        });
    } catch (error) {
      Tools.toastWarning(error.message);
      return false;
    }
  };
}


export function addContactsList() {
  return (dispatch, getState) => {
    try {
      return networkOrNotNetwork(getState().familinkReducer.isConnected,
        `${getState().familinkReducer.uri}/secured/users/contacts`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getState().familinkReducer.userToken}`,
          },
        })
        .then(response => networkReturn(response, AppString.actionErrorContactList),
        )
        .then((response) => {
          if (response === null || response === false) {
            Tools.toastWarning(AppString.actionErrorContactList);
            return false;
          }
          if (response === 401) {
            return 401;
          }
          return dispatch({
            type: ADD_CONTACTSLIST,
            contactsList: response,
          });
        })
        .catch((error) => {
          Tools.toastWarning(error.message);
          return false;
        });
    } catch (error) {
      Tools.toastWarning(error.message);
      return false;
    }
  };
}

export function loginUser(loginString) {
  return (dispatch, getState) => {
    try {
      storePhone(getState().familinkReducer.rememberMe, JSON.parse(loginString).phone);

      return networkOrNotNetwork(getState().familinkReducer.isConnected,
        `${getState().familinkReducer.uri}/public/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: loginString,
        })
        .then(response => networkReturn(response, AppString.actionErrorLogin)) // Return is implicit
        .then((response) => {
          if (response === null || response === false) {
            Tools.toastWarning(AppString.actionErrorLogin);
            return false;
          }
          return dispatch({
            type: ADD_TOKEN,
            token: response.token,
          });
        }).catch((error) => {
          Tools.toastWarning(error.message);
          return false;
        });
    } catch (error) {
      Tools.toastWarning(error.message);
      return false;
    }
  };
}

export function getProfileUser() {
  return (dispatch, getState) => {
    try {
      return networkOrNotNetwork(getState().familinkReducer.isConnected,
        `${getState().familinkReducer.uri}/secured/users/current`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getState().familinkReducer.userToken}`,
          },
        })
        .then(response => networkReturn(response, AppString.actionErrorGetUserProfile),
        )
        .then((response) => {
          if (response === null || response === false) {
            Tools.toastWarning(AppString.actionErrorGetUserProfile);
            return false;
          }
          if (response === 401) {
            return 401;
          }
          return dispatch({
            type: ADD_USER_PROFILE,
            userProfile: response,
          });
        })
        .catch((error) => {
          Tools.toastWarning(error.message);
          return false;
        });
    } catch (error) {
      Tools.toastWarning(error.message);
      return false;
    }
  };
}

export function getProfiles() {
  return (dispatch, getState) => {
    try {
      return networkOrNotNetwork(getState().familinkReducer.isConnected,
        `${getState().familinkReducer.uri}/public/profiles`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(response => networkReturn(response, AppString.actionErrorGetProfiles),
        )
        .then((response) => {
          if (response === null || response === false) {
            Tools.toastWarning(AppString.actionErrorGetProfiles);
            return false;
          }
          return dispatch({
            type: ADD_PROFILE,
            profile: response,
          });
        })
        .catch((error) => {
          Tools.toastWarning(error.message);
          return false;
        });
    } catch (error) {
      Tools.toastWarning(error.message);
      return false;
    }
  };
}
export function forgotPassword(phoneString) {
  return (dispatch, getState) => {
    try {
      return networkOrNotNetwork(getState().familinkReducer.isConnected,
        `${getState().familinkReducer.uri}/public/forgot-password`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: phoneString,
        })
        .then(response => networkReturn(response, AppString.actionErrorForgotPwdNotExist, true),
        )
        .then((response) => {
          if (response === 204) {
            return true;
          }
          Tools.toastWarning(AppString.actionErrorForgotPwd);
          return false;
        })
        .catch((error) => {
          Tools.toastWarning(error.message);
          return false;
        });
    } catch (error) {
      Tools.toastWarning(error.message);
      return false;
    }
  };
}

export function updateProfileUser(userProfile) {
  return (dispatch, getState) => {
    try {
      return networkOrNotNetwork(getState().familinkReducer.isConnected,
        `${getState().familinkReducer.uri}/secured/users`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getState().familinkReducer.userToken}`,
          },
          body: userProfile,
        })
        .then(response => networkReturn(response, AppString.actionErrorUpdateUserProfile),
        )
        .then((response) => {
          if (response === null || response === false) {
            Tools.toastWarning(AppString.actionErrorUpdateUserProfile);
            return false;
          }
          if (response === 401) {
            return 401;
          }
          return dispatch({
            type: ADD_PROFILE,
            profile: response,
          });
        })
        .catch((error) => {
          Tools.toastWarning(error.message);
          return false;
        });
    } catch (error) {
      Tools.toastWarning(error.message);
      return false;
    }
  };
}

export function createContact(contactString) {
  return (dispatch, getState) => {
    try {
      return networkOrNotNetwork(getState().familinkReducer.isConnected,
        `${getState().familinkReducer.uri}/secured/users/contacts`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getState().familinkReducer.userToken}`,
          },
          body: contactString,
        })
        .then(response => networkReturn(response, AppString.actionErrorCreateContact),
        )
        .then((response) => {
          if (response === null || response === false) {
            Tools.toastWarning(AppString.actionErrorCreateContact);
            return false;
          }
          if (response === 401) {
            return 401;
          }
          return dispatch({
            type: CREATE_CONTACT,
            contactString: response,
          });
        })
        .catch((error) => {
          Tools.toastWarning(error.message);
          return false;
        });
    } catch (error) {
      Tools.toastWarning(error.message);
      return false;
    }
  };
}

export function updateContact(id, contactString) {
  return (dispatch, getState) => {
    try {
      return networkOrNotNetwork(getState().familinkReducer.isConnected,
        `${getState().familinkReducer.uri}/secured/users/contacts/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getState().familinkReducer.userToken}`,
          },
          body: contactString,
        })
        .then(response => networkReturn(response, AppString.actionErrorUpdateContact, true),
        )
        .then((response) => {
          if (response === 204) {
            return true;
          }
          if (response === 401) {
            return 401;
          }
          Tools.toastWarning(AppString.actionErrorUpdateContact);
          return false;
        })
        .catch((error) => {
          Tools.toastWarning(error.message);
          return false;
        });
    } catch (error) {
      Tools.toastWarning(error.message);
      return false;
    }
  };
}

export function deleteContact(contact) {
  return (dispatch, getState) => {
    try {
      return networkOrNotNetwork(getState().familinkReducer.isConnected,
        `${getState().familinkReducer.uri}/secured/users/contacts/${contact._id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getState().familinkReducer.userToken}`,
          },
        })
        .then(response => networkReturn(response, AppString.actionErrorRemoveContact, true),
        )
        .then((response) => {
          if (response === 204) {
            return true;
          }
          if (response === 401) {
            return 401;
          }
          Tools.toastWarning(AppString.actionErrorRemoveContact);
          return false;
        })
        .catch((error) => {
          Tools.toastWarning(error.message);
          return false;
        });
    } catch (error) {
      Tools.toastWarning(error.message);
      return false;
    }
  };
}
