// create actions
// action type
export const UPDATE_TITLE = 'UPDATE_TITLE'
export const TOGGLE_EDITING = 'TOGGLE_EDITING'

// action creater
export const updateTitle = newTitle => {
    // action
    return {
        type: UPDATE_TITLE,
        payload: newTitle
    }
}
export const toggleEditing = () => {
    return {
        type: TOGGLE_EDITING
    }
}
//then export action types to reducer