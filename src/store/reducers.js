import {ADDITION, SUBSTRACTION} from './actionTypes';

const initialState = {
  counter: 0,
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDITION:
      return {...state, counter: state.counter + 1};
    case SUBSTRACTION:
      return {...state, counter: state.counter - 1};
    default:
      return state
  }
};
