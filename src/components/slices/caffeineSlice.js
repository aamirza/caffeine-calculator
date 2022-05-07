import { createAction, createReducer } from '@reduxjs/toolkit';

// ACTION
const UPDATE_FORM_STATE = 'caffeineForm/update';

export default function formReducer(state = {}, action = {}) {
  switch (action.type) {
    case UPDATE_FORM_STATE:
      return {
        ...state,
        [action.form]: action.payload
      }
    default:
      return state
  }
}


const initialState = {
  caffeineServings: [],
}

// Set time
// Change amount
// Change unit of measurement