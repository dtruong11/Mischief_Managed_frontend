import axios from 'axios'
const { REACT_APP_BASE_URL } = process.env
const BASE_URL = REACT_APP_BASE_URL

// get all events without logging in (no userId)
const get = async (formObj = {}) => {
  let input = { ...formObj }
  delete input.age
  let str = ''
  for (let key in input) {
    str += `${key}=${input[key]}&`
  }

  if (formObj.age && formObj.age.length > 0) {
    str += `min_age=${formObj.age[0]}&max_age=${formObj.age[1]}&`
  }

  str = str.slice(0, -1)
  const link = `${BASE_URL}/events?${str}`
  const res = await axios.get(link)
  return res.data
}

const getOne = async (eventId) => {
  const res = await axios.get(`${BASE_URL}/events/${eventId}`)
  return res.data
}

const checkRegistered = async (eventId) => {
  return axios(`${BASE_URL}/checkRegistered/${eventId}`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token_user')}`
    },
    data: ''
  }).then(res => res)
    .catch(console.error)
}

// register for an event 

const registerEvent = async (eventId, notes, attendees) => {
  return axios(`${BASE_URL}/registration/${eventId}`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token_user')}`
    },
    data: { notes, attendees }
  })
    .then(res => res)
    .catch(console.error)
}

// get favorite events/ create favorite event for a user 
const getFavorites = async (userId) => {
  const res = await axios.get(`${BASE_URL}/${userId}/events/favorites`)
  return res.data
}

const createFavorite = async (userId, eventId) => {
  const res = await axios.post(`${BASE_URL}/${userId}/events/favorites`, { event_id: eventId })
  return res.data
}

const unLike = async (userId, eventId) => {
  const res = await axios.delete(`${BASE_URL}/${userId}/events/${eventId}`)
  return res.data
}

export default { checkRegistered, get, getOne, getFavorites, createFavorite, unLike, registerEvent }