import {
    UPDATE_FORMS_VALUE,
    GET_FORM_VALUES
} from '../actions/updateForm'

let formInitialState = {
    lat: '',
    long: '',
    sport: false,
    arts: false,
    educational: false,
    nature: false,
    music: false,
    morning: false,
    afternoon: false,
    evening: false,
    freeOnly: false,
    age: []
}

export const formValues = (state = formInitialState, {
    type, payload 
}) => {
    switch(type) {
        case UPDATE_FORMS_VALUE: 
            return { ...state, ...payload }
        default:
            return state 
    }
}