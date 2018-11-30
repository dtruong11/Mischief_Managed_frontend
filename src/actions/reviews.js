import reviews from '../requests/reviews'
import { updateEventReview } from './events'

export const POST_REVIEW_PENDING = 'POST_REVIEW_PENDING'
export const POST_REVIEW_SUCCESS = 'POST_REVIEW_SUCCESS'
export const POST_REVIEW_FAILED = 'POST_REVIEW_FAILED'

export const postReview = (eventId, content, votes) => {
    return async (dispatch) => {
        try {
            dispatch({ type: POST_REVIEW_PENDING })
            const payload = await reviews.postReview(eventId, content, votes)
            dispatch({
                type: POST_REVIEW_SUCCESS,
                payload
            })
            dispatch(updateEventReview(payload.data)) // dispatch the object action type

        } catch (err) {
            dispatch({
                type: POST_REVIEW_FAILED,
                payload: err
            })
        }
    }
}

// dont' really need reducer for reviews, and dispatch for review. Can be inside event 