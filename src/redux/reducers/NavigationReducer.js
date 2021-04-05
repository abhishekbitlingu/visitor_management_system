import {SIGN_IN, SIGN_OUT} from './../actions/NavigationActionType';

const initialState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

const NavigationReducer = (state = initialState, action) => {
  console.log('NavigationReducer called');
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        userToken: action.authToken,
        isLoading: false,
      };
    case SIGN_OUT:
      console.log('Sign out called');
      return {
        ...state,
        isSignout: true,
        userToken: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default NavigationReducer;
