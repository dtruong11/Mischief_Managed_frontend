import events from '../requests/events'

export const GET_EVENTS_PENDING = 'GET_EVENTS_PENDING'
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS'
export const GET_EVENTS_FAILED = 'GET_EVENTS_FAILED'

export const GET_EVENT_PENDING = 'GET_EVENT_PENDING'
export const GET_EVENT_SUCCESS = 'GET_EVENT_SUCCESS'
export const GET_EVENT_FAILED = 'GET_EVENT_FAILED'

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

    //// run action to get current lat/long => store in redux; create an action GET_CURRENT_LOCATION 
    return async (dispatch, getState) => {
        try {
            const formObj = await queryObj(getState().formValues)
            console.log('!!!!!!', formObj);

            dispatch({ type: GET_EVENTS_PENDING })
            const payload = await events.get(formObj)
            console.log('PAYLOAD in GETEVENTS', payload)
            dispatch({
                type: GET_EVENTS_SUCCESS,
                payload
            })
        } catch (err) {
            console.error(err)
            dispatch({
                type: GET_EVENTS_FAILED,
                payload: err
            })
        }
    }
}


export const getOneEvent = (eventTitle) => {
    return async (dispatch) => {
        try {
            dispatch({ type: GET_EVENT_PENDING })
            const payload = await events.getOne(eventTitle)
            dispatch({
                type: GET_EVENT_SUCCESS,
                payload
            })
        } catch (err) {
            console.error(err)
            dispatch({
                type: GET_EVENT_FAILED,
                payload: err
            })
        }
    }
}

const queryObj = async (values) => {
    // step 1: get form values 
    let formResults = { ...values }
    let objForm = {}
    let result

    if (formResults.age.length === 0) {
        delete formResults.age
    }

    if (formResults.range === 0) {
        objForm.range = 0
        delete formResults.range
    }

    for (let key in formResults) {
        if (formResults[key]) {
            objForm[key] = formResults[key]
        }
    }

    if (objForm.lat && objForm.long) {
        return objForm
    } else {
        result = await curLocation(objForm).then((coord) => {
            objForm.lat = coord.lat
            objForm.long = coord.long
            return objForm
        })
        console.log('OBJFORM YAYYYYYY: ', result)
        return result
    }
}

const curLocation = (obj) => {
    if (!obj.lat && !obj.long) {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((location) => {
                console.log('my current lat', location.coords.latitude);
                console.log('my current long', location.coords.longitude);
                console.log('accuracy rate', location.coords.accuracy);
                resolve({ lat: location.coords.latitude, long: location.coords.longitude })
            });
        })
    } else {

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