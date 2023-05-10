import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  usuario: "",
};

export const addUser = createAction("ADDUSER");

const usuario = createReducer(initialState, {
  [addUser]: (state, action) => {
    const { id, usuario } = action.payload;
    state.id = id;
    state.usuario = usuario;
  },
});

export default usuario;
