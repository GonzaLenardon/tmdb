import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
  pelis: {},
};

export const addPeliculas = createAction("ADDPELICULAS");

const peliculas = createReducer(initialState, {
  [addPeliculas]: (state, action) => {
    state.pelis = action.payload;
  },
});

export default peliculas;
