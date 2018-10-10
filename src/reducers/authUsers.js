import {
    USER_VERIFY_FAILED,
    USER_NOT_LOGINED,
    USER_LOGIN_PENDING,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,
    USER_SIGNUP_PENDING,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAILED,
    USER_LOGOUT
} from '../actions/authUsers'

let initialState = {
    isLoading: true,
    user: {},
    LoginError: false,
    SignupError: false,
    isLoggedIn: false
};

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case USER_VERIFY_FAILED:
            return {
                ...state, LoginError: false
            }
        case USER_NOT_LOGINED:
            return {
                ...state, isLoading: false, isLoggedIn: false
            }
        case USER_LOGIN_PENDING:
            return {
                ...state, isLoading: true
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state, isLoading: false, user: action.payload, isLoggedIn: true
            }
        case USER_LOGIN_FAILED:
            return {
                ...state, isLoading: false, LoginError: true
            }
        case USER_SIGNUP_PENDING:
            return {
                ...state, isLoading: true
            }
        case USER_SIGNUP_SUCCESS:
            return {
                ...state, isLoading: false, isLoggedIn: false
            }
        case USER_SIGNUP_FAILED:
            return {
                ...state, isLoading: false, SignupError: true
            }
        case USER_LOGOUT:
            return {
                ...state, user: {}, isLoggedIn: false, LoginError: false, isLoading: false
            }
        default:
            return state;
    }
}
