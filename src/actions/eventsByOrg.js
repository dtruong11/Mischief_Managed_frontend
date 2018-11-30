import eventsByOrg from '../requests/eventsByOrg'

export const GET_EVENTS_BY_ORG_PENDING = 'GET_EVENTS_BY_ORG_PENDING'
export const GET_EVENTS_BY_ORG_SUCCESS = 'GET_EVENTS_BY_ORG_SUCCESS'
export const GET_EVENTS_BY_ORG_FAILED = 'GET_EVENTS_BY_ORG_FAILED'

export const CREATE_EVENT_PENDING = 'CREATE_EVENT_PENDING'
export const CREATE_EVENT_SUCCESS = 'CREATE_EVENT_SUCCESS'
export const CREATE_EVENT_FAILED = 'CREATE_EVENT_FAILED'

export const UPDATE_EVENTS = 'UPDATE_EVENTS'

export const getEventsByOrg = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: GET_EVENTS_BY_ORG_PENDING })
      const orgId = getState().authOrg.org.id

      const response = await eventsByOrg.getEventsByOrg(orgId)
      dispatch({
        type: GET_EVENTS_BY_ORG_SUCCESS,
        payload: response.data
      })
    } catch (err) {
      console.error(err)
      dispatch({
        type: GET_EVENTS_BY_ORG_FAILED,
        payload: err
      })
    }
  }
}

export const updateEvents = (newEvent) => {
  return { type: UPDATE_EVENTS, payload: newEvent }
}

export const createEvent = (formInputs) => {
  return async (dispatch) => {
    try {
      dispatch({ type: CREATE_EVENT_PENDING })
      const res = await eventsByOrg.createEvent(formInputs)
      console.log('this is res from createEvent', res)
      dispatch({
        type: CREATE_EVENT_SUCCESS,
        payload: res.data // check
      })
      dispatch(updateEvents(res.data))

    } catch (err) {
      console.error(err)
      dispatch({
        type: CREATE_EVENT_FAILED,
        payload: err
      })
    }
  }
}