import { ADD_TOKEN } from '../actions/familink.actions';

export const initialState = {
  userToken: '',
};

export default function familinkReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TOKEN:
      return {
        // ...state,
        userToken: action.token,
      };
    default:
      return state;
  }
}
