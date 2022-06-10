const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      console.log(state)
      console.log(action.payload.id)
      return state.filter(todo => todo.item.id !== action.payload.id)
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
