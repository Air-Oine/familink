import {
  ADD_ISCONNECTED,
  ADD_CONTACTLINK,
  ADD_TOKEN,
  ADD_API_REJECTED,
  ADD_CONTACTSLIST,
  SET_CONNECTED,
  ADD_USER_PROFILE,
  ADD_PROFILE,
  UPDATE_USER_PROFILE,
  FORGOT_PASSWORD,
} from '../actions/familink.actions';

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
  userProfile: {
    phone: '',
    firstName: '',
    lastName: '',
    email: '',
    profile: '',
  },
  profile: [],
  updateProfileStatus: false,
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
    case ADD_USER_PROFILE:
      return {
        ...state,
        userProfile: action.userProfile,
      };

    case ADD_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case UPDATE_USER_PROFILE:
      return {
        ...state,
        updateProfileStatus: action.updateProfileStatus,
        };
    case FORGOT_PASSWORD:
      return {
        ...state,
        phoneString: action.phoneString,
      }
    default:
      return state;
  }
}
