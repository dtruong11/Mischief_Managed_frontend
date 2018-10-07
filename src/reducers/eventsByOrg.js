import {
  GET_EVENTS_BY_ORG_PENDING,
  GET_EVENTS_BY_ORG_SUCCESS,
  GET_EVENTS_BY_ORG_FAILED,
} from '../actions/eventsByOrg'

let eventsByOrgState = {
  isLoading: false,
  showError: true,
  all: [],
  selected: {} // Click on one to update it? 
}

export const eventsByOrg = (state = eventsByOrgState, { type, payload }) => {
  switch (type) {
    case GET_EVENTS_BY_ORG_PENDING:
      return { ...state, isLoading: true, showError: false }
    case GET_EVENTS_BY_ORG_SUCCESS:
      return { ...state, all: payload, isLoading: false, showError: false }
    case GET_EVENTS_BY_ORG_FAILED:
      return { ...state, isLoading: false, showError: true }
    default:
      return state
  }
}