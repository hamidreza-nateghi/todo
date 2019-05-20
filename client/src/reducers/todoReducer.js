import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  FETCH_TODOS
} from "../actions/types";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case FETCH_TODOS:
      return action.payload;
    default:
      return state;
  }
};

export default todoReducer;
