import AppString from '../strings';
import Tools from '../Tools';

export const ADD_ISCONNECTED = 'ADD_ISCONNECTED';
export const ADD_CONTACTLINK = 'ADD_CONTACTLINK';
export const ADD_TOKEN = 'ADD_TOKEN';
export const ADD_API_REJECTED = 'ADD_API_REJECTED';
export const ADD_CONTACTSLIST = 'ADD_CONTACTSLIST';
export const LOGIN_USER = 'LOGIN_USER';
export const SET_CONNECTED = 'SET_CONNECTED';
export const ADD_USER_PROFILE = 'ADD_USER_PROFILE';
export const ADD_PROFILE = 'ADD_PROFILE';
export const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE';
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const FORGOT_PASSWORD_REJECTED = 'FORGOT_PASSWORD_REJECTED';
export const CREATE_USER_STATUS = 'CREATE_USER_STATUS';

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

export function updateProfileStatus(newStatus, newUserProfile) {
  return {
    type: UPDATE_USER_PROFILE,
    userProfile: newUserProfile,
  };
}
function networkOrNotNetwork(isConnected, uri, optionsFetch) {
  return new Promise((resolve, reject) => {
    if (!isConnected) {
      const toThrow = { code: 0, message: AppString.errorNoConnection };
      reject(toThrow);
    }
    resolve(fetch(uri, optionsFetch));
  });
}

export function createUser(user) {
  return (dispatch, getState) => {
    if (!getState().familinkReducer.isConnected) {
      const toThrow = { code: 0, message: AppString.errorNoConnection };
      throw toThrow;
    }
    return fetch(`${getState().familinkReducer.uri}/public/sign-in`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: user,
      })
      .then((response) => {
        const toThrow = { code: 0, message: null };
        switch (response.status) {
          case 200:
            return response.json();

          case 400:
            toThrow.code = 400;
            toThrow.message = AppString.signIn_ErrorAccount;
            throw toThrow;
          case 500:
            toThrow.code = 500;
            toThrow.message = AppString.actionError500Message;
            throw toThrow;

          default:
            toThrow.message = AppString.signin_Error;
            throw toThrow;
        }
      })
      .then((response) => {
        if (response === null || response === false) {
          Tools.toastWarning(AppString.signin_Error);
          return false;
        }
        return true;
      })
      .catch((error) => {
        Tools.toastWarning(error.message);
        return false;
      });
  };
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
    networkOrNotNetwork(getState().familinkReducer.isConnected,
      `${getState().familinkReducer.uri}/public/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: loginString,
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
            type: ADD_TOKEN,
            token: null,
          });
        }
        return dispatch({
          type: ADD_TOKEN,
          token: response.token,
        });
      }).catch((error) => {
        Tools.toastWarning(error.message);
      });
  };
}

export function getProfileUser() {
  return (dispatch, getState) => {
    if (!getState().familinkReducer.isConnected) {
      const toThrow = { code: 0, message: AppString.errorNoConnection };
      throw toThrow;
    }
    return fetch(`${getState().familinkReducer.uri}/secured/users/current`,
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
            toThrow.message = AppString.profileGetError;
            throw toThrow;

          case 500:
            toThrow.code = 500;
            toThrow.message = AppString.actionError500Message;
            throw toThrow;

          default:
            toThrow.message = AppString.profileGetError;
            throw toThrow;
        }
      })
      .then((response) => {
        if (response === null || response === false) {
          Tools.toastWarning(AppString.profileGetError);
          return false;
        }
        return dispatch({
          type: ADD_USER_PROFILE,
          userProfile: response,
        });
      }).catch((error) => {
        Tools.toastWarning(error.message);
        return false;
      });
  };
}

export function getProfiles() {
  return (dispatch, getState) => {
    try {
      return fetch(`${getState().familinkReducer.uri}/public/profiles`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          const toThrow = { code: 0, message: null };
          switch (response.status) {
            case 200:
              return response.json();

            case 400:
              toThrow.code = 400;
              toThrow.message = AppString.actionErrorGetProfiles;
              throw toThrow;
            case 500:
              toThrow.code = 500;
              toThrow.message = AppString.actionError500Message;
              throw toThrow;

            default:
              toThrow.message = AppString.actionErrorGetProfiles;
              throw toThrow;
          }
        })
        .then((response) => {
          if (response === null || response === false) {
            Tools.toastWarning(AppString.actionErrorGetProfiles);
            return false;
          }
          return dispatch({
            type: ADD_PROFILE,
            profile: response,
          });
        }).catch((error) => {
          Tools.toastWarning(error.message);
          return false;
        });
    } catch (error) {
      return false;
    }
  };
}
export function forgotPassword(phoneString) {
  return (dispatch, getState) => {
    try {
      if (!getState().familinkReducer.isConnected) {
        const toThrow = { code: 0, message: AppString.errorNoConnection };
        throw toThrow;
      }
      return fetch(`${getState().familinkReducer.uri}/public/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: phoneString,
      })
        .then((response) => {
          try {
            const toThrow = { code: 0, message: null };
            switch (response.status) {
              case 204:
                // User found, mocking return of a new password
                return true;

              case 400:
                // User not found
                return false;

              case 500:
                toThrow.code = 500;
                toThrow.message = AppString.actionError500Message;
                throw toThrow;

              default:
                return false;
            }
          } catch (error) {
            dispatch({
              type: FORGOT_PASSWORD_REJECTED,
              code: error.code,
              message: error.message,
            });

            return false;
          }
        })
        .then(response => dispatch({
          type: FORGOT_PASSWORD,
          result: response,
        }));
    } catch (error) {
      return dispatch({
        type: FORGOT_PASSWORD_REJECTED,
        code: error.code,
        message: error.message,
      });
    }
  };
}
export function updateProfileUser(userProfile) {
  return (dispatch, getState) => {
    if (!getState().familinkReducer.isConnected) {
      const toThrow = { code: 0, message: AppString.errorNoConnection };
      throw toThrow;
    }
    return fetch(`${getState().familinkReducer.uri}/secured/users`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getState().familinkReducer.userToken}`,
        },
        body: userProfile,
      })
      .then((response) => {
        const toThrow = { code: 0, message: null };
        switch (response.status) {
          case 200:
            return response.json();

          case 400:
            toThrow.code = 400;
            toThrow.message = AppString.profileError;
            throw toThrow;

          case 500:
            toThrow.code = 500;
            toThrow.message = AppString.actionError500Message;
            throw toThrow;

          default:
            toThrow.message = AppString.profileError;
            throw toThrow;
        }
      })
      .then((response) => {
        if (response === null || response === false) {
          Tools.toastWarning(AppString.profileError);
          return false;
        }
        return dispatch({
          type: UPDATE_USER_PROFILE,
          userProfile: response,
        });
      }).catch((error) => {
        Tools.toastWarning(error.message);
        return false;
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
