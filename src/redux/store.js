import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers";

export default configureStore({
  reducer: rootReducers,
  devTools: import.meta.env.NODE_ENV === "development",
});
