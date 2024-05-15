import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Redux/Features/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})