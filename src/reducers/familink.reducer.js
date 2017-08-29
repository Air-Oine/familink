import { ADD_ISCONNECTED, ADD_CONTACTLINK, ADD_TOKEN, ADD_API_REJECTED, ADD_CONTACTSLIST, SET_CONNECTED, FORGOT_PASSWORD } from '../actions/familink.actions';

const _ = require('lodash');

export const initialState = {
  userIsConnected: false,
  contactLink: '',
  userToken: null,
  code: null,
  rejectedMessage: 'REJECT',
  contactsList: {},
  isConnected: false,
  uri: 'https://familink.cleverapps.io',
};

export default function familinkReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ISCONNECTED:
      return {
        ...state,
        userToken: action.token,
        userIsConnected: action.userIsConnected,
      };
    case ADD_CONTACTLINK:
      return {
        ...state,
        contactLink: action.contactLink,
      };
    case ADD_TOKEN:
      return {
        ...state,
        userToken: action.token,
      };
    case ADD_API_REJECTED:
      return {
        ...state,
        code: action.code,
        rejectedMessage: action.message,
      };
    case ADD_CONTACTSLIST:
      return {
        ...state,
        contactsList: _.orderBy(action.contactsList, ['lastName'], ['asc']),
      };
    case SET_CONNECTED:
      return {
        ...state,
        isConnected: action.isConnected,
      };
    case FORGOT_PASSWORD:
      return {
        ...state,
        phoneString: action.phoneString,
      };
    default:
      return state;
  }
}
