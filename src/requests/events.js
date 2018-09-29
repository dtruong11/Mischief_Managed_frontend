import axios from 'axios'
const BASE_URL = 'http://localhost:5000'

// get all events without logging in (no userId)
const get = async (formObj={}) => {

    let input = { ...formObj }
    delete input.age 
    let str = ''
    for (let key in input) {
        str += `${key}=${input[key]}&`
    }

    if (formObj.age && formObj.age.length > 0) {
        console.log('formObj.age', formObj.age)
        console.log('min_age', formObj.age[0])
        console.log('max_age', formObj.age[1])
        str += `min_age=${formObj.age[0]}&max_age=${formObj.age[1]}&`
    }

    str = str.slice(0, -1)
    const link = `${BASE_URL}/events?${str}` 
    const res = await axios.get(link)
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