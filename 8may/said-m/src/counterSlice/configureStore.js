import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Store/store'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})