import { ADD_TODO, DELETE_TODO } from "../constants/action-types";

const initialState = {
  todos: [
    {id:1, description:"This is todo", status:1},
    {id:2, description:"This is todo 2", status:1},
  ]
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_TODO) {
    return Object.assign({}, state, {
      todos: state.todos.concat(action.payload)
    });
  }
  else if (action.type === DELETE_TODO) {
    state.todos =  state.todos.filter(todo => todo.id !== action.payload.id);
  }
  console.log(state)
  return state;
}

export default rootReducer;