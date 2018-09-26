import events  from '../requests/events'
 
export const GET_EVENTS_PENDING = 'GET_EVENTS_PENDING'
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS'
export const GET_EVENTS_FAILED = 'GET_EVENTS_FAILED'

export const GET_FAVORITE_EVENTS_PENDING = 'GET_FAVORITE_EVENTS_PENDING'
export const GET_FAVORITE_EVENTS_SUCCESS = 'GET_FAVORITE_EVENTS_SUCCESS'
export const GET_FAVORITE_EVENTS_FAILED = 'GET_FAVORITE_EVENTS_FAILED'

export const CREATE_FAVORITE_PENDING = 'CREATE_FAVORITE_PENDING'
export const CREATE_FAVORITE_SUCCESS = 'CREATE_FAVORITE_SUCCESS'
export const CREATE_FAVORITE_FAILED = 'CREATE_FAVORITE_FAILED'

export const UNLIKE_EVENT_PENDING = 'UNLIKE_EVENT_PENDING'
export const UNLIKE_EVENT_SUCCESS = 'UNLIKE_EVENT_SUCCESS'
export const UNLIKE_EVENT_FAILED = 'UNLIKE_EVENT_FAILED'


export const getEvents = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: GET_EVENTS_PENDING })
            const payload = await events.get()
            dispatch({
                type: GET_EVENTS_SUCCESS,
                payload
            })
        } catch (err) {
            dispatch({
                type: GET_EVENTS_FAILED,
                payload: err
            })
        }
    }
}

export const getFavoriteEvents = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: GET_FAVORITE_EVENTS_PENDING })
            const payload = await events.getFavorites()
            dispatch({
                type: GET_FAVORITE_EVENTS_SUCCESS,
                payload
            })
        } catch (err) {
            dispatch({
                type: GET_EVENTS_FAILED,
                payload: err
            })
        }
    }
}

export const createFavoriteEvent = (userId, eventId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: CREATE_FAVORITE_PENDING })
            const payload = await events.createFavorite(userId, eventId)
            dispatch({
                type: CREATE_FAVORITE_SUCCESS,
                payload
            })
        } catch (err) {
            dispatch({
                type: CREATE_FAVORITE_FAILED,
                payload: err
            })
        }
    }
}

export const unLikeEvent = (userId, eventId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: UNLIKE_EVENT_PENDING })
            const payload = await events.unLike(userId, eventId)
            dispatch({
                type: UNLIKE_EVENT_SUCCESS,
                payload
            })
        } catch (err) {
            dispatch({
                type: UNLIKE_EVENT_FAILED,
                payload: err
            })
        }
    }
}