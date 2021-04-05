import {SIGN_IN, SIGN_OUT} from './NavigationActionType';

export const setNavigatorRoutesForPreLoggedInUser = authToken => {
  return {
    type: SIGN_IN,
    authToken: authToken,
  };
};

export const setNavigatorRoutesForLogOut = () => {
  console.log('setNavigatorRoutesForLogOut called');
  return {
    type: SIGN_OUT,
  };
};
