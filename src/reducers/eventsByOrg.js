import {
  UPDATE_EVENTS,
  GET_EVENTS_BY_ORG_PENDING,
  GET_EVENTS_BY_ORG_SUCCESS,
  GET_EVENTS_BY_ORG_FAILED,

  CREATE_EVENT_PENDING,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAILED,
} from '../actions/eventsByOrg'

let eventsByOrgState = {
  isLoading: false,
  showError: true,
  all: [],
  selected: {},
  created: {} // Click on one to update it? 
}

export const eventsByOrg = (state = eventsByOrgState, { type, payload }) => {
  switch (type) {
    case UPDATE_EVENTS:
      return { ...state, all: [...state.all, payload] }
    case GET_EVENTS_BY_ORG_PENDING:
      return { ...state, isLoading: true, showError: false }
    case GET_EVENTS_BY_ORG_SUCCESS:
      return { ...state, all: payload, isLoading: false, showError: false }
    case GET_EVENTS_BY_ORG_FAILED:
      return { ...state, isLoading: false, showError: true }
    case CREATE_EVENT_PENDING:
      return { ...state, isLoading: true, showError: false }
    case CREATE_EVENT_SUCCESS:
      return { ...state, isLoading: false, created: payload, showError: false }
    case CREATE_EVENT_FAILED:
      return { ...state, isLoading: false, showError: true }
    default:
      return state
  }
}