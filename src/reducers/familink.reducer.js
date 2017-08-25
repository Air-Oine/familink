import { ADD_ISCONNECTED, ADD_CONTACTLINK, ADD_TOKEN, ADD_CONTACTSLIST, SET_CONNECTED } from '../actions/familink.actions';

export const initialState = {
  userIsConnected: false,
  contactLink: '',
  userToken: null,
  contactsList: {},
  isConnected: false,
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
    default:
      return state;
  }
}
