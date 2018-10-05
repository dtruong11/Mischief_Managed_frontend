import authOrg from '../requests/authOrg'

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
        payload: response.data
      })
      console.log('response in orgLogin', response)
      localStorage.setItem('token_org', response.data.token);
      localStorage.setItem('org_id', response.data.id)
      history.push('/organisers/home')
    } catch (err) {
      dispatch({
        type: ORG_LOGIN_FAILED,
        payload: err
      })
    }
  }
}



export const orgSignup = (newUser) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ORG_SIGNUP_PENDING })

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


export const orgLogout = (history) => {
  console.log('This is logging out')
  return async (dispatch) => {
    localStorage.removeItem('token_org');
    dispatch({ type: ORG_LOGOUT })
    history.push('/organizers/landing')
  }
}
