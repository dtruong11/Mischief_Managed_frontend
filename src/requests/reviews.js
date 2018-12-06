import axios from 'axios'

const { REACT_APP_BASE_URL } = process.env

const BASE_URL = REACT_APP_BASE_URL

const postReview = (eventId, content, votes) => {
    return axios(`${BASE_URL}/events/${eventId}/reviews`, {
        method: 'POST',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token_user')}`
        },
        data: { content, votes }
    }).then(res => res)
}

const getReviews = async (eventId) => {
    const res = await axios.get(`${BASE_URL}events/${eventId}/reviews`)
    return res.data
}

export default { getReviews, postReview }