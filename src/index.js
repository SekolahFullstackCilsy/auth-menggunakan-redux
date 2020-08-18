import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter } from "react-router-dom";

//TODO: MENGATUR REDUX
import {
  combineReducers, // TODO: MENGGABUNGKAN LEBIH DARI 1 REDUCER
  compose, // TODO: FUNGSI UNTUK MEMANGGIL LIBRARY TAMBAHAN REDUX
  createStore, // TODO: FUNGSI UNTUK MENDEFINISIKAN REDUX UNTUK DIGUNAKAN DI KOMPONEN
  applyMiddleware, // TODO: MENGGUNAKAN MIDDLEWARE: THUNK / SAGA, KETIKA MEMANGGIL API, CONTOH PAKE AXIOS
} from "redux";
import auths from "./store/reducers/auths";
import posts from "./store/reducers/posts";
import thunk from "redux-thunk";
import { Provider } from "react-redux"; // TODO: FUNGSI UNTUK MENGGUNAKAN REDUX DALAM REACT

const rootReducer = combineReducers({
  // TODO: Menggabungkan reducer
  authReducer: auths,
  postReducer: posts,
});

const logger = (store) => {
  //TODO: Menampilkan di console yang dikirim oleh REDUX
  return (next) => {
    return (action) => {
      console.log("[Middleware] Dispatching", action.payload); //[AUTH]SIGNIN
      const result = next(action);
      console.log("[Middleware next state]", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
