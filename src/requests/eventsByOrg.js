import axios from 'axios'
const BASE_URL = 'http://localhost:5000'

// get all events by organization, with nested regsitration, reviews, attendees

const getEventsByOrg = async (orgId) => {
    const token =localStorage.getItem('token_org')
    const res = await axios(`${BASE_URL}/organizations/${orgId}/events`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    console.log('this is res.data from getEventsByOrg', res.data)
    return res.data 
}

export default { getEventsByOrg }