import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
      logged: null
    },
    reducers: {
      login:(state, action)=>{
        state.logged = action.payload
      },
      logout:(state)=>{
        state.logged = null
      },
      editUser:(state, action)=>{
        state.logged = action.payload
      }
    },
})

export const { login, logout, editUser } = userSlice.actions

export default userSlice.reducer