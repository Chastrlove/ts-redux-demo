import { getTodoValues } from "api/todoApi";
import { TODOTYPE } from "./actionTypes";

let nextTodoId = 0;
export interface ADDTODOACTION {
  type: TODOTYPE;
  payload: {
    id?: any;
    content?: any;
    value?: any;
  };
}

export const addTodo: (value) => ADDTODOACTION = content => ({
  payload: {
    id: ++nextTodoId,
    content
  },
  type: TODOTYPE.ADD_TODO
});

export const newValue = value => ({
  type: TODOTYPE.GET_TODO,
  payload: {
    value: value
  }
});

export const getRemoteValue = () => {
  return async (dispatch, getState) => {
    const value = await getTodoValues();
    dispatch(newValue(value));
  };
};
