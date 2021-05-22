// create actions
// action type
export const UPDATE_TITLE = 'UPDATE_TITLE' //10
export const TOGGLE_EDITING = 'TOGGLE_EDITING'
export const ADD_MEMBER = 'ADD_MEMBER'
export const TOGGLE_DRAGON_STATUS = 'TOGGLE_DRAGON_STATUS'

// action creater //11
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
export const addMember = newMemberName => {
	return {
		type: ADD_MEMBER,
		payload: newMemberName
	}
}
export const toggleDragonStatus = memberName => {
	return {
		type: TOGGLE_DRAGON_STATUS,
		payload: memberName
	}
}