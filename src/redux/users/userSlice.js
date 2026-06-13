import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "./usersOperations";

 const userSlice = createSlice({
    name: "user",
    initialState:{
        token: "",
        user:{
            email: "",
            id:""
        }
    },

  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      console.log(action)
      state.token = action.payload.accessToken
      state.user = action.payload.user
    }); }})

    export const userReducer = userSlice.reducer