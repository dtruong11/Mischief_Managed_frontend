import {
    GET_CURRENT_LOCATION
} from '../actions/getCurrentLocation'

let initialState = {
    lat: null,
    long: null
}

export const location = (state = initialState, {
    type, payload
}) => {
    switch (type) {
        case GET_CURRENT_LOCATION:
            return { ...state, ...payload }
        default:
            return state
    }
}