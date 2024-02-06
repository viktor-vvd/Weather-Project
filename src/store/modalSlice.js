import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modal: false,
  },
  reducers: {
    changeModal(state, action) {
      state.modal = action.payload;
    },
  },
});

export const { changeModal } = modalSlice.actions;

export default modalSlice.reducer;
