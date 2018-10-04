import reviews from '../requests/reviews'
import { getEvents } from './events'

export const POST_REVIEW_PENDING = 'POST_REVIEW_PENDING'
export const POST_REVIEW_SUCCESS = 'POST_REVIEW_SUCCESS'
export const POST_REVIEW_FAILED = 'POST_REVIEW_FAILED'

export const postReview = (eventId, content, votes) => {
    return async (dispatch) => {
        try {
            dispatch({ type: POST_REVIEW_PENDING })
            const payload = await reviews.postReview(eventId, content, votes)
            console.log('YAYY, This is payload inside postReview, YAYYYYY', payload)
            dispatch({
                type: POST_REVIEW_SUCCESS,
                payload
            })
        } catch (err) {
            dispatch({
                type: POST_REVIEW_FAILED,
                payload: err
            })
        }
    }
}