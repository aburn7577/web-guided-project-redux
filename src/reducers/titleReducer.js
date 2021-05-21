import { TOGGLE_EDITING, UPDATE_TITLE } from '../actions' //12

export const initialState = {
  title: "Dragon Member List 🐲",
  editing: false
};

export const titleReducer = (state = initialState, action) => { // 9 state = initial
  console.log('ab: titleReducer.js: state, action', state, action)
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload,
        editing: false
      };
    // NEW CASE HERE
    case TOGGLE_EDITING:
      return {
        ...state,
        editing: !state.editing
      };
    default:
      return state;
  }
};
