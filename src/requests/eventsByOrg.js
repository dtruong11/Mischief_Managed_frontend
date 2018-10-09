import axios from 'axios'
const BASE_URL = 'http://localhost:5000'

// const BASE_URL = 'https://capstonedt.herokuapp.com'

// get all events by organization, with nested regsitration, reviews, attendees

const getEventsByOrg = async (orgId) => {
  const token = localStorage.getItem('token_org')
  console.log('orgId in getEventsByOrg', orgId, token)
  const res = await axios(`${BASE_URL}/organizations/${orgId}/events`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  console.log('this is res.data inside getEventsByOrg', res.data)
  return res.data
}


const createEvent = async (formInputs) => {
  const token = localStorage.getItem('token_org')
  const orgId = localStorage.getItem('org_id')
  const res = await axios(`${BASE_URL}/organizations/${orgId}/events`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: formInputs // formInput is an object 
  })
  return res.data
}

export default { getEventsByOrg, createEvent }