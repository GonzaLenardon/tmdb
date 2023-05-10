import { configureStore } from "@reduxjs/toolkit";
import usuario from "./user";
import peliculas from "./peliculas";

const store = configureStore({
  reducer: {
    user: usuario,
    peli: peliculas,
  },
});

export default store;
