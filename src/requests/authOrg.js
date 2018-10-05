import axios from 'axios'
const BASE_URL = 'http://localhost:5000'

export const signup = async (reqInfo) => {
    // const { name, description, email, password, street, city, state, zip, logo, lat, long } = reqInfo
    const res = await axios.post(`${BASE_URL}/auth/signup/organization`, reqInfo)
    return res.data
}

export const login = async ({ email, password }) => {
    const res = await axios.post(`${BASE_URL}/auth/login/organizations`, { email, password })
    return res.data 
}