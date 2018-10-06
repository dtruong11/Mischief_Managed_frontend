import authOrg from '../requests/authOrg'
import { USER_LOGIN_FAILED } from './authUsers'
export const ORG_NOT_LOGINED = 'ORG_NOT_LOGINED'
export const ORG_LOGIN_PENDING = "ORG_LOGIN_PENDING"
export const ORG_LOGIN_SUCCESS = 'ORG_LOGIN_SUCCESS'
export const ORG_LOGIN_FAILED = 'ORG_LOGIN_FAILED'

export const ORG_SIGNUP_PENDING = 'ORG_SIGNUP_PENDING'
export const ORG_SIGNUP_SUCCESS = 'ORG_SIGNUP_SUCCESS'
export const ORG_SIGNUP_FAILED = 'ORG_SIGNUP_FAILED'

export const ORG_LOGOUT = 'ORG_LOGOUT'

export const orgLogin = ({ email, password }, history) => {

  return async (dispatch) => {
    try {
      dispatch({ type: ORG_LOGIN_PENDING })
      const response = await authOrg.login({ email, password })

      dispatch({
        type: ORG_LOGIN_SUCCESS,
        payload: response
      })


      dispatch({
        type: USER_LOGIN_FAILED
      })

      if (localStorage.getItem('token_user')) {
        localStorage.removeItem('token_user')
      }

      localStorage.setItem('token_org', response.token);
      localStorage.setItem('org_id', response.id)
      history.push('/organizers/landing')
    } catch (err) {
      dispatch({
        type: ORG_LOGIN_FAILED,
        payload: err
      })
    }
  }
}


export const orgSignup = (newOrg) => {
  // const { name, description, email, password, street, city, state, zip, logo, lat, long } = newOrg
  return async (dispatch) => {
    try {
      dispatch({ type: ORG_SIGNUP_PENDING })
      let response = await authOrg.signup(newOrg)
      let isSignedUp = await response.json()
      console.log('this is isSignedUp', isSignedUp)
      dispatch({
        type: ORG_SIGNUP_SUCCESS,
        payload: isSignedUp
      })
    } catch (err) {
      dispatch({
        type: ORG_SIGNUP_FAILED,
        payload: err
      })
    }
  }
};



export const orgVerify = () => {

  return async (dispatch) => {
    const token = localStorage.getItem('token_org')
    const orgId = localStorage.getItem('org_id')

    if (token) {
      try {
        const response = await authOrg.verify(token, orgId)

        dispatch({
          type: ORG_LOGIN_SUCCESS,
          payload: response.data[0]
        })
        return true
      } catch (e) {
        dispatch({
          type: ORG_LOGIN_FAILED,
          payload: e
        })
        return false
      }
    } else {
      dispatch({
        type: ORG_NOT_LOGINED
      })
      return false
    }
  }
}


export const orgLogout = (history) => {
  console.log('Logging out org ')
  localStorage.removeItem('token_org');

  return (dispatch) => {
    dispatch({ type: ORG_LOGOUT })
    history.push('/home')
  }
}
