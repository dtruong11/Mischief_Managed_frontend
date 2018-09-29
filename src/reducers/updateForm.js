import {
    UPDATE_FORMS_VALUE
} from '../actions/updateForm'

let formInitialState = {
    lat: '',
    long: '',
    sport: false,
    art: false,
    educational: false,
    nature: false,
    music: false,
    morning: false,
    afternoon: false,
    evening: false,
    cost: false,
    age: [],
    range: 20
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