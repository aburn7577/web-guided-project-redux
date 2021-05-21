import React, { useState, useReducer } from 'react';// not using useReducer
import { connect } from 'react-redux'

import { toggleEditing, updateTitle } from '../actions' //13
//import { initialState, titleReducer } from '../reducers/titleReducer';

const Title = (props) => {
  const [newTitleText, setNewTitleText] = useState();
  //const [state, dispatch] = useReducer(titleReducer, initialState); // removed need for state, and dispatch

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {/* 7 */}
      {!props.editing ? (
        <h1>
          {/* 8 */}
          {props.title}{' '}
          <i
            className="far fa-edit"
            onClick={() => {
              // dispatch({ type: 'TOGGLE_EDITING' })
              props.toggleEditing() //14
            }}
          ><button>edit</button> </i>

        </h1>
      ) : (
          <div>
            <input
              className="title-input"
              type="text"
              name="newTitleText"
              value={newTitleText}
              onChange={handleChanges}
            />
            <button
              onClick={() => {
                //dispatch({ type: 'UPDATE_TITLE', payload: newTitleText })
                props.updateTitle(newTitleText)
              }}
            >
              Update title
          </button>
          </div>
        )}
    </div>
  );
};
//6
const mapStateToProps = state => { // passing state it knows about
  return {// give us a prop called aditing and send that to us when state.editing is changed
    editing: state.editing, // when there change to state.editing pass that change as a prop to editing
    title: state.title //properties we want passed to component (change state.title or editing to props.title or editing)
  }
}


export default connect(mapStateToProps, { toggleEditing, updateTitle })(Title);//
                //5^                          //15^