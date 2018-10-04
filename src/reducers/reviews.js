import {
    POST_REVIEW_PENDING,
    POST_REVIEW_SUCCESS,
    POST_REVIEW_FAILED
} from '../actions/reviews'

let reviewsInitialState = {
    isLoading: false,
    showError: true,
    payload: []
}

export const reviews = (state = reviewsInitialState, {
    type, payload
}) => {
    switch (type) {
        case POST_REVIEW_PENDING:
            return { ...state, isLoading: true, showError: false }
        case POST_REVIEW_SUCCESS:
            return { ...state, payload, isLoading: false, showError: false }
        case POST_REVIEW_FAILED:
            return { ...state, isLoading: false, showError: true }
        default:
            return state
    }
}