import axios from 'axios'
const BASE_URL = 'https://capstonebackmischief.herokuapp.com/auth'
const TOKEN_USER = 'token_user'
const TOKEN_ORG = 'token_org'

// userType: 'organizations' or 'users'
const login = async ({ email, password }, userType) => {
    try {
        const res = await axios.post(`${BASE_URL}/login/${userType}`, { email, password })
        const token = res.data.token
        localStorage.setItem(
            userType === 'users' ? TOKEN_USER : TOKEN_ORG, token)
        localStorage.setItem( userType === 'users' ? 'user_id' : 'org_id', res.data.id)
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