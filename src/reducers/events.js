import {
    GET_EVENTS_PENDING,
    GET_EVENTS_SUCCESS,
    GET_EVENTS_FAILED,

    GET_FAVORITE_EVENTS_PENDING,
    GET_FAVORITE_EVENTS_SUCCESS,
    GET_FAVORITE_EVENTS_FAILED,

    CREATE_FAVORITE_PENDING,
    CREATE_FAVORITE_SUCCESS,
    CREATE_FAVORITE_FAILED
} from '../actions/events'



let eventsInitialState = {
    isLoading: false,
    showError: true,
    payload: []
}

export const events = (state = eventsInitialState, {
    type, payload
}) => {
    switch (type) {
        case GET_EVENTS_PENDING:
            return { ...state, isLoading: true, showError: false }
        case GET_EVENTS_SUCCESS:
            return { ...state, payload: payload.events, isLoading: false, showError: false }
        case GET_EVENTS_FAILED:
            return { ...state, isLoading: false, showError: true }
        case GET_FAVORITE_EVENTS_PENDING:
            return { ...state, payload, isLoading: true, showError: false }
        case GET_FAVORITE_EVENTS_SUCCESS:
            return { ...state, payload, isLoading: false, showError: false }
        case GET_FAVORITE_EVENTS_FAILED:
            return { ...state, isLoading: false, showError: true }
        case CREATE_FAVORITE_PENDING:
            return { ...state, isLoading: true, showError: false }
        case CREATE_FAVORITE_SUCCESS:
            return { ...state, payload, isLoading: false, showError: false }
        case CREATE_FAVORITE_FAILED:
            return { ...state, isLoading: false, showError: true }
        default:
            return state
    }
}