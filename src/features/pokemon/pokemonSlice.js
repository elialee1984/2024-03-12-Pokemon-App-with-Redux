import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    getData: (state) => {
      initialState.push(state);
    },
  },
});

export const { getData } = pokemonSlice.actions;

export default pokemonSlice.reducer;
