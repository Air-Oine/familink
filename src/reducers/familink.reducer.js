import {ADD_TOKEN} from '../actions/familink.actions';

export const initialState = {
  token: '',
};

export default function familinkReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TOKEN: {
      return {
        ...state,
        token: state.token,
      },
    }  //TODO: ???
    default:
      return state;
  }
}
