export const UPDATE_FORMS_VALUE = 'UPDATE_FORMS_VALUE'

// dispatch action to reducers with payload of form values 

export const updateForm = (name, value) => dispatch => {
    const payload = {
        [name]: value
    }
    dispatch({
        type: UPDATE_FORMS_VALUE,
        payload
    })
}

