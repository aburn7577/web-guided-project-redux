import { TOGGLE_DRAGON_STATUS, ADD_MEMBER } from '../actions'

const initialState = {
	members: [
		{ name: 'Jojo Zhang', dragonStatus: true },
		{ name: 'Brandon Harris', dragonStatus: false }
	]
}

export const membersReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_DRAGON_STATUS:
			return {
				...state,
				members: state.members.map(member => { //new array
					if (member.name === action.payload) {
						return {
							...member,// new object
							dragonStatus: !member.dragonStatus
						}
					}
					return member
				})
			}
		case ADD_MEMBER:
			return {
				...state,
				members: [...state.members, { name: action.payload, dragonStatus: false }]
			}

		default: return state
	}
}