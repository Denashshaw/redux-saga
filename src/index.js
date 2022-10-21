import { createRoot } from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import catsReducer from "./catSlice";
import catSaga from "./catSaga";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cats: catsReducer
  },
  middleware: [saga]
});

saga.run(catSaga);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
