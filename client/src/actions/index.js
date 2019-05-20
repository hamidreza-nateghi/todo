import axios from "../apis/todos";
import {
  SIGN_IN,
  SIGN_OUT,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  FETCH_TODOS
} from "./types";

export const signIn = payload => {
  return {
    type: SIGN_IN,
    payload
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const addTodo = text => async (dispatch, getState) => {
  const { userId } = getState().authReducer;
  const response = await axios.post("/todos", {
    text,
    completed: false,
    userId
  });

  dispatch({ type: ADD_TODO, payload: response.data });
};

export const deleteTodo = id => async dispatch => {
  await axios.delete(`/todos/${id}`);

  dispatch({ type: DELETE_TODO, payload: id });
};

export const editTodo = (id, text) => async dispatch => {
  const response = await axios.patch(`/todos/${id}`, { text });

  dispatch({ type: EDIT_TODO, payload: response.data });
};

export const fetchTodos = () => async dispatch => {
  const response = await axios.get("/todos");

  dispatch({ type: FETCH_TODOS, payload: response.data });
};

export const toggleTodo = () => dispatch => {
  dispatch({ type: TOGGLE_TODO });
};
