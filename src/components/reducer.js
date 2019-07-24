import { ADD_TODO, DEL_TODO, FINISH_TODO, UPDATE_TODO } from "./action";
const initialState = {
  todos: [
    { value: "1个待办事项", status: "finish", id: 1 },
    { value: "2个待办事项", status: "waiting", id: 2 },
    { value: "3个待办事项", status: "waiting", id: 3 }
  ]
};

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case ADD_TODO:
      let todo = { value: payload.val, status: "waiting", id: payload.id };
      return { todos: [...state.todos, todo] };

    case DEL_TODO:
      console.log(payload);
      let newTodos = state.todos.filter(ele => ele.id !== payload);
      console.log(newTodos);
      return { todos: [...newTodos] };

    case FINISH_TODO:
      let arr = [];
      state.todos.forEach(ele => {
        if (ele.id === payload) {
          ele.status = "finish";
        }
        arr.push(ele);
      });
      return { todos: [...arr] };

    case UPDATE_TODO:
      let arr2 = [];
      state.todos.forEach(ele => {
        if (ele.id === payload) {
          ele.status = "waiting";
        }
        arr2.push(ele);
      });
      return { todos: [...arr2] };
      
    default:
      return state;
  }
};
