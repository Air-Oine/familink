import { ADD_ISCONNECTED, ADD_CONTACTLINK } from '../actions/familink.actions';

export const initialState = {
  userIsConnected: false,
  contactLink: '',
};

export default function familinkReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ISCONNECTED:
      return {
        // ...state,
        userToken: action.token,
        userIsConnected: action.userIsConnected,
      };
    case ADD_CONTACTLINK:
      return {
        contactLink: action.contactLink,
      };
    default:
      return state;
  }
}
