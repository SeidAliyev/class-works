import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    increment3: (state) => {
      state.value += 3
    },
    decrement3: (state) => {
      state.value -= 3
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement,increment3, decrement3, incrementByAmount,decrementByAmount } = counterSlice.actions

export default counterSlice.reducer