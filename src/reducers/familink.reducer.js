import { ADD_ISCONNECTED, ADD_CONTACTLINK, ADD_TOKEN } from '../actions/familink.actions';

export const initialState = {
  userIsConnected: false,
  contactLink: '',
  userToken: '',
};

export default function familinkReducer(state = initialState, action) {
  console.log('reducer', state, action);
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
    default:
      return state;
  }
}
