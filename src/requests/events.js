import axios from 'axios'
const BASE_URL = 'http://localhost:5000'

// get all events without logging in (no userId)
const get = async () => {
    const res = await axios.get(`${BASE_URL}/events`)
    return res.data
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

export default { get, getFavorites, createFavorite, unLike }