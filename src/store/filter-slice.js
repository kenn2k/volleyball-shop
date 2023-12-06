import { createSlice } from "@reduxjs/toolkit";

const initialState = { showFilter: false };

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggleShowFilter(state) {
      state.showFilter = !state.showFilter;
    },
  },
});

export const filterActions = filterSlice.actions;
export default filterSlice;
