import { ADD_ISCONNECTED,
  ADD_CONTACTLINK,
  ADD_TOKEN,
  ADD_API_REJECTED,
  ADD_CONTACTSLIST,
  SET_CONNECTED,
  SET_REMEMBER_ME } from '../actions/familink.actions';

export const initialState = {
  userIsConnected: false,
  contactLink: '',
  userToken: '',
  code: null,
  rejectedMessage: 'REJECT',
  contactsList: {},
  isConnected: false,
  rememberMe: true,
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
        contactsList: action.contactsList,
      };
    case SET_CONNECTED:
      return {
        ...state,
        isConnected: action.isConnected,
      };
    case SET_REMEMBER_ME:
      return {
        ...state,
        rememberMe: action.rememberMe,
      };
    default:
      return state;
  }
}
