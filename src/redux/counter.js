import { createSlice } from '@reduxjs/toolkit';
const counterSlice= createSlice(
  {
    name: 'counter',
    initialState: {
      count: 0
    },
    reducers: {
      increment(state) {
        state.count += 1;
      },
      decrement(state) {
        state.count -= 1;
      },
      incrementByAmount:(state, action) => {
        state.count += action.payload;
      }
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const { increment, decrement, incrementByAmount  } = counterSlice.actions;
export default counterSlice.reducer;
