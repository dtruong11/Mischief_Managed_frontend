import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { auth } from './reducers/authUsers'
import { authOrg } from './reducers/authOrgs'
import { oneOrg } from './reducers/oneOrg'
import { events } from './reducers/events'
import { eventsByOrg } from './reducers/eventsByOrg'
import { formValues } from './reducers/updateForm'
import { reviews } from './reducers/reviews'
import { location } from './reducers/location'

const rootReducer = combineReducers({
  authOrg, auth, events, formValues, reviews, location, eventsByOrg, oneOrg
})

export default () => createStore(
  rootReducer,
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


