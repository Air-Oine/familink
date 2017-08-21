export const ADD_TOKEN = 'ADD_TOKEN';

export function addToken(newToken) {
  return {
    type: ADD_TOKEN,
    token: newToken,
  };
}
