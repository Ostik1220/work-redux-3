import { createSelector } from "@reduxjs/toolkit";
export const selectTodos = state => state.todos.todos;
export const selectCount = createSelector([selectTodos], (todos) => {
   return todos.reduce((acc, todo) => {
        if (todo.completed) {
            acc.completed += 1;
        } else {
            acc.acttive += 1
        }
        return acc
    },
        {
            acttive: 0,
            completed: 0
        })
    
} );