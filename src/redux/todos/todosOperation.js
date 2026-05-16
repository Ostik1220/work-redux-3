import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://687bab4eb4bc7cfbda86bede.mockapi.io";

export const fetchTodos = createAsyncThunk(
    "todos/fetchTodos",
    async(_, thunkAPI) => {
        try {
            const response = await axios.get("/posts");
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
            const response = await axios.put(`/posts/${changedTask.id}`, changedTask);
            const data = response.data;
            console.log(data);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
        }
)
