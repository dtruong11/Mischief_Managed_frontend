import axios from 'axios'
import { request } from '../requests/requests'
export const USER_LOGIN_PENDING = "USER_LOGIN_PENDING"
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'

export const USER_SIGNUP_PENDING = 'USER_SIGNUP_PENDING'
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'

export const USER_LOGOUT = 'USER_LOGOUT'

const BASE_URL = 'http://localhost:5000'


export const userLogin = ({ email, password }, history) => {
    return async (dispatch) => {
        try {
            dispatch({ type: USER_LOGIN_PENDING })
            const response = await request(`${BASE_URL}/auth/login/users`, "POST", { email, password })
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: response
            })
            console.log("response.data in userLogin", response.data)
            localStorage.setItem('token_user', response.data.token);
            localStorage.setItem('user_id', response.data.id)

            history.push('/profiles')
        } catch (err) {
            console.log("err from userLogin", err)
            dispatch({
                type: USER_LOGIN_FAILED,
                payload: err
            })
        }
    }
};

export const userVerify = (history) => {
    const token = localStorage.getItem('token_user')
    console.log('token?', token);

    return async (dispatch) => {
        console.log('hello this is userLogin inside the return');
        if (token) {
            try {
                // change route to get a user data with token 
                const response = await axios(`${BASE_URL}/auth/login/users`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                dispatch({
                    type: USER_LOGIN_SUCCESS,
                    payload: response
                })
                history.push('/profiles')
            } catch (e) {
                console.error(e)
                console.log("history", history)
                dispatch({
                    type: USER_LOGIN_FAILED,
                    payload: e
                })
            }
        }
    }
}

// export const getUsers = () => {
//     return async (dispatch) => {
//         const payload = await axios(`${BASE_URL}/users`, {
//             method: "GET",
//             headers: { 'Content-Type': 'application/json' },
//         })
//         dispatch({
//             type: GET_USERS,
//             payload
//         })
//     }
// }

export const userSignup = (newUser) => {
    return async (dispatch) => {
        try {
            dispatch({ type: USER_LOGIN_PENDING })
            let response = await axios(`${BASE_URL}/auth/signup/users`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                data: { newUser }
            })
            let isSignedUp = await response.json()
            dispatch({
                type: USER_SIGNUP_SUCCESS,
                payload: isSignedUp
            })
        } catch (err) {
            dispatch({
                type: USER_SIGNUP_FAILED,
                payload: err
            })
        }
    }
};

export const userLogout = () => {
    return async (dispatch) => {
        localStorage.removeItem('token_user');
        dispatch({ type: USER_LOGOUT })
    }
}
