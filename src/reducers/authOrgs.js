import {
  ORG_NOT_LOGINED,
  ORG_LOGIN_PENDING,
  ORG_LOGIN_SUCCESS,
  ORG_LOGIN_FAILED,
  ORG_SIGNUP_PENDING,
  ORG_SIGNUP_SUCCESS,
  ORG_SIGNUP_FAILED,
  ORG_LOGOUT
} from '../actions/authOrgs'

let initialState = {
  isLoading: true,
  org: {},
  LoginError: false,
  SignupError: false,
  isLoggedIn: false
};

export const authOrg = (state = initialState, action) => {
  switch (action.type) {
    case ORG_NOT_LOGINED:
      return {
        ...state, isLoading: false, isLoggedIn: false
      }
    case ORG_LOGIN_PENDING:
      return {
        ...state, isLoading: true
      }
    case ORG_LOGIN_SUCCESS:
      return {
        ...state, isLoading: false, org: action.payload, isLoggedIn: true
      }
    case ORG_LOGIN_FAILED:
      return {
        ...state, isLoading: false, LoginError: true
      }
    case ORG_SIGNUP_PENDING:
      return {
        ...state, isLoading: true
      }
    case ORG_SIGNUP_SUCCESS:
      return {
        ...state, isLoading: false, isLoggedIn: false 
      }
    case ORG_SIGNUP_FAILED:
      return {
        ...state, isLoading: false, SignupError: true
      }
    case ORG_LOGOUT:
      return {
        ...state, org: {}, isLoggedIn: false
      }
    default:
      return state;
  }
}
