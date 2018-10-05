import {
    UPDATE_EVENT_REVIEW,

    GET_EVENTS_PENDING,
    GET_EVENTS_SUCCESS,
    GET_EVENTS_FAILED,

    GET_EVENT_PENDING,
    GET_EVENT_SUCCESS,
    GET_EVENT_FAILED,

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
    all: [],
    selected: {},
    favorites: []
    // payload: { reviews: [] }
}

export const events = (state = eventsInitialState, {
    type, payload
}) => {
    switch (type) {
        case UPDATE_EVENT_REVIEW:
            return { ...state, selected: { ...state.selected, reviews: state.selected.reviews.concat(payload)} }
        case GET_EVENTS_PENDING:
            return { ...state, isLoading: true, showError: false }
        case GET_EVENTS_SUCCESS:
            return { ...state, all: payload.events, isLoading: false, showError: false }
        case GET_EVENTS_FAILED:
            return { ...state, isLoading: false, showError: true }

        case GET_EVENT_PENDING:
            return { ...state, isLoading: true, showError: false }
        case GET_EVENT_SUCCESS:
            return { ...state, selected: payload.event, isLoading: false, showError: false }
        case GET_EVENT_FAILED:
            return { ...state, isLoading: false, showError: true }

        case GET_FAVORITE_EVENTS_PENDING:
            return { ...state, isLoading: true, showError: false }
        case GET_FAVORITE_EVENTS_SUCCESS:
            return { ...state, favorites: payload.events, isLoading: false, showError: false }
        case GET_FAVORITE_EVENTS_FAILED:
            return { ...state, isLoading: false, showError: true }

        // case CREATE_FAVORITE_PENDING:
        //     return { ...state, isLoading: true, showError: false }
        // case CREATE_FAVORITE_SUCCESS:
        //     return { ...state, payload, isLoading: false, showError: false }
        // case CREATE_FAVORITE_FAILED:
        //     return { ...state, isLoading: false, showError: true }
        default:
            return state
    }
}