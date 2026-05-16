import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { fetchTodos, changeTodo, addTodo } from "./todosOperation";

// const initialState = [{ id: 1, completed: false, text: "qwe" }];

const todosSlice = createSlice({
  name: "todos",

  initialState: { todos: [], error: null, loading: false },

  // reducers: {
  //   addTodo: {
  //     reducer(state, action) {
  //       state.push(action.payload);
  //     },

  //     prepare(text) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           text,
  //           completed: false,
  //         },
  //       };
  //     },
  //   },
  //   removeTodo: {
  //     reducer(state, action) {
  //       return state.filter((todo) => todo.id !== action.payload);
  //     }, 

  //     prepare(id) {
  //       return {payload: id};
  //     }

  //   },
  //   changeTodo: {
  //       reducer(state, action) {
  //       return state.map((todo) => {
  //           if (todo.id === action.payload) {
  //               return {...todo, completed: !todo.completed}
  //           } else {
  //               return todo;
  //           }
  //       });
  //     },

  //     prepare(id){
  //       return {payload: id};
  //     }
  //   }
  // },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.loading = false;
    });
      builder.addCase(fetchTodos.rejected, (state, action) => {
    state.error = action.payload;
    state.loading = false;
  });
  builder.addCase(changeTodo.fulfilled, (state, action) => {
    state.todos = state.todos.map((todo) => {
      if (todo.id === action.payload.id) {
        return action.payload;
      }
      return todo;
    });
    state.loading = false;
  });
  builder.addCase(changeTodo.rejected, (state, action) => {
    state.error = action.payload;
    state.loading = false;
  });
  builder.addCase(addTodo.fulfilled, (state, action) => {
    state.todos.push(action.payload);
    state.loading = false;
  });
  builder.addCase(addTodo.rejected, (state, action) => {
    state.error = action.payload;
    state.loading = false;
        });
}});

// export const { addTodo, removeTodo, changeTodo } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;