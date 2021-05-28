import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0
  },
  reducers: {
    increment: (state) => {
      state.counter += 1 // Immer
    },
    decrement: (state) => {
      state.counter -= 1
    },
    reset: (state) => {
      state.counter = 0
    },
    addByAmount: (state, action) => {
      state.counter += action.payload
    }
  }
});

export const { increment, decrement, reset, addByAmount } = counterSlice.actions;

export default counterSlice.reducer;