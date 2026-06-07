import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
    "users/createUser",
    async(obj, thunkAPI) => {
        try{
            const response = await axios.post("http://localhost:3001/register", {
                email: obj.email,
                password: obj.password
            })
            const data = response.data;
            console.log(data)
            return data
            
        } catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)
