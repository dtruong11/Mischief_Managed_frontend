import axios from 'axios'
const BASE_URL = 'http://localhost:5000/auth'

// userType: 'organizations' or 'users'
const login = async (username, password, userType) => {
    try {
        const res = await axios.post(`${BASE_URL}/login/${userType}`, { username, password })
        const token = res.data.token
        localStorage.setItem(`${userType}`, token)
        return true
    } catch (e) {
        console.error(e.response)
        return false
    }
}

const signup = async (body, userType) => {
    try {
    const res = await axios.post(`${BASE_URL}/signup/${userType}`, body)
    const token = res.data.token
    return res.data
    } catch (e) {
        console.error(e.response)
        return false 
    }
}

// tokenName: 'organizations' or 'users'
const logout = (tokenName) => {
    localStorage.removeItem(tokenName)
}

export default { login, logout }