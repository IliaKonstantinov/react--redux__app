import {combineReducers, configureStore} from '@reduxjs/toolkit'
import loginSlice from '../features/login/loginSlice'
import usersSlice from '../features/users/usersSlice'


const rootReducer = combineReducers({
  login: loginSlice,
  posts: usersSlice,
})

export const store = configureStore({
  reducer: rootReducer
})