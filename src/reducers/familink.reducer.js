import { ADD_ISCONNECTED, ADD_CONTACTLINK, ADD_TOKEN, ADD_CONTACTSLIST } from '../actions/familink.actions';

export const initialState = {
  userIsConnected: false,
  contactLink: '',
  userToken: '',
  contactsList: {},
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
    default:
      return state;
  }
}
