import * as actionTypes from "./actionTypes";
let nextId = 0;

export const incrementNumber = text => ({
  type: actionTypes.INCREMENT_NUMBER,
  payload: {
    id: nextId++,
    text: text
  }
});

export const decrementNumber = id => ({
  type: actionTypes.DECREMENT_NUMBER,
  payload: {
      
  }
});