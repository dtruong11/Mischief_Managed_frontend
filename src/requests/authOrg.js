import axios from 'axios'
// const BASE_URL = 'http://localhost:5000'

const BASE_URL = 'https://capstonedt.herokuapp.com'

const signup = async (reqInfo) => {
  const res = await axios.post(`${BASE_URL}/auth/signup/organization`, reqInfo)
  return res.data
}

const login = async ({ email, password }) => {
  const res = await axios.post(`${BASE_URL}/auth/login/organizations`, { email, password })
  return res.data
}

const verify = async (token, orgId) => {
  console.log('THIS IS orgId inside request verify', orgId)
  const res = await axios(`${BASE_URL}/organizations/${orgId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return res.data
}



export default { signup, login, verify }