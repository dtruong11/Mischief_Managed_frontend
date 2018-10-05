import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { auth } from './reducers/authUsers'
import { events } from './reducers/events'
import { formValues } from './reducers/updateForm'
import { reviews } from './reducers/reviews'
import { location } from './reducers/location'

const rootReducer = combineReducers({
    auth, events, formValues, reviews, location
})

export default () => createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)


