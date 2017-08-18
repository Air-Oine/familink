export const ADD_TOKEN = 'ADD_TOKEN';
export const CREATE_USER = 'CREATE_USER';

export function addToken(newToken) {
  return {
    type: ADD_TOKEN,
    token: newToken,
  };
}

export function createUser(user) {
  return {
    type: CREATE_USER,
    user,
  };
}
