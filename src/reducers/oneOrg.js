import {
  GET_ORG_PENDING,
  GET_ORG_SUCCESS,
  GET_ORG_FAILED
} from '../actions/getOneOrg'

let oneOrgState = {
  isLoading: false,
  showError: true,
  org: {},
}

export const oneOrg = (state = oneOrgState, { type, payload }) => {
  switch (type) {
    case GET_ORG_PENDING:
      return { ...state, isLoading: true, showError: false }
    case GET_ORG_SUCCESS:
      return { ...state, org: payload, isLoading: false, showError: false }
    case GET_ORG_FAILED:
      return { ...state, isLoading: false, showError: true }
    default:
      return state
  }
}



