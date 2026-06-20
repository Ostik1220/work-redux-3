import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

const getAuthHeader = (token) => {
  return { Authorization: `Bearer ${token}` };
}


export const fetchTodos = createAsyncThunk(
    "todos/fetchTodos",
    async(_, thunkAPI) => {
        try {
            const response = await axios.get("/todos", {
                headers: getAuthHeader(thunkAPI.getState().user.token),
            });
            const data = response.data;
            console.log(data);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
        }
)


export const changeTodo = createAsyncThunk(
    "todos/changeTodo",
    async(changedTask, thunkAPI) => {
        try {
            const response = await axios.put(`/todos/${changedTask.id}`, changedTask, {
                headers: getAuthHeader(thunkAPI.getState().user.token),
            });
            const data = response.data;
            console.log(data);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
        }
)

export const addTodo = createAsyncThunk(
    "todos/addTodo",
    async(text, thunkAPI) => {
        try {
            const response = await axios.post("/todos", {
                text,
                completed: false,
                userId: thunkAPI.getState().user.user.id
            }, {
                headers: getAuthHeader(thunkAPI.getState().user.token),
            });
            const data = response.data;
            console.log(data);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
        }
)

export const deleteTodo = createAsyncThunk(
    "todos/deleteTodo",
    async(id, thunkAPI) => {
        try{
            const response = await axios.delete(`/todos/${id}`, {
                headers: getAuthHeader(thunkAPI.getState().user.token),
            });
            const data = response.data
            console.log(response)
            return id
        } catch (error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const updateTodo = createAsyncThunk(
    "todos/updateTodo",
    async(updatedTask, thunkAPI) => {
        try{
            const response = await axios.put(`/todos/${updatedTask.id}`, updatedTask, {
                headers: getAuthHeader(thunkAPI.getState().user.token),
            });
            const data = response.data
            return data
        } catch (error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)