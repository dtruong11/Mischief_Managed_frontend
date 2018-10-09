import axios from 'axios'
import { request } from '../requests/requests'
import { ORG_LOGIN_FAILED } from './authOrgs'
export const USER_LOGIN_PENDING = "USER_LOGIN_PENDING"
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'
export const USER_NOT_LOGINED = 'USER_NOT_LOGINED'

export const USER_SIGNUP_PENDING = 'USER_SIGNUP_PENDING'
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'

export const USER_LOGOUT = 'USER_LOGOUT'

/// HEROKU DEPLOYED BACKEND 
// https://capstonedt.herokuapp.com

const BASE_URL = 'https://capstonedt.herokuapp.com'
export const userLogin = ({ email, password }, history) => {
  return async (dispatch) => {
    try {
      dispatch({ type: USER_LOGIN_PENDING })
      const response = await request(`${BASE_URL}/auth/login/users`, "POST", { email, password })
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: response.data
      })

      dispatch({
        type: ORG_LOGIN_FAILED
      })

      if (localStorage.getItem('token_org')) {
        localStorage.removeItem('token_org')
      }

      console.log('response in userLogin', response)
      localStorage.setItem('token_user', response.data.token);
      localStorage.setItem('user_id', response.data.id)

      history.push('/users/events')
    } catch (err) {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: err
      })
    }
  }
};

export const userVerify = () => {
  return async (dispatch) => {
    const token = localStorage.getItem('token_user')
    const userId = localStorage.getItem('user_id')

    if (token) {
      try {
        // change route to get a user data with token 
        const response = await axios(`${BASE_URL}/users/${userId}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: response.data.data[0]
        })
        // console.log('response in userVerify', response.data.data[0])
        return true
      } catch (e) {
        dispatch({
          type: USER_LOGIN_FAILED,
          payload: e
        })
        return false
      }
    } else {
      dispatch({
        type: USER_NOT_LOGINED
      })
      return false
    }
  }
}


export const userSignup = (newUser, history) => {
  return async (dispatch) => {
    try {
      dispatch({ type: USER_SIGNUP_PENDING })
      let response = await axios(`${BASE_URL}/auth/signup/users`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        data: newUser
      })
      dispatch({
        type: USER_SIGNUP_SUCCESS,
        payload: response
      })
      history.push('/login/users')
    } catch (err) {
      dispatch({
        type: USER_SIGNUP_FAILED,
        payload: err
      })
    }
  }
};

export const userLogout = (history) => {
  return (dispatch) => {
    localStorage.removeItem('token_user');
    localStorage.removeItem('user_id');
    dispatch({ type: USER_LOGOUT })
    history.push('/home') //change to homepage 
  }
}
