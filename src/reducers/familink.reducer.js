import { ADD_TOKEN, CREATE_USER } from '../actions/familink.actions';

export const initialState = {
  userToken: '',
  user: 'azerty',
};

export default function familinkReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TOKEN:
      return {
        ...state,
        userToken: state.userToken,
      };
    case CREATE_USER:
      return {
        ...state,
        user: state.user,
      };
    default:
      return state;
  }
}
