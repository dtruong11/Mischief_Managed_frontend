import axios from 'axios'

const { REACT_APP_BASE_URL } = process.env

const BASE_URL = REACT_APP_BASE_URL

const signup = async (reqInfo) => {
  const res = await axios.post(`${BASE_URL}/auth/signup/organization`, reqInfo)
  return res.data
}

const login = async ({ email, password }) => {
  const res = await axios.post(`${BASE_URL}/auth/login/organizations`, { email, password })
  return res.data
}

const verify = async (token, orgId) => {
  const res = await axios(`${BASE_URL}/organizations/${orgId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return res.data
}



export default { signup, login, verify }