import events from '../requests/events'

// export const 
export const FILTER_EVENTS_SUCCESS = 'FILTER_EVENTS_SUCCESS'
export const FILTER_EVENTS_PENDING = 'FILTER_EVENTS_PENDING'
export const FILTER_EVENTS_FAILED = 'FILTER_EVENTS_FAILED'



// getEventsByLocation (success, failed, pending)

export const getEventsByLocation = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: FILTER_EVENTS_PENDING })
            const payload = await events.getByLocation()
            dispatch({
                type: FILTER_EVENTS_SUCCESS,
                payload
            })
        } catch (err) {
            dispatch({
                type: FILTER_EVENTS_FAILED,
                payload: err
            })
        }
    }
}

// ****** filter through the form state, anything false not include in the req.query ******

export const filterEvents = () => {
    return async (dispatch) => {

    }
}
