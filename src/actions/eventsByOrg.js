import eventsByOrg from '../requests/eventsByOrg'


export const GET_EVENTS_BY_ORG_PENDING = 'GET_EVENTS_BY_ORG_PENDING'
export const GET_EVENTS_BY_ORG_SUCCESS = 'GET_EVENTS_BY_ORG_SUCCESS'
export const GET_EVENTS_BY_ORG_FAILED = 'GET_EVENTS_BY_ORG_FAILED'


export const getEventsByOrg = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_EVENTS_BY_ORG_PENDING })
      const orgId = localStorage.getItem('org_id')
      const response = await eventsByOrg.getEventsByOrg(orgId)
      console.log(' this is response inside getEventsbyORg', response.data[0])
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

