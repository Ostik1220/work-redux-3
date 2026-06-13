import { createSlice } from "@reduxjs/toolkit";
import { createUser, loginUser } from "./usersOperations";

 const userSlice = createSlice({
    name: "user",
    initialState:{
        token: "",
        user:{
            email: "",
            id: null
        },
        error: null,
        login: false
    },

  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      console.log(action)
      state.token = action.payload.accessToken
      state.user = action.payload.user
    }); 
builder.addCase(loginUser.fulfilled, (state, action) => {
      console.log(action)
      state.token = action.payload.accessToken
      state.user = action.payload.user
    });}})

    export const userReducer = userSlice.reducer