import authOrg from '../requests/authOrg'

export const GET_ORG_PENDING = 'GET_ORG_PENDING'
export const GET_ORG_SUCCESS = 'GET_ORG_SUCCESS'
export const GET_ORG_FAILED = 'GET_ORG_FAILED'

// Retrieve a single organization 

export const getOrg = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token_org')
      const orgId = localStorage.getItem('org_id')
      // dispatch({ type: GET_ORG_PENDING })
      const response = await authOrg.verify(token, orgId)
      console.log('this is getOrg response.data', response.data)
      dispatch({
        type: GET_ORG_SUCCESS,
        payload: response.data
      })
    } catch (err) {
      console.error(err)
      dispatch({
        type: GET_ORG_FAILED,
        payload: err
      })
    }
  }
}